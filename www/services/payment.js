angular.module('starter').factory('paymentService',function(){

  var service = {

    model:{
      friends:[
        {
          id:1,
          name:'John One',
          payed:0,
          borrowed:0,
          balance:0
        },
        {
          id:2,
          name:'Jack',
          payed:0,
          borrowed:0,
          balance:0
        },
        {
          id:3,
          name:'John Two',
          payed:0,
          borrowed:0,
          balance:0
        },
        {
          id:4,
          name:'Mike',
          payed:0,
          borrowed:0,
          balance:0
        }
      ],
      allPayments:[]
    },

    addPayment: function(selectedFriend){

      var date = new Date();
      var timestamp = date.getTime();

      var allPayments = [];
      var paymentsArray = [];

      paidTotal = 0;

      //how much others borrowed
      angular.forEach(service.model.friends, function(friend, index){

        if(friend.id !== selectedFriend.id){

          paidTotal = paidTotal + friend.currentAmount;
          friend.borrowed += friend.currentAmount;
          paymentsArray.push({payment : friend.name+' borrowed '+(friend.currentAmount)});

        }

      });

      //how much one is paying
      angular.forEach(service.model.friends, function(friend, index){

        if(friend.id === selectedFriend.id){

          friend.payed += paidTotal;
          currentAmountPayed = paidTotal;
          paymentsArray.push({payment : friend.name+' payed '+currentAmountPayed});

        }

      });

      //debt (or no debt)
      angular.forEach(service.model.friends, function(friend, index){

        friend.balance = friend.payed - friend.borrowed;

        console.log(friend.balance);

      });

      paymentsArray.push({timestamp : timestamp});

      service.model.allPayments.push({paymentsArray : paymentsArray});

      //sort friends by balance
      function propComparator(prop) {
        return function(a, b) {
          return a[prop] - b[prop];
        }
      };

      service.model.friends.sort(propComparator('balance'));

    }


  };

  return service;

});
