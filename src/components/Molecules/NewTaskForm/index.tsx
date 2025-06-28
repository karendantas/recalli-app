import { Button } from "@/components/Atoms/Button";
import { Input } from "@/components/Atoms/Input";
import { theme } from "@/constants/theme/theme";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "../Calendar";
import {
  calendarUtils,
  DatesSelected,
} from "@/utils/calendarUtils/CalendarFunctions";
import { DateData } from "react-native-calendars";

export function NewTaskForm() {
  const [selectedDates, setSelectedDates] = useState({} as DatesSelected);

  function handleSelectDates(selectedDay: DateData) {
    const dates = calendarUtils.orderStartsAtAndEndsAt({
      startsAt: selectedDates.startsAt,
      endsAt: selectedDates.endsAt,
      selectedDay,
    });
    setSelectedDates(dates);
  }
  function handleCreateTask() {
    console.log(selectedDates.dates);
  }
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}> O que preciso fazer? </Text>
          <Input placeholder="Tomar remedio" iconName="form" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}> Para quando? </Text>
          <Calendar
            onDayPress={(date) => handleSelectDates(date)}
            markedDates={selectedDates.dates}
            testID="calendar"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}> Que horas? </Text>
          <Input placeholder="13:30" iconName="clockcircleo" />
        </View>
      </View>

      <Button title="Criar" onPress={handleCreateTask} />
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
