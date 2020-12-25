
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boy, tree
var stone, mango1,mango2,mango3,mango4,mang5,mango6,mango7
var slingshot

function preload(){
	boyImage = loadImage("boy.png")
	treeImage = loadImage("tree.png")
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  mango1 = new Mango(450,97,50)
  mango2 = new Mango(585,100,50)
  mango3 = new Mango(600,195,50)
  mango4 = new Mango(375,250,50)
  mango5 = new Mango(495,170,50)
  mango6 = new Mango(690,235,50)
  mango7 = new Mango(470,265,50)
  stoneObj = new Stone(44,400,50)
  slingshot = new Slingshot(stoneObj.body,{x:44,y:400})
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background("lightgreen");
  text(mouseX + ":" + mouseY, 600,50)
  imageMode(CENTER)
  image(boyImage,100,450,200,200)
  image(treeImage,500,300,500,500)
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  stoneObj.display()
  slingshot.display()
  drawSprites();

  detectollision(stoneObj,mango1)
  detectollision(stoneObj,mango2)
  detectollision(stoneObj,mango3)
  detectollision(stoneObj,mango4)
  detectollision(stoneObj,mango5)
  detectollision(stoneObj,mango6)
  detectollision(stoneObj,mango7)
}

function keyPressed(){
  if(keyCode === 32){
    Matter.body.setPosition(stoneObj.body,{x:235,y:420})
    lancherObject.attach(StoneObj.body)
  }
}

function detectollision(stone,mango){
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance < mango.r+stone.r){
    Matter.Body.setStatic(mango.body,false)
  }
}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();

}



