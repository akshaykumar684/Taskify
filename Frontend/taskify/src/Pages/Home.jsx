import React, { useEffect } from "react";
import { useAxiosGet } from "../hooks/useAxiosGet";
import { TaskTable, TaskLoadingSkeleton } from "../Components";

export const Home = () => {
  const {
    isLoading,
    isError,
    data: taskList,
  } = useAxiosGet("http://localhost:4000/tasks");

  console.log(taskList);

  if (isLoading) {
    return <TaskLoadingSkeleton />;
  }
  // return <p>Loaded</p>;

  return <TaskTable taskList={taskList.data} />;
};
