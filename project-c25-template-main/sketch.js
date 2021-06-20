
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject
var theBall;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	theBall=new paper(100,100^2)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  theBall.display();
  keyPressed();

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		
		Matter.Body.applyforce(theBall.body,theBall.body.position,{
			x:130,
			y:-145
		});

	}
}
