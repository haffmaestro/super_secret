(function() {
(function() {
angular.module("onboardingTemplates", []).run(["$templateCache", function($templateCache) {$templateCache.put("welcome/welcome.template.html","<div> HEY WHATS UP </div>\n");}]);
}());

'use strict';

(function () {
  angular.module('onboarding');
})();

(function () {
  angular.module('onboarding').directive('welcome', welcomeDirective);

  function welcomeDirective() {
    return {
      template: 'views/welcome/welcome.html',
      scope: {}
    };
  }
})();
}());
