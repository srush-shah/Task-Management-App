const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`, // unique number for card id
    imageUrl: document.getElementById("imageUrl").val,
    taskTitle: document.getElementById("taskTitle"),
    taskType: document.getElementById("taskType"),
    taskDescription: document.getElementById("taskDescription"),
  };
};
