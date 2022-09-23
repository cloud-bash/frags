function setup() {
  frameRate(10)
  createCanvas(900, 900);
}

function draw() {
   // creates a grid of squares
  squares(5);
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
      //TODO: load images and get values for grid
      noStroke();
      fill((a/(n/2))*j,(b/(n*2))*(i-j),(c/(n/2))*i,d)
      rect(x,y,width/n,height/n);
    }
  }
}