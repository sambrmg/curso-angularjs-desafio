angular.module('app', [
    'ngRoute',
    'frutasServiceApp',
    'clienteServiceApp',
    'filtrosApp'
])
    .config(['$routeProvider', '$locationProvider', definirRotas]);

function definirRotas($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.
        when('/frutas', {
            controller: 'FrutasController',
            templateUrl: 'frutas/frutas.html'
        }).
        when('/cliente', {
            controller: 'ClienteController',
            templateUrl: 'cliente/cliente.html'
        }).
        otherwise({ redirectTo: '/frutas' });

}