import template from './todoList.html';
import controller from './todoList.controller';
import './todoList.scss';

let todoListComponent = {
  restrict: 'E',
  bindings: {},
  controllerAs: 'vm',
  template,
  controller
};

export default todoListComponent;
