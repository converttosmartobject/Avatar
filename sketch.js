let moveEyes;
let mic;
//let blink;
let r, g, b;
let a, f, s;
let w, t, h;
let m, o, n;
let acid1;
let acid2;
let acid3;
let acid4;
let acid5;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  acid1 = new Triangle(200, 200, 20, 2);
  acid2 = new Triangle(300, 300, 30, 1);
  acid3 = new Triangle(100, 100, 10, 3);
  acid4 = new Triangle(50, 240, 50, 1);
  acid5 = new Triangle(350, 400, 60, 4);

  mic = new p5.AudioIn()
  mic.start();
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(255);
  f = random(255);
  s = random(255);
  w = random(255);
  t = random(255);
  h = random(255);
  m = random(255);
  o = random(255);
  n = random(255);

}

function draw() {
  //console.log("mouse x is: " + mouseX);
  //console.log("mouse y is: " + mouseY);
  //console.log("mic level is: " + mic.getLevel());

  moveEyes = map(mouseX, 0, 400, 0, 4);
  //moveEyes = mouseX - width/2;

  // background(58, 103, 240);
  background(r, g, b, 60);

  micLevel = mic.getLevel();

  drawEars();

  drawHeadandBody();

  drawFacialFeatures();

  drawShine(moveEyes);

  drawMoon(micLevel * 500);

  fill(255, 255, 255, 80);
  circle(200, 200, 250);

  mouseClicked();
  
  mousePressed();

  acid1.display();
  acid2.display();
  acid3.display();
  acid4.display();
  acid5.display();
  acid1.move();
  acid2.move();
  acid3.move();
  acid4.move();
  acid5.move();

}

function mousePressed() {
  //console.log("mouse beep");

  if (mouseX > 72 && mouseX < 325 && mouseY > 75 && mouseY < 325) {
    //console.log("mouse beep in here");
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

function polygon(x, y, radius, npoints) {
  let angle = 360 / npoints;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawEars() {
  //ears 
  fill(235, 169, 2);
  strokeWeight(0);
  push();
  translate(width * 0.35, height * 0.35);
  circle(0, 0, 60);
  pop();
  push();
  translate(width * 0.65, height * 0.35);
  circle(0, 0, 35);
  pop();
  //blue circles - ear holes
  fill(r, g, b);
  circle(150, 150, 20);
  circle(250, 150, 20);

}

function drawHeadandBody() {
  //body
  push();
  fill(235, 169, 2);
  noStroke();
  translate(width * 0.50, height * 1);
  rotate(frameCount / 10.0);
  //console.log(frameCount);
  polygon(0, 0, 160, 12);
  //circle (0, 0, 290);
  pop();
  //head
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 5.0);
  //console.log(frameCount);
  fill(255, 205, 79);
  strokeWeight(0);
  polygon(0, 0, 70, 10);
  pop();
}

function drawFacialFeatures() {

  //chin
  fill(209, 182, 196);
  noStroke;
  circle(200, 255, 50);

  //cheeks
  fill(232, 207, 219);
  circle(180, 255, 40);
  circle(220, 255, 40);

  //nose
  fill(235, 169, 200);
  triangle(200, 250, 180, 230, 220, 230);

  //nostrils
  fill(232, 207, 219);
  circle(190, 240, 8);
  circle(210, 240, 8);

  //eyes
  fill(40);
  circle(155, 200, 15);
  circle(235, 200, 30);
}

//function drawLids(blink) {
//  strokeWeight(1);
//  stroke(255);
//  fill(255, 205, 79);
//  circle(155, 185, 15);
//  fill(255, 205, 79);
//  circle(235, 170, 30);

//  push();
//  translate(width * .001, height * .037);
//  strokeWeight(1);
//  stroke(255);
//  fill(255, 205, 79);
//  circle(155, 185, 15);
//  pop();
//}

function drawShine() {
  //white part of eyes
  //fill(255, 255, 255);
  //circle(153, 198, 3);
  //circle(230, 196, 7);
  push();
  translate(width * 0.38 + moveEyes, height * 0.495);
  rotate(frameCount / 1.0);
  //console.log(frameCount);
  fill(255);
  strokeWeight(0);
  polygon(0, 0, 3, 5);
  pop();

  push();
  translate(width * 0.58 + moveEyes, height * 0.49);
  rotate(frameCount / 1.0);
  //console.log(frameCount);
  fill(255);
  strokeWeight(0);
  polygon(0, 0, 5, 5);
  pop();
}

// SIZE IS AN ARGUMENT OF THE FUNCTION - TIED TO CIRCLE DIAMETER
function drawMoon(size) {
  fill(a, f, r);
  circle(77, 53, size);
  fill(w, t, g);
  circle(60, 200, size / 2);
  fill(m, o, b);
  circle(300, 80, size * 2);
  fill(r, m, t);
  circle(370, 150, size / 2.5);
  fill(g, n, s);
  circle(20, 300, size * 2.5);
  fill(b, a, o);
  circle(400, 400, size * 5);
  //fill(58, 103, 240);
  // circle(width * 1 + mic * 100, 53, 47);
}

function mouseClicked() {

  if (mouseX > 72 && mouseX < 325 && mouseY > 75 && mouseY < 325) {
      //lids
  noStroke();
  fill(255, 205, 79);
  circle(155, 200, 15);
  fill(255, 205, 79);
  circle(235, 200, 30);
    
    // //tongue
    // fill(255, 8, 226)
    // noStroke();
    // //ellipse(200, 265, 15, 20);
    // rotate(200);
    // arc(200, 265, 15, 150, 180, PI + QUARTER_PI);
  }

}