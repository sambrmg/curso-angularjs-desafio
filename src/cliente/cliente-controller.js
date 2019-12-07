angular.module('app')
    .controller('ClienteController', clienteController);
clienteController.$inject = ['$scope', 'ClienteService', '$filter'];
function clienteController($scope, clienteService, $filter) {
    $scope.msg = [];
    function init() {
        $scope.clientes = '';
        clienteService.listarTodos().then(function (res) {
            $scope.clientes = res.data;
        });
    }

    $scope.excluir = function (id) {
        clienteService.deletar(id).then(function () {
            $scope.msg.push('Excluido com sucesso');
            init();
        });
    };
    $scope.formatarCPF = function(){
        $scope.cpf = $filter('cpf')($scope.cpf);
    };
    $scope.incluir = function () {
        var cliente = {
            'cpf': $scope.cpf,
            'dataNascimento': $scope.dataNascimento,
            'email': $scope.email,
            'nome': $scope.nome
        };
        clienteService.incluir(cliente).then(function () {
            $scope.msg.push('Incluido com sucesso');
            init();
        });
    };
    init();
}