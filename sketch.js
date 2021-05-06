const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon
var score = 0

function preload() {
    
    polygon_img=loadImage("polygon.png")
    
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(600,400,1200,10)
    ground1 = new Ground(400,320,300,15);
    ground2 = new Ground(900,200,300,15)
    //ground1 blocks
    block1=new Box(280,305,40,40)
    block2=new Box(320,305,40,40)
    block3=new Box(360,305,40,40)
    block4=new Box(400,305,40,40)
    block5=new Box(440,305,40,40)
    block6=new Box(480,305,40,40)
    block7=new Box(520,305,40,40)
    block8=new Box(300,252,40,40)
    block9=new Box(340,252,40,40)
    block10=new Box(380,252,40,40)
    block11=new Box(420,252,40,40)
    block12=new Box(460,252,40,40)
    block13=new Box(500,252,40,40)
    block14=new Box(320,212,40,40)
    block15=new Box(360,212,40,40)
    block16=new Box(400,212,40,40)
    block17=new Box(440,212,40,40)
    block18=new Box(480,212,40,40)
    block19=new Box(340,172,40,40)
    block20=new Box(380,172,40,40)
    block21=new Box(420,172,40,40)
    block22=new Box(460,172,40,40)
    block23=new Box(360,132,40,40)
    block24=new Box(400,132,40,40)
    block25=new Box(440,132,40,40)
    block26=new Box(380,92,40,40)
    block27=new Box(420,92,40,40)
    
    //ground2 blocks
    block28=new Box(790,185,40,40)
    block29=new Box(830,185,40,40)
    block30=new Box(870,185,40,40)
    block31=new Box(910,185,40,40)
    block32=new Box(950,185,40,40)
    block33=new Box(990,185,40,40)
    block34=new Box(1300,185,40,40)
    block35=new Box(810,132,40,40)
    block36=new Box(850,132,40,40)
    block37=new Box(890,132,40,40)
    block38=new Box(930,132,40,40)
    block39=new Box(970,132,40,40)
    block40=new Box(829,92,40,40)
    block41=new Box(869,92,40,40)
    block42=new Box(909,92,40,40)
    block43=new Box(949,92,40,40)
    block44=new Box(850,52,40,40)
    block45=new Box(890,52,40,40)
    block46=new Box(930,52,40,40)
           
    polygon=Bodies.circle(120,130,50/2)
    World.add(world,polygon)

    slingshot = new SlingShot(this.polygon,{x:120, y:130});
       
}

function draw(){
    background(155)
       
    
    Engine.update(engine);
        textSize(20)
        fill("white")
        text("Score:"+score,750,40)
    
    
    
    
    ground.display()
    ground1.display();
    ground2.display();
//display1
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();

    //display2
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display()
    block35.display()
    block36.display()
    block37.display()
    block38.display()
    block39.display()
    block40.display()
    block41.display()
    block42.display()
    block43.display()
    block44.display()
    block45.display()
    block46.display()


    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
   

    //display2
    block28.score();
    block29.score();
    block30.score();
    block31.score();
    block32.score();
    block33.score();
    block34.score()
    block35.score()
    block36.score()
    block37.score()
    block38.score()
    block39.score()
    block40.score()
    block41.score()
    block42.score()
    block43.score()
    block44.score()
    block45.score()
    block46.score()
    
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)

    slingshot.display()
    
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
    slingshot.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}

