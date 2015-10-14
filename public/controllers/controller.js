var app = angular.module('app',[]);

app.controller('AppCtrl',['$scope','$http',function($scope,$http){
	console.log('Hello from controller');
	
	$http.get('/contactlist').success(function(res){
		console.log(res);
		$scope.contactlist = res;
	});
}]);