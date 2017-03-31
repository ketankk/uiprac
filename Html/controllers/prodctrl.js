mainApp.controller("prodctrl",function($scope,$http){
$scope.addProduct=function(){
	
	
	console.log($('.flexdatalist').value);
	proddata=new Object();
	console.log($scope.prodtags);
	proddata.tags=$scope.prodtags;
	proddata.name=$scope.prodName;
	proddata.cat=$scope.prodCat;
	proddata.subcat=$scope.prodSubCat;
	console.log(proddata);
	
	$http({
		url:'/v1.0/addProduct',
		method:'POST',
		header:headerObj
		
	}).success(function(data,status){
		console.log('Product added successfully '+data+' Status is '+status);
	}).error(function(data,status){
		console.log('Error while adding product '+data+' Status is '+status);
	});
}
$scope.editProduct=function(){
	$http({
		url:'/v1.0/editProduct',
		method:'POST',
		header:headerObj
		
	}).success(function(data,status){
		console.log('Product edited successfully '+data+' Status is '+status);
	}).error(function(data,status){
		console.log('Error while editing product '+data+' Status is '+status);
	});
}
$scope.deleteProduct=function(){
	$http({
		url:'/v1.0/deleteProduct',
		method:'POST',
		header:headerObj
		
	}).success(function(data,status){
		console.log('Product deleted successfully '+data+' Status is '+status);
	}).error(function(data,status){
		console.log('Error while deleting product '+data+' Status is '+status);
	});
}
});