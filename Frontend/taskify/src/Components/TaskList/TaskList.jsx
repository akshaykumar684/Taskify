import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { taskAction } from "../../store/task/taskSlice";
import { AlertComponent } from "../../Components";

export const TaskList = () => {
  const taskList = useSelector((state) => state.task.taskLists);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const { setCurrentSelectedTask, deleteTask } = taskAction;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteTaskHandler = async (taskId) => {
    try {
      const url = `http://localhost:4000/tasks/${taskId}`;
      await axios.delete(url, { withCredentials: true });

      dispatch(deleteTask(taskId));
    } catch (error) {
      console.log(error);
    }
  };

  const taskEditHandler = async ({
    _id,
    title,
    description,
    dueDate,
    priority,
    status,
  }) => {
    dispatch(
      setCurrentSelectedTask({
        title,
        description,
        dueDate,
        priority,
        status,
      })
    );
    navigate(`/tasks/${_id}`);
  };

  return (
    <>
      {!isLoggedIn && (
        <AlertComponent
          type="info"
          message="Please Login First to Add/Edit/Delete Tasks"
        />
      )}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
              {isLoggedIn && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {taskList.map(
              ({ _id, title, description, dueDate, priority, status }) => (
                <tr key={_id}>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>{dueDate}</td>
                  <td>{priority}</td>
                  <td>{status}</td>
                  {isLoggedIn && (
                    <th>
                      <button
                        className="btn btn-soft btn-primary mr-2"
                        onClick={() =>
                          taskEditHandler({
                            _id,
                            title,
                            description,
                            dueDate,
                            priority,
                            status,
                          })
                        }
                      >
                        Edit
                      </button>
                      {status === "Completed" && (
                        <button
                          className="btn btn-soft btn-secondary"
                          onClick={() => deleteTaskHandler(_id)}
                        >
                          Delete
                        </button>
                      )}
                    </th>
                  )}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
