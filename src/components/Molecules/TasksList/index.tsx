import { TaskComponent } from "@/components/Atoms/TaskComponent";
import { getTasks, Task } from "@/storage/taskStorage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";

export function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useFocusEffect(
    useCallback(() => {
      async function loadTasks() {
        const storedTasks = await getTasks();
        setTasks(storedTasks);
      }
      loadTasks();
    }, [])
  );

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => `${item.title}-${index}`}
      renderItem={({ item }) => (
        <TaskComponent title={item.title} date={item.date} time={item.time} />
      )}
      contentContainerStyle={{ gap: 16 }}
    />
  );
}
