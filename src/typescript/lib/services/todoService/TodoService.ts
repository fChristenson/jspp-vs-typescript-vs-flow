import Todo from "./Todo";
import * as TodoList from "./TodoList";

export default class TodoService {
  private window: Window; // awesome
  private todos: Todo[];

  constructor(window: Window) {
    this.window = window;
    this.todos = [];
  }

  public addTodo(todo: Todo): Todo[] {
    this.todos.push(todo);
    return this.todos;
  }

  public appendTodoListToDom(): void {
    this.window.document.body.insertAdjacentHTML(
      "beforeend",
      TodoList.render(this.todos),
    );
  }
}
