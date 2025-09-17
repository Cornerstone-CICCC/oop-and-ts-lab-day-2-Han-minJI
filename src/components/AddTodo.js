import { Component } from "../common/Component.js";
import { TodoList } from "./TodoList.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  handleAddToTodoList(todo) {
    this.props.todoContext.addTodo(todo);
  }

  render() {
    const addElement = document.createElement("div");
    addElement.className = "add-todo";
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `;

    const todoInput = addElement.querySelector("#todo-input");
    addElement.querySelector("#todo-add-btn").addEventListener("click", () => {
      this.handleAddToTodoList(todoInput.value);

      todoInput.value = "";
    });
    return addElement;
  }
}
