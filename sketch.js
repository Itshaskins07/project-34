//Create variables here
var dogimage;
var dogImage2;
var dog;
var database;
var foodv;
function preload()
{
dogimage=loadImage("images/dogImg.png");
dogImage2=loadImage("images/dogImg1.png");
	}

function setup() {
	createCanvas(800, 700);
 database=firebase.database();
 var loc=database.ref("food");
loc.on("value",getFoodValue,showError);
dog=createSprite(400,350);
dog.addImage("dog1",dogimage);
dog.addImage("dog2",dogImage2);
dog.scale=0.5;
}


function draw() {  
  background("black");
if(keyDown("UP")){
updateFoodValue();
dog.changeImage("dog2",dogImage2);
}
  drawSprites();
textSize(20);
fill("white");
text("food="+foodv,400,100);
text("PRESS UP ARROW KEY",400,650)
}

function getFoodValue(data){
foodv=data.val();
}
function showError(){
 console.log("there was an error connecting to the database"); 
}
function updateFoodValue(){
 if(foodv>0){
   foodv=foodv-1;
var locationofchild=database.ref("/");
locationofchild.set({
  food:foodv
})
 } 
}