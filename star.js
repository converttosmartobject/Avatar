class Triangle {
  constructor(_xPos, _yPos, _rotation, _size){
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }
  
  display() {
    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    scale(this.size);
    fill(255);
     polygon(0, 0, 12, 3);
    pop();
  }
  
  move(){
    this.rotation ++;
    if (this.yPos <= height * 1){
  this.yPos += 2;
  } else if (this.yPos > height * 1){
  this.yPos = 0;
  }
  }
  
}

// function drawStar() {
//   push();
//   translate(width * 0.2, height * 0.5);
//   rotate(frameCount / 200.0);
//   star(0, 0, 5, 70, 15);
//   pop();
// }

  //   push();
  // translate(width * 0.2, height * 0.5);
  // rotate(frameCount / 200.0);
  // fill(255);
  // polygon(0, 0, 10, 3);
  // pop();