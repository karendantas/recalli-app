import { NewTaskForm } from "@/components/Molecules/NewTaskForm";
import { theme } from "@/constants/theme/theme";
import { ScrollView, StyleSheet, Text, SafeAreaView } from "react-native";

export function CreateTask() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headingText}>Criar novo lembrete</Text>
        <NewTaskForm />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 32,
  },
  headingText: {
    paddingTop: 22,
    fontFamily: "Sen_500Medium",
    fontSize: 22,
    color: theme.colors.highlight,
  },
});
