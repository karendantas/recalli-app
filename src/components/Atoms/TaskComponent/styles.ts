import { theme } from "@/constants/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
    padding: 14,
    gap: 6,
    backgroundColor: theme.colors.cardBackground,
  },
  taskContent: {
    alignContent: "flex-start",
    gap: 4,
  },
  taskInfo: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  taskTitle: {
    fontFamily: "Sen_500Medium",
    fontSize: 16,
    color: theme.colors.primary,
  },
  taskDateTime: {
    fontFamily: "Sen_500Medium",
    fontSize: 14,
    color: theme.colors.textMuted,
  },
});
