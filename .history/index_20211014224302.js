const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`, // unique number for card id
    imageUrl: document.getElementById("imageUrl").value,
    taskTitle: document.getElementById("taskTitle"),
    taskType: document.getElementById("taskType"),
    taskDescription: document.getElementById("taskDescription"),
  };
};