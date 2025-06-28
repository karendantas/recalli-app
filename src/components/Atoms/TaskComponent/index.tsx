import { Task, Text, View } from "react-native";
import Icons from "@expo/vector-icons/AntDesign";
import { theme } from "@/constants/theme/theme";
import { styles } from "./styles";

interface TaskProps {
  title: string;
  date: string;
  time: string;
}

export function TaskComponent({ title, date, time }: TaskProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.taskTitle}>{title}</Text>

      <View style={styles.taskContent}>
        <View style={styles.taskInfo}>
          <Icons name="clockcircleo" color={theme.colors.primaryLight} />
          <Text style={styles.taskDateTime}>{time}</Text>
        </View>
        <View style={styles.taskInfo}>
          <Icons name="calendar" color={theme.colors.primaryLight} />
          <Text style={styles.taskDateTime}>{date}</Text>
        </View>
      </View>
    </View>
  );
}
