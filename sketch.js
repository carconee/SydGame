
let playbutton
let babygame
let babysprite
let bottles
let arrow
let smallbabygame
let age = 0
let birthdaybaby
let buckles
let button;
let musicOn
let musicOff
let carDeath
let buckles2
let bookshelf
let tennisball
let bookshelf2
let meanBaby
let niceBaby
let music
let dog
let dog2
let stroller
let otherBaby
let meanie
let happy
let halloween
let costume
let apples
let fall
let maze
let hayride
let snow
let eatSnow
let snowman
let hungry
let cereal
let blender
let bath
let bubbles
let escape
let clothes
let ants
let hang
let hospital
let hide
let bbq
let grill
let butterflies
let tag
let party
let sneeze
let radiation
let title = true
let isDead = false
let mouseC = false


function preload(){
  playbutton = loadImage('assets/play2.png')
  babygame = loadImage('assets/babygame2.png')
  babysprite = loadImage('assets/babysprite2.png')
  bottles = loadImage('assets/bottles.png')
  arrow = loadImage('assets/arrow.png')
  //age = loadImage('assets/age.png')
  birthdaybaby = loadImage('assets/birthdaybaby.png')
  buckles = loadImage('assets/buckles.png')
  musicOn = loadImage('assets/musicOn.png')
  musicOff = loadImage('assets/musicOff.png')
  carDeath = loadImage('assets/carDeath.png')
  buckles2 = loadImage('assets/buckles2.png')
  bookshelf = loadImage('assets/bookshelf.png')
  tennisball = loadImage ('assets/tennisball.png')
  bookshelf2 = loadImage ('assets/bookshelf2.png')
  niceBaby = loadImage ('assets/niceBaby.png')
  meanBaby = loadImage ('assets/meanBaby.png')
  dog2 = loadImage ('assets/dog2.png')
  dog = loadImage ('assets/dog.png')
  stroller = loadImage ('assets/stroller.png')
  otherBaby = loadImage ('assets/otherBaby.png')
  meanie = loadImage ('assets/meanie.png')
  happy = loadImage ('assets/happy.png')
  halloween = loadImage ('assets/halloween.png')
  costume = loadImage ('assets/costume.png')
  apples = loadImage ('assets/apples.png')
  fall = loadImage ('assets/fall.png')
  maze = loadImage ('assets/maze.png')
  hayride = loadImage ('assets/hayride.png')
  snow = loadImage ('assets/snow.png')
  eatSnow = loadImage ('assets/eatSnow.png')
  snowman = loadImage ('assets/snowman.png')
  hungry = loadImage ('assets/hungry.png')
  cereal = loadImage ('assets/cereal.png')
  blender = loadImage ('assets/blender.png')
  bath = loadImage ('assets/bath.png')
  bubbles = loadImage ('assets/bubbles.png')
  escape = loadImage ('assets/escape.png')
  clothes = loadImage ('assets/clothes.png')
  ants = loadImage ('assets/ants.png')
  hang = loadImage ('assets/hang.png')
  hospital = loadImage ('assets/hospital.png')
  hide = loadImage ('assets/hide.png')
  bbq = loadImage ('assets/bbq.png')
  grill = loadImage ('assets/grill.png')
  butterflies = loadImage ('assets/butterflies.png')
  tag = loadImage ('assets/tag.png')
  party = loadImage ('assets/party.png')
  sneeze = loadImage ('assets/sneeze.png')
  radiation = loadImage ('assets/radiation.png')
//function preload(){
  music = loadSound ('assets/music1.mp3')

}


function setup(){
createCanvas(960, 1750);
music.play();
}
function draw(){

background(210,180,140)

if(title == true){
  titlescreen()
}
else {
  playscreen()
}
mouseC = false
}

function mouseClicked() {
  mouseC = true;

  if(title==true){
    if(mouseX > 100 && mouseX < 850 && mouseY > 1165 ){
       title = false
    }
  }
  else {
    if (checkIfArrow(false)){
    if(mouseX > 700 && mouseX < 1000 && mouseY > 1500 && mouseY < 1750 ){

       if(dialogueNumber==5)dialogueNumber=7;
       else if(dialogueNumber==8)dialogueNumber=10;
       else if(dialogueNumber==11)dialogueNumber=13;
       else if(dialogueNumber==20)dialogueNumber=22;
       else if(dialogueNumber==26)dialogueNumber=28;
       else if(dialogueNumber==32)dialogueNumber=34;
       else if(dialogueNumber==35)dialogueNumber=37;
       else if(dialogueNumber ==24 && eatYellowSnow== true){
           dialogueNumber = 40;
         }

       else dialogueNumber++;

    }
  }
  }


  }
