import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAxiosGet } from "../hooks/useAxiosGet";
import { TaskList, TaskLoadingSkeleton, AlertComponent } from "../Components";
import { taskAction } from "../store/task/taskSlice";

export const Home = () => {
  const dispatch = useDispatch();

  const { setTaskList } = taskAction;
  const {
    isLoading,
    isError,
    data: taskList,
  } = useAxiosGet("http://localhost:4000/tasks");

  useEffect(() => {
    if (taskList?.data?.length > 0) {
      dispatch(setTaskList(taskList.data));
    }
  }, [dispatch, setTaskList, taskList]);

  if (isLoading) {
    return <TaskLoadingSkeleton />;
  }

  if (isError) {
    return (
      <AlertComponent
        type="warning"
        message="Our server is stubborn.Please try again later "
      />
    );
  }

  return <TaskList />;
};
