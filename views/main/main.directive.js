angular.module('onboarding')
  .directive('robMain', robMain);

Controller.$inject = ['NEWB', 'trelloData'];

function robMain() {
  return {
    templateUrl: 'views/main/main.template.html',
    scope: {},
    controllerAs: 'vm',
    controller: Controller,
    bindToController: true,
  };
}

function Controller(NEWB, trelloData) {
  var vm = this;

  vm.data = {
    newb: NEWB,
  };

  trelloData.attachEventListener(function({event, payload}) {
    // could get user from AUTHORIZE here
  });
}