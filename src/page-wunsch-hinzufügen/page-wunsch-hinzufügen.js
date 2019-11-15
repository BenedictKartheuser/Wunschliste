var slider = document.getElementById("wochen");
var output = document.getElementById("wochenanzahl");
output.innerHTML = slider.value;

var hinzufügen = document.getElementById("hinzufügen");
hinzufügen.disabled = false;

var wunschtitel = document.getElementById("wunschtitel");
var wunschbeschreibung = document.getElementById("wunschbeschreibung");
var preis = document.getElementById("preis");
var wichtig = document.getElementById("wichtig");

slider.oninput = function() {
  output.innerHTML = this.value;
}

function checkButtonStatus() {
alert('here');
	if(wunschtitel.textContent != "" && preis.textContent != "") {
  	hinzufügen.disabled = false;
  }
}

function inputZurücksetzen() {
		alert('Enabled!');
    wunschtitel.innerHTML="";
    wunschbeschreibung.innerHTML="";
    wochen.value = 10;
    preis.innerHTML="";
    wichtig.checked = false;
}
