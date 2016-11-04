(function () {
  'use strict';

  angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];



  function LunchCheckController($scope) {

    var message = "Please enter data first";

    console.log("TEST");

    $scope.sayMessage = function () {
      return message;
    };

    $scope.setMessage = function () {

    if (typeof $scope.lunch_menu === 'undefined' || $scope.lunch_menu.length == 0) {
       return;
     }

      var items =  $scope.lunch_menu.split(",");

      console.log($scope.lunch_menu);

     for (var i = 0, count = 0; i < items.length; i++) {
       if(items[i].trim().length != 0) {
         count++;
       }
     }
      console.log(items);

     if (count > 3) {
       message = "Too much!";
     } else if(count > 0) {
       message = "Enjoy!";
     } else {
       message = "Please enter data first";
     }
    };

  }

})();
