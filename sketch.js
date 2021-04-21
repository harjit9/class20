
var fixedRect, movingRect,fixedRect1,fixedRect2;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixedRect1=createSprite(200,200,20,15);
  fixedRect1.shapeColor="green"

  fixedRect2=createSprite(400,150,30,40)
  fixedRect2.shapeColor="green"
}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green"
  }
  if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect1.shapeColor = "green"
  }
  if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
  }
 
  drawSprites();
}




