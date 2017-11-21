var bird;
var analyzer;
var myImg;
var mic;
var particles=[];

function preload() {
 
  myImg = loadImage("city.png");
}
function setup() {
   p= new Particle();
  mic = new p5.AudioIn();
  mic.start();
  noStroke();
  createCanvas(500, 500)
  bird = new Bird();

}

function draw() {
  background("#BADBA5");
 image(myImg, 0, 0, 500,350);
   
   var vol=mic.getLevel();

  bird.update();
  bird.show();

   
  var p=new Particle();
  particles.push(p);
  
for(var i=0; i<particles.length; i++){
      // particles[i].update();
        particles[i].fumo();
      //  particles[i].up();
        
        if(vol>0.1){  particles[i].show();}
        
    }

if(vol>0.1){
    bird.up();
   
  
}

}

function Bird() {
  this.y = 300
  this.x = 0;
  this.gravity = -0.1;
  this.lift = 15;
  this.velocity = 0;
 var teta=0;
  this.show = function() {
  
 
 //   Vagone 1
    fill("#A0A0A0");
    rect(this.x, this.y, 66, 10);
     fill("#0088AA");
    rect(this.x+6, this.y+10, 54, 40);
    fill("#A05A2C");
     rect(this.x, this.y+40, 66, 10);
    
    fill(0);
    ellipse(this.x+18, this.y+50, 30);
    ellipse(this.x+48, this.y+50, 30);
    fill("#A0A0A0");
    ellipse(this.x+18, this.y+50, 20);
    ellipse(this.x+48, this.y+50, 20);
  
  
      
 // Vagone 2   
     fill("#A0A0A0");
    rect(this.x+72, this.y, 66, 10);
    fill("#0088AA");
    rect(this.x+78, this.y+10, 54, 40);
    fill("#A05A2C");
     rect(this.x+72, this.y+40, 66, 10);
     
    
    fill(0);
    ellipse(this.x+90, this.y+50, 30);
    ellipse(this.x+120, this.y+50, 30);
  
    fill("#A0A0A0");
    ellipse(this.x+90, this.y+50, 20);
    ellipse(this.x+120, this.y+50, 20);
   
    
 // Vagone 3
  fill("#A0A0A0");
    rect(this.x+144, this.y, 66, 10);
    fill("#0088AA");
    rect(this.x+150, this.y+10, 54, 40);
    fill("#A05A2C");
     rect(this.x+144, this.y+40, 66, 10);
     
    
    fill(0);
    ellipse(this.x+162, this.y+50, 30);
    ellipse(this.x+192, this.y+50, 30);
    fill("#A0A0A0");
    ellipse(this.x+162, this.y+50, 20);
    ellipse(this.x+192, this.y+50, 20);
      

    
    // Cabina
    fill("#A0A0A0");
    rect(this.x+216, this.y-20, 57, 10);
  fill("#0088AA");
    rect(this.x+222, this.y+10, 75, 40);
    fill("#0088AA");
    rect(this.x+222, this.y-10, 45, 40);
    fill("#C1D9E4");
     rect(this.x+232, this.y-10, 20, 20);
    fill("#A05A2C");
     rect(this.x+216, this.y+40, 110, 10);
     triangle(this.x+297, this.y+10,this.x+297, this.y+50,this.x+316, this.y+40);
    
   

 // rotate(this.x);
    //ruote cabina
    fill(0);
    ellipse(this.x+272, this.y+50, 30);
    ellipse(this.x+302, this.y+50, 30);
    ellipse(this.x+237, this.y+45, 40);
    fill("#A0A0A0");
    ellipse(this.x+272, this.y+50, 20);
    ellipse(this.x+302, this.y+50, 20);
    ellipse(this.x+237, this.y+45, 30);
      
   
 
    
  }
  this.up = function() {
    this.velocity += this.lift;
  }
  this.update = function() {
    this.velocity += this.gravity;
    this.x += this.velocity;
    this.velocity *= -0.9;

    if (this.x > width) {
      this.x = -80;
      this.velocity = 0;
    }

    if (this.x < 0) {
      this.x = 0;
      this.velocity = 0;
    }
  }
 
}

function Particle(){
 
    this.x =180;
    this.y=170;
    this.vx=random(-1,1);
    this.vy=random(-5,-1);
    this.gravity = -0.1;
  this.lift = 15;
  this.velocity = 0;
  
  this.fumo = function() {
    this.x+=this.vx;
    this.y+=this.vy;
  }
  

  this.show = function() {
    push();
    
    fill(random(255));
    ellipse(this.x,this.y,random(5,7));
    pop();
    
  }}
  

