function setup() { 
  createCanvas(400, 400);
} 
  var x=70
	var y=70
function draw() { 
  background('blue');
	fill("yellow")
	arc(x,200,155,150,.5,6,PIE)
	fill("black")
	ellipse(x,155,15,15)
	fill("white")
	if(x<110) {ellipse(200,200,30,30)};	
	if(x<160) {ellipse(250,200,30,30)};
	if(x<210) {ellipse(300,200,30,30)};
	if(x<260) {ellipse(350,200,30,30)};
	x=x+1	
}

