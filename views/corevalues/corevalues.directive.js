angular.module('onboarding')
  .directive('robCorevalues', robCorevalues);

Controller.$inject = ['trelloData'];

function robCorevalues() {
  return {
    templateUrl: 'views/corevalues/corevalues.template.html',
    scope: {},
    controllerAs: 'vm',
    controller: Controller,
    bindToController: true,
  };
}

function Controller(trelloData) {
  var vm = this;

  vm.data = {
    user: trelloData.getUser(),
  };

  trelloData.attachEventListener(function({event, payload}) {
    vm.data.user = trelloData.getUser();
  });

}
