angular.module('starter').controller('ListCtrl',function($scope, paymentService){

  $scope.friends = paymentService.model.friends;
  $scope.listPaymets = paymentService.model.allPayments;

});
