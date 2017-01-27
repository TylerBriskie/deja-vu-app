(function() {
  'use strict';
  angular
    .module('app')
    .component('home', {
        controller: homeController,
        templateUrl: 'ng-app/home.html'
      })

    var homeController = function(){
      const vm = this;
        vm.$onInit = function (){
          console.log('hello from the controller')
        };
    };

}());
