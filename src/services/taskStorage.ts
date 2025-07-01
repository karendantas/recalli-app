import { Task } from "@/@types/task";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notification from "expo-notifications";

export async function saveTask(newTask: Task) {
  try {
    const storedTasks = await AsyncStorage.getItem("tasks");
    const tasks: Task[] = storedTasks ? JSON.parse(storedTasks) : [];

    const updatedTasks = [...tasks, newTask];
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
  } catch (error) {
    console.log(error);
  }
}

export async function getTasks() {
  try {
    const storedTasks = await AsyncStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function deleteTask(taskId: string) {
  try {
    const stored = await AsyncStorage.getItem("tasks");
    const storedTasks = stored ? JSON.parse(stored) : [];

    const taskToDelete = storedTasks.find((t: Task) => t.id === taskId);

    if (taskToDelete?.notificationId) {
      Notification.cancelScheduledNotificationAsync(
        taskToDelete.notificationId
      );
    }
    const updatedStoredTasks = storedTasks.filter((t: Task) => t.id !== taskId);
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedStoredTasks));
  } catch (error) {
    console.log(error);
  }
}

export async function updateTask(taskToUpdateId: string) {
  try {
    const stored = await AsyncStorage.getItem("tasks");
    const storedTasks = stored ? JSON.parse(stored) : [];

    const updatedTasks = storedTasks.map((task: Task) =>
      task.id === taskToUpdateId
        ? {
            ...task,
            isCompleted: !task.isCompleted,
          }
        : task
    );

    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
  } catch (error) {
    console.log(error);
  }
}
