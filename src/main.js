import { App } from "./components/App.js";
import { TodoContext } from "./contexts/TodoContext.js";

const root = document.querySelector("#app");

const todoContext = new TodoContext();

const app = new App({ todoContext });

app.mount(root);
