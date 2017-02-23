//Original code by Dan Shiffman 
//Typer-Zahra Driver- Dalini
var x = 0;
var speed = 9; 
var y = 200;
var w = 70;
var l = 250;
var i = 450;
//var height = 5

function setup() {
  createCanvas(600, 480);
}

function draw() {
  background(51,102,0);
  //ellipse
  stroke(125);
  strokeWeight(2);
  fill(255);
  rect(x, y, 70, 400);
  //if statement for speed
  
  //when x> width is greater than width the rect goes past boarder
  //when x> height rect stops within the boarder
  if (x > height || x<0) { // If x gets to rightside (< witdh) turn around || (or) if x gets to the left (<0) turn around.
    speed = speed * -1
    if(w>70 && w< 100);//If and statement saying execute circle if width is greater than 70 or less than 100
    fill(0,255,0);
    ellipse(l,l,i,l);//variables setup as global
    
  }
  
 x = x + speed; 
 
 
 //if( y< height || y > 0){
  //fill(255,51,51);
  //noStroke()
  //rect(x,300,270,70);
  
 // if( x>0 || x < height ){
   // fill(153,203,255);
    //ellipse(x,70,150,70);
  //}

 //}
 
 
 
}

