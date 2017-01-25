class TodoListController {
  constructor(todoListFactory) {
    'ngInject';
    this.name = 'todoList';
    this.items = todoListFactory.items;
  }
}

export default TodoListController;
