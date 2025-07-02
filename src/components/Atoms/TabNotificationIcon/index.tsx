import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View } from "react-native";
import { theme } from "@/constants/theme/theme";

export function TabBarNotificationIcon(props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
  showBadge?: boolean;
}) {
  return (
    <View style={{ width: 24, height: 24, marginBottom: -3 }}>
      <AntDesign name={props.name} color={props.color} size={24} />
      {props.showBadge && (
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
        />
      )}
    </View>
  );
}
