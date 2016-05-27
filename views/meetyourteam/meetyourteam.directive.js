angular.module('onboarding')
  .directive('robMeetyourteam', robMeetyourteam);

Controller.$inject = ['trelloData'];

function robMeetyourteam() {
  return {
    templateUrl: 'views/meetyourteam/meetyourteam.template.html',
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