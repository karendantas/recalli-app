import { TaskComponent } from "@/components/Atoms/TaskComponent";
import { deleteTask, getTasks, Task, updateTask } from "@/services/taskStorage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { SectionList, Text } from "react-native";
import { styles } from "./styles";

export function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const taskSections = [
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
      data={tasks}
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
    />
  );
}
