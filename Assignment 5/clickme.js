function myFunction() {
	var high=prompt("Create an upper limit");
	document.getElementById("demo").innerHTML += "Your upper limit is " + high + "<br>";
	
	 while(isNaN(high)){
		var high=prompt("answer makes no sense! /n Create an upper limit");
} 
 
	
	var low=prompt("Create a lower limit");
	document.getElementById("demo").innerHTML += "Your lower limit is " + low + "<br>";
	
	while(isNaN(low)){
		var low=prompt("The answer makes no sense! \n Create an lower limit")
		
}	
	var number=prompt("Pick a number between " + low + " & " + high);
	document.getElementById("demo").innerHTML += "Your number is " + number;
	
	while(isNaN(number)){
		var number=prompt("The answer makes no sense \n Pick a number between" + low + "&" + high);
}


var fixedHigh=parseInt(high);
var fixedLow=parseInt(low);
var fixedNumber=parseInt(number);

}