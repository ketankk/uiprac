mainApp.controller("userctrl",function($scope,$http){
$scope.addUser=function(){
$http({
		url:'/v1.0/registerUser',
		method:'POST',
		header:headerObj
		
	}).success(function(data,status){
		console.log('User registered successfully '+data+' Status is '+status);
	}).error(function(data,status){
		console.log('Error while registering user '+data+' Status is '+status);
	});
}

$scope.loginUser=function(){
$http({
		url:'/v1.0/loginUser',
		method:'POST',
		header:headerObj
		
	}).success(function(data,status){
		console.log('User login successfully '+data+' Status is '+status);
	}).error(function(data,status){
		console.log('Error while login user '+data+' Status is '+status);
	});
}

$scope.editUser=function(){
$http({
		url:'/v1.0/editUser',
		method:'POST',
		header:headerObj
		
	}).success(function(data,status){
		console.log('User edited successfully '+data+' Status is '+status);
	}).error(function(data,status){
		console.log('Error while editing user '+data+' Status is '+status);
	});
}

$scope.deleteUser=function(){
$http({
		url:'/v1.0/deleteUser',
		method:'POST',
		header:headerObj
		
	}).success(function(data,status){
		console.log('User deleted successfully '+data+' Status is '+status);
	}).error(function(data,status){
		console.log('Error while deleting user '+data+' Status is '+status);
	});
}


});