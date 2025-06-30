import { TaskComponent } from "@/components/Atoms/TaskComponent";
import { deleteTask, getTasks, Task } from "@/storage/taskStorage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";

export function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function handleDeleteTask(taskId: string) {
    await deleteTask(taskId);
    const storedTasks = await getTasks();
    setTasks(storedTasks);
  }

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
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskComponent
          id={item.id}
          title={item.title}
          startsAt={item.startsAt}
          endsAt={item.endsAt}
          time={item.time}
          onDelete={() => handleDeleteTask(item.id)}
        />
      )}
      contentContainerStyle={{ gap: 16 }}
    />
  );
}
