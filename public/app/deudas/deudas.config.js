(function(){
    'use strict';

    angular
        .module('app')
        .config(DeudasConfig);

    ///////////

    /** @ngInject */
    DeudasConfig.$inject = ["$routeProvider"];
    function DeudasConfig($routeProvider){
        $routeProvider
        .when("/deudas", {
            templateUrl: "app/deudas/deudas.html",
            controller: "DeudasController",
            controllerAs: "vm",
            resolve: {
                deudasPrepService: deudasPrepService
            }
        });
    }

    ////////////

    deudasPrepService.$inject = ["deudasService"];
    function deudasPrepService(deudasService) {
        return deudasService.getAll();
    }
}());