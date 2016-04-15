angular.module('onboarding').service('employeeService', employeeService);

employeeService.$inject = [ '$http', '$httpParamSerializer' ];

function employeeService($http) {
  return {
    getTeam: getTeam
  };

  function getTeam(employeeId) {
    var opts = {
      method: 'GET',
      params: {
        include: 'teams'
      }
    };

    $http(opts);
  }
}
