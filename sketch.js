let fr=30
let start=1
let max=6
let p=start
let inc=true

function preload(){
  img1 = loadImage("images/1.png");
  img2 = loadImage("images/2.png");
  img3 = loadImage("images/3.png");
}

function setup() {
  frameRate(fr)
  createCanvas(900, 900);
}

function draw() {
  img1.resize(900, 900);
  img2.resize(900, 900);
  img3.resize(900, 900);

  for(i=0;i<1000;i++){
    x = random(width);
    y = random(height);
    c = img3.get(int(x),int(y));
    fill(c,25);
    noStroke();
    ellipse(x,y,8,8);
    }
}

// void draw() {
//   for(int i=0;i<1000;i++){
//   float x = random(width);
//   float y = random(height);
//   color c = zeva.get(int(x),int(y));
//   fill(c,25);
//   noStroke();
//   ellipse(x,y,8,8);
//   }
// }

// function draw() {
//    // creates a grid of squares
//   squares(p);
//   if(inc){
//     p++
//   } else {
//     p--
//   }
//   frameRate(max+1-p)
//   if(p == max){
//     inc = !inc
//   }
//   if(p == start){
//     inc = !inc
//   }
// }

// function squares(n){
//   q=random(255);
//   r=random(255);
//   s=random(255);
//   background(q,r,s)
//   for(i=0;i<n;i++){
//     x=(width/n)*i
//     for(j=0;j<n;j++){
//       a=random(255);
//       b=random(255);
//       c=random(255);
//       d=random(255);
//       y=(height/n)*j
//       dx=width-(x/2)
//       dy=height-(y/2)
//       //TODO: load images and get values for grid
//       noStroke();
//       fill(a,b,c,d)
//       rect(x,y,width/n,height/n);
//     }
//   }
// }