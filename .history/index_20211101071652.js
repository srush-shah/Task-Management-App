//Parent element to store cards
const taskContainer = document.querySelector(".task_container");

//Global store
const globalStore = [];

const newCard = ({
  id,
  imageUrl,
  taskTitle,
  taskType,
  taskDescription,
}) => `<div class="col-md-6 col-lg-4" id=${id}>
<div class="card text-start">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
  </div>
  <img src=${imageUrl} class="card-img-top" alt="Task Image">
  <div class="card-body">
    <h5 class="card-title">${taskTitle}</h5>
    <p class="card-text">${taskDescription}</p>
    <span class="badge bg-primary">${taskType}</span>
  </div>
  <div class="card-footer text-muted">
    <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
  </div>
</div>
</div>`;

const loadInitialTaskCards = () => {
  //access local storage
  const getInitialData = localStorage.getItem("tasky");
  //convert stringified-object to object
  //map around the array to generate HTML card and inject it to DOM.
};

const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`, // unique number for card id
    imageUrl: document.getElementById("imageUrl").value,
    taskTitle: document.getElementById("taskTitle").value,
    taskType: document.getElementById("taskType").value,
    taskDescription: document.getElementById("taskDescription").value,
  };

  const createNewCard = newCard(taskData);
  taskContainer.insertAdjacentHTML("beforeend", createNewCard);
  globalStore.push(taskData);
  console.log(globalStore);

  //Calling local storage API for pushing the updated array to local storage
  //API - Application Programming Interface
  localStorage.setItem("tasky", JSON.stringify({ cards: globalStore }));
};
