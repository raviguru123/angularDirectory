var app=angular.module("directive.module",[]);

app.controller("DirectiveController",DirectiveController);

function DirectiveController($scope){

	$scope.pageName="index.html";
	$scope.outervalue="outervalueSuccess";
	$scope.check=function(){
		alert("check function call");
	}
}



app.directive('cardLen', function () {
  return {
    restrict: 'E',
    scope: true,
   /* template:['<div style="width:100px;height: 100px;background-color: green">',
'<label>Directive</label>',
	'<ul>',
		'<li>hello</li>',
		'<li ng-click="check()">second</li>',
		'<li>second</li>',
	'</ul>',
'</div'].join(''),*/
	templateUrl:'./directory/dir1.html',
    link: function (scope,elements,attr,controller,transclude) {
      //scope.outerVal = "inner";
      //scope.model.innerVal = "inner2";
      //scope.innerModel = {innerVal: "innerVal"};
    }
  }
});