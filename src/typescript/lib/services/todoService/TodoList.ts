import Todo from "./Todo";

export const render = (todos: Todo[]) => {
  const todoList: string = todos.map((todo) => `<li>${todo.text}</li>`).join("");
  return `<ul>${todoList}</ul>`;
};
