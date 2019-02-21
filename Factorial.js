function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	var x= 5;
	var y= factorial(x);
	console.log(y)
}
function factorial(num){
if(num == 0){
	res=1
}
	else{
		res= num*factorial(num-1);
	}
	return res
}
