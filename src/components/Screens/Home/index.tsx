import { StyleSheet, Text, View } from "react-native";
import { Header } from "@/components/Atoms/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@/constants/theme/theme";
import { TasksList } from "@/components/Molecules/TasksList";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

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
});
