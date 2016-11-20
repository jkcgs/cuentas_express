(function(){
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController)
        .config(LoginConfig);

    ///////////

    /** @ngInject */
    LoginConfig.$inject = ["$routeProvider"];
    function LoginConfig($routeProvider){
        $routeProvider
        .when("/login", {
            templateUrl: "app/login/login.html",
            controller: "LoginController",
            controllerAs: "login"
        });
    }

    ////////////

    /** @ngInject */
    LoginController.$inject = ["$http", "$location", "loginService"];
    function LoginController($http, $location, loginService){
        var vm = this;
        vm.doLogin = doLogin;
        vm.username = "";
        vm.password = "";
        
        ////////////

        // todo: service
        function doLogin() {
            loginService.doLogin(vm.username, vm.password).then(
                function() {
                     $location.path("/deudas");
                },
                function(reason) {
                    alert(reason);
                }
            );
        }
    }
}());