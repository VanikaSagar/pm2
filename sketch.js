
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var  launchingForce=100

function preload()
{

	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	Ground=new ground(500,650,1500,20)
	Tree=new tree(780,550,20,290)
	Boy=new boy(235,570,20,100)
	stone=new Stone(245,420,30)
	Mango = new mango(750,430,5)
	mango1=new mango(930,480,5)
	mango2=new mango(680,400,5)
	mango3=new mango(690,480,5)
	mango4=new mango(850,450,5)
	mango5=new mango(700,435,5)
	mango6=new mango(765,480,5)
	mango7=new mango(820,350,5)
	mango8=new mango(920,420,5)
	mango9=new mango(710,400,5)
	chain1=new launcher(stone.body,{x:200,y:405})
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  Ground.display()
  Tree.display()
  Boy.display()
  stone.display()
  Mango.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango9.display()
  mango8.display()
  chain1.display()


  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,Mango)
  
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
	chain1.fly()
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465})
		chain1.attach(stone.body)
	}
}


function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}

}




