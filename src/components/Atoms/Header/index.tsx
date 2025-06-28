import { theme } from "@/src/constants/theme/theme";
import { StyleSheet, Text, View } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headingText}>Olá, Karen</Text>
        <Text style={styles.headingSubtitle}>
          Precisa lembrar de algo hoje?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  headingText: {
    fontFamily: "Sen_500Medium",
    fontSize: 20,
  },
  headingSubtitle: {
    fontFamily: "Sen_400Regular",
    color: theme.colors.primaryLight,
    fontSize: 16,
  },
});
