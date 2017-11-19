var a = 4;
var b = 9;
var aCubed = a*a*a;
var bCubed = b*b*b;
var sum = aCubed + bCubed;

function sumOfTwoCubes(a, b){
	return a*a*a + b*b*b;
}
// call function
sumOfTwoCubes(3, 8);	// 539
// parameters can also be expressions
sumOfTwoCubes(1+2, 3+5);	// 539
// or variables
var x = 3;
sumOfTwoCubes(x*2, x*4);	// 1944

function countE(){
	var phrase = prompt("Give me your phrase");
	if(typeof(phrase) != "string"){
		alert("That's not a valid entry!");
		return false;
	} else {
		var eCount = 0;
		for(var i = 0; i < phrase.length; i++){
			if(phrase.charAt(i) === 'e' || phrase.charAt(i) === "E"){
				eCount ++;
			}
		}
		alert("The number of E in your phrase is: " + eCount);
		return true;
	}
}

// scope
var x = 6;
function add(a,b){
	// if we will not declare var 'x', JS will think that we using global var 
	var x = a + b;
	return x;
}
add(9,2);					// 11
console.log(x);		// 6

var x = 6;
function add(a,b){
	x = a + b;
	return x;
}
add(9,2);					// 11
console.log(x);		// 11

