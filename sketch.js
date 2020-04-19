
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    var options={
    isStatic:true
    }
    ground=Bodies.rectangle(200,height-50,width-50,options);
    World.add(world,ground);
}
 
function mousePressed() {
    if (mouseY < 350) {
        boxes.push(new Box(mouseX,mouseY,random(10,40),random(10,40)));
    }
}
 
function draw() {
    

    background(51);
    
    var fVal = gSlider.value();
   for(var i=0;i<boxes.length;i++){
       boxes[i].show;
   }

   noStroke();
   fill(170);
   strokeWeight(4);
   rectMode(CENTER);
   rect(ground.position.x,ground.position.y,width,10);
   fill(255);

 
    

}
 


function Box(x, y, w, h, options) {

    
    var options = {
     friction:0.5,
     restitution:0.5,
    }
 this.Body=Bodies.rectangle(x, y, w, h, options)
    this.w=w;
    this.h=h;
    World.add(world,this.body);

    this.show=function(){
        var pos=this.body.position;
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(1);
        stroke(255);
        fill(127);
        rect(0,0,this.w,this.h);
        pop();
    }
 

    
    
    
}