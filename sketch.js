var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  surface1=createSprite(100,400,70,40);
  surface1.shapeColor="red";

  surface2=createSprite(200,400,30,20);
  surface2.shapeColor="pink";

  surface3=createSprite(300,400,30,20);
  surface3.shapeColor="blue";

  surface4=createSprite(400,400,30,20);
  surface4.shapeColor="yellow";

  box = createSprite((random)20,750);
  box.shapeColor = "white";
    //create box sprite and give velocity
}
function draw() {
    background("black");
    create edgeSprites();
    box.bounceOff(edges); 
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);
    
 //add condition to check if box touching surface and make it box
  if(surface1.isTouching(box) &&) box.bounceOff(surface1){
    box.shapeColor="red";
  }
  if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor="pink";
  }
  if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="blue";
    music.play();
  }
  if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="yellow";
  }
  if(surface4.isTouching(box)){
    box.shapeColor=rgb(225,128,0);
    box.velocityX=0;
    music.stop();
  }
  drawSprites();
}
