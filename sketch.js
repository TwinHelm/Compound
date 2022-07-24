function setup() {
  //Set canvas to full window width and height
  var mainCanvas = createCanvas(windowWidth, windowHeight);
      mainCanvas.parent("main");
}

function windowResized() {
  //Resize window width and height to new dimensions
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //Set canvas background to dark grey
  background('#1a1a1a');
}