import { ScrollView, StyleSheet } from "react-native";
import { Header } from "@/components/Atoms/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { TaskComponent } from "@/components/Atoms/TaskComponent";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView>
        <TaskComponent title="Tomar remedi9o" date="10-02-2025" time="13:30" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 16,
  },
});
