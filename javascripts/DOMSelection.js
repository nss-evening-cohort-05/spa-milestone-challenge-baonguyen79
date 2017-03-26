var CarLot = (function (oldCarlot) {
	var carSelect = "";
	oldCarlot.selectDom = function(e){
		// console.log(e , e.target.parentNode.className);
		var myStyle = document.getElementsByClassName("myStyle");
		var	domSelect = e.target.parentNode; 
		if (myStyle.length > 0){
			for (var i = 0;i<myStyle.length; i++){
			myStyle[i].classList.remove("myStyle");
			}
		}
		if (domSelect.className == "thumbnail"){
			domSelect.classList.add("myStyle");
			// console.log("--" , domSelect)
			var inputText = document.getElementById("textBox"); 
			inputText.value = "";
			inputText.focus();
			carSelect = domSelect;
		}
		
	}

	oldCarlot.getText = function(){
		var inText = document.getElementById("textBox");
		// carSelect.childNodes[1].innerHTML = inText.value;
		// var myStyle = document.getElementsByClassName("myStyle");
		var carDescription = carSelect.getElementsByTagName("P");
		carDescription[0].innerHTML = inText.value;
		// console.log ("---" , carDescription[0].innerHTML, inText.value);

		}
	

return oldCarlot;
})(CarLot || {});