export const validateTaskUpdateField = (task) => {
  const allowedFieldForTaskToUpdate = [
    "title",
    "description",
    "dueDate",
    "priority",
    "status",
  ];

  const isTaskFieldValid = Object.keys(task).every((field) =>
    allowedFieldForTaskToUpdate.includes(field)
  );

  return isTaskFieldValid;
};
