import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";
import Constants from "expo-constants";
import { theme } from "@/constants/theme/theme";

// Configura as notificações recebidas em foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function configureNotificationsChannel() {
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      sound: "default",
      vibrationPattern: [0, 250, 250, 250],
      lightColor: theme.colors.highlight,
    });
  }
}

export async function requestNotificationsPermissions() {
  if (!Device.isDevice) {
    throw new Error("As notificações só funcionam em dispositivos físicos.");
  }

  const { status: currentStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = currentStatus;

  if (currentStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    throw new Error("Permissão para notificações negada.");
  }
}

interface TaskNotifications {
  title: string;
  dateTime: Date;
}
export async function scheduleTaskNotification({
  title,
  dateTime,
}: TaskNotifications) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Tarefa pendente 📌",
      body: `Hora de: ${title}`,
      sound: "default",
    },
    trigger: {
      type: "date",
      date: dateTime,
    },
  });
}
