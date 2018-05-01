// @flow
const Todo = require("./Todo");

const render = (todos: Array<Todo>) => {
  const todoList: string = todos.map(todo => `<li>${todo.text}</li>`).join("");
  return `<ul>${todoList}</ul>`;
};

module.exports = {
  render
};
