angular.module('onboarding')
  .directive('robMain', robMain);

function robMain() {
  return {
    templateUrl: 'views/main/main.template.html',
    scope: {}
  };
}
