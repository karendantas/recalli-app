import { NewTaskForm } from "@/components/Molecules/NewTaskForm";
import { theme } from "@/constants/theme/theme";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function CreateTask() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Criar novo lembrete</Text>
      <NewTaskForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 16,
  },
  headingText: {
    paddingTop: 22,
    fontFamily: "Sen_500Medium",
    fontSize: 22,
    color: theme.colors.highlight,
  },
});
