import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { DateData } from "react-native-calendars";
import { storeTask, Task } from "@/storage/taskStorage";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskFormSchema, taskSchema } from "./schema";
import dayjs from "dayjs";

import {
  calendarUtils,
  DatesSelected,
} from "@/utils/calendarUtils/CalendarFunctions";
import { scheduleTaskNotification } from "@/utils/notificationsUtils/notifications";

import { Calendar } from "../Calendar";
import { Button } from "@/components/Atoms/Button";
import { Input } from "@/components/Atoms/Input";
import { theme } from "@/constants/theme/theme";
import { router } from "expo-router";

import uuid from "react-native-uuid";

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
    const newTask: Task = {
      id: uuid.v4(),
      title: data.title,
      startsAt: startsAt.toISOString(),
      endsAt: endsAt.toISOString(),
      time: data.time,
    };
    console.log(newTask);
    await storeTask(newTask);

    const fullDate = dayjs(
      `${startsAt.format("YYYY-MM-DD")} ${data.time}`,
      "YYYY-MM-DD HH:mm"
    );

    console.log(fullDate.toDate());
    await scheduleTaskNotification({
      title: data.title,
      dateTime: fullDate.toDate(),
    });
    reset();
    router.push("/");
  }
  return (
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
          <Text style={styles.label}>Para quando?</Text>

          <Calendar
            onDayPress={(date) => handleSelectDates(date)}
            markedDates={selectedDates.dates}
            testID="calendar"
          />
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
      </View>

      <Button title="Criar" onPress={handleSubmit(handleCreateTask)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 20,
  },
  form: {
    gap: 16,
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
