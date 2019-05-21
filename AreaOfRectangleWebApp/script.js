// Connect Button
var calcButton = document.getElementById("calcButton");

// Animation Function
function animate(id, v) {
	// Connect Parameters
	var element = document.getElementById(id);
	var currentOpacity = parseFloat(element.style.opacity);

	// Check for true & false
	if (v) {
		// Fade In
		if (currentOpacity < 1) {
		    element.style.opacity = currentOpacity + 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}	    
	} else {
		// Fade Out
		if (currentOpacity > 0) {
		    element.style.opacity = currentOpacity - 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}
	}
};

// Declare onButtonClick Function
function onButtonClick() {
	// Connect Parameters
	var width = parseFloat(document.getElementById("width").value);
	var length = parseFloat(document.getElementById("length").value);
	
	// Check for invalid parameters
	if (!width) {
		document.getElementById("eText").textContent = "Please insert value on width"; 
		return null;
	} else if (!length) {
		document.getElementById("eText").textContent = "Please insert value on length"; 
		return null;
	} else {
		// Display Question
		document.getElementById("rText").innerHTML = "Question : " + width + " Width" + " * " + length + " Length" + " = ? Area" + "<br>"; 
		// Display Result
		document.getElementById("rText").innerHTML += "Result : " + (width * length);  
	}
}

// Declare Animation Variable
var fade;

// Add Event Listener on Button
calcButton.addEventListener("click", onButtonClick);

// On Start Up

// Hide Body
document.getElementById("body").style.opacity = 0;

// Set Scrollbar to top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Display Version
var d = new Date();
document.getElementById("version").innerHTML = "<strong>Version 1.0.2019521.80701.LM</strong><br>© " + d.getFullYear() + " KingKingGreat";

// Fade in page
fade = window.setInterval(function() {animate("body", true)}, 100);