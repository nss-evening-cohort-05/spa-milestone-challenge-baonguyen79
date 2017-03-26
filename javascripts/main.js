

CarLot.loadInventory(populatePage); // Load inventory
CarLot.activateEvents();  // add event listener


// ***************************************************
// create car inventory list
// ***************************************************
function populatePage (inventory) {
	var carInventory = inventory[0];
	var carDom = "";
	var	carList = document.getElementById ("car-list");
  // Loop over the inventory and populate the page
  for (var i = 0; i<carInventory.cars.length; i++){

  		carDom += `<div class="col-md-6 col-md-4">`;
  		carDom += `<div class="thumbnail" id=car-${i}>`;
  		carDom += `<img src="${carInventory.cars[i].picture}" style="width:100%">`;
  		carDom += `<div class="caption">`;
  		carDom += `<h4>${carInventory.cars[i].year} ${carInventory.cars[i].make} ${carInventory.cars[i].model}</h4>`;
  		carDom += `<h5>Price ${carInventory.cars[i].price}</h5>`;
  		carDom += `<p>${carInventory.cars[i].description}</p>`;
  		carDom += `</div> </div> </div>`;
  }
  
  carList.innerHTML = carDom;
 }