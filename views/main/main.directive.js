angular.module('onboarding')
  .directive('welcome', robMain);

function robMain() {
  return {
    template: 'views/main.template.html',
    scope: {}
  };
}