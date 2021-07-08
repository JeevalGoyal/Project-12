var path,moving_path;
var runner,runner_running;
var inviisbleBoundries,inviisbleBoundries1;

function preload(){
  //pre-load images
moving_path = loadImage("path.png")
runner_running = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,30,30)
  path.addImage("path",moving_path)
  path.scale=1.2
  path.velocityY=4

  runner = createSprite(200,350,5,5)
  runner.addAnimation("runner",runner_running)
  runner.scale=0.05

  inviisbleBoundries = createSprite(400,200,5,400)
  inviisbleBoundries1 = createSprite(0,200,5,400)
  inviisbleBoundries.visible=false;
  inviisbleBoundries1.visible=false;
}

function draw() {
  background(0);

  if (path.y>400){
    path.y = height/2
  }

  if (keyDown("RIGHT_ARROW")){
    runner.x=runner.x+5
  }

  if (keyDown("LEFT_ARROW")){
    runner.x=runner.x-5
  }

  runner.collide(inviisbleBoundries,)
  runner.collide(inviisbleBoundries1)

  drawSprites();
}
