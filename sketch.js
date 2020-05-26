
var movingrect,fixedrect,ball1,ball2,ball3,ball4;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200,250,50,50);
  ball1=createSprite(50,100,50,50);
  ball2=createSprite(150,100,50,50);
  ball3=createSprite(250,100,50,50);
  ball4=createSprite(350,100,50,50);
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  ball1.shapeColor="pink";
  ball2.shapeColor="pink";
  ball3.shapeColor="pink";
  ball4.shapeColor="pink";
  
  movingrect.velocityX=3;
  movingrect.velocityY=3;
  fixedrect.velocityX=2;
  fixedrect.velocityY=2;
  ball1.velocityX=-2;
  ball1.velocityY=-2;

}

function draw() {
  background("blue"); 

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY; 

  
  if (istouching(ball1,movingrect)){
    movingrect.shapeColor="red"; 
    ball1.shapeColor="red"; 
  }
  else {
    movingrect.shapeColor="green";
    ball1.shapeColor="pink";  
  }
  if(istouching(movingrect,ball2)){
    movingrect.shapeColor="red"; 
    ball2.shapeColor="red";  
  }
  else{
    movingrect.shapeColor="green";
    ball2.shapeColor="pink";    
  }

  bounceoff(movingrect,ball1);
  
  


  drawSprites();
}
