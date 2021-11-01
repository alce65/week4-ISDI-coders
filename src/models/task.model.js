export default class TaskModel {
  constructor(id = 0, title = '', responsible = '', isCompleted = false) {
    this.id = id;
    this.title = title;
    this.responsible = responsible;
    this.isCompleted = isCompleted;
  }
}
