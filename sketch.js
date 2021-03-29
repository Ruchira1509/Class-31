const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 390, 1200, 20);
    box1 = new Square(20,20,20,20);


}

function draw(){
    background("lightyellow");
    Engine.update(engine);

    ground.display();
    box1.display();

}
