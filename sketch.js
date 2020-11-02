var fixedSquare, movingSquare;

function setup() {
  createCanvas(800,400);
  fixedSquare = createSprite(400, 200, 50, 50);
  movingSquare = createSprite(400, 200, 50, 50);

  fixedSquare.shapeColor = "Green";
  movingSquare.shapeColor = "Red";
}

function draw() {
  background(0);  

  movingSquare.x = mouseX;
  movingSquare.y = mouseY;

  maxDistance = fixedSquare.width/2 + movingSquare.width/2;
  distanceBetweenLeft = fixedSquare.x - movingSquare.x;
  distanceBetweenRight = movingSquare.x - fixedSquare.x;

  maxDistanceHeight = fixedSquare.height/2 + movingSquare.height/2;
  distanceBetweenUp = fixedSquare.y - movingSquare.y;
  distanceBetweenDown = movingSquare.y - fixedSquare.y;


  if(distanceBetweenLeft < maxDistance && distanceBetweenRight < maxDistance && distanceBetweenDown < maxDistanceHeight && distanceBetweenUp < maxDistanceHeight){
    fixedSquare.shapeColor = "White";
    movingSquare.shapeColor = "White";
  }else{
    fixedSquare.shapeColor = "Green";
    movingSquare.shapeColor = "Red";
  }

  drawSprites();
}