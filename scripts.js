// Initial list of tasks
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Explore ES6 Features 🚀",
    description: "Learn arrow functions",
    status: "done",
  },

  {
    id: 4,
    title: "Conquer React ⚛️",
    description: "Build interactive UIs",
    status: "todo",
  },
  {
    id: 5,
    title: "Never Give Up 🏆",
    description: "Stay consistent and push through every challenge",
    status: "doing",
  },
  {
    id: 6,
    title: "Have fun 🥳",
    description: "Enjoy the process while learning and coding",
    status: "done",
  },

  {
    id: 7,
    title: "Understand Databases ⚙️",
    description: "Learn SQL and NoSQL for managing data efficiently",
    status: "todo",
  },
  {
    id: 8,
    title: "Crush Frameworks 🖼️",
    description: "Learn everything about React Frameworks",
    status: "todo",
  },
];

// Grab modal elements from DOM
const taskTitleInput = document.getElementById("task-title");
const taskDescriptionInput = document.getElementById("task-description");
const taskStatusSelect = document.getElementById("task-status");
const modalBackdrop = document.getElementById("modal-backdrop");
const closeModalBtn = document.getElementById("close-modal");

// Render tasks into their respective columns
function renderTasks(tasks) {
  tasks.forEach((task) => {
    // Create task card
    const taskElement = document.createElement("div");
    taskElement.textContent = task.title;
    taskElement.classList.add("taskCard");

    // Append to correct column by status
    const column = document.querySelector(`#${task.status} .tasks-container`);
    if (column) {
      column.appendChild(taskElement);
    }

    // When clicked → open modal with task details
    taskElement.addEventListener("click", function () {
      openModal(task);
    });
  });
}

// Open modal with a given task’s data
function openModal(task) {
  taskTitleInput.value = task.title;
  taskDescriptionInput.value = task.description;
  taskStatusSelect.value = task.status;

  // show modal
  modalBackdrop.style.display = "flex";
}

// Close modal with "X" button
closeModalBtn.addEventListener("click", function () {
  modalBackdrop.style.display = "none";
});

// Close modal when clicking backdrop (outside modal box)
modalBackdrop.addEventListener("click", function (e) {
  if (e.target === modalBackdrop) modalBackdrop.style.display = "none";
});
