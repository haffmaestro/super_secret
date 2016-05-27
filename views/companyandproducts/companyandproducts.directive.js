angular.module('onboarding')
  .directive('robCompanyandproducts', robCompanyandproducts);

Controller.$inject = ['trelloData'];

function robCompanyandproducts() {
  return {
    templateUrl: 'views/companyandproducts/companyandproducts.template.html',
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