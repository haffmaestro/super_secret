(function() {
  'use strict';

  angular.module('onboarding')
    .config(routesConfig);

  routesConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];

  function routesConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        template: '<rob-main></rob-main>',
      })
      .state('main', {
        url: '/:newbId',
        template: '<rob-main></rob-main>',
      });



    $urlRouterProvider.otherwise('/');


  }
})();
