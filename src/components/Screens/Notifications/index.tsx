import NotificationsList from "@/components/Molecules/NotificationsList";
import { theme } from "@/constants/theme/theme";
import { useNotificationStore } from "@/services/notificationsStorage";
import { useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, Pressable } from "react-native";

export function NotificationsScreen() {
  const { notifications, loadNotifications, clearNotifications } =
    useNotificationStore();

  useEffect(() => {
    loadNotifications();
  }, []);
  function handleDeleteNotifications() {
    clearNotifications();
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notificações </Text>
      <Pressable onPress={handleDeleteNotifications}>
        <Text>Apagar notificações</Text>
      </Pressable>
      <View style={styles.notifications}>
        <NotificationsList notifications={notifications} />
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
    paddingTop: 32,
  },
  notifications: {
    flex: 1,
    paddingTop: 26,
    gap: 16,
  },
});
