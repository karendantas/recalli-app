import { TaskComponent } from "@/components/Atoms/TaskComponent";
import { deleteTask, getTasks, updateTask } from "@/services/taskStorage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { SectionList, Text, View } from "react-native";
import { styles } from "./styles";
import { Task } from "@/@types/task";

export function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const taskSections =
    tasks.length === 0
      ? []
      : [
          {
            title: "Tarefas a fazer",
            data: tasks.filter((t) => !t.isCompleted),
          },
          {
            title: "Tarefas concluídas",
            data: tasks.filter((t) => t.isCompleted),
          },
        ];

  async function handleDeleteTask(taskId: string) {
    await deleteTask(taskId);
    const storedTasks = await getTasks();
    setTasks(storedTasks);
  }

  async function completeTask(taskId: string) {
    await updateTask(taskId);
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
    <SectionList
      sections={taskSections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskComponent
          {...item}
          onDelete={() => handleDeleteTask(item.id)}
          completeTask={() => completeTask(item.id)}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionTitle}>{title}</Text>
      )}
      contentContainerStyle={{ paddingBottom: 36 }}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhuma tarefa por aqui ainda</Text>
          <Text style={styles.emptySubText}>
            Adicione uma nova task para começar!
          </Text>
        </View>
      )}
    />
  );
}
