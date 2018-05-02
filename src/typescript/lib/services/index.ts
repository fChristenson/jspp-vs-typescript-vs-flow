import { Todo, TodoService } from "./todoService/index";

const todoService = new TodoService(window);

export {
  Todo,
  todoService,
};
