//Initiliase variables for affecting shape coordinates
let w = 25;
let h = 25;
let hor = 0;
let ver = 0;
let g = 35;
let c = 25;
let inputArr = [];
let detectArr = [];

function setup() {

  //Get dimensions of canvas container 
  canvasInfo = document.getElementById('main').getBoundingClientRect();

  //Set canvas width and height
  var mainCanvas = createCanvas(canvasInfo.width, canvasInfo.height);
      mainCanvas.parent("main");

      window.addEventListener('load', (event) => {
        inputArr = document.getElementById('uInput').String(userInput.value).split('');
        print(inputArr)
      });

    //Detect user input in text field, split into array
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

    //Detect corner radius slider input, declare new value for 'h' and 'ver'
    const cSlider = document.getElementById('curve');
    cSlider.addEventListener('input', function(evt){
      c = Number(cSlider.value);
    });

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

  //Loop through each character in the array
  inputArr.forEach((element, index) => {
    
    if(index > 0){
      xPos = xPos + 75;
      
      //When the x position hits define boundary set a new line
      if (xPos > 1500){
        xPos = 50
        yPos = yPos + spcScale;
        yPosAlt = yPosAlt + spcScale;
      }

      if (element == 'i' || element == 'j' || element == 'l'){
        if(hor > 0){
          xPos = xPos - g - hor;
        }
        else{
          xPos = xPos - g;
        }
      }
    }


    //Render letterform if value matches a case
    switch (element){

      case 'a':
        rect(xPos, yPos + ver, w, h, c, 0, c, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, c, 0, 0)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, c)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        break;
  
      case 'b':
        rect(xPos, yPosAlt, w, h, 0, c, 0, 0)
        rect(xPos, ((yPosAlt + g) + ver), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + g) + ver * 2), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g) + ver * 2), w, h, c, 0, c, 0)
        rect(((xPos + g) + hor), ((yPosAlt + g) + ver), w, h, 0, c, 0, c)
        break;
  
      case 'c':
        rect(xPos, yPos + ver, w, h, c, 0, 0, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, c, 0, c)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, c)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, c, 0, c, 0)
        break;
  
      case 'd':
        rect(((xPos + g) + hor), yPosAlt, w, h, c, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPosAlt + g) + ver), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g) + ver * 2), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPosAlt + g) + ver), w, h, c, 0, c, 0)
        rect(xPos, ((yPos + g) + ver * 2), w, h, 0, c, 0, c)
        break;
  
      case 'e':
        rect(xPos, yPos + ver, w, h, c, 0, 0, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, c, 0, 0)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, c)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, c, 0, c, 0)
        break;
  
      case 'f':
        rect(xPos, yPosAlt, w, h, c, 0, 0, 0)
        rect(xPos, ((yPosAlt + g) + ver), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + g) + ver * 2), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), yPosAlt, w, h, 0, c, 0, c)
        rect(((xPos + g) + hor), ((yPosAlt + g) + ver), w, h, 0, c, 0, c)
        break;

      case 'g':
        rect(xPos, yPos + ver, w, h, c, 0, c, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, c, 0, 0)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, c, 0, c)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + g * 2) + (ver * 3)), w, h, 0, c, 0, c)
        rect(((xPos + g) + hor), ((yPos + g * 2) + (ver * 3)), w, h, c, 0, c, 0)
        break;

      case 'h':
        rect(xPos, yPosAlt, w, h, 0, c, 0, 0)
        rect(xPos, ((yPosAlt + g) + ver), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + g) + ver * 2), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPosAlt + g) + ver), w, h, 0, c, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g) + ver * 2), w, h, 0, 0, 0, 0)
        break;

      case 'i':
        rect(((xPos + g) + hor), yPosAlt, w, h, 0, c, 0, c)
        rect(((xPos + g) + hor), ((yPosAlt + g) + ver), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g) + ver * 2), w, h, 0, 0, 0, 0)
        break;

      case 'j':
        rect(((xPos + g) + hor), yPosAlt, w, h, 0, c, 0, c)
        rect(((xPos + g) + hor), ((yPosAlt + g) + ver), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g) + ver * 2), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g * 2) + (ver * 3)), w, h, 0, 0, c, 0)
        break;

      case 'k':
        rect(xPos, yPosAlt, w, h, 0, 0, 0, 0)
        rect(xPos, ((yPosAlt + g) + ver), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + g) + ver * 2), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g) + ver * 2), w, h, 0, c, 0, c)
        rect(((xPos + g) + hor), ((yPosAlt + g) + ver), w, h, c, 0, c, 0)
        break;

      case 'l':
        rect(((xPos + g) + hor), yPosAlt, w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPosAlt + g) + ver), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g) + ver * 2), w, h, 0, 0, 0, 0)
        break;

      case 'm':
        rect(xPos, yPos + ver, w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, c, 0, 0)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + (g*2)) + (hor * 2)), yPos + ver, w, h, 0, c, 0, 0)
        rect(((xPos + (g*2)) + (hor * 2)), ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        xPos = xPos + g;
        break;

      case 'n':
        rect(xPos, yPos + ver, w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, c, 0, 0)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        break;

      case 'o':
        rect(xPos, yPos + ver, w, h, c, 0, c, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, c, 0, c)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, c, 0, c)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, c, 0, c, 0)
        break;

      case 'p':
        rect(xPos, yPos + ver, w, h, c, 0, 0, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, c, 0, c)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, c, 0, c, 0)
        rect(xPos, ((yPos + g * 2) + (ver * 3)), w, h, 0, 0, 0, 0)
        break;

      case 'q':
        rect(xPos, yPos + ver, w, h, c, 0, c, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, c, 0, 0)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, c, 0, c)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g * 2) + (ver * 3)), w, h, 0, 0, 0, 0)
        break;

      case 'r':
        rect(xPos, yPos + ver, w, h, c, 0, 0, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, c, 0, c)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        break;

      case 's':
        rect(xPos, yPos + ver, w, h, c, 0, 0, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, c, 0, c)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, c, 0, c)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, 0, 0, c, 0)
        break;

      case 't':
        rect(xPos, yPosAlt, w, h, 0, 0, 0, 0)
        rect(xPos, ((yPosAlt + g) + ver), w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + g) + ver * 2), w, h, 0, 0, 0, c)
        rect(((xPos + g) + hor), ((yPos + g) + ver * 2), w, h, c, 0, c, 0)
        rect(((xPos + g) + hor), ((yPosAlt + g) + ver), w, h, 0, 0, c, 0)
        break;

      case 'u':
        rect(xPos, yPos + ver, w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, c)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        break;

      case 'v':
        rect(xPos, yPos + ver, w, h, 0, c, 0, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, c, 0, 0, 0)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, c)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, 0, 0, c, 0)
        break;

      case 'w':
        rect(xPos, yPos + ver, w, h, 0, c, 0, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, c, 0, 0)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, c)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + (g*2)) + (hor * 2)), yPos + ver, w, h, 0, c, 0, 0)
        rect(((xPos + (g*2)) + (hor * 2)), ((yPos + g) + (ver * 2)), w, h, 0, 0, c, 0)
        xPos = xPos + g;
        break;

      case 'x':
        rect(xPos, yPos + ver, w, h, 0, c, 0, c)
        rect(((xPos + g) + hor), yPos + ver, w, h, c, 0, c, 0)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, c, 0, c, 0)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, 0, c, 0, c)
        break;

      case 'y':
        rect(xPos, yPos + ver, w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, 0, 0, 0)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, c)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g * 2) + (ver * 3)), w, h, 0, 0, 0, 0)
        break;

      case 'z':
        rect(xPos, yPos + ver, w, h, c, 0, c, 0)
        rect(((xPos + g) + hor), yPos + ver, w, h, 0, 0, c, 0)
        rect(xPos, ((yPos + g) + (ver * 2)), w, h, c, 0, 0, 0)
        rect(((xPos + g) + hor), ((yPos + g) + (ver * 2)), w, h, c, 0, c, 0)
        break;
    }

    if (element == 'm' || element == 'w'){
      xPos = xPos + (hor * 3);
    }    
    else if(element == 'i'|| element == 'j' || element == 'l'){
      xPos = xPos + (hor * 2);
    }
    else {
      xPos = xPos + (hor * 2);
    }
  });
}
