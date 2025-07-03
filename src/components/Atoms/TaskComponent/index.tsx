import { Text, View } from "react-native";
import Icons from "@expo/vector-icons/AntDesign";
import { theme } from "@/constants/theme/theme";
import { styles } from "./styles";
import { Task } from "@/@types/task";
import { calendarUtils } from "@/utils/calendarUtils/CalendarFunctions";

interface TaskComponenteProps extends Task {
  onDelete: (taskId: string) => void;
  completeTask: (taskId: string) => void;
}
export function TaskComponent({
  id,
  title,
  startsAt,
  endsAt,
  time,
  isCompleted = false,
  onDelete,
  completeTask,
}: TaskComponenteProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.taskTitle, isCompleted && styles.completedTitle]}>
          {title}
        </Text>

        <View style={styles.taskContent}>
          <View style={styles.taskInfo}>
            <Icons name="clockcircleo" color={theme.colors.primaryLight} />
            <Text style={styles.taskDateTime}>{time}</Text>
          </View>
          <View style={styles.taskInfo}>
            <Icons name="calendar" color={theme.colors.primaryLight} />
            <Text style={styles.taskDateTime}>
              {calendarUtils.formatDatesInTextFromISO(startsAt, endsAt)}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "space-between" }}>
        <Icons
          name="delete"
          size={20}
          color={theme.colors.danger}
          onPress={() => onDelete(id)}
          testID="delete-task-icon"
        />
        <Icons
          name={isCompleted ? "checkcircle" : "checkcircleo"}
          size={20}
          color={theme.colors.edit}
          onPress={() => completeTask(id)}
          testID="check-task-icon"
        />
      </View>
    </View>
  );
}
