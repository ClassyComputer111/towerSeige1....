const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;
var ground;

function setup() {
 
    createCanvas(800,400)

    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,300,350,10)

    box1 = new Box1(740,200,60,60)
    Box2 = new Box2(680,200,60,60)
    Box3 = new Box3(620,200,60,60)
    Box4 = new Box4(560,200,60,60)
    Box5 = new Box1(500,200,60,60)
    

    Box6 = new Box1(700,100,60,60)
    Box7 = new Box1(640,100,60,60)
    Box8 = new Box1(580,100,60,60)
    Box9 = new Box1(530,100,60,60)
    Box10 = new Box1(400,100,60,60)

    Box11 = new Box1(650,50,60,60)
    Box12 = new Box1(600,50,60,60)
    Box13 = new Box1(540,50,60,60)
    Box14 = new Box1(490,50,60,60)

    Box15 = new Box1(600,20,60,60)
    Box16 = new Box1(5000,20,60,60)
    

    

    polygon = Bodies.circle(100,200,20)
    World.add(world,polygon)
    fill("red")
    

    rope = new Rope(this.polygon,{x: 200 , y: 50})

    
  


}

  function draw () {
      background("white")

     
      Engine.update(engine)
      ground.display()
      box1.display();
      Box2.display();
      Box3.display();
      Box4.display();
      Box5.display();
      Box6.display();
      Box7.display();
      Box8.display();
      Box9.display();
      Box10.display();
      Box11.display();
      Box12.display();
      Box13.display();
      Box14.display();
      Box15.display();
      Box16.display();
      rope.display();

      drawSprites();
      text("drag the stone and reease towards the crazy blocks",50,20 )
     
  }
