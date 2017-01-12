import ngMaterial from 'angular-material';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import StartContentController from './components/startContent/startContent.controller';
import TodoListController from './components/todoList/todoList.controller';

angular.module('app', [
    uiRouter,
    ngMaterial,
    Common,
    Components
  ])
.config( ($stateProvider, $urlRouterProvider, $locationProvider) => {
    "ngInject";
    $urlRouterProvider.otherwise("/hello");
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider

        .state('start-content', {
            url: '/start-content',
            templateUrl: 'app/components/startContent/startContent.html',
            controller: StartContentController,
            controllerAs: 'vm'
        })

        .state('todo-list', {
            url: '/todo-list',
            templateUrl: 'app/components/todoList/todoList.html',
            controller: TodoListController,
            controllerAs: 'vm'
        })

})
.component('app', AppComponent);
