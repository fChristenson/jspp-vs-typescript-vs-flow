// @flow

const { Todo, TodoService } = require("./todoService");

const todoService = new TodoService(window);

module.exports = {
  Todo,
  todoService
};
