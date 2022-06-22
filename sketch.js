var box;

function setup() {
  createCanvas(400,400);
  box= createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
if (keyIsDown(RIGHT_ARROW)){
  background("red")
}
if(keyIsDown(LEFT_ARROW)){
  background("blue")
}
if(keyIsDown(UP_ARROW)){
  box.y = box.y-5
}
if(keyIsDown( DOWN_ARROW)){
  box.y = box.y+5
}

  drawSprites();

}




