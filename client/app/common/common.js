import angular from 'angular';
import NavBar from './navbar/navbar';
import SideNav from '../common/sideNav/sideNav';
import User from './user/user';

let commonModule = angular.module('app.common', [
  NavBar,
  SideNav,
  User
])
.name;

export default commonModule;
