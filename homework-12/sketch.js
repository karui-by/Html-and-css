yc = 80
ycs = 2
let rockd;
let play;

function preload(){
  rockd = loadSound('879478__cat-fox_alex__lion-growl-1.wav');  
}
function start(){
  rockd.play();
}
function setup() {
  createCanvas(600, 600);
  // Help blind or low-vision users understand your sketch
  play = createButton('play');
  play = position(300,300);
  play.mousePressed(start);
  
}
function keyPressed(){
  if (key =="s"){
    rockd.stop();
  }
}
function draw() {
  let coords = `X: ${mouseX}, Y: ${mouseY}`;
  
  background(10,50,150);
  //background
  fill(10,50,150)
  square(0,0,700)
  //text
  fill(0)
  textSize(13)
  text(coords,20,20)
  //circle
  fill(130)
  circle(270,yc,40)
  yc = yc + ycs
  if (yc < 80) {
    ycs = -ycs;
  }
  if (yc > 300) {
    ycs = -ycs;
  }
  //coords
  fill(0,239,255,90)
  square(0,280,700)
  //coords
  fill(0,239,255,90)
  square(0,280,700)
  //dark grey text
   fill(30)
  textSize(50)
  text("Click the screen to begin!",20,500)
}

