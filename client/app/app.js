import ngMaterial from 'angular-material';
import ngCookies from 'angular-cookies';
import ngMessages from 'angular-messages';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AuthenticationService from './app.authenticationService';
import UserService from './app.userService';
import CipherService from './app.cipherService';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    ngMaterial,
    ngMessages,
    ngCookies,
    Common,
    Components
  ])
.config( ($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
})
.component('app', AppComponent)
.factory('AuthenticationService', AuthenticationService)
.factory('UserService', UserService)
.factory('CipherService', CipherService)

.run(function($trace) {
    "ngInject";
    $trace.enable('TRANSITION');
})
.run(function($transitions) {
    "ngInject";

    $transitions.onStart({ }, function(trans) {
        var AccessService = trans.injector().get('AuthenticationService');
        console.log('before');
    });

    $transitions.onStart({ }, function(trans) {
        var AccessService = trans.injector().get('AuthenticationService');
        console.log('start');
    });
});



