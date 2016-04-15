angular.module('onboarding')
  .directive('robHeader', robHeader);

function robHeader() {
  return {
    template: 'components/header/header.template.html',
    scope: {}
  };
}
