// **************************************************
// This function to add event listener for selection
// and text box
// **************************************************

var CarLot = (function (oldCarlot) {

	oldCarlot.activateEvents = function(){
		window.addEventListener("click" , CarLot.selectDom);
		document.getElementById("textBox").addEventListener("keyup", CarLot.getText); 	
	}


return oldCarlot;
})(CarLot || {});