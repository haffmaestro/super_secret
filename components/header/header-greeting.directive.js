angular.module('onboarding')
  .directive('robHeaderGreeting', robHeaderGreeting);

Controller.$inject = ['NEWB'];

function robHeaderGreeting() {
  return {
    templateUrl: 'components/header/header-greeting.template.html',
    scope: {},
    controllerAs: 'vm',
    controller: Controller,
    bindToController: true,
  };
}

function Controller(NEWB) {
  var vm = this;

  vm.newb = NEWB;
}