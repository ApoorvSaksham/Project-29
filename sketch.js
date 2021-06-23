const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14,
 block15,block16,block17, block18, block19, block20, block21, block22,  block23, block24, block25, block26, 
 block27, block28, block29,block30,block31,block32;

 var bgPic;
var monster1;

var ball;
var slingShot;
var polygon_img;
var lauch;

var hexagon;
function preload(){
  polygon_img=loadImage("polygon.png");
  bgPic = loadImage("bgr.jpg");
}
function setup() {
  createCanvas(1230,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(580,450,440,18);
  stand2 = new Stand(1018,285,438,18);
  stand3 = new Stand(80,635,160,80)

  var options = {
      'restitution': 0.7,
      'friction': 1,
      'density': 1
  }
  this.hexagon = Bodies.circle(150,200,40,options);
  World.add(world,hexagon);
 launch = new Slingshot(this.hexagon,{x:200, y:350});


  //level 1 
  block1 = new Block(700,418);
  block2 = new Block(660,418);
  block3 = new Block(620,418);
  block4 = new Block(580,418);
  block5 = new Block(540,418);
  block6 = new Block(500,418);
  block7 = new Block(460,418);
  //level 2 
  block8 = new Block(660,370);
  block9 = new Block(620,370);
  block10 = new Block(580,370);
  block11 = new Block(540,370);
  block12 = new Block(500,370);
  //level 3   
  block13 = new Block(620,330);
  block14 = new Block(580,330);
  block15 = new Block(540,330);
  //final
  block16 = new Block(580,285);
  
  
  // level 1 
   block17 = new Block(900,250);
   block18 = new Block(940,250);
   block19 = new Block(980,250);
   block20 = new Block(1020,250);
   block21 = new Block(1060,250);
   block22 = new Block(1100,250);
   block23 = new Block(1140,250);

// level 2 
   block24 = new Block(940,210);
   block25 = new Block(980,210);
   block26 = new Block(1020,210);
   block27 = new Block(1060,210);
   block28 = new Block(1100,210);

   //level3
   block29 = new Block(980,170);
   block30 = new Block(1020,170);
   block31 = new Block(1060,170);

  //level4
 block32 = new Block(1020,130);
 

 //monster1 = new Monster(100,200);


}
function draw() {
  background(bgPic); 
 
  textSize(20);
  fill("lightyellow");
  imageMode(CENTER);
  image(polygon_img, hexagon.position.x,hexagon.position.y,80,80)

  ground.display();
  stand1.display();
  stand2.display();
  //monster1.display();

  fill(245, 117, 37);
  stroke("brown");
  strokeWeight(15);
  stand3.display();
  
  strokeWeight(2);
  stroke(15);
  fill(103, 250, 90);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("orange");
  block16.display();


  fill(255, 92, 92)
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  fill(255, 249, 87)
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  fill(255, 84, 229)
  block29.display();
  block30.display();
  block31.display();

  fill(255, 92, 92)
  block32.display();
  
  launch.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.hexagon,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  launch.fly();
}

function keyPressed(){
  if(keyCode === 32){
   launch.attach(this.hexagon);

  }
}
