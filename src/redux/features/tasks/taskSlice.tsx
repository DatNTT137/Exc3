import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:4000/tasks";

// Lấy tất cả task
export const actfetchAllTask = createAsyncThunk(
  "task/fetchAllTask",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// Lấy task theo ID
export const actFetchById = createAsyncThunk(
  "task/fetchById",
  async (id: string) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }
);

// Tạo task mới
export const actCreateNewTask = createAsyncThunk(
  "task/createNewTask",
  async (task: any) => {
    const response = await axios.post(API_URL, task);
    return response.data;
  }
);

// Xóa task theo ID
export const actDeleteTaskById = createAsyncThunk(
  "task/deleteById",
  async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

// Cập nhật task
export const actUpdateTask = createAsyncThunk(
  "task/updateTask",
  async (task: any) => {
    const response = await axios.put(`${API_URL}/${task.id}`, task);
    return response.data;
  }
);

interface TaskState {
  tasks: any[];
  isLoading: boolean;
  currentTask: any | null;
  filteredTasks: any[];
}

const initialState: TaskState = {
  tasks: [],
  isLoading: false,
  currentTask: null,
  filteredTasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    filterTasksByStatus: (state, action) => {
      const status = action.payload;
      state.filteredTasks = state.tasks.filter(
        (task) => task.status === status
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actfetchAllTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(actfetchAllTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
        state.filteredTasks = action.payload;
      })
      .addCase(actfetchAllTask.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(actCreateNewTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.filteredTasks.push(action.payload);
      })
      .addCase(actDeleteTaskById.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        state.filteredTasks = state.filteredTasks.filter(
          (task) => task.id !== action.payload
        );
      })
      .addCase(actUpdateTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
        state.filteredTasks = state.filteredTasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      })

      .addCase(actFetchById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentTask = action.payload;
      });
  },
});

export const { filterTasksByStatus } = taskSlice.actions;
export default taskSlice.reducer;
