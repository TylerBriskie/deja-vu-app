(function() {
  'use strict';
  angular
    .module('app')
    .config(config)
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $stateProvider
        .state({
          name: 'home',
          url: '/',
          component: 'home',
        })
        .state({
          name: 'movies',
          url: '/movies',
          component: 'movies',
        })
    }
}());
