angular.module('onboarding')
  .directive('robMynewpage', robMynewpage);

Controller.$inject = ['trelloData'];

function robMynewpage() {
  return {
    templateUrl: 'views/mynewpage/mynewpage.template.html',
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