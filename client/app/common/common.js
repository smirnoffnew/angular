import angular from 'angular';
import NavBar from './navbar/navbar';
import SideNav from '../common/sideNav/sideNav';
import Hero from './hero/hero';
import User from './user/user';

let commonModule = angular.module('app.common', [
  NavBar,
  SideNav,
  Hero,
  User
])
.name;

export default commonModule;
