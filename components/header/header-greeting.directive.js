angular.module('onboarding')
  .directive('robHeaderGreeting', robHeaderGreeting);

function robHeaderGreeting() {
  return {
    templateUrl: 'components/header/header-greeting.template.html',
    scope: {},
    controllerAs: 'vm',
    controller: Controller,
    bindToController: true,
  };
}

function Controller() {
  var vm = this;

  vm.newb = {
    name: 'Zachary Belford',
  };
}