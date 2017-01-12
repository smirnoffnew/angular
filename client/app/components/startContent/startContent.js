import angular from 'angular';
import uiRouter from 'angular-ui-router';
import startContentComponent from './startContent.component';

let startContentModule = angular.module('startContent', [
  uiRouter
])

.component('startContent', startContentComponent)

.name;

export default startContentModule;
