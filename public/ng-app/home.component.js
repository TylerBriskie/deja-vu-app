(function() {
  'use strict';
  angular
    .module('app')
    .component('home', {
        controller: homeController,
        templateUrl: 'ng-app/home.html'
      })


    homeController.$inject=['$http', '$stateParams', '$state']
    var homeController = function($http, $stateParams, $state){
      const vm = this;
      console.log("hello!");
        vm.$onInit = function (){
          console.log('hello from the controller')
        };
    };

}());
