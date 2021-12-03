let dialogueNumber = 0
let arrowDialogueNums = [0,3,5,8,11,12,15,18,20,21,24,26,30,32,33,35]
let eatYellowSnow = false;
let hideAndSeek = false;
let niceBaby2 = false;
function playscreen(){
  //background(0)
fill(54,34,4)
rect(0,1100,960,625)
//text box

fill(54,34,4)
rect(700,1500, 350,200)
//box behind arrow

checkIfArrow(true);

fill(54,34,4)
rect(0,0,420,200)
//babygame box

fill(152,118,84)
rect(680,0,280,200)
//age box
fill(54,34,4)
text("Age \n" +age+" Months",715,75)


//image(age, 700,0)
image(babygame, 5,5,420,190)

if(dialogueNumber==38 && hideAndSeek==true){
  dialogueNumber = 41;
}

if(dialogueNumber==12) {
  niceBaby2 = true
}

if(dialogueNumber>=11) {
  if(!niceBaby2)image(meanBaby,460,5,200,200)
}
if(dialogueNumber>=12) {
  if(niceBaby2)image(niceBaby,460,5,200,200)
}

if (dialogueNumber == 0){

  image(birthdaybaby, 250,500)
}
if (dialogueNumber == 1)
  image(buckles,0,150, 1000,1000)

if (dialogueNumber == 2){
  image(carDeath,-50,100,1000,1000)
  drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
}

if (dialogueNumber == 3)
image(buckles2, 0,150,1000,1000)

if (dialogueNumber == 4){
drawButton("Grab Tennis Ball",100,1400,400,100,[152,118,84],[0,0,0],50,5,false)
drawButton("Grab Shiny Object",100,1550,450,100,[152,118,84],[0,0,0],50,6,false)
image(bookshelf,100,400,800)
}

if (dialogueNumber == 5)
image(tennisball, 65,90,900,910)

if (dialogueNumber == 6) {
  drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
  image(bookshelf2,100,400,800)
}
if (dialogueNumber == 7) {
drawButton("Throw Tennis Ball",100,1400,450,100,[152,118,84],[0,0,0],50,8,false)
drawButton("Make Jingly Noises For Him", 100,1550,650,100,[152,118,84],[0,0,0],50,9,false)
image(dog,100,400,800,800)
}
if (dialogueNumber == 8){
image(stroller, 65,200,800,800)
}

else if (dialogueNumber == 9) {
  drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
  image(dog2,100,400,800,800)
}
if (dialogueNumber == 10) {
  drawButton("Be Mean to the Baby",100,1450,500,100,[152,118,84],[0,0,0],50,11,false)
  drawButton("Be Nice to the Baby",100,1600,500,100,[152,118,84],[0,0,0],50,12,false)
  image(otherBaby,-25,100,1000,1000)
}
if (dialogueNumber ==11){
  image(meanie,-25,100,1000,1000)
}
if (dialogueNumber ==12){
  image(happy,-25,100,1000,1000)
}
if (dialogueNumber == 13){
  drawButton("Bob For Apples",100,1400,400,100,[152,118,84],[0,0,0],50,14,false)
  drawButton("Costume Contest",100,1550,450,100,[152,118,84],[0,0,0],50,15,false)
  image(halloween, -30,50,1000,1000)
}
if (dialogueNumber == 14){
  drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
  image(apples,-35,150,1000,1000)
}
if (dialogueNumber == 15){
  image(costume,-20,200,1000,1000)
}
if (dialogueNumber == 16){
  drawButton("Corn Maze",100,1450,500,100,[152,118,84],[0,0,0],50,17,false)
  drawButton("Hayride",100,1600,500,100,[152,118,84],[0,0,0],50,18,false)
  image(fall,45,150,900,900)
}
else if (dialogueNumber == 17){
  drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
  image(maze,45,150,900,900)
}
if (dialogueNumber == 18){
  image(hayride,45,150,900,900)
}

if (dialogueNumber == 19){
  drawButton("Build Snowman",100,1400,400,100,[152,118,84],[0,0,0],50,20,false)
  drawButton("Eat the Snow",100,1550,400,100,[152,118,84],[0,0,0],50,21,false)
  image(snow,45,150,900,900)
}
if(dialogueNumber == 20){
  image(snowman,45,150,900,900)
}

if (dialogueNumber == 21){
  image(eatSnow,45,150,900,900)
}

if (dialogueNumber == 22){
  drawButton("Make Smoothie",100,1400,400,100,[152,118,84],[0,0,0],50,23,false)
  drawButton("Make Cereal",100,1550,400,100,[152,118,84],[0,0,0],50,24,false)
  image(hungry,45,150,900,900)
}
if (dialogueNumber==23){
    drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
    image(blender,45,250,900,900)
}
if (dialogueNumber == 24){
  image(cereal,45,150,900,900)
}

if (dialogueNumber==25){
  drawButton("Add The Bubbles",100,1400,500,100,[152,118,84],[0,0,0],50,26,false)
  drawButton("Try To Escape",100,1550,500,100,[152,118,84],[0,0,0],50,27,false)
  image(bath,45,150,900,900)
}
if (dialogueNumber == 26){
  image(bubbles,45,150,900,900)
}
if (dialogueNumber==27){
  drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
  image(escape,45,150,900,900)
}
if (dialogueNumber==28){
  drawButton("Put on favorite onesie",100,1400,500,100,[152,118,84],[0,0,0],50,29,false)
  drawButton("Play with Fire Ants",100,1550,500,100,[152,118,84],[0,0,0],50,30,false)
  image(clothes,45,300,900,900)
}
  if (dialogueNumber==29){
    drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
    image(hang,45,300,900,900)
}
if (dialogueNumber == 30){
  image(ants,45,300,900,900)
}
if (dialogueNumber==31){
  drawButton("Play Tag",100,1400,500,100,[152,118,84],[0,0,0],50,32,false)
  drawButton("Play Hide and Seek",100,1550,500,100,[152,118,84],[0,0,0],50,33,false)
  image(hospital,45,300,900,900)
}
if (dialogueNumber==32){
  image(tag,45,210,900,900)
}

if (dialogueNumber==33){
  image(hide,45,300,900,900)
}
if (dialogueNumber==34){
  drawButton("Reach for a Burger",100,1450,500,100,[152,118,84],[0,0,0],50,35,false)
  drawButton("Reach for Butterflies",100,1600,500,100,[152,118,84],[0,0,0],50,36,false)
  image(bbq,45,200,900,900)
}
if (dialogueNumber==35){
  image(grill,45,200,900,900)
}
if (dialogueNumber==36){
  drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
  image(butterflies,45,200,900,900)
}
if (dialogueNumber==37){
  drawButton("Blow Out Candles",100,1400,500,100,[152,118,84],[0,0,0],50,38,false)
  drawButton("Cut the Cake",100,1550,500,100,[152,118,84],[0,0,0],50,39,false)
  image(party,45,200,900,900)
}
if (dialogueNumber==38){
  drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
}

if (dialogueNumber==39){
  drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
  image(sneeze,45,350,1000,1000)
}
if (dialogueNumber == 40){
  drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
}
if (dialogueNumber == 41){
    drawButton("Start Over",250,1500,400,100,[255,0,0],[0,0,0],50,0,true)
  image(radiation,45,300,1000,1000)
}

textSize(50)
fill(255,255,255)
text(dialogue[dialogueNumber],30,1165)

if (dialogueNumber == 1){
drawButton("Fasten Buckles",100,1400,400,100,[152,118,84],[0,0,0],50,2,false)
drawButton("Start Crying",100,1550,400,100,[152,118,84],[0,0,0],50,3,false)
}
}

function drawButton(optionText,positionX,positionY,widthF,heightF,colorB,colorT,textSizeF,newDialogueNumber,startOver){
  fill(colorB[0],colorB[1],colorB[2])
  rect(positionX,positionY,widthF,heightF)
  fill(colorT[0],colorT[1],colorT[2])
  textSize(textSizeF);
  text(optionText,positionX+20,positionY+heightF/2+10)
  if(mouseC == true){
    if(mouseX>positionX&&mouseX<positionX+widthF&&mouseY>positionY&&mouseY<positionY+heightF){
      dialogueNumber=newDialogueNumber;
      if(startOver == true){
        title = true;
        age = 0;
        eatYellowSnow = false;
        hideAndSeek = false;
        niceBaby2= false;

      }
      else if(dialogueNumber>3)age++
    }

  }
}
function checkIfArrow(shouldDraw){
  for(let i=0; i<arrowDialogueNums.length; i++) {
    if (dialogueNumber == arrowDialogueNums[i]){
      if(dialogueNumber == 21)eatYellowSnow= true;
      if(dialogueNumber == 33)hideAndSeek= true;


      if(shouldDraw)drawArrow();
      return true;
    }
  }
}
function drawArrow(){
  image(arrow, 670,1450)
}
