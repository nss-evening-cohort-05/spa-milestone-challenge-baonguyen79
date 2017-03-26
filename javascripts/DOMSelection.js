// **********************************************
//  This function to add classlist myStyle for 
// changing style when select
// **********************************************
var CarLot = (function (oldCarlot) {
	var carSelect = "";
	oldCarlot.selectDom = function(e){
		var myStyle = document.getElementsByClassName("myStyle");
		var	domSelect = e.target.parentNode; 
		if (myStyle.length > 0){								//remove all myStyle
			for (var i = 0;i<myStyle.length; i++){
			myStyle[i].classList.remove("myStyle");
			}
		}
		if (domSelect.className == "thumbnail"){				//add myStyle to selected element	
			domSelect.classList.add("myStyle");
			var inputText = document.getElementById("textBox"); //to focus and clear text box
			inputText.value = "";
			inputText.focus();
			carSelect = domSelect;								//save selected element pointer
		}
		
	}

// ***************************************************
// This function to populate the selected description
// from text input
// ***************************************************
	oldCarlot.getText = function(){
		var inText = document.getElementById("textBox");			//get text from textbox
		var carDescription = carSelect.getElementsByTagName("P");	//get selected car element
		carDescription[0].innerHTML = inText.value;					//update selected element description

		}
	

return oldCarlot;
})(CarLot || {});