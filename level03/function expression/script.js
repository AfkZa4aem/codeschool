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

// function expressions can give flexibility in choosing which functionality to build
var greeting;
	// some sets newCustomer to true or false...
if(newCustomer){
	greeting = function(){
		alert("Hello new customer");
	};
} else {
	greeting = function(){
		alert("Hello old customer");
	};
}


closeTerminal(greeting);
function closeTerminal(message){
	message();
}
// if newCustomer = false we will get old customer alert
// otherwise we will get new customer alert

// using function expressions with array and map()
var numbers = [12, 4, 3, 9, 8, 6, 10, 1];
var results = numbers.map('some coolFunction goes here');
// map woorks like a loop that applies a function to each array index

var results = [];
for(var i = -0; i < numbers.length; i++){
	results[i] = coolfunction(numbers[i]);
}

// pass in function
var numbers = [12, 4, 3, 9, 8, 6, 10, 1];

var results = numbers.map(function(arrayCell){
	return arrayCell * 2;
});

// Returning functions and Immediate Invocation

// since functions can be treated as expressions, the can also be returned like values!
var parkRides = [
	["Birch Bumpers", 40],
	["Pines Plunge", 55],
	["Cedar Coaster", 20],
	["Ferris Wheel of Firs", 90]
];
var fastPassQueue = ["Cedar Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge"];

function buildTicket(allRides, passRides, pick){
	// if the next available FP is for the ride that the customer seeks, we'll give them that pass
	if(passRides[0] == pick){
		// store first cell of the array
		var pass = passRides.shift();
		// return function expression with alert
		return function(){
			alert("Quick! You've got a fast pass to " + pass + "!");
		};
	} else {
		// search for the ride the customer wants
		// loop over the entire array
		for(var i = 0; i < allRides.length; i++){
			// match the ride names with the first index of each subarray([0])
			if(allRides[i][0] == pick){
				// return function expression with alert
				return function(){
					alert("A ticket is printing for " + pick + "!\n" + "Your wait time is about " + allRides[i][1]+ " minutes.");
				};
			}
		}
	}
}

// Using an immidiately-invoked function
var wantsRide = "Pine Plunge";
// semicolon gives the instruction to execute the function!
buildTicket(parkRides, fastPassQueue, wantsRide)();
