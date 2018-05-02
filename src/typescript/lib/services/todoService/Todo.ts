export default class Todo {
  public text: string;
  public createdAt: Date;

  constructor(text: string) {
    if (text.length <= 0) {
      throw new Error(`Todo can not be empty string`);
    }

    this.text = text;
    this.createdAt = new Date();
  }
}
