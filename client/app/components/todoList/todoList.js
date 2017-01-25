import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoListComponent from './todoList.component';
import todoListFactory from './todoList.factory'

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
.factory('todoListFactory', todoListFactory)
.name;

export default todoListModule;
