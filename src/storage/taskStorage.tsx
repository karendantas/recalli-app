import AsyncStorage from "@react-native-async-storage/async-storage";

export type Task = {
  id: string;
  title: string;
  startsAt: string;
  endsAt: string;
  time: string;
};

export const storeTask = async (newTask: Task) => {
  try {
    const storedTasks = await AsyncStorage.getItem("tasks");
    const tasks: Task[] = storedTasks ? JSON.parse(storedTasks) : [];

    const updatedTasks = [...tasks, newTask];
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
  } catch (error) {
    console.log(error);
  }
};

export const getTasks = async (): Promise<Task[]> => {
  try {
    const storedTasks = await AsyncStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export async function deleteTask(taskId: string) {
  try {
    const stored = await AsyncStorage.getItem("tasks");
    const storedTasks = stored ? JSON.parse(stored) : [];

    const updatedStoredTasks = storedTasks.filter((t: Task) => t.id !== taskId);
    console.log(updatedStoredTasks);
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedStoredTasks));
  } catch (error) {
    console.log(error);
  }
}
