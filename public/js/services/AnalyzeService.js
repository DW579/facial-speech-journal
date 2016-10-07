angular.module('facialApp').factory('Analyze', ['$http', function($http) {

  return {

    createFacial: function(videoData) {
      return $http({
        url: '/api/facialData',
        method: 'POST',
        data: {
          file: videoData
        }
      });
    }

  }
}]);
