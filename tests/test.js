let img;
let size;
let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,^`'. "
//let video; let w = 64; let h = 48;
let textField;
let s;
let font;
//let l = 5;



function preload(){
  font = loadFont('./data/SchibstedGrotesk-Regular.ttf');
  img = loadImage("./data/myhands1.png")
}

function setup() {
  createCanvas(500, 800);
  img.resize(80,0);
  size = width / img.width
  textField = createInput('');
  //textField.size(200,200);
  textField.position(550, 100);
  textFont(font);
 
  
 // video = createCapture(VIDEO);
 // video.size(w, h);
  
}


function draw() {
  background(255);
  img.loadPixels(); 
  print(img.pixels.length);
  
  
  
  for (let i=0; i<img.width; i ++) {
    for (let j=0; j<img.height; j++) {
      let pixelIndex = (i + j*img.width) * 4;
      let r = img.pixels[pixelIndex +0];
      let g = img.pixels[pixelIndex + 1];
      let b = img.pixels[pixelIndex + 2];
      //let a = img.pixels[pixelIndex + 3];
      
     var s = textField.value();
      //let bright = brightness(color(r,g,b));
      let bright = (r + g + b) / (0.1 + s.length/52);
//average of rgb (0.1 + s.length/52)
      let tIndex = floor(map(bright, 0, 255, 0, s.length));
      
      
      let t = s.charAt(tIndex);
      
      let x = i*size + size*2;
      let y = j*size + size*2;  
      
      textSize(size);
      textAlign(CENTER, CENTER);
      //text(t, x, y);
      //text(t, 600*(sin(y)), y);
      //text(t, x , y + sin(l));
      //let brightMap = map(bright, 0, 255, 0,100);
      if (bright => 50) {
        textStyle(BOLD);
        text(t, x+1, y);
      }
      else {
        text(t,x,y);
      }
      
    //  if (i<= 100*sin(j)) {
    //  text(t, x + 20, y);
    //} 
    //else {
    //  text(t,x,y);
    //}
    //900 *(cos(x*0.1)}
  } }
  
 
} 