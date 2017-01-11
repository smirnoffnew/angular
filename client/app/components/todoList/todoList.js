import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoListComponent from './todoList.component';

let todoListModule = angular.module('todoList', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/todoList');

  $stateProvider
      .state('todoList', {
        url: '/todoList',
        component: 'todoList'
      });
})
.component('todoList', todoListComponent)
.name;

export default todoListModule;
