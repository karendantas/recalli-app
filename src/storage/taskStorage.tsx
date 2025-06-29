import AsyncStorage from "@react-native-async-storage/async-storage";

export type Task = {
  title: string;
  date: string;
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
