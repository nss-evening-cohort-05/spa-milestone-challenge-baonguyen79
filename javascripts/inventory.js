var CarLot = (function (myCarLot) {
  var inventory = [];

  myCarLot.loadInventory = function (newCar) {
    inventory.push(newCar);
  }

  myCarLot.getInventory = function (){
      return inventory;
  }
  

  return myCarLot;

})(CarLot || {});


