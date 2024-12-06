import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Task from "../../../components/Task";

const API_URL = "http://localhost:4000/tasks";  

// Fetch all tasks
export const actfetchAllTask = createAsyncThunk("task/fetchAllTask", async () => {
  const response = await axios.get(API_URL);  
  return response.data;
});

// Fetch task by ID
export const actFetchById = createAsyncThunk("task/fetchById", async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`); 
  return response.data;
});

// Create new task
export const actCreateNewTask = createAsyncThunk("task/createNewTask", async (task: Task) => {
  const response = await axios.post(API_URL, task);  
  return response.data;
});

// Delete task by ID
export const actDeleteTaskById = createAsyncThunk("task/deleteById", async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);  
  return id;
});

// Update task
export const actUpdateTask = createAsyncThunk("task/updateTask", async (task: Task) => {
  const response = await axios.put(`${API_URL}/${task.id}`, task);  
  return response.data;
});

interface TaskState {
  tasks: Task[];
  isLoading: boolean;
  currentTask: Task | null;
  filteredTasks: Task[]; // State for filtered tasks
}

const initialState: TaskState = {
  tasks: [],
  isLoading: false,
  currentTask: null,
  filteredTasks: [], // Initialize filtered tasks
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    filterTasksByStatus: (state, action) => {
      const status = action.payload;  // Payload contains the status to filter by
      state.filteredTasks = state.tasks.filter((task) => task.status === status);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all tasks
      .addCase(actfetchAllTask.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.filteredTasks = action.payload; // Show all tasks by default
      })
      // Create new task
      .addCase(actCreateNewTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.filteredTasks.push(action.payload); // Add to filtered list as well
      })
      // Delete task by ID
      .addCase(actDeleteTaskById.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        state.filteredTasks = state.filteredTasks.filter((task) => task.id !== action.payload);
      })
      // Update task
      .addCase(actUpdateTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
        state.filteredTasks = state.filteredTasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      });
  },
});

export const { filterTasksByStatus } = taskSlice.actions;

export default taskSlice.reducer;
