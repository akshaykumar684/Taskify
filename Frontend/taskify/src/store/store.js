import { configureStore } from "@reduxjs/toolkit";

import { taskReducer } from "./task/taskSlice";
import { userReducer } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    user: userReducer,
  },
});
