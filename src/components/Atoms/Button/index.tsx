import { theme } from "@/constants/theme/theme";
import { AntDesign } from "@expo/vector-icons";
import {
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  iconName?: keyof typeof AntDesign.glyphMap;
  width?: DimensionValue;
}

export function Button({
  title,
  iconName,
  width = "100%",
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { width }]}
      {...rest}
      testID="Button"
    >
      {iconName && <AntDesign name={iconName} size={20} testID="icon" />}
      {title && <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.highlight,
    paddingHorizontal: 12,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Sen_500Medium",
    color: theme.colors.button,
    fontSize: 20,
  },
});
