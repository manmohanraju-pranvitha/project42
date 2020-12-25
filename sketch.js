const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;

var drops=[];
var drop1;
var maxdrops=200;
var man;
var thunderimage;
var thunder1;


function preload(){
   
  thunderimage=loadAnimation("1.png","2.png","3.png","4.png");
 
}

function setup(){
    createCanvas(600,600);
  engine=Engine.create();
  world=engine.world;
  man=new Umbrella(300,450,250);
  ground1=new Ground(300,555,600,10);
    
  for(var i=0;i<maxdrops;i++){
    drop1=new Drop(random(0,400),random(0,400));
    drops.push(drop1);
  }
   
   // drops.update();

  thunder1=createSprite(250,100,20,20);
  thunder1.addAnimation("thunder",thunderimage);
  thunder1.scale=0.5;
}

function draw(){
    background("black");
    Engine.update(engine);
   
    man.display();
    ground1.display();
    
    for (var i= 0; i < maxdrops; i++) {
     
      drops[i].display();
      drops[i].update();
      
     if(frameCount%10===0){
       
      drawSprites();
     }
  
    }
   
  
   
}   
 