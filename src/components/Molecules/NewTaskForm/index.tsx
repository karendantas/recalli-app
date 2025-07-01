import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { DateData } from "react-native-calendars";
import { saveTask } from "@/services/taskStorage";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskFormSchema, taskSchema } from "./schema";
import dayjs from "dayjs";

import {
  calendarUtils,
  DatesSelected,
} from "@/utils/calendarUtils/CalendarFunctions";
import { scheduleTaskNotification } from "@/services/notifications";

import { Calendar } from "../Calendar";
import { Button } from "@/components/Atoms/Button";
import { Input } from "@/components/Atoms/Input";
import { theme } from "@/constants/theme/theme";
import { router } from "expo-router";

import uuid from "react-native-uuid";
import { saveNotifications } from "@/services/notificationsStorage";
import { Task } from "@/@types/task";

export function NewTaskForm() {
  const [selectedDates, setSelectedDates] = useState({} as DatesSelected);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  function handleSelectDates(selectedDay: DateData) {
    const dates = calendarUtils.orderStartsAtAndEndsAt({
      startsAt: selectedDates.startsAt,
      endsAt: selectedDates.endsAt,
      selectedDay,
    });
    setSelectedDates(dates);
  }
  async function handleCreateTask(data: taskFormSchema) {
    const startsAt = dayjs(selectedDates.startsAt?.dateString);
    const endsAt = dayjs(selectedDates.endsAt?.dateString);

    const fullDate = dayjs(
      `${startsAt.format("YYYY-MM-DD")} ${data.time}`,
      "YYYY-MM-DD HH:mm"
    );
    const notificationId = await scheduleTaskNotification({
      title: data.title,
      dateTime: fullDate.toDate(),
    });

    const newTask: Task = {
      id: uuid.v4(),
      title: data.title,
      startsAt: startsAt.toISOString(),
      endsAt: endsAt.toISOString(),
      time: data.time,
      notificationId,
    };

    await saveTask(newTask);

    await saveNotifications({
      id: uuid.v4(),
      title: data.title,
      dateTime: fullDate.toISOString(),
      createdAt: new Date().toISOString(),
      delivered: false,
    });

    reset();
    router.push("/");
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>O que preciso fazer? </Text>
            <Controller
              control={control}
              name="title"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Tomar remedio"
                  iconName="form"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors && <Text>{errors.title?.message}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Que horas?</Text>
            <Controller
              control={control}
              name="time"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="13:30"
                  iconName="clockcircleo"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors && <Text>{errors.time?.message}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Para quando?</Text>

            <Calendar
              onDayPress={(date) => handleSelectDates(date)}
              markedDates={selectedDates.dates}
              testID="calendar"
            />
          </View>
        </View>

        <Button title="Criar" onPress={handleSubmit(handleCreateTask)} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 20,
  },
  form: {
    paddingBottom: 16,
  },
  inputContainer: {
    gap: 6,
  },
  label: {
    fontFamily: "Sen_500Medium",
    fontSize: 20,
    color: theme.colors.primaryLight,
  },
});
