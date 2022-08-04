//Initiliase variables for affecting shape coordinates
let w = 25;
let h = 25;
let hor = 0;
let ver = 0;

function setup() {
  //Set canvas to full window width and height
  var mainCanvas = createCanvas(windowWidth, windowHeight);
      mainCanvas.parent("main");

    //Detect width slider input, declare new value for 'w' and 'hor'
    const wSlider = document.getElementById('width');
    wSlider.addEventListener('input', function(evt){
      w = Number(wSlider.value);
      hor = Number(wSlider.value) - 25;
    });

    //Detect height slider input, declare new value for 'h' and 'ver'
    const hSlider = document.getElementById('height');
    hSlider.addEventListener('input', function(evt){
      h = Number(hSlider.value);
      ver = Number(hSlider.value) - 25;
    });
}


function windowResized() {
  //Resize window width and height to new dimensions
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //Set canvas background to dark grey
  background('#1a1a1a');
  fill(255);
  stroke(255);

  //Create structure for letter 'a'
  rect(50, 100, w, h, 25, 0, 25, 0)
  rect((90 + hor), 100, w, h, 0, 50, 0, 0)
  rect(50, (140 + ver), w, h, 0, 0, 0, 50)
  rect((90 + hor), (140 + ver), w, h, 0, 0, 0, 0)

  

}
