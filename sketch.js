//Initiliase variables for affecting shape coordinates
let w = 25;
let h = 25;
let hor = 0;
let ver = 0;
let gap = 35;
let inputArr = [];
let detectArr = [];

function setup() {
  //Set canvas to full window width and height
  var mainCanvas = createCanvas(windowWidth, 1800);
      mainCanvas.parent("main");

      window.addEventListener('load', (event) => {
        inputArr = document.getElementById('uInput').String(userInput.value).split('');
        print(inputArr)
      });

    //Detect width slider input, declare new value for 'w' and 'hor'
    const userInput = document.getElementById('uInput');
    userInput.addEventListener('input', function(evt){
      inputArr = String(userInput.value).split('');
      print(inputArr);
    });      

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
  resizeCanvas(windowWidth, 1800);
}




function draw() {

  //Set canvas background to near black
  background('#050505');
  fill(255);
  stroke(255);

  //Initiliase variables for 
  var xPos = 50;
  var yPos = 100;
  var yPosAlt = 65;
  var spcScale = 150 + (ver * 4);

  inputArr.forEach((element, index) => {
    
    if(index > 0){
      xPos = xPos + 75;
      
      if (xPos > 1500){
        xPos = 50
        yPos = yPos + spcScale;
        yPosAlt = yPosAlt + spcScale;
      }

      if (element == 'i' || element == 'j' || element == 'l'){
        xPos = xPos - 35;
      }
    }


    switch (element){

      case 'a':
        rect(xPos, yPos + ver, w, h, 25, 0, 25, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        break;
  
      case 'b':
        rect(xPos, yPosAlt, w, h, 0, 25, 0, 0)
        rect(xPos, ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 25, 0, 25, 0)
        rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 25, 0, 25)
        break;
  
      case 'c':
        rect(xPos, yPos + ver, w, h, 25, 0, 0, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 25)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 25, 0, 25, 0)
        break;
  
      case 'd':
        rect(((xPos + 35) + hor), yPosAlt, w, h, 25, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPosAlt + 35) + ver), w, h, 25, 0, 25, 0)
        rect(xPos, ((yPos + 35) + ver * 2), w, h, 0, 25, 0, 25)
        break;
  
      case 'e':
        rect(xPos, yPos + ver, w, h, 25, 0, 0, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 25, 0, 25, 0)
        break;
  
      case 'f':
        rect(xPos, yPosAlt, w, h, 25, 0, 0, 0)
        rect(xPos, ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), yPosAlt, w, h, 0, 25, 0, 25)
        rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 25, 0, 25)
        break;

      case 'g':
        rect(xPos, yPos + ver, w, h, 25, 0, 25, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 25, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + 35 * 2) + (ver * 3)), w, h, 0, 25, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35 * 2) + (ver * 3)), w, h, 25, 0, 25, 0)
        break;

      case 'h':
        rect(xPos, yPosAlt, w, h, 0, 25, 0, 0)
        rect(xPos, ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 25, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
        break;

      case 'i':
        rect(((xPos + 35) + hor), yPosAlt, w, h, 0, 25, 0, 25)
        rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
        break;

      case 'j':
        rect(((xPos + 35) + hor), yPosAlt, w, h, 0, 25, 0, 25)
        rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35 * 2) + (ver * 3)), w, h, 0, 0, 25, 0)
        break;

      case 'k':
        rect(xPos, yPosAlt, w, h, 0, 0, 0, 0)
        rect(xPos, ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 0, 25, 0, 25)
        rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 25, 0, 25, 0)
        break;

      case 'l':
        rect(((xPos + 35) + hor), yPosAlt, w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
        break;

      case 'm':
        rect(xPos, yPos + ver, w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + (35*2)) + hor), yPos + ver, w, h, 0, 25, 0, 0)
        rect(((xPos + (35*2)) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        xPos = xPos + 35;
        break;

      case 'n':
        rect(xPos, yPos + ver, w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        break;

      case 'o':
        rect(xPos, yPos + ver, w, h, 25, 0, 25, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 25)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 25, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 25, 0, 25, 0)
        break;

      case 'p':
        rect(xPos, yPos + ver, w, h, 25, 0, 0, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 25)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 25, 0, 25, 0)
        rect(xPos, ((yPos + 35 * 2) + (ver * 3)), w, h, 0, 0, 0, 0)
        break;

      case 'q':
        rect(xPos, yPos + ver, w, h, 25, 0, 25, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 25, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35 * 2) + (ver * 3)), w, h, 0, 0, 0, 0)
        break;

      case 'r':
        rect(xPos, yPos + ver, w, h, 25, 0, 0, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 25)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        break;

      case 's':
        rect(xPos, yPos + ver, w, h, 25, 0, 0, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 25)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 25, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 25, 0)
        break;

      case 't':
        rect(xPos, yPosAlt, w, h, 0, 0, 0, 0)
        rect(xPos, ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 25, 0, 25, 0)
        rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 0, 25, 0)
        break;

      case 'u':
        rect(xPos, yPos + ver, w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        break;

      case 'v':
        rect(xPos, yPos + ver, w, h, 0, 25, 0, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 25, 0, 0, 0)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 25, 0)
        break;

      case 'w':
        rect(xPos, yPos + ver, w, h, 0, 25, 0, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + (35*2)) + hor), yPos + ver, w, h, 0, 25, 0, 0)
        rect(((xPos + (35*2)) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 25, 0)
        xPos = xPos + 35;
        break;

      case 'x':
        rect(xPos, yPos + ver, w, h, 0, 25, 0, 25)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 25, 0, 25, 0)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 25, 0, 25, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 25, 0, 25)
        break;

      case 'y':
        rect(xPos, yPos + ver, w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35 * 2) + (ver * 3)), w, h, 0, 0, 0, 0)
        break;

      case 'z':
        rect(xPos, yPos + ver, w, h, 25, 0, 25, 0)
        rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 0, 25, 0)
        rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 25, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 25, 0, 25, 0)
        break;
    }
  });
}
