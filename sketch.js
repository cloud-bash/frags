let fr=1
let start=9
let max=6
let p=start
let inc=true
let i=0
let slider;

function preload(){
  img1 = loadImage("images/1.png");
  img2 = loadImage("images/2.png");
  img3 = loadImage("images/3.png");
}

function setup() {
  frameRate(fr)
  createCanvas(900, 900);
  // slider = createSlider(1,10,0,1);
}
//cycles through a list of images
function draw() {
  background(255,128,64);
  imglist = [img1,img2,img3]

  // image(imglist[i],0,0,900,900);
  //parameters: imagefile, position:x,y, size of picture box: sizeX,sizeY
  //size of portion of image to use: imgX,imgY
  //x:i*width/p,y:j*height/p,posX:width/p,posY:height/p
  //x:i*img.width/p,y:j*img.height/p,posX:img.width/p,posY:img.height/p
  //image(image,x,y,sizeX,sizeY,imgX,imgY,posX,posY)
  //image(imglist[i], 0, 0, width/p, height/p, 0, 0, imglist[i].width/p, imglist[i].height/p);
  for(let i = 0; i < p; i++){
    x = i*width/p
    sizeX = width/p
    // posX = i*img.width/p
    for(let j = 0; j < p; j++){
      y = j*height/p
      sizeY = height/p
      // posY = j*img.height/p
      if(i%2==0 || j%2==0){
        image(img1,x,y,sizeX,sizeY,i*img1.width/p,j*img1.height/p,img1.width/p, img1.height/p);
      }
    }
  }
  
  
  // i++
  // if(i==imglist.length){
  //   i=0
  // }

  // for(i=0;i<1000;i++){
  //   x = random(width);
  //   y = random(height);
  //   c = img3.get(int(x),int(y));
  //   fill(c,25);
  //   noStroke();
  //   // ellipse(x,y,8,8);
  //   }
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
//   // if(inc){
//   //   p++
//   // } else {
//   //   p--
//   // }
//   // frameRate(max+1-p)
//   // if(p == max){
//   //   inc = !inc
//   // }
//   // if(p == start){
//   //   inc = !inc
//   // }
// }

function squares(n){
  q=map(noise(255));
  r=map(noise(255));
  s=map(noise(255));
  t=map(noise(255));
  background(q,r,s,t);
  for(i=0;i<n;i++){
    x=(width/n)*i
    for(j=0;j<n;j++){
      a=random(255);
      b=random(255);
      c=random(255);
      d=random(255);
      y=(height/n)*j
      //TODO: load images and get values for grid
      noStroke();
      fill(a,b,c,d)
      rect(x,y,width/n,height/n);
    }
  }
}