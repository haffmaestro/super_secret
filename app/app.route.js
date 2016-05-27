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
      .state('team', {
        url: '/:newId/your-team',
        template: '<rob-your-team></rob-your-team>',
      })
      .state('about', {
        url: '/:newId/about-rise',
        template: '<rob-about-rise></rob-about-rise>',
      })
      .state('lexicon', {
        url: '/content',
        template: '<rob-content></rob-content>'
      })
      .state('mynewpage', {
        url: '/mynewpage',
        template: '<rob-mynewpage></rob-mynewpage>'
      })
      .state('meetyourteam', {
        url: '/meetyourteam',
        template: '<rob-meetyourteam></rob-meetyourteam>'
      .state('core-values', {
        url: '/core-values',
        template: '<rob-core-values></rob-core-values>'
      })

    $urlRouterProvider.otherwise('/');

    $urlRouterProvider.when('/', ['$state', function ($state) {
      $state.go('main');
    }]);

  }
})();
