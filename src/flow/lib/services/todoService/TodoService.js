// @flow
const Todo = require("./Todo");
const TodoList = require("./TodoList");

class TodoService {
  window: any;
  todos: Array<Todo>;

  constructor(window: any) {
    this.window = window;
    this.todos = [];
  }

  addTodo(todo: Todo): Array<Todo> {
    this.todos.push(todo);
    return this.todos;
  }

  appendTodoListToDom() {
    this.window.document.body.insertAdjacentHTML(
      "beforeend",
      TodoList.render(this.todos)
    );
  }
}

module.exports = TodoService;
