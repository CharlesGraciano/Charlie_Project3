function setup() {
  createCanvas(2000, 2000);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  fill(255,0,0)
  ellipse(mouseX, mouseY, 80, 80);
}