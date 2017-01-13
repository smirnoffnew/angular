import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoListComponent from './todoList.component';

let todoListModule = angular.module('todoListModule', [
  uiRouter
])
.config( ($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('todo-list', {
            url: '/todo-list',
            component: 'todoListComponent'
    });
})
.component('todoListComponent', todoListComponent)
.name;

export default todoListModule;
