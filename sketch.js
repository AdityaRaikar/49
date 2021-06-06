var basket,basketImg;
var ball,ballImg;
var ground,groundImg;
var score=0;

function preload(){
  groundImg=loadImage("images/dground.jpg");
  basketImg=loadImage("IMAGES/basket.png");
  ballImg=loadImage("IMAGES/ball.png");
}

function setup() {
  createCanvas(800,400);

  ground=createSprite(400,200,800,200);
  ground.addImage(groundImg);
  
  ground.scale=2.9;
  

  basket=createSprite(70,300,0,20);
  basket.addImage(basketImg);
  basket.scale=0.05;

  

}

function draw() {
  background(255);  
  
  
  if(ground.x<260){
    ground.x = 500;
   }
   if(keyIsDown(RIGHT_ARROW)){
    basket.x =basket.x + 10
  }
  if(keyIsDown(LEFT_ARROW)){
    basket.x = basket.x-10
  }


 

   if(frameCount%120 === 0){
    ball=createSprite(900,50,10,10);
    ball.addImage(ballImg);
    ball.velocityY=+2;
    ball.scale=0.13;
    var rand = Math.round(random(1,8));
    switch(rand){
      case 1 : ball.x=89;
     if(ball.isTouching(basket)){
       ball.destroyEach();
       score=score+10;
     }
      break;
      case 2 : ball.x=189;
      break;
      case 3 : ball.x=289;
      break;
      case 4 : ball.x=389;
      break;
      case 5 : ball.x=489;
      break;
      case 6 : ball.x=589;
      break;
      case 7 : ball.x = 689;
      break;
      case 8 : ball.x =789;
      break;


    }
    

   }


  drawSprites();
  fill(0);
  textSize(30);
  text("Score:"+score,50,60);
  
  
 
 
}



