import NotificationsList from "@/components/Molecules/NotificationsList";
import { theme } from "@/constants/theme/theme";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notificações </Text>
      <View style={styles.notifications}>
        <NotificationsList />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    paddingBottom: 22,
    fontFamily: "Sen_500Medium",
    fontSize: 22,
    color: theme.colors.highlight,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 16,
  },
  notifications: {
    flex: 1,
    paddingTop: 26,
    gap: 16,
  },
});
