angular.module('facialApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html'
    }).
    otherwise({
      redirectTo: '/'
    });

}]);
