(function(){
    'use strict';

    angular
        .module('app')
        .controller('DeudasController', DeudasController);

    ////////////

    /** @ngInject */
    DeudasController.$inject = ["$scope",  "deudasPrepService"];
    function DeudasController($scope, deudasPrepService){
        var vm = this;
        vm.loaded = false;
        vm.deudas = deudasPrepService;
    }
}());