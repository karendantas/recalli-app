import { AppNotification } from "@/@types/notification";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveNotifications(newNotification: AppNotification) {
  try {
    const stored = await AsyncStorage.getItem("notifications");
    const storedNotifications = stored ? JSON.parse(stored) : [];

    const updatedNotifications = [...storedNotifications, newNotification];
    await AsyncStorage.setItem(
      "notifications",
      JSON.stringify(updatedNotifications)
    );
  } catch (error) {
    console.log(error);
  }
}
export async function getNotifications() {
  try {
    const stored = await AsyncStorage.getItem("notifications");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function updateNotificationDelivered(title: string) {
  const stored = await AsyncStorage.getItem("notifications");
  if (!stored) return;

  const notifications: AppNotification[] = JSON.parse(stored);
  const updated = notifications.map((n) =>
    n.title === title ? { ...n, delivered: true } : n
  );

  await AsyncStorage.setItem("notifications", JSON.stringify(updated));
}
