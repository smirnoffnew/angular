import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import SignUp from './auth/signup/signup';

let componentModule = angular.module('app.components', [
  Home,
  About,
  SignUp
])

.name;

export default componentModule;
