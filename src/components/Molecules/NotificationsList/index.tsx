import { AppNotification } from "@/@types/notification";
import dayjs from "dayjs";
import { FlatList, View, Text, StyleSheet } from "react-native";

interface NotificationsListProps {
  notifications: AppNotification[];
}
export default function NotificationsList({
  notifications,
}: NotificationsListProps) {
  return (
    <FlatList
      data={notifications}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap: 12 }}
      ListEmptyComponent={<Text>Nenhuma notificação</Text>}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{dayjs(item.dateTime).format("DD/MM/YYYY")}</Text>
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8f8f8",
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
