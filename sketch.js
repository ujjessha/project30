const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1,platform;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  ground1=new Ground(400,400,800,20);
  platform=new Ground(400,200,400,20);

  box1=new Box(330,235,30,40);
  box2=new Box(360,235,30,40);
  box3=new Box(390,235,30,40);
  box4=new Box(420,235,30,40);
  box5=new Box(450,235,30,40);
  box6=new Box(480,235,30,40);
  box7=new Box(510,235,30,40);
  box8=new Box(540,235,30,40);
  box9=new Box(570,235,30,40);
  box10=new Box(600,235,30,40);
  slingShot=new Slingshot(this.polygon,{x:100,y:200});




}

function draw() {
  background(255,255,255);
  ground1.display();
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  slingShot.display();
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygon);
  }
}
