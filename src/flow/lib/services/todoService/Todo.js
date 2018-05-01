// @flow

class Todo {
  text: string;
  createdAt: Date;

  // damn I love optionals
  constructor(text: ?string) {
    if (typeof text === "string" && text.length <= 0)
      throw new Error(`Todo can not be empty string`);

    this.text = text === undefined || text === null ? "Default todo" : text;
    this.createdAt = new Date();
  }
}

module.exports = Todo;
