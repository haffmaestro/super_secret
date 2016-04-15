angular.module('onboarding')
  .directive('robHeader', robHeader);

function robHeader() {
  return {
    templateUrl: 'components/header/header.template.html',
    scope: {}
  };
}
