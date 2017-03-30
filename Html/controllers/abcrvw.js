mainApp=angular.module("mainApp",[]);
var BASE_URL="";

mainApp.controller("rvw",function($scope,$http){
	$scope.name="aknjkd";
	$scope.addReview=function(){
		console.log("addReview");
		
		 data=new Object();
		data.rating=$scope.ProductRating;
		data.text=$scope.productReview;
		url="/v1.0/addReview";
		method='POST';
		console.log(data);
		$http({
			method:method,
			url:url,
			data:data
		}).success(function(data,status){
		console.log("Success with response "+data);
		
		}).error(function(data,status){
			
			console.log("Error happened"+data);
		});
		
	}
});