import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoListComponent from './todoList.component';

let todoListModule = angular.module('todoList', [
  uiRouter
])

.component('todoList', todoListComponent)
.name;

export default todoListModule;
