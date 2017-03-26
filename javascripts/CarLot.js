var CarLot = (function () {
  var inventory = [];

  return {
      loadInventory: function (callback) {
        var inventoryLoader = new XMLHttpRequest();
        inventoryLoader.onreadystatechange = function(){
            if (inventoryLoader.readyState == 4 && inventoryLoader.status == 200){
              Data = JSON.parse(inventoryLoader.responseText);
              inventory.push(Data);
                callback(inventory);
            }
        }; 
        inventoryLoader.open('GET', "../inventory.json");
        inventoryLoader.send();
        },

        getInventory: function () {
          return inventory;
        }

    };

})();
