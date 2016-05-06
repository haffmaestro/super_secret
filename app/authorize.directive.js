(function() {
  'use strict';

  angular
    .module('onboarding')
    .directive('authorizeTrello', authorizeTrello);

  Controller.$inject = ['trelloData'];

  /* @ngInject */
  function authorizeTrello() {
    var directive = {
      bindToController: true,
      controller: Controller,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {}
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }

  /* @ngInject */
  function Controller(trelloData) {

    trelloData.attachEventListener(({event, payload})=>{
      console.log(event);
      console.log(payload);
    })

  }
})();