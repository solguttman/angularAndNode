var app = angular.module('app',[]);

app.controller('AppCtrl',['$scope','$http',function($scope,$http){
	console.log('Hello from controller');
	
	var refresh = function(){
		$http.get('/contactlist').success(function(res){
			//console.log(res);
			$scope.contactlist = res;
			$scope.contact = "";
		});
	};
	
	refresh();
	
	$scope.addContact = function(){
		//console.log($scope.contact);
		$http.post('/contactlist',$scope.contact).success(function(res){
			//console.log(res);
			refresh();
		});
	};
	
}]);