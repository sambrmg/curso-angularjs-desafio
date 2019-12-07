angular.module('clienteServiceApp',[])
.service('ClienteService', clienteService );

function clienteService($http){
    var URL = 'https://ng-curso-api.herokuapp.com/clientes';
    return {
        listarTodos: function(){
            return $http.get(URL);
        },
        incluir: function(cliente){
            return $http.post(URL, cliente);
        },
        deletar: function(id) {
            var parametros = {
                data: id,
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                }
            };
            return $http.delete(URL, parametros);
        }
    };
}