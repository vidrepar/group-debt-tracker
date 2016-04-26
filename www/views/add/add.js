angular.module('starter').controller('AddCtrl',function($scope, $state, paymentService){

  $scope.friends = paymentService.model.friends;

  //two way binding solution
  $scope.model = {

  };

  $scope.addPayment = function(){

    paymentService.addPayment($scope.model.selectedFriend);

    $state.go('app.home');

  };



});
