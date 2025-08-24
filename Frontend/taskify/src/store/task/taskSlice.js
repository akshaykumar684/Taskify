import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTask: {},
  taskLists: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setCurrentSelectedTask(state, action) {
      state.selectedTask = action.task;
    },
    setTaskList(state, action) {
      state.taskLists = action.payload;
    },
    deleteTask(state, action) {
      const _id = action.payload;

      state.taskLists = state.taskLists.filter((t) => t._id !== _id);
    },
  },
});

export const taskAction = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
