let root = document.documentElement;
let colSetting = "default";
let outlineState = "false";
let colMode = "dark";

//Initiliase variables for affecting shape coordinates
let w = 25;
let h = 25;
let hor = 0;
let ver = 0;
let g = 35;
let c = 25;
let inputArr = [];
let detectArr = [];


function changeTheme() {
  
  var colCheck = getComputedStyle(root).getPropertyValue('--primary');

  switch(colSetting){

    case 'default':
      if(colCheck == '#080808'){
        root.style.setProperty('--primary', '#dfdfdf');
        root.style.setProperty('--secondary', '#080808');
        root.style.setProperty('--border', '#999999');
        colMode = "light";
      }
      else if(colCheck = '#dfdfdf'){
        root.style.setProperty('--primary', '#080808');
        root.style.setProperty('--secondary', '#b1b1b1');
        root.style.setProperty('--border', '#252525');
        colMode = "dark";
      }
      break;

      case 'green':
      if(colCheck == '#0d1210'){
        root.style.setProperty('--primary', '#ddffee');
        root.style.setProperty('--secondary', '#1a2923');
        root.style.setProperty('--border', '#999999');
        colMode = "light";
      }
      else if(colCheck = '#ddffee'){
        root.style.setProperty('--primary', '#0d1210');
        root.style.setProperty('--secondary', '#ddffee');
        root.style.setProperty('--border', '#252525');
        colMode = "dark";
      }
      break;

      case 'red':
      if(colCheck == '#120d0d'){
        root.style.setProperty('--primary', '#ffdddd');
        root.style.setProperty('--secondary', '#291a1a');
        root.style.setProperty('--border', '#999999');
        colMode = "light";
      }
      else if(colCheck = '#ffdddd'){
        root.style.setProperty('--primary', '#120d0d');
        root.style.setProperty('--secondary', '#ffdddd');
        root.style.setProperty('--border', '#252525');
        colMode = "dark";
      }
      break;

      case 'blue':
        if(colCheck == '#0d0e12'){
          root.style.setProperty('--primary', '#bdd1ff');
          root.style.setProperty('--secondary', '#1a2129');
          root.style.setProperty('--border', '#999999');
          colMode = "light";
        }
        else if(colCheck = '#bdd1ff'){
          root.style.setProperty('--primary', '#0d0e12');
          root.style.setProperty('--secondary', '#bdd1ff');
          root.style.setProperty('--border', '#252525');
          colMode = "dark";
        }
        break;

        case 'yellow':
          if(colCheck == '#17170e'){
            root.style.setProperty('--primary', '#ffffdb');
            root.style.setProperty('--secondary', '#242416');
            root.style.setProperty('--border', '#999999');
            colMode = "light";
          }
          else if(colCheck = '#ffffdb'){
            root.style.setProperty('--primary', '#17170e');
            root.style.setProperty('--secondary', '#ffffdb');
            root.style.setProperty('--border', '#252525');
            colMode = "dark";
          }
          break;
  }
}

function colTheme(colID){
  var colSet = Number(colID);
  switch (colSet){

    case 1:
      colSetting = "default";
      if(colMode == "dark"){
        root.style.setProperty('--primary', '#080808');
        root.style.setProperty('--secondary', '#b1b1b1');
        root.style.setProperty('--border', '#252525');
      }
      else if (colMode == "light"){
        root.style.setProperty('--primary', '#dfdfdf');
        root.style.setProperty('--secondary', '#080808');
        root.style.setProperty('--border', '#999999');
      }
      break;
    
    case 2:
      colSetting = "green";
      if(colMode == "dark"){
        root.style.setProperty('--primary', '#0d1210');
        root.style.setProperty('--secondary', '#ddffee');
        root.style.setProperty('--border', '#252525');
      }
      else if (colMode == "light"){
        root.style.setProperty('--primary', '#ddffee');
        root.style.setProperty('--secondary', '#1a2923');
        root.style.setProperty('--border', '#999999');
      }
      print(colCheck)
      break;

    case 3:
      colSetting = "red";
      if(colMode == "dark"){
        root.style.setProperty('--primary', '#120d0d');
        root.style.setProperty('--secondary', '#ffdddd');
        root.style.setProperty('--border', '#252525');
      }
      else if (colMode == "light"){
        root.style.setProperty('--primary', '#ffdddd');
        root.style.setProperty('--secondary', '#291a1a');
        root.style.setProperty('--border', '#999999');
      }
      break;

      case 4:
        colSetting = "blue";
        if(colMode == "dark"){
          root.style.setProperty('--primary', '#0d0e12');
          root.style.setProperty('--secondary', '#bdd1ff');
          root.style.setProperty('--border', '#252525');
        }
        else if (colMode == "light"){
          root.style.setProperty('--primary', '#bdd1ff');
          root.style.setProperty('--secondary', '#1a2129');
          root.style.setProperty('--border', '#999999');
        }
        break;

        case 5:
          colSetting = "yellow";
          if(colMode == "dark"){
            root.style.setProperty('--primary', '#17170e');
            root.style.setProperty('--secondary', '#ffffdb');
            root.style.setProperty('--border', '#252525');
          }
          else if (colMode == "light"){
            root.style.setProperty('--primary', '#ffffdb');
            root.style.setProperty('--secondary', '#242416');
            root.style.setProperty('--border', '#999999');
          }
          break;

  }
}

function checkSet(){
  var checkState = String(document.getElementById('outline').innerHTML.replace(/\s/g, ''));

  console.log(checkState);

  if(checkState == 'check_box_outline_blank'){
    document.getElementById('outline').innerHTML = "check_box";
    outlineState = true;
  }
  else if(checkState == 'check_box'){
    document.getElementById('outline').innerHTML = "check_box_outline_blank";
    outlineState = false;
  }
}


function setup() {

  //Get dimensions of canvas container 
  canvasInfo = document.getElementById('main').getBoundingClientRect();

  //Set canvas width and height
  var mainCanvas = createCanvas(canvasInfo.width, canvasInfo.height);
      mainCanvas.parent("main");

      window.addEventListener('load', (event) => {
        inputArr = document.getElementById('uInput').String(userInput.value).split('');
      });

    //Detect user input in text field, split into array
    const userInput = document.getElementById('uInput');
    userInput.addEventListener('input', function(evt){
      inputArr = String(userInput.value).toLowerCase().split('');
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

  var setBg = getComputedStyle(root).getPropertyValue('--primary');
  var setFill = getComputedStyle(root).getPropertyValue('--secondary');
  //Set canvas background to near black
  background(setBg);
  if(outlineState == true){
    noFill();
  }
  else{
    fill(setFill);
  }
  stroke(setFill);

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
