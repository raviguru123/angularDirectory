var app=angular.module("index.module",[]);

app.controller("indexController",indexController);

function indexController($scope){

	$scope.pageName="index.html";
}