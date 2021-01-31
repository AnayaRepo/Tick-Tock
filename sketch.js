var hr, mn, sc;
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(800,575);
  createSprite(400, 200, 50, 50);
  
  angleMode(DEGREES);
}

function draw() {
  background("black");

  //text
  fill("white");
  textSize(30);
  currentTime = hour();
  if(currentTime>=12){
    text(hr+" PM: "+mn+" Mins: "+sc+" Secs ", 425, 75);
  }
  else if(currentTime===0){
    text(hr+" AM: "+mn+" Mins: "+sc+" Secs ", 425, 75);
  }
  else{
    text(hr+" AM: "+mn+" Mins: "+sc+" Secs ", 425, 75)
  }
  textSize(25);
  fill("#55ff00");
  text("Green: Hours", 425, 115);
  fill("#00d5ff");
  text("Blue: Minutes", 425, 145);
  fill("#ff00aa");
  text("Pink: Seconds", 425, 175);
  
  //clock
  translate(200, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();
  
  //seconds
  scAngle = map(sc, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke("#ff00aa");
  strokeWeight(10);
  line(0, 0, 100, 0);
  pop();

  stroke("white");
  point(0, 0);
  strokeWeight(10);
  noFill();
  stroke("#ff00aa");
  arc(0, 0, 350, 350, 0, scAngle);

  //minutes
  mnAngle = map(mn, 0, 60, 0, 360);

  push();
  rotate(mnAngle);
  stroke("#00d5ff");
  strokeWeight(10);
  line(0, 0, 100, 0);
  pop();

  stroke("white");
  point(0, 0);
  strokeWeight(10);
  noFill();
  stroke("#00d5ff");
  arc(0, 0, 300, 300, 0, mnAngle);

  //hours
  hrAngle = map(hr, 0, 12, 0, 360);

  push();
  rotate(hrAngle);
  stroke("#55ff00");
  strokeWeight(10);
  line(0, 0, 100, 0);
  pop();

  stroke("white");
  point(0, 0);
  strokeWeight(10);
  noFill();
  stroke("#55ff00");
  arc(0, 0, 250, 250, 0, hrAngle);


}