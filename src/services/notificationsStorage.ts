import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setNotifications(newNotification: any) {
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
