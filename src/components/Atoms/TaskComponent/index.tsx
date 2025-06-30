import { Text, View } from "react-native";
import Icons from "@expo/vector-icons/AntDesign";
import { theme } from "@/constants/theme/theme";
import { styles } from "./styles";
import { Task } from "@/services/taskStorage";
import { calendarUtils } from "@/utils/calendarUtils/CalendarFunctions";

interface TaskComponenteProps extends Task {
  onDelete: (taskId: string) => void;
}
export function TaskComponent({
  id,
  title,
  startsAt,
  endsAt,
  time,
  onDelete,
}: TaskComponenteProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.taskTitle}>{title}</Text>

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
      <View>
        <Icons
          name="delete"
          size={20}
          color={theme.colors.danger}
          onPress={() => onDelete(id)}
        />
      </View>
    </View>
  );
}
