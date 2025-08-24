import React from "react";

export const TaskList = ({ taskList }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Status</th>
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
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
