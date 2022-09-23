function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
    //creates a grid of squares
  for(i=0;i<9;i++){
    x=(width/9)*i
    for(j=0;j<9;j++){
      y=(height/9)*j
<<<<<<< HEAD
=======
      //TODO: load images and get values for grid
>>>>>>> d20bca5 (init commit)
      fill((255/9)*i,(255/18)*(i+j),(255/9)*j)
      rect(x,y,width/9,height/9);
    }
  }
}