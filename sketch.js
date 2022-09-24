let fr=5
let start=5
let p=start
let inc=true

function setup() {
  frameRate(fr)
  createCanvas(900, 900);
}

function draw() {
   // creates a grid of squares
  squares(p);
  // p=sin(p)
  if(inc){
    p++
  } else {
    p--
  }
  frameRate(20-p)
  if(p == 15){
    inc = !inc
  }
  if(p == start){
    inc = !inc
  }
}

function squares(n){
  q=random(255);
  r=random(255);
  s=random(255);
  background(q,r,s)
  for(i=0;i<n;i++){
    x=(width/n)*i
    for(j=0;j<n;j++){
      a=random(255);
      b=random(255);
      c=random(255);
      d=random(255);
      y=(height/n)*j
      dx=width-(x/2)
      dy=height-(y/2)
      //TODO: load images and get values for grid
      noStroke();
      fill(a,b,c,d)
      rect(x,y,width/n,height/n);
    }
  }
}