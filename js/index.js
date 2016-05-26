var app=angular.module("directive.module",[]);

app.controller("DirectiveController",DirectiveController);

function DirectiveController($scope){

	$scope.pageName="index.html";
	$scope.outervalue="outervalueSuccess";
	$scope.li1="li1";
	$scope.li2="li2";
	$scope.li3="li3";
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
 	scope:true,
	templateUrl:'./directory/dir1.html',
    link: function (scope,elements,attr,controller,transclude) {
     console.log("attr obj=",attr.data);
      //scope.pageName = "innner.html";
      scope.outervalue="outer value change from directory";
      scope.dirval={name:"directory value"};
      scope.dataValue=attr.data;
 
      scope.check1=function(dataValue,event){
      	alert("directory function called");
      	  //$(event.target).addClass('active');
      	scope.check(dataValue);
      }
      //scope.innerModel = {innerVal: "innerVal"};
    }
  }
});