const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var obj_option = {
    isStatic : true
  }

  object = Bodies.rectangle(400,390,800,30, obj_option);
  World.add(world, object);


  var ball_option = { 
    restitution : 1.0
  }
  ball=Bodies.circle(200,200,20, ball_option);
  World.add(world, ball);
}

function draw() {
  background(0);
   
  Engine.update(engine);

  rectMode(CENTER);
  fill("blue")
  rect(object.position.x, object.position.y, 800, 30);
  
  ellipseMode(RADIUS);
  fill("orange");
  ellipse(ball.position.x,ball.position.y,20,20);


}