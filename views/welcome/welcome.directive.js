angular
  .module('onboarding')
  .directive('welcome', welcomeDirective);

function welcomeDirective() {
  return {
    template: 'views/welcome/welcome.html',
    scope: {}
  };
}
