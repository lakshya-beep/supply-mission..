var helicopter,helicopterImage;
var package,packageImage;
var helpImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	 
	packageImage = loadImage("package.png");
	helpImage = loadImage("help.gif");
	
}

function setup() {
	createCanvas(800,500);
	background("106");
	helicopter = createSprite(200,70);;
	helicopter.addImage(helpImage);
	helicopter.scale=0.6;
	
	
	package = createSprite(300,300);
	package.addImage(packageImage);
	package.scale=0.2;
	package.visible = false;
	
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    
}


function draw() {
background("white");
edges = createEdgeSprites();
helicopter.bounceOff(edges);


//helicopter.velocityX=5;
package.x=helicopter.x;
package.y=70;

if (keyDown("space")){
	package.visible=true;
}  
if(keyDown(DOWN_ARROW)){
	package.y=370;
}
if(keyDown(LEFT_ARROW)){
	helicopter.x=helicopter.x-10;
}
if(keyDown(RIGHT_ARROW)){
	helicopter.x=helicopter.x+10;
}



drawSprites();
 
}


