import { Component } from "../common/Component.js";
import { TodoList } from "./TodoList.js";

// this.props.todo, this.props.todoContext
export class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoElement = document.createElement("li");
    todoElement.className = "todo-item";
    todoElement.innerHTML = `
      <div>
        <p>${this.props.todo.name}</p>
        <button class="complete-btn">${
          this.props.todo.completed ? "Mark Incomplete" : "Mark Complete"
        }</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    todoElement.querySelector(".delete-btn").addEventListener("click", () => {
      this.props.todoContext.deleteTodo(this.props.todo.id);
    });

    todoElement.querySelector(".complete-btn").addEventListener("click", () => {
      this.props.todoContext.updateTodo(this.props.todo.id);
    });

    return todoElement;
  }
}
