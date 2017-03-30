//mainApp=angular.module("mainApp",[]);
var BASE_URL="";

mainApp.controller("rvw",function($scope,$http,$location,$window){
			console.log("addReview"+abc);
			
	$scope.addReview=function(){
		console.log("addReview");
		
		 data=new Object();
		data.rating=$scope.ProductRating;
		data.text=$scope.productReview;
		url="/v1.0/addReview";
		console.log(data);
		$http({
			method:'POST',
			url:url,
			data:data
		}).success(function(data,status){
		console.log("Success with response "+data);
		
		}).error(function(data,status){
			//$location.path('../index.html');
		//	$window.location.href='index.html';
			console.log("Error happened"+data);
		});
		
	}
	$scope.allReview=function(){
		
		url='/v1.0/allReview'
		$http({
			metho:'GET',
			url:url,
			data:id,
			headers:headerObjs
		}).success(function(data,status){
		$scope.allReview=data;
		}).error(function(data,status){
			
		});
		
		
		
	$scope.allReview=new Object();
	$scope.allReview[0]=new Object();
	$scope.allReview[0].imgurl='img/user_icon.png';
	$scope.allReview[0].followers="233";
	$scope.allReview[0].revtext="Mauris placerat vitae lorem gravida viverra. "+
	"Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero."
	
	$scope.allReview[1]=new Object();
	$scope.allReview[1].imgurl='img/user_icon.png';
	$scope.allReview[1].followers="233";
	$scope.allReview[1].revtext="Mauris placerat vitae lorem gravida viverra. "+
	"Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero."
	
	}
});