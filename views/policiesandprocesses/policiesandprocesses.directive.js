angular.module('onboarding')
  .directive('robPoliciesandprocesses', robPoliciesandprocesses);

Controller.$inject = ['trelloData'];

function robPoliciesandprocesses() {
  return {
    templateUrl: 'views/policiesandprocesses/policiesandprocesses.template.html',
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