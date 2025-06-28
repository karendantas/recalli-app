import { StyleSheet } from "react-native";
import { Header } from "../../Atoms/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
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
