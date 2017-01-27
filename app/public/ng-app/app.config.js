(function() {
  'use strict';
  angular
    .module('app')
    .config(config)
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
      console.log("hello from the config file");
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
