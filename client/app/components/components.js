import angular from 'angular';

import About from './about/about';
import TodoList from './todoList/todoList';
import StartContent from './startContent/startContent';
import Layout from './layout/layout';
import SignIn from './signin/signin';

import PagesFactory from './common.pagesFactory';

let componentModule = angular.module('app.components', [
  SignIn,
  About,
  TodoList,
  StartContent,
  Layout
])
.factory('PagesFactory', PagesFactory)
.name;

export default componentModule;
