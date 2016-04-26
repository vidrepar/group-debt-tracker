angular.module('starter').controller('HomeCtrl',function($scope, paymentService){

  $scope.friends = paymentService.model.friends;

});
