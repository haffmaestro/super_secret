(function() {
  'use strict';

  angular.module('onboarding')
    .config(routesConfig);

  routesConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];

  function routesConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', {
        url: '/:newbId',
        template: '<rob-main></rob-main>',
      })
      .state('team', {
        url: '/:newId/your-team',
        template: '<rob-your-team></rob-your-team>',
      })
      .state('about', {
        url: '/:newId/about-rise',
        template: '<rob-about-rise></rob-about-rise>',
      });

    $urlRouterProvider.otherwise('/');

    $urlRouterProvider.when('/', ['$state', function ($state) {
      $state.go('main');
    }]);

  }
})();
