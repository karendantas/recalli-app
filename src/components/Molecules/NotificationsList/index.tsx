import { AppNotification } from "@/@types/notification";
import { theme } from "@/constants/theme/theme";
import dayjs from "dayjs";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

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
      ListEmptyComponent={
        <View style={styles.emptyContent}>
          <Text style={styles.emptyTitle}>Nenhuma notificação</Text>
          <Text style={styles.emptySubtitle}>
            Você está com tudo em dia. Volte mais tarde!
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{dayjs(item.dateTime).format("DD/MM/YYYY")}</Text>
        </View>
      )}
    />
  );
}
