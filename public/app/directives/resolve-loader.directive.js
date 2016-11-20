(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('resolveLoader', resolveLoader);

    /** @ngInject */
    resolveLoader.$inject = ["$rootScope", "$timeout"];
    function resolveLoader($rootScope, $timeout) {

        function link(scope, element){
            $rootScope.$on('$routeChangeStart', function(event, current, previous) {
                $timeout(function() {
                    element.removeClass('ng-hide');
                });
            });

            $rootScope.$on('$routeChangeSuccess', function(e, current, prev) {
                $timeout(function() {
                    element.addClass('ng-hide');
                });
            });

            $rootScope.$on('$routeChangeError', function() {
                $timeout(function() {
                    element.addClass('ng-hide');
                });
            });
        }

        return {
            replace: true,
            link: link,
            restrict: 'E',
            templateUrl: 'app/directives/resolve-loader.html'
        };
    }

} ());