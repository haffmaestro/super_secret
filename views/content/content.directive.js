angular.module('onboarding')
  .directive('robContent', robContent);

Controller.$inject = ['trelloData'];

function robContent() {
  return {
    templateUrl: 'views/content/content.template.html',
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