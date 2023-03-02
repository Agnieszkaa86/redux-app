import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "../features/task/TaskSlice";
import filtersReducer from "../features/filters/FiltersSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filter: filtersReducer,
    },
});