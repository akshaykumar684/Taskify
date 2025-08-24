import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTask: {},
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setCurrentSelectedTask(state, action) {
      state.selectedTask = action.task;
    },
  },
});

export const taskAction = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
