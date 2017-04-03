// **************************************************
// This function to add event listener for selection
// and text box
// **************************************************

var CarLot = (function (oldCarlot) {

	oldCarlot.activateEvents = function(){
		window.addEventListener("click" , CarLot.selectDom);		//add click event listener
		document.getElementById("textBox").addEventListener("keyup", CarLot.getText); //Add keyup listener for text box	
	}


return oldCarlot;
})(CarLot || {});