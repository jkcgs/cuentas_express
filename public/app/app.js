(function(){
    var app = angular.module("app", ["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
        .when("/deudas", {
            templateUrl: "app/views/deudas.html",
            controller: "main"
        })
        .when("/login", {
            templateUrl: "app/views/login.html",
            controller: "login"
        })
        .otherwise({
            redirectTo: '/login'
        });
    });

    app.controller("login", function($scope, $http, $location) {
        $scope.loginData = {};

        $scope.login = function() {
            $http.post("/login", $scope.loginData).then(function(res){
                if(res.data.success) {
                    $location.path("/deudas");
                } else {
                    alert("Datos incorrectos");
                }
            });
        };
    });

    app.controller("main", function($scope, $http) {
        $scope.title = "¡Hola mundo!";
        $scope.deudas = [];

        $http.get("/deudas/get").then(function(res){
            $scope.deudas = res.data;
        });
    });
})();