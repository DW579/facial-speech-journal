angular.module('facialApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html'
    })

    .when('/analyze', {
      templateUrl: 'views/analyze.html'
    })
    
    .otherwise({
      redirectTo: '/'
    });

}]);
