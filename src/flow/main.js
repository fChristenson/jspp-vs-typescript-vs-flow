// @flow
const { todoService, Todo } = require("./lib/services");

const todo = new Todo("foo");
const todo2 = new Todo("bar");
const todo3 = new Todo("baz");

todoService.addTodo(todo);
todoService.addTodo(todo2);
todoService.addTodo(todo3);

todoService.appendTodoListToDom();
