
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
 createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  //console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  

  
}


function draw() {
  background("skyblue");
  
  if(ground.x>0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
   score = score + Math.round(getFrameRate()/60);
  
  
  spawnFood();
  spawnObstacle();
  
  monkey.collide(ground);
  
  fill("black");
  textSize(20);
  text("Survival Time: "+score,230,50);
  
 drawSprites();
  
  
}

function spawnFood(){
  if(frameCount%80 === 0){
    var banana = createSprite(200,Math.round(random(120,200)),10,40);
    banana.velocityX = -4;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 100;
    foodGroup.add(banana);
  }
  
}
function spawnObstacle(){
  if(frameCount%80 === 0){
    var obstacle = createSprite(300,330,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 100;
   // Math.round(random(300,250));
    obstacleGroup.add(obstacle);
  }
  
}






