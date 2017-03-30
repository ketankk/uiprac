var app=angular.module("app",[]);
app.controller("app-cont",function($scope,
     $http, $templateCache, $location, $rootScope,
    $filter){
      $scope.student = {
         firstName: "Mahesh",
         lastName: "Parashar",
         
         fullName: function() {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
         }
      };
   
console.log($location.protocol());/*
console.log($http);
console.log($templateCache);
console.log($filter);
console.log($rootScope);
console.log($scope);*/


});