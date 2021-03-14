const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
var bg;
var dustbinImg;

function preload() {
	dustbinImg = loadImage("dustbinFinal.png");
	bg = loadImage("bg.png");
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


	dustbin1 = new Dustbin(800,370,50,230);
	dustbin2 = new Dustbin(600,370,50,230);
	dustbin3 = new Dustbin(700,500,260,50);
	ground = new Ground(400, 500, 1000, 50);
	paper = new Paper(20, 100, 75);

    launch = new Launcher(paper.body,{x:50, y:100});

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(bg);
	fill("red");
	stroke(0);
	strokeWeight(4);
	textSize(30);
	textStyle("bold");
	text("Drag the mouse to throw paper in dustbin", 50, 80)
	dustbin1.display();
	dustbin2.display()
	dustbin3.display()
	ground.display();
	paper.display();
	launch.display();
	image(dustbinImg,700,350,200,238);
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launch.fly();
}

function keyPressed(){
    if(keyCode===32)
    launch.attach(paper.body);
}