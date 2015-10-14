var app = angular.module('app',[]);

app.controller('AppCtrl',['$scope','$http',function($scope,$http){
	//console.log('Hello from controller');
	
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
	
	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactlist/' + id).success(function(res){
			refresh();
		});
	};
	
	$scope.edit = function(id){
		console.log(id);
		$http.get('/contactlist/' + id).success(function(res){
			$scope.contact = res;
		});
	};
	
	$scope.updateContact = function(){
		console.log($scope.contact._id);
		$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(res){
			refresh();
		});
	};
	
	$scope.deselect = function(){
		$scope.contact = "";
	};
	
}]);