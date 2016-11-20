(function(){
    'use strict';

    angular
        .module('app', ["ngRoute"])
        .config(AppConfig);

    ///////////

    /** @ngInject */
    AppConfig.$inject = ["$routeProvider"];
    function AppConfig($routeProvider){
        $routeProvider
        .otherwise({
            redirectTo: '/login'
        });
    }
}());