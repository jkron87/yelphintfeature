
'use strict';

/**
 * @ngdoc overview
 * @name butterflyappApp
 * @description
 * # butterflyappApp
 *
 * Main module of the application.
 */
angular
  .module('butterflyappApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        reloadOnSearch: false
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        reloadOnSearch: false
      })
      .when('/clueview2', {
        templateUrl: 'views/clueview2.html',
        controller: 'Clueview2Ctrl',
        controllerAs: 'clueview2',
      })
      .when('/clueview3', {
        templateUrl: 'views/clueview3.html',
        controller: 'Clueview3Ctrl',
        controllerAs: 'clueview3',
      })
      .when('/clueview1', {
        templateUrl: 'views/clueview1.html',
        controller: 'Clueview1Ctrl',
        controllerAs: 'clueview1',
      })
      .when('/winningview', {
        templateUrl: 'views/winningview.html',
        controller: 'WinningviewCtrl',
        controllerAs: 'winningview',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
