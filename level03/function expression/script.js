// declared function
// Builds in memory immidiately when the programm loads
function diffOfSquares(a,b){
	return a*a - b*b;
}

// function expression
// the function keyword will now assign the following
// function to the variable.
// loads only when this line is reached inside programm
var diff = function diffOfSquares(a,b){
	return a*a - b*b;
}; // needs a semicolon to complete the assignment statement in a file

diff(9,5);	// 56


// anonomous function
var diff = function(a,b){
	return a*a - b*b;
};

diff(4,2); 	// 12


// A var that holds a function can be passed into other functions

var greeting = function(){
	alert("Thanks for visiting blahblahblah")
};

function closeTerminal(message){
	message();
}

closeTerminal(greeting);	// alert(blablabla)
