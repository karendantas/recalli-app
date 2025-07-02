import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppNotification } from "@/@types/notification";

interface NotificationStore {
  notifications: AppNotification[];
  loadNotifications: () => Promise<void>;
  addNotification: (newNotification: AppNotification) => Promise<void>;
  updateDelivered: (title: string) => Promise<void>;
  clearNotifications: () => Promise<void>;
}

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [],

  loadNotifications: async () => {
    try {
      const stored = await AsyncStorage.getItem("notifications");
      const parsed = stored ? JSON.parse(stored) : [];
      set({ notifications: parsed });
    } catch (error) {
      console.log("Erro ao carregar notificações:", error);
    }
  },

  addNotification: async (newNotification: AppNotification) => {
    try {
      const updated = [...get().notifications, newNotification];
      await AsyncStorage.setItem("notifications", JSON.stringify(updated));
      set({ notifications: updated });
    } catch (error) {
      console.log("Erro ao salvar notificação:", error);
    }
  },

  updateDelivered: async (title: string) => {
    try {
      const updated = get().notifications.map((n) =>
        n.title === title ? { ...n, delivered: true } : n
      );
      await AsyncStorage.setItem("notifications", JSON.stringify(updated));
      set({ notifications: updated });
    } catch (error) {
      console.log("Erro ao atualizar notificação:", error);
    }
  },

  clearNotifications: async () => {
    try {
      await AsyncStorage.removeItem("notifications");
      set({ notifications: [] });
    } catch (error) {
      console.log("Erro ao limpar notificações:", error);
    }
  },
}));
