import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.updateList = this.updateList.bind(this);
    this.props.todoContext.subscribe(this.updateList);

    this.state = {
      todos: [],
    };

    this.listElement = null;
  }

  updateList(todos) {
    this.state.todos = todos;
    this.listElement.innerHTML = "";

    this.state.todos.forEach((todo) => {
      const todoItem = new TodoItem({
        todo,
        todoContext: this.props.todoContext,
      }).render();

      this.listElement.appendChild(todoItem);
    });
  }

  render() {
    const todoListElement = document.createElement("div");
    todoListElement.className = "todo-list";

    todoListElement.innerHTML = `
      <ul class="todo-list"></ul>
    `;

    this.listElement = todoListElement.querySelector(".todo-list");
    return todoListElement;
  }
}
