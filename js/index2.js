var app=angular.module('test.module', ["ngRoute"]);
var app=angular.module('test.module', []);




app.controller('MainCtrl', function ($scope,$location) {
    $scope.login=function() {
        debugger;
        var url="https://api.instagram.com/oauth/authorize/?client_id=fbc08677f1bb4075b4d4517c04a225b4&redirect_uri=localhost:8887&response_type=token";
       $location.url(url);
    };
});