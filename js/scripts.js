




var input = document.getElementById("myInput");
var p = document.getElementById("output");

var firtValue = 20,
	secondValue = 70,
	thirdValue = 130,
	fourthValue = 180, 
	fifthValue = 200;

function changetax($this){
	if ($this.value > 100 && $this.value <= 1000) {
 		$("#output").text("Wysokość składki: " + firtValue + " zł");
	} else if ($this.value > 1000 && $this.value <= 3000) {
		$("#output").text("Wysokość składki: " + secondValue + " zł");
	} else if ($this.value > 3000 && $this.value <= 6000) {
		$("#output").text("Wysokość składki: " + thirdValue + " zł");
	} else if ($this.value > 6000 && $this.value <= 9000) {
		$("#output").text("Wysokość składki: " + fourthValue + " zł");
	} else if ($this.value > 9000 && $this.value <= 20000) {
		$("#output").text("Wysokość składki: " + fifthValue + " zł");
	} else if ($this.value < 100 ) {
		$("#output").text("Wysokość składki: wartość jest za niska");
	} else if ($this.value > 20000) {
		$("#output").text("Wysokość składki: wartość jest za wysoka");
	} else {
		$("#output").text("Wysokość składki:");
	}

}

changetax(1);
/////poniżej próbuje uruchomić checkboxy/////
/*
var changeAmound = $("#output").text($this.value>0?

function newAmound() {
	var included = $('#box-1').is(':checked');
		if (included) {
			$("#output").text(firstValue * 0,95);		
	}
}
*/



/*
///////this is my draft only///////////////////////////
input.addEventListener('input', function() {
  var inputText = this.value; // this.value przechowuje aktualny tekst z inputa
  p.innerText = "Wysokość składki:" + inputText;
});

$(document).ready(function(){ 
var val = $( "#input" ).val();
if (val == 100) {
        $( "#output" ).text("20zł");
    }
}); 

function setTheValue() {
	if (this.value <= 0) {
		p.innerText = "Wysokość składki:" + "za niska wartość";
	} else if (this.value >= 100) {
		p.innerText = "Wysokość składki:" + "20zł";	
	} else {
		return "wartosc zbyt wysoka"
	}
}

setTheValue;
*/