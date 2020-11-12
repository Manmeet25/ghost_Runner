var gameState = 1

var tower,towerImage;
var door,doorImage,doorsGroup;
var climber,climberImage,climbersGroup;
var ghost,ghostImage;
var inv,invGroup;

function preload(){
  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png")
  climberImage = loadImage("climber.png")
  ghostImage = loadImage("ghost-standing.png")
}
function setup(){
  createCanvas(600,600)
  tower = createSprite(300,300);
  tower.addImage("t",towerImage)
  tower.velocityY=3
  
   ghost = createSprite(300,300);
  ghost.addImage("ghost",ghostImage)
  ghost.scale = 0.4
  
  
  doorsGroup = new Group();
  climbersGroup = new Group();
   invGroup = new Group();
}
function draw(){
  background("red")
  if(gameState ===1){
  if(tower.y>400){
    tower.y = 300
  }
  if(keyDown("space")){
    ghost.velocityY =-5;
  
  }
  ghost.velocityY = ghost.velocityY+0.7;
  if(keyDown("left_arrow")){
    ghost.x = ghost.x -2
  }
   if(keyDown("right_arrow")){
    ghost.x = ghost.x +2
  }
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0
  }
   if(invGroup.isTouching(ghost)||ghost.y >600){
     ghost.destroy();
    gameState = 0
   }
  spawnDoors();
  drawSprites();
    }
  if(gameState ===0){
    textSize(30)
    stroke("black")
    fill("black")
    text("gameOver",250,250)
  }
}
function spawnDoors(){
  if (frameCount%200===0){
 door = createSprite(200,-50)
  door.addImage("door",doorImage)
  door.velocityY = 2;
    door.x =Math.round(random(120,400))
    door.lifetime = 300;
    doorsGroup.add(door)
    ghost.depth = door.depth
    ghost.depth+= 1
     
 climber = createSprite(200,10)
  climber.addImage("climber",climberImage)
  climber.velocityY = 2;
    climber.x = door.x
    climber.lifetime = 300;
    climbersGroup.add(climber)
    
   inv = createSprite(200,10)
 // inv.addImage("climber",climberImage)
  inv.velocityY = 2;
    inv.x = door.x
    inv.visible = false
    inv.debug = true
    inv.lifetime = 300;
    invGroup.add(inv)
}
}




