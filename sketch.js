var bg;
var spaceShip, spaceShipImg;
var asteroid, asteroidImg;
var missile, missileImg;

function preload() {
  bg = loadImage("background.jpg")
  spaceShipImg = loadImage("spaceship.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  spaceShip = createSprite(displayWidth/2, displayHeight*0.75, 50, 50);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.25;
}

function draw() {
  background(bg);  

  if(keyDown("RIGHT_ARROW")){
    spaceShip.x += 7;
  }

  if(keyDown("LEFT_ARROW")){
    spaceShip.x -= 7;
  }

  drawSprites();
}