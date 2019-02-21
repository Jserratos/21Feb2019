var p;

function setup() {
	createCanvas(400, 400);
	p = new Pelota();
}

function draw() {
	background(220);
	p.mostrar();
	p.mover();
}

class Pelota {
	constructor() {
		this.x = 200; //posicion en x
		this.y = 200; //posicion en y
		this.tam = 50; // tamaño this funciona para dar los atributos
		this.velx=3;
	}
	mostrar() {
		ellipse(this.x, this.y, this.tam, this.tam);
	}
	mover(){
	this.x = this.x + this.velx 
	}
}
