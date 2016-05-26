var app=angular.module("directive.module",[]);

app.controller("DirectiveController",DirectiveController);

function DirectiveController($scope){

	$scope.pageName="index.html";
	$scope.outervalue="outervalueSuccess";
	$scope.check=function(obj){
		obj=JSON.parse(obj);
		console.log("before iterating=",obj,obj.length,length);
		for(var i=0;i<obj.length;i++)
		{
			console.log(obj[i].name);
		}
	}
	$scope.obj=[{name:"ravi"},{name:"someone"}]
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
	scope:true,
	templateUrl:'./directory/dir1.html',
    link: function (scope,elements,attr,controller,transclude) {
     console.log("attr obj=",attr.data);
      scope.pageName = "innner.html";
      scope.dirval={name:"directory value"};
      scope.dataValue=attr.data;
 
      
      //scope.innerModel = {innerVal: "innerVal"};
    }
  }
});