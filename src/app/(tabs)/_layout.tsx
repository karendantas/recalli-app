import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";
import { theme } from "@/constants/theme/theme";
import { TabBarNotificationIcon } from "@/components/Atoms/TabNotificationIcon";
import { useNotificationStore } from "@/services/notificationsStorage";
import { StatusBar } from "react-native";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
}) {
  return <AntDesign size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { notifications, loadNotifications } = useNotificationStore();
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  async function verifyExistingNotifications() {
    await loadNotifications();
    if (notifications.length > 0) {
      setHasUnreadNotifications(true);
    }
  }
  useEffect(() => {
    verifyExistingNotifications();
  }, []);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.highlight,
        tabBarInactiveTintColor: theme.colors.primaryLight,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="new-task"
        options={{
          title: "Criar task",
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notificações",
          tabBarIcon: ({ color }) => (
            <TabBarNotificationIcon
              name="bells"
              color={color}
              showBadge={hasUnreadNotifications}
            />
          ),
        }}
      />
    </Tabs>
  );
}
