import axios, { AxiosResponse } from "axios";

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
}

type TaskUpdate = Partial<Task>; 

export const TaskAPIs = {
  getAllTasks: async (): Promise<AxiosResponse<Task[]>> => {
    try {
      const response = await axios.get<Task[]>(`${process.env.REACT_APP_BE_URL}tasks`);
      return response;
    } catch (error) {
      console.error("Error fetching all tasks:", error);
      throw error;
    }
  },

  getTaskById: async (taskId: string): Promise<Task> => {
    try {
      const response = await axios.get<Task>(
        `${process.env.REACT_APP_BE_URL}tasks/${taskId}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching task with ID ${taskId}:`, error);
      throw error;
    }
  },

  createTask: async (task: Task): Promise<AxiosResponse<Task>> => {
    try {
      const response = await axios.post<Task>(
        `${process.env.REACT_APP_BE_URL}tasks`,
        task
      );
      return response;
    } catch (error) {
      console.error("Error creating task:", error);
      throw error;
    }
  },

  updateTaskById: async (id: string, taskUpdate: TaskUpdate): Promise<AxiosResponse<Task>> => {
    try {
      const response = await axios.put<Task>(
        `${process.env.REACT_APP_BE_URL}tasks/${id}`,
        taskUpdate
      );
      return response;
    } catch (error) {
      console.error(`Error updating task with ID ${id}:`, error);
      throw error;
    }
  },

  deleteTaskById: async (id: string): Promise<void> => {
    try {
      await axios.delete(`${process.env.REACT_APP_BE_URL}tasks/${id}`);
    } catch (error) {
      console.error(`Error deleting task with ID ${id}:`, error);
      throw error;
    }
  },
};
