//Initiliase variables for affecting shape coordinates
let w = 25;
let h = 25;
let hor = 0;
let ver = 0;
let gap = 35;
var inputArr = [];
let detectArr = [];


function setup() {
  //Set canvas to full window width and height
  var mainCanvas = createCanvas(windowWidth, windowHeight);
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
  resizeCanvas(windowWidth, windowHeight);
}




function draw() {
  //Set canvas background to near black
  background('#050505');
  fill(255);
  stroke(255);

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

    //Create structure for the letter 'a'
    if (element == 'a'){
      rect(xPos, yPos + ver, w, h, 25, 0, 25, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
    } 

    //Create structure for the letter 'b'    
    else if (element == 'b'){
      rect(xPos, yPosAlt, w, h, 0, 25, 0, 0)
      rect(xPos, ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
      rect(xPos, ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 25, 0, 25, 0)
      rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 25, 0, 25)
    }

    //Create structure for the letter 'c'
    else if (element == 'c'){
      rect(xPos, yPos + ver, w, h, 25, 0, 0, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 25)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 25, 0, 25, 0)
    }

    //Create structure for the letter 'd'
    else if (element == 'd'){
      rect(((xPos + 35) + hor), yPosAlt, w, h, 25, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
      rect(xPos, ((yPosAlt + 35) + ver), w, h, 25, 0, 25, 0)
      rect(xPos, ((yPos + 35) + ver * 2), w, h, 0, 25, 0, 25)

    }

    //Create structure for the letter 'e'    
    else if (element == 'e'){
      rect(xPos, yPos + ver, w, h, 25, 0, 0, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 25, 0, 25, 0)
    }

    //Create structure for the letter 'f'
    else if (element == 'f'){
      rect(xPos, yPosAlt, w, h, 25, 0, 0, 0)
      rect(xPos, ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
      rect(xPos, ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), yPosAlt, w, h, 0, 25, 0, 25)
      rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 25, 0, 25)
    }

    else if (element == 'g'){
      rect(xPos, yPos + ver, w, h, 25, 0, 25, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 25, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
      rect(xPos, ((yPos + 35 * 2) + (ver * 3)), w, h, 0, 25, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35 * 2) + (ver * 3)), w, h, 25, 0, 25, 0)
    }

    else if (element == 'h'){
      rect(xPos, yPosAlt, w, h, 0, 25, 0, 0)
      rect(xPos, ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
      rect(xPos, ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 25, 0, 0)
      rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
    }

    else if (element == 'i'){
        rect(((xPos + 35) + hor), yPosAlt, w, h, 0, 25, 0, 25)
        rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)

    }

    else if (element == 'j'){
        rect(((xPos + 35) + hor), yPosAlt, w, h, 0, 25, 0, 25)
        rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
        rect(((xPos + 35) + hor), ((yPos + 35 * 2) + (ver * 3)), w, h, 0, 0, 25, 0)
    }

    else if (element == 'k'){
      rect(xPos, yPosAlt, w, h, 0, 0, 0, 0)
      rect(xPos, ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
      rect(xPos, ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 0, 25, 0, 25)
      rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 25, 0, 25, 0)
    }

    else if (element == 'l'){
      rect(((xPos + 35) + hor), yPosAlt, w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 0)
    }

    else if (element == 'm'){
      rect(xPos, yPos + ver, w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
      rect(((xPos + (35*2)) + hor), yPos + ver, w, h, 0, 25, 0, 0)
      rect(((xPos + (35*2)) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)

      xPos = xPos + 35;
    }

    else if (element == 'n'){
      rect(xPos, yPos + ver, w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
    }

    else if (element == 'o'){
      rect(xPos, yPos + ver, w, h, 25, 0, 25, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 25)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 25, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 25, 0, 25, 0)
    }

    else if (element == 'p'){
      rect(xPos, yPos + ver, w, h, 25, 0, 0, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 25)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 25, 0, 25, 0)
      rect(xPos, ((yPos + 35 * 2) + (ver * 3)), w, h, 0, 0, 0, 0)
    }

    else if (element == 'q'){
      rect(xPos, yPos + ver, w, h, 25, 0, 25, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 25, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPos + 35 * 2) + (ver * 3)), w, h, 0, 0, 0, 0)
    }

    else if (element == 'r'){
      rect(xPos, yPos + ver, w, h, 25, 0, 0, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 25)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
    }

    else if (element == 's'){
      rect(xPos, yPos + ver, w, h, 25, 0, 0, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 25)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 25, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 25, 0)
    }

    else if (element == 't'){
      rect(xPos, yPosAlt, w, h, 0, 0, 0, 0)
      rect(xPos, ((yPosAlt + 35) + ver), w, h, 0, 0, 0, 0)
      rect(xPos, ((yPos + 35) + ver * 2), w, h, 0, 0, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35) + ver * 2), w, h, 25, 0, 25, 0)
      rect(((xPos + 35) + hor), ((yPosAlt + 35) + ver), w, h, 0, 0, 25, 0)
    }

    else if (element == 'u'){
      rect(xPos, yPos + ver, w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 0, 0, 0)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
    }

    else if (element == 'v'){
      rect(xPos, yPos + ver, w, h, 0, 25, 0, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 25, 0, 0, 0)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 25, 0)
    }

    else if (element == 'w'){
      rect(xPos, yPos + ver, w, h, 0, 25, 0, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 25, 0, 0)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
      rect(((xPos + (35*2)) + hor), yPos + ver, w, h, 0, 25, 0, 0)
      rect(((xPos + (35*2)) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 25, 0)

      xPos = xPos + 35;
    }

    else if (element == 'x'){
      rect(xPos, yPos + ver, w, h, 0, 25, 0, 25)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 25, 0, 25, 0)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 25, 0, 25, 0)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 25, 0, 25)
    }

    else if (element == 'y'){
      rect(xPos, yPos + ver, w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 0, 0, 0)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 25)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 0, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPos + 35 * 2) + (ver * 3)), w, h, 0, 0, 0, 0)
    }

    else if (element == 'z'){
      rect(xPos, yPos + ver, w, h, 25, 0, 25, 0)
      rect(((xPos + 35) + hor), yPos + ver, w, h, 0, 0, 25, 0)
      rect(xPos, ((yPos + 35) + (ver * 2)), w, h, 25, 0, 0, 0)
      rect(((xPos + 35) + hor), ((yPos + 35) + (ver * 2)), w, h, 25, 0, 25, 0)
    }

  

  });


}
