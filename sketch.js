const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var bar,ball1,ground,string;

function setup() {
  createCanvas(1440,840);
  engine = Engine.create();
  world = engine.world; 
  bar = new Ground(720,200,400,60);
  ground = new Ground(720,840,1440,10);
  ball1 = new Bob(720,500,100);
  //ball1.x = mouseX;
  //ball1.y = mouseY;
  string = new String(ball1.body,bar.body);
  console.log(ball1.x);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  fill (18,130,162);
  bar.display();
  ball1.display();
  string.display();
  ground.display();
  console.log(ball1.x);
  drawSprites();
  textSize(30);
  text("Drag the mouse and release to oscillate the pendullum",
  380,130
  );
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX, y:mouseY})
}
