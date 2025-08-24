import React from "react";

import { useAxiosMutation } from "../../hooks";
import { AlertComponent } from "../../Components";
import { TaskForm } from "../../Components";

const initialTaskData = {
  title: "",
  description: "",
  dueDate: new Date().toISOString().split("T")[0],
  priority: "Low",
  status: "Pending",
};

export const CreateTaskForm = () => {
  const [{ isLoading, isError, errorMessage, data }, makePostCall] =
    useAxiosMutation("http://localhost:4000/tasks/create", "POST");

  const handleSubmit = async (formData) => {
    try {
      await makePostCall(formData);

      // setFormData(initialTaskData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <>
      {isError && <AlertComponent type="error" message={errorMessage} />}
      {data && (
        <AlertComponent type="success" message="Task Created Successfully" />
      )}
      <TaskForm
        initialTaskData={initialTaskData}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        submitButtonLabel="Create Task"
      />
    </>
  );
};
