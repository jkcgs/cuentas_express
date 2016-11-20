(function(){
    'use strict';

    angular
        .module('app')
        .service('deudasService', deudasService);

    /** @ngInject */
    deudasService.$inject = ["$http", "$timeout", "$q"];
    function deudasService($http, $timeout, $q){
        /* jshint validthis: true */
        this.getAll = getAll;

        function getAll(){
            return $http.get("/deudas/get").then(function(res){
                //return res.data;
                var deferred = $q.defer();
                $timeout(function(){
                    deferred.resolve(res.data);
                },2000);
                return deferred.promise;
            });
        }
    }
}());