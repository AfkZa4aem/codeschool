function addPassenger (name, array){
	if(array.length == 0){
		array.push(name);
	} else {
		for(var i = 0; i < array.length; i++){
			if(array[i] == undefined){
				array[i] = name;
				return array;
			} else if(i == array.length -1) {
				array.push(name);
				return array;
			}
		}
	}
	return array;
}

// var passengerList = [];

// passengerList = addPassenger("Gregg Pollack", passengerList);

function deletePassenger(name, array){
	if(array.length == 0){
		console.log("list is empty");
	} else {
		for(var i = 0; i < array.length; i++){
			if(array[i] == name){
				array[i] = undefined;
				return array;
			} else if(i == array.length -1) {
				console.log("Error: Passenger not found!");
			}
		}
	}
	return array;
}