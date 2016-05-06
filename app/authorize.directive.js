(function() {
  'use strict';

  angular
    .module('onboarding')
    .directive('authorizeTrello', authorizeTrello);

  /* @ngInject */
  function authorizeTrello() {
    var directive = {
      bindToController: true,
      controller: angular.noop,
      controllerAs: 'vm',
      restrict: 'E',
      scope: {}
    };
    return directive;
  }
})();