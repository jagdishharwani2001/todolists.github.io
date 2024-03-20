// document.addEventListener("DOMContentLoaded", function() {
//     const taskInput = document.getElementById("taskInput");
//     const addTaskBtn = document.getElementById("addTaskBtn");
//     const taskList = document.getElementById("taskList");
  
//     addTaskBtn.addEventListener("click", function() {
//       const taskText = taskInput.value.trim();
//       if (taskText !== "") {
//         const li = document.createElement("li");
//         li.textContent = taskText;
//         taskList.appendChild(li);
//         taskInput.value = "";
//       }
//     });
//   });
document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.classList.add("fade-in");
        setTimeout(() => {
          li.classList.add("active");
        }, 10);
        taskList.appendChild(li);
        taskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        event.target.classList.remove("active");
        setTimeout(() => {
          event.target.remove();
        }, 500);
      }
    });
  });