angular.module('onboarding')
  .directive('robMain', robMain);

Controller.$inject = ['NEWB'];

function robMain() {
  return {
    templateUrl: 'views/main/main.template.html',
    scope: {},
    controllerAs: 'vm',
    controller: Controller,
    bindToController: true,
  };
}

function Controller(NEWB) {
  var vm = this;

  vm.newb = NEWB;

  vm.timelineSections = [
    {
      topic: 'week-before',
      title: 'A week before',
      items: [
      ],
    },
  ];
}