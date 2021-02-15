var sword;
var fruit1;
var fruit2;
var fruit3;
var fruit4;
var alien1,alien2
var PLAY=1;
var END=0;
var gameState=1;
var gameOver
 var Score
var fruitGroup
var enemyGroup

function preload(){
  
  swordImage=loadImage("sword.png");
  fruit1Image=loadImage("fruit1.png");
  fruit2Image=loadImage("fruit2.png");
  fruit3Image=loadImage("fruit3.png");
  fruit4Image=loadImage("fruit4.png");
  monster_running=loadAnimation("alien1.png","alien2.png");
  gameOverImage=loadImage("gameover.png")
}

function setup () {
  
  sword=createSprite(40,200,20,20)
  sword.addImage(swordImage)
  sword.scale=0.7
  
  Score= 0;
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  
}


function draw(){
background("lightBlue")
text("Score ="+Score,300,40);
text("Fruit Ninja!!",0,395) 
  
  if(gameState===PLAY){
    
    sword.y=World.mouseY;
    sword.x=World.mouseX;
    fruits();
    Enemy();
  
    
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      Score=Score+2
    }
   
    if(enemyGroup.isTouching(sword)){
      gameState=END
      enemyGroup.destroyEach();
    }
    
    
    
  } 
 
  
  else if(gameState===END){
    
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
      
    sword.addImage(gameOverImage)
    sword.x=200;
    sword.y=200;
    
  }
  
  drawSprites();


}

function fruits(){
  
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20)
    fruit.scale=0.2
    r=Math.round(random(1,4));
  
    if (r===1){
      fruit.addImage(fruit1Image);
     }else if(r===2){
       fruit.addImage(fruit2Image);
     }else if (r===3){
      fruit.addImage(fruit3Image);
     }else {
      fruit.addImage(fruit4Image);
     }
      
    
    fruit.y=Math.round(random(50,340))
    fruit.velocityX=-4
    fruit.setlifetime=100
    
    
   fruitGroup.add(fruit);
    
    }
}

function Enemy(){
  if (World.frameCount%200==0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",monster_running)
    monster.y=Math.round(random(100,330));
    monster.velocityX=-8;
    monster.setLifetime=50;
    
    enemyGroup.add(monster);
  }
  
}

