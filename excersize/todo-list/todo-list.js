window.addEventListener("load", function () {
  const form = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  if (Array.isArray(todos) && todos.length > 0) {
    [...todos].forEach((item) => createTodoItem(item));
  }
  function createTodoItem(title) {
    const template = `
  <div class="todo-item">
    <span class="todo-text">${title}</span>
    <i class="fa fa-trash todo-remove" data-value=${title}></i>
  </div>
`;
    todoList.insertAdjacentHTML("beforeend", template);
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoVal = this.elements["todo"].value;
    createTodoItem(todoVal);
    todos.push(todoVal);
    // save  to  localStorage
    localStorage && localStorage.setItem("todos", JSON.stringify(todos));
    this.elements["todo"].value = ""; // reset input
  });

  todoList.addEventListener("click", function (e) {
    if (e.target.matches(".todo-remove")) {
      const todo = e.target.parentNode;
      todo.parentNode.removeChild(todo);
      const todoText = e.target.dataset.value;
      const index = todos.findIndex((item) => item === todoText);
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
});
