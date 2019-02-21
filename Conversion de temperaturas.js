function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	var tempMtyC = 13;
	tempMtyF = celsiusToF (tempMtyC);
	console.log(tempMtyF);
}

function celsiusToF(tempC){
	var tempF;
	tempF = (9/5)*tempC+32;
	return tempF;
}
