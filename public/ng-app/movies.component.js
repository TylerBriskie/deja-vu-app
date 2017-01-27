(function() {
  'use strict';
  angular
    .module('app')
    .component('movies', {
        controller: movieController,
        templateUrl: 'ng-app/movies.html'
      })

    var movieController = function(){
      const vm = this;
        vm.$onInit = function (){
          // console.log('hello from the controller')
        };
    };

}());
