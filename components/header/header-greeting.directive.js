angular
  .module('onboarding')
  .directive('robHeaderGreeting', robHeaderGreeting);

Controller.$inject = ['trelloData'];

function robHeaderGreeting() {
  return {
    templateUrl: 'components/header/header-greeting.template.html',
    scope: {},
    controllerAs: 'vm',
    controller: Controller,
    bindToController: true,
  };
}

function Controller(trelloData) {
  var vm = this;

  activate();

  function activate(){
    trelloData.attachEventListener(updateName);
  }

  function updateName(){
    vm.user = trelloData.getUser();
  }
}