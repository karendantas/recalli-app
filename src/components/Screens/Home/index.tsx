import { StyleSheet, Text, View } from "react-native";
import { Header } from "@/components/Atoms/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@/constants/theme/theme";
import { TasksList } from "@/components/Molecules/TasksList";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <Text style={styles.headingText}>Tarefas de hoje!</Text>
      <View style={styles.tasks}>
        <TasksList />
      </View>
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
  tasks: {
    flex: 1,
    paddingTop: 26,
    gap: 16,
  },
  headingText: {
    paddingTop: 22,
    fontFamily: "Sen_500Medium",
    fontSize: 22,
    color: theme.colors.highlight,
  },
});
