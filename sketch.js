var hr = hour();
var mn = minute();
var sc = second();
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(800,575);
  createSprite(400, 200, 50, 50);
  
  angleMode(DEGREES);
}

function draw() {
  background("lightblue");  
  
  scAngle = map(sc, 0, 60, 0, 360);

  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);

  drawSprites();
}