import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "@/constants/theme/theme";

interface InputProps extends TextInputProps {
  iconName?: keyof typeof AntDesign.glyphMap;
}
export function Input({ iconName, ...rest }: InputProps) {
  return (
    <View style={styles.container}>
      {iconName && (
        <AntDesign
          name={iconName}
          size={20}
          color={theme.colors.textSecondary}
          testID="icon"
        />
      )}
      <TextInput
        {...rest}
        style={styles.text}
        placeholderTextColor={theme.colors.textSecondary}
        testID="input"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.inputBackground,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    width: "100%",
    paddingTop: 6,
    paddingBottom: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  text: {
    fontFamily: "Sen_400Regular",
    fontSize: 16,
    color: theme.colors.textSecondary,
    width: "100%",
  },
});
