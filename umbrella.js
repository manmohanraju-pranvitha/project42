class Umbrella {
  constructor(x,y,r){
var option={
  isStatic:true,
 
}

this.body=Bodies.circle(x,y,r/2,option);
this.x=x;
this.y=y;
this.r=r
this.image=loadImage("walking_1.png");
//this.image.scale=0.5;
World.add(world,this.body);
  }
  display(){
var paperpos=this.body.position;
push();
translate(paperpos.x,paperpos.y);
imageMode(CENTER);
image(this.image,0,0,this.r,this.r);
pop();
  }
}