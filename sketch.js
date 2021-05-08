var back_img
var boyimage,boyanimation,enemy1,enemy2,ground

function preload(){
  back_img=loadImage("images/backimage.jpg")
  boyanimation=loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png","images/boy4.png")
  boyimage=loadAnimation("images/boy1.png")
  enemy1=loadImage("images/enemy.png")
  enemy2=loadImage("images/enemy2.png")
}
 function setup(){
   canvas=createCanvas(1530,760)

   boy=createSprite(90,550,100,100)
   boy.addAnimation("standing",boyimage)
   boy.addAnimation("shooting",boyanimation)

   ground=createSprite(90,620,1300,10)
   ground.visible=false
}

function draw() {
  background(back_img);  

  if(keyWentDown("space")){
    boy.changeAnimation("shooting",boyanimation)
    boy.velocityY=-10
  }

  if(keyWentUp("space")){
    boy.changeAnimation("standing",boyimage)
    boy.velocityY=-10
  }

  boy.velocityY=boy.velocityY+0.8

  spawnenemy();

  boy.collide(ground)

  drawSprites();
}

function spawnenemy(){
  enemy=createSprite(1300,500,100,100)
  var rand=Math.round(random(1,2))
  if(rand===1){
    enemy.addImage(enemy1)
  }else{
    enemy.addImage(enemy2)
  }
  
}