class Model {
  constructor() {}
}

class View {
  constructor() {
    this.app = this.getElement("body");

    this.todoWrapper = this.createElement("div", "todo");
    this.form = this.createElement("form", "todo-form");
    this.form.autocomplete = "off";

    this.input = this.createElement("input", "todo-input");
    this.input.type = "text";
    this.input.placeholder = "Enter your task";
    this.input.name = "todo";

    this.submit = this.createElement("button", "todo-submit");
    this.submit.type = "button";
    this.submit.name = "Add";

    this.form.appendChild(this.input, this.submit);
  }

  createElement(tag, className) {
    const elm = document.createElement(tag);
    if (className) elm.className.add(className);
    return;
  }

  getElement(selector) {
    const elm = document.querySelector(selector);
    return elm;
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
