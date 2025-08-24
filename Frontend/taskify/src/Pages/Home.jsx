import React from "react";
import { useAxiosGet } from "../hooks/useAxiosGet";
import { TaskList, TaskLoadingSkeleton, AlertComponent } from "../Components";

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

  if (isError) {
    return (
      <AlertComponent
        type="warning"
        message="Our server is stubborn.Please try again later "
      />
    );
  }

  return <TaskList taskList={taskList.data} />;
};
