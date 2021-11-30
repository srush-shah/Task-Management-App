//Parent element to store cards
const taskContainer = document.querySelector(".task_container");

//Global store
let globalStore = [];

const newCard = ({
  id,
  imageUrl,
  taskTitle,
  taskType,
  taskDescription,
}) => `<div class="col-md-6 col-lg-4" id=${id}>
<div class="card text-start">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" id=${id} class="btn btn-outline-success" onclick="editCard.apply(this, arguments)"><i class="fas fa-pencil-alt" id=${id} onclick="editCard.apply(this, arguments)"></i></button>
    <button type="button" id=${id} class="btn btn-outline-danger" onclick="deleteCard.apply(this, arguments)"><i class="fas fa-trash-alt" id=${id} onclick="deleteCard.apply(this,arguments)"></i></button>
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
  if (!getInitialData) return;
  //convert stringified-object to object
  const { cards } = JSON.parse(getInitialData);
  //map around the array to generate HTML card and inject it to DOM.
  cards.map((cardObject) => {
    const createNewCard = newCard(cardObject);
    taskContainer.insertAdjacentHTML("beforeend", createNewCard);
    globalStore.push(cardObject);
  });
};

const updateLocalStorage = () =>
  localStorage.setItem("tasky", JSON.stringify({ cards: globalStore }));

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
  updateLocalStorage();
};

const deleteCard = (event) => {
  //get id of the card
  event = window.event;
  const targetID = event.target.id;
  const tagname = event.target.tagName;
  //search the globalStore array, remove the object with the id.
  globalStore = globalStore.filter((cardObject) => cardObject.id !== targetID);
  updateLocalStorage();
  //access DOM to remove them.
  if (tagname === "BUTTON") {
    return event.target.parentNode.parentNode.parentNode.parentNode.removeChild(
      event.target.parentNode.parentNode.parentNode
    );
  }
  //IF Tag is icon tag inside the button tag.
  return event.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
    event.target.parentNode.parentNode.parentNode.parentNode
  );
};

const editCard = (event) => {
  //get id of the card
  event = window.event;
  const targetID = event.target.id;
  const tagname = event.target.tagName;

  //add contenteditable attribute to the card and make the changes dynamic
  let parentElement;

  if(tagname === "BUTTON") {
    parentElement = event.target.parentNode
  }
};
