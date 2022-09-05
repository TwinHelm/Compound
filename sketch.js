// styling changes
let root = document.documentElement;
let colSetting = "default";
let outlineState = "false";
let colMode = "dark";

// export process
var svgState = false;
const svgForExport = [];
var xConfig = 0;
var yConfig = 0;

// shape coordinates
let w = 25;
let h = 25;
let hor = 0;
let ver = 0;
let g = 35;
let c = 25;
let inputArr = [];
let detectArr = [];

// page setup

window.onload = (event) => {
  paramCheck();

  const url = String(window.location.href);
  print(url)
  if (url.includes("?") === true) {
    print("debug")
    print(inputArr)
    fillField = inputArr.join("");
    print(fillField)
    document.getElementById('uInput').value = fillField;
  }

  if (svgState === true) {
    document.getElementById('export').disabled = false;
    document.getElementById('svgmode').innerHTML = "check_box";
  }
};

function paramCheck() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  
  svgState = (params.get('svgState') === 'true');
  inputArr = params.getAll('inputArr');
  ySVG = Number(params.get('yConfig')) + 40;
  xSVG = Number(params.get('xConfig'));
  if (svgState === true) {
    hor = Number(params.get('horConfig'));
    ver = Number(params.get('verConfig'));
    w = Number(params.get('wConfig'));
    h = Number(params.get('hConfig'));
  }
}

// styling

function changeTheme() {

  var colCheck = getComputedStyle(root).getPropertyValue('--primary');

  switch (colSetting) {

    case 'default':
      if (colCheck === '#080808') {
        root.style.setProperty('--primary', '#dfdfdf');
        root.style.setProperty('--secondary', '#080808');
        root.style.setProperty('--border', '#999999');
        colMode = "light";
      } else if (colCheck = '#dfdfdf') {
        root.style.setProperty('--primary', '#080808');
        root.style.setProperty('--secondary', '#dfdfdf');
        root.style.setProperty('--border', '#252525');
        colMode = "dark";
      }
      break;

    case 'green':
      if (colCheck === '#0d1210') {
        root.style.setProperty('--primary', '#ddffee');
        root.style.setProperty('--secondary', '#1a2923');
        root.style.setProperty('--border', '#949c97');
        colMode = "light";
      } else if (colCheck = '#ddffee') {
        root.style.setProperty('--primary', '#0d1210');
        root.style.setProperty('--secondary', '#ddffee');
        root.style.setProperty('--border', '#242927');
        colMode = "dark";
      }
      break;

    case 'red':
      if (colCheck === '#120d0d') {
        root.style.setProperty('--primary', '#ffdddd');
        root.style.setProperty('--secondary', '#291a1a');
        root.style.setProperty('--border', '#9e9090');
        colMode = "light";
      } else if (colCheck = '#ffdddd') {
        root.style.setProperty('--primary', '#120d0d');
        root.style.setProperty('--secondary', '#ffdddd');
        root.style.setProperty('--border', '#2b2727');
        colMode = "dark";
      }
      break;

    case 'blue':
      if (colCheck === '#0d0e12') {
        root.style.setProperty('--primary', '#bdd1ff');
        root.style.setProperty('--secondary', '#1a2129');
        root.style.setProperty('--border', '#82888f');
        colMode = "light";
      } else if (colCheck = '#bdd1ff') {
        root.style.setProperty('--primary', '#0d0e12');
        root.style.setProperty('--secondary', '#bdd1ff');
        root.style.setProperty('--border', '#282b2e');
        colMode = "dark";
      }
      break;

    case 'yellow':
      if (colCheck === '#17170e') {
        root.style.setProperty('--primary', '#ffffdb');
        root.style.setProperty('--secondary', '#242416');
        root.style.setProperty('--border', '#9e9b90');
        colMode = "light";
      } else if (colCheck = '#ffffdb') {
        root.style.setProperty('--primary', '#17170e');
        root.style.setProperty('--secondary', '#ffffdb');
        root.style.setProperty('--border', '#2b2b23');
        colMode = "dark";
      }
      break;
  }
}

function colTheme(colID) {
  var colSet = Number(colID);
  switch (colSet) {

    case 1:
      colSetting = "default";
      if (colMode === "dark") {
        root.style.setProperty('--primary', '#080808');
        root.style.setProperty('--secondary', '#dfdfdf');
        root.style.setProperty('--border', '#252525');
      } else if (colMode === "light") {
        root.style.setProperty('--primary', '#dfdfdf');
        root.style.setProperty('--secondary', '#080808');
        root.style.setProperty('--border', '#999999');
      }
      break;

    case 2:
      colSetting = "green";
      if (colMode === "dark") {
        root.style.setProperty('--primary', '#0d1210');
        root.style.setProperty('--secondary', '#ddffee');
        root.style.setProperty('--border', '#242927');
      } else if (colMode === "light") {
        root.style.setProperty('--primary', '#ddffee');
        root.style.setProperty('--secondary', '#1a2923');
        root.style.setProperty('--border', '#949c97');
      }
      print(colCheck)
      break;

    case 3:
      colSetting = "red";
      if (colMode === "dark") {
        root.style.setProperty('--primary', '#120d0d');
        root.style.setProperty('--secondary', '#ffdddd');
        root.style.setProperty('--border', '#2b2727');
      } else if (colMode === "light") {
        root.style.setProperty('--primary', '#ffdddd');
        root.style.setProperty('--secondary', '#291a1a');
        root.style.setProperty('--border', '#9e9090');
      }
      break;

    case 4:
      colSetting = "blue";
      if (colMode === "dark") {
        root.style.setProperty('--primary', '#0d0e12');
        root.style.setProperty('--secondary', '#bdd1ff');
        root.style.setProperty('--border', '#282b2e');
      } else if (colMode === "light") {
        root.style.setProperty('--primary', '#bdd1ff');
        root.style.setProperty('--secondary', '#1a2129');
        root.style.setProperty('--border', '#82888f');
      }
      break;

    case 5:
      colSetting = "yellow";
      if (colMode === "dark") {
        root.style.setProperty('--primary', '#17170e');
        root.style.setProperty('--secondary', '#ffffdb');
        root.style.setProperty('--border', '#2b2b23');
      } else if (colMode === "light") {
        root.style.setProperty('--primary', '#ffffdb');
        root.style.setProperty('--secondary', '#242416');
        root.style.setProperty('--border', '#9e9b90');
      }
      break;

  }
}

// checkbox processing

function checkSet() {
  var checkState = String(document.getElementById('outline').innerHTML.replace(/\s/g, ''));

  console.log(checkState);

  if (checkState === 'check_box_outline_blank') {
    document.getElementById('outline').innerHTML = "check_box";
    outlineState = true;
  } else if (checkState === 'check_box') {
    document.getElementById('outline').innerHTML = "check_box_outline_blank";
    outlineState = false;
  }
}

function svgMode() {
  window.history.pushState({}, document.title, window.location.pathname);
  const url = new URL(window.location.href + '?svgState=true&');
  const params = new URLSearchParams(url.search);
  params.set('inputArr', inputArr[0])

  inputArr.forEach((element, index) => {
    if (index > 0) {
      params.append('inputArr', element);
    }

    params.set('xConfig', xConfig);
    params.set('yConfig', yConfig);
    params.set('horConfig', hor)
    params.set('verConfig', ver)
    params.set('wConfig', w)
    params.set('hConfig', h)
  });


  window.history.replaceState({}, '', `${location.pathname}?${params}`);
  location.reload();
}

function checkSVG() {
  var checkState = String(document.getElementById('svgmode').innerHTML.replace(/\s/g, ''));
  if (checkState === 'check_box_outline_blank') {
    document.getElementById('svgmode').innerHTML = "check_box";
    svgMode();
  } else if (checkState === 'check_box') {
    document.getElementById('svgmode').innerHTML = "check_box_outline_blank";
  }
}

// canvas setup

function setup() {
  canvasInfo = document.getElementById('main').getBoundingClientRect();

  if (svgState === true) {
    var mainCanvas = createCanvas(xSVG, ySVG, SVG);
    mainCanvas.parent("main");
  } else {
    var mainCanvas = createCanvas(canvasInfo.width, canvasInfo.height);
    mainCanvas.parent("main");
  }

  window.addEventListener('load', (event) => {
    inputArr = document.getElementById('uInput').String(userInput.value).split('');
  });

  const userInput = document.getElementById('uInput');
  userInput.addEventListener('input', function (evt) {
    inputArr = String(userInput.value).toLowerCase().split('');
    print(inputArr);
  });

  const wSlider = document.getElementById('width');
  wSlider.addEventListener('input', function (evt) {
    w = Number(wSlider.value);
    hor = Number(wSlider.value) - 25;
  });

  const hSlider = document.getElementById('height');
  hSlider.addEventListener('input', function (evt) {
    h = Number(hSlider.value);
    ver = Number(hSlider.value) - 25;
  });

  const cSlider = document.getElementById('curve');
  cSlider.addEventListener('input', function (evt) {
    c = Number(cSlider.value);
  });

}

// canvas rendering

function draw() {

  if (svgState !== true) {
    var setBg = getComputedStyle(root).getPropertyValue('--primary');
    background(setBg);
  }
  var setFill = getComputedStyle(root).getPropertyValue('--secondary');

  if (outlineState === true) {
    noFill();
  } else {
    fill(setFill);
  }
  stroke(setFill);

  var xPos = 50;
  var yPos = 100;
  var yPosAlt = 65;
  var spcScale = 150 + (ver * 4);

  inputArr.forEach((element, index) => {

    if (index > 0) {
      xPos = xPos + 75;
      xConfig = xPos + 100 + hor;
      yConfig = yPosAlt + spcScale;

      if (xPos > 1400) {
        xConfig = 1450
        xPos = 50
        yPos = yPos + spcScale;
        yPosAlt = yPosAlt + spcScale;
      }

      if (element === 'i' || element === 'j' || element === 'l') {
        if (hor > 0) {
          xPos = xPos - g - hor;
        } else {
          xPos = xPos - g;
        }
      }
    }

    switch (element) {

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
        rect(((xPos + (g * 2)) + (hor * 2)), yPos + ver, w, h, 0, c, 0, 0)
        rect(((xPos + (g * 2)) + (hor * 2)), ((yPos + g) + (ver * 2)), w, h, 0, 0, 0, 0)
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
        rect(((xPos + (g * 2)) + (hor * 2)), yPos + ver, w, h, 0, c, 0, 0)
        rect(((xPos + (g * 2)) + (hor * 2)), ((yPos + g) + (ver * 2)), w, h, 0, 0, c, 0)
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

    if (element === 'm' || element === 'w') {
      xPos = xPos + (hor * 3);
    } else if (element === 'i' || element === 'j' || element === 'l') {
      xPos = xPos + (hor * 2);
    } else {
      xPos = xPos + (hor * 2);
    }
  });

  if (svgState === true) {
    noLoop();
  }
}

// export processing

function getSVG() {

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  var findsvgTag = document.getElementsByTagName('svg');
  var svgTagText = String(findsvgTag.item(0).outerHTML);

  var start_pos = svgTagText.indexOf('<');
  var end_pos = svgTagText.indexOf('>') + 1;
  var svgArraytext = svgTagText.substring(start_pos, end_pos)
  svgForExport.push(svgArraytext)
  svgForExport.push("<g>")
  print(svgForExport)
  var findGroupList = document.getElementsByTagName("path");
  var findGroup = [].slice.call(findGroupList);

  findGroup.forEach((tag, index) => {

    var pathTagText = String(tag.outerHTML);

    var start_posC = pathTagText.indexOf('(') + 1;
    var end_posC = pathTagText.indexOf(')');
    var rgbColour = pathTagText.substring(start_posC, end_posC);
    const rgbSplit = rgbColour.split(",").map(Number);
    var hexColour = rgbToHex(rgbSplit[0], rgbSplit[1], rgbSplit[2]);
    var comColour = getComputedStyle(root).getPropertyValue('--secondary');
    if (String(hexColour) === String(comColour)) {
      svgForExport.push(String(tag.outerHTML))
    }
  });

  var remExisting = document.getElementById("defaultCanvas0");
  while (remExisting.firstChild) {
    remExisting.removeChild(remExisting.lastChild);
  }

  svgForExport.push("</g>")
  svgForExport.push("</svg>")

  svgForExport.join("");
  document.getElementById("defaultCanvas0").innerHTML = svgForExport;

}

function exportSVG() {
  getSVG();
  save("export.svg");

  window.history.pushState({}, document.title, window.location.pathname);

  const url = new URL(window.location.href);

  console.log(url)
  const refresh = new URLSearchParams(url.search);
  refresh.set('inputArr', inputArr[0])

  inputArr.forEach((element, index) => {
    if (index > 0) {
      refresh.append('inputArr', element);
    }

    refresh.set('xConfig', xConfig);
    refresh.set('yConfig', yConfig);
    refresh.set('horConfig', hor)
    refresh.set('verConfig', ver)
    refresh.set('wConfig', w)
    refresh.set('hConfig', h)
  });


  window.history.replaceState({}, '', `${location.pathname}?${refresh}`);
  location.reload();

}