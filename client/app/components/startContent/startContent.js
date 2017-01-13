import angular from 'angular';
import uiRouter from 'angular-ui-router';
import startContentComponent from './startContent.component';

let startContentModule = angular.module('startContentModule', [
  uiRouter
])
.config( ($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('start-content', {
            url: '/start-content',
            component: 'startContentComponent'
        })
})
.component('startContentComponent', startContentComponent)
.name;

export default startContentModule;
