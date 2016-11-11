(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
 .controller('ToBuyController', ToBuyController)
 .controller('AlreadyBoughtController', AlreadyBoughtController)
 .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    // List of shopping items
    var buyItems = [
        { name: "cookies", quantity: 5 },
        { name: "pretzels", quantity: 10 },
        { name: "peanuts", quantity: 15 },
        { name: "cakes", quantity: 10 },
        { name: "berries", quantity: 5 }];

    var boughtItems = [];



  function ToBuyController(ShoppingListCheckOffService) {
       var list = this;

      list.items = ShoppingListCheckOffService.getBuyItems();

      console.log(list.items);

      list.itemName = "";
      list.itemQuantity = "";

      list.buyItem = function (itemIndex) {
          ShoppingListCheckOffService.buyItem(itemIndex);
      };
  }


    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var list = this;

        list.items = ShoppingListCheckOffService.getBoughtItems();

        list.itemName = "";
        list.itemQuantity = "";

        list.boughtItem = function (item, itemIndex) {
            ShoppingListCheckOffService.addItem(item, itemIndex);
        };
    }

  function ShoppingListCheckOffService() {
      var service = this;

  service.buyItem = function (itemIndex) {
    boughtItems.push(buyItems[itemIndex]);
    buyItems.splice(itemIndex, 1);
  };

  service.getBuyItems = function () {
    return buyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}
})();
