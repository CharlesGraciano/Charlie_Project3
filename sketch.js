var img;
function preload(){
	img=loadImage("Charlie_Project3/1p.png")
}

function setup() {
  createCanvas(1090, 720);

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
