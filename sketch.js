 var rocket, rocketImg;
var asteroidImg, asteroid, ateroidGroup;
var gameState = "play"
var space , spaceImg;

function preload(){
  rocketImg = loadImage("Rocket.png");
  asteroidImg = loadImage("asteroid.png");
  space = loadImage("Space.png");
  
}

function setup(){
  createCanvas(600,600);
  
  
  space = createSprite(300,300,600,600);  
  space.velocityY = 1;
  
  asteroidGroup = new Group()
  
  rocket = createSprite(200,200,50,50);
  
}



function draw(){
  background(0);

  rocket.scale = 0.1;
  
  

  if (gameState === "play") {
    if(keyDown("left_arrow")){
      rocket.x = rocket.x - 2;
    }
    
    if(keyDown("right_arrow")){
      rocket.x = rocket.x + 2;
    }
    
    if(keyDown("space")){
      rocket.velocityY = -12;
    }
    
    rocket.velocityY = rocket.velocityY + 0.5
    
    if(space.y > 300 ){
      space.y = 200
    }
    spawnAsteroids();


    if(asteroidGroup.isTouching(rocket)){
      rocket.velocityY = 0;
      rocket.destroy();
      gameState = "end"
    }
    if (rocket.y > 600){
      rocket.destroy();
      gameState = "end"
   }
    
    drawSprites();
  }
  
  if (gameState === "end"){
    text("Game Over", 230 ,250)
  }

}

function spawnAsteroids() {
 
  if (frameCount % 270 === 0) {
    var asteroid = createSprite(200, -50);
    
  
    asteroid.x = Math.round(random(120,400));
   rocket.x = asteroid.x;
    
    
    asteroid.addImage(asteroidImg);
    rocket.addImage(rocketImg);
    
    asteroid.velocityY = 1;
    rocket.velocityY = 1;
    
   
  }
}
