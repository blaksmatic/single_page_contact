var app=angular.module("mainApp",["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/detail/:name', {
            templateUrl : './partials/details.html',
            controller: 'detailController'
        })
});