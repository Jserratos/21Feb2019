function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	var A= 13.0;
	var B= -40.0;
	var C= 13.0;
	Solucion1= FormulaGeneral1(A,B,C);
	Solucion2= FormulaGeneral2(A,B,C);
	console.log(Solucion1);
}

function FormulaGeneral1(A,B,C){
	var Solucion1 = (-B+ sqrt( pow(B,2) - (4*C*A)))/(2*A);
			return Solucion1;
}

function FormulaGeneral2(A,B,C){
	var Solucion2 = (-B- sqrt( pow(B,2) - (4*C*A)))/(2*A);
	return Solucion2;
}
