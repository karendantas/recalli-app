import { TaskComponent } from "@/components/Atoms/TaskComponent";
import {
  deleteTask,
  getTasks,
  setTask,
  Task,
  updateTask,
} from "@/services/taskStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  async function completeTask(taskId: string) {
    await updateTask(taskId);
    const storedTasks = await getTasks();
    console.log("all", storedTasks);
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
          isCompleted={item.isCompleted}
          onDelete={() => handleDeleteTask(item.id)}
          completeTask={() => completeTask(item.id)}
        />
      )}
      contentContainerStyle={{ gap: 16 }}
    />
  );
}
