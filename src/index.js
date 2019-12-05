angular.module('app', [
    'ngRoute'
])
.config(['$routeProvider', '$locationProvider', definirRotas]);

function definirRotas($routeProvider, $locationProvider) {

$locationProvider.hashPrefix('');

$routeProvider.
when('/exemplos', {
    controller: 'ExemplosController',
    templateUrl: 'exemplos/exemplos.html'
}).
otherwise({ redirectTo: '/exemplos' });

}