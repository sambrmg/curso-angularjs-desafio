angular.module('app', [
    'ngRoute',
    'frutasServiceApp'
])
    .config(['$routeProvider', '$locationProvider', definirRotas]);

function definirRotas($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.
        when('/frutas', {
            controller: 'FrutasController',
            templateUrl: 'frutas/frutas.html'
        }).
        otherwise({ redirectTo: '/frutas' });

}