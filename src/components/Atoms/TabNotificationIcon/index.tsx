import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View } from "react-native";
import { theme } from "@/constants/theme/theme";

interface TabBarNotificationIconProps {
  name: keyof typeof AntDesign.glyphMap;
  color: string;
  showBadge?: boolean;
}
export function TabBarNotificationIcon({
  name,
  color,
  showBadge,
}: TabBarNotificationIconProps) {
  return (
    <View style={{ width: 24, height: 24, marginBottom: -3 }}>
      <AntDesign name={name} color={color} size={24} />
      {showBadge && (
        <View
          style={{
            position: "absolute",
            top: -2,
            right: 0,
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: theme.colors.highlight,
          }}
          testID="notification-active"
        />
      )}
    </View>
  );
}
