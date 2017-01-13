import angular from 'angular';

import About from './about/about';
import TodoList from './todoList/todoList';
import StartContent from './startContent/startContent';

import PagesFactory from './common.pagesFactory';

let componentModule = angular.module('app.components', [
  About,
  TodoList,
  StartContent,
])
.factory('PagesFactory', PagesFactory)
.name;

export default componentModule;
