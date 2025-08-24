import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useAxiosMutation } from "../hooks";
import { AlertComponent } from "../Components";
import { TaskForm } from "../Components";

export const TaskDetails = () => {
  const selectedTask = useSelector((state) => state.task.selectedTask);

  const { id } = useParams();

  const [{ isLoading, isError, errorMessage, data }, makePostCall] =
    useAxiosMutation(`http://localhost:4000/tasks/${id}`, "PUT");

  const handleSubmit = async (formData) => {
    try {
      await makePostCall(formData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <>
      {isError && <AlertComponent type="error" message={errorMessage} />}
      {data && (
        <AlertComponent type="success" message="Task Updated Successfully" />
      )}
      <TaskForm
        initialTaskData={selectedTask}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        submitButtonLabel="Update Task"
        isUpdateTask={true}
      />
    </>
  );
};
