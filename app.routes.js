(function() {
  'use strict';

  angular.module('onboarding')
    .config(outesConfig);

  routesConfig.$inject = [ '$stateProvider' ];

  function routesConfig($stateProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        template: '<rob-main></rob-main>',
      });
  }
})();
