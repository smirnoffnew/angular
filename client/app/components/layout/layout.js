import angular from 'angular';
import uiRouter from 'angular-ui-router';
import layoutComponent from './layout.component';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';

let layoutModule = angular.module('layoutModule', [
  uiRouter,
  ngMaterial,
  ngMessages
])
.config( ($stateProvider) => {
  "ngInject";
  $stateProvider
      .state('layout', {
        url: '/layout',
        component: 'layoutComponent'
      });
})
.component('layoutComponent', layoutComponent)
.name;

export default layoutModule;
