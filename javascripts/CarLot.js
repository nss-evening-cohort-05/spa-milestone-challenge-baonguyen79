var CarLot = (function () {
  var inventory = [];

//load json file with callback function
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
//provide public function for returning inventory array
        getInventory: function () {
          return inventory;
        }

    };

})();
