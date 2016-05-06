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
    user: trelloData.getUser(),
  };

  trelloData.attachEventListener(function({event, payload}) {
    vm.data.user = trelloData.getUser();
  });
}