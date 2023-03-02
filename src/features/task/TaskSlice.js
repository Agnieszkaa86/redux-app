import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
       const index = state.findIndex(task => task.id === action.payload);
        state[index].completed = !state[index].completed;
        }
      }
    },
  );

export const { addTask, deleteTask, toggleCompleted} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;

export const tasksReducer = tasksSlice.reducer;