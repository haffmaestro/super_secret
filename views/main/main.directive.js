angular.module('onboarding')
  .directive('robMain', robMain);

function robMain() {
  return {
    template: 'views/main.template.html',
    scope: {}
  };
}
