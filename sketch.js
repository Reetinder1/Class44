var police,thief,policeImage,thiefImage,bulletFlag = 0,bullet;
var edge;
function preload() {
  policeImage = loadImage("police.png");
  thiefImage = loadImage("thief.png");

}
function setup() {
  createCanvas(800, 400);
 police = createSprite(40, 200,20,20);
  thief = createSprite(200,300,20,20);
  bulletFlag = 0;
 bullet = createSprite(75,196,5,5);
 police.addImage(policeImage);
 thief.addImage(thiefImage);
 police.scale = 0.1;
 thief.scale = 0.07;
 edge = createEdgeSprites()
}


 
 function draw() {
background("yellow");
  if(keyDown(UP_ARROW)){
    police.y = police.y-2;
  }
  if(keyDown(DOWN_ARROW)){
    police.y = police.y+2;
  }
  if(keyDown(RIGHT_ARROW)){
    
    police.x = police.x+2;
  }
  if(keyDown(LEFT_ARROW)){
    police.x = police.x-2;
  }
  if(keyDown("SPACE")&&bulletFlag===0){
    fire();
    bulletFlag =1;
    
  }
  if(bullet.x>750){
    bulletFlag = 0;
  }
  thief.velocityX = 2.5;
 // thief.velocityY = Math.round(random(-2,2));
 thief.y = Math.round(random(100,300))
   thief.bounceOff(edge[0]);
   thief.bounceOff(edge[3]);
   if(bullet.isTouching(thief)){
     thief.remove()
   }
   if(thief.x>800){
     textSize(30)
     text("gameOver",400,200);
   }
  drawSprites();
}
function fire() {
  bullet = createSprite(75,196,2,2);
  bullet.x = police.x+35;
  bullet.y = police.y-4;
  bullet.velocityX = 2;
  
}