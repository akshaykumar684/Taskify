import React, { useState } from "react";

import { useAxiosPost } from "../../hooks";
import { AlertComponent } from "../../Components";

const initialTaskData = {
  title: "",
  description: "",
  dueDate: new Date().toISOString().split("T")[0],
  priority: "Low",
  status: "Pending",
};

export const TaskForm = () => {
  const [formData, setFormData] = useState(initialTaskData);

  const [{ isLoading, isError, errorMessage, data }, makePostCall] =
    useAxiosPost("http://localhost:4000/tasks/create");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await makePostCall(formData);

      setFormData(initialTaskData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isError && <AlertComponent type="error" message={errorMessage} />}
      {data && (
        <AlertComponent type="success" message="Task Created Successfully" />
      )}
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">New Task</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Task Title"
                  className="input input-bordered w-full"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered w-full"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Date</span>
                </label>
                <input
                  type="date"
                  name="dueDate"
                  placeholder="Enter Due Date"
                  className="input input-bordered w-full"
                  value={formData.dueDate}
                  onChange={handleChange}
                  min={initialTaskData.dueDate}
                  required
                />
              </div>
              <div className="form-control">
                <fieldset className="fieldset">
                  <label className="label">
                    <span className="label-text">Priority</span>
                  </label>
                  <select
                    name="priority"
                    className="select"
                    value={formData.priority}
                    onChange={handleChange}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </fieldset>
              </div>
              <div className="form-control">
                <fieldset className="fieldset">
                  <label className="label">
                    <span className="label-text">Status</span>
                  </label>
                  <select
                    name="status"
                    className="select"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </fieldset>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">
                  {isLoading ? (
                    <span className="loading loading-dots loading-xs"></span>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
