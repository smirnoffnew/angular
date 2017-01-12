import angular from 'angular';
import About from './about/about';
import SignUp from './auth/signup/signup';
import PagesFactory from './common.pagesFactory';

let componentModule = angular.module('app.components', [
  About,
  SignUp
])
.factory('PagesFactory', PagesFactory)
.name;

export default componentModule;
