(function(){
    'use strict';

    angular
        .module('app')
        .service('loginService', loginService);

    /** @ngInject */
    loginService.$inject = ["$http", "$location"];
    function loginService($http, $location){
        /* jshint validthis: true */
        this.doLogin = doLogin;

        function doLogin(username, password){
            var data = {
                username: username,
                password: password
            };

            return $http.post("/login", data).then(function(res){
                if(!res.data.success) {
                    throw "Datos incorrectos";
                }

                return true;
            });
        }
    }

}());