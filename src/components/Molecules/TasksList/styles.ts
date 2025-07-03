import { theme } from "@/constants/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sectionTitle: {
    paddingBottom: 22,
    fontFamily: "Sen_500Medium",
    fontSize: 22,
    color: theme.colors.highlight,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
    paddingHorizontal: 24,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.textPrimary,
    textAlign: "center",
  },
  emptySubText: {
    fontSize: 14,
    color: theme.colors.textMuted,
    marginTop: 4,
    textAlign: "center",
  },
});
