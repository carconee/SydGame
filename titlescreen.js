function titlescreen(){
  fill(210,180,140)
  rect(0,1100,960,700)

  fill(54,34,4)
  rect(100,100,750,200)
  image(babygame, 100,100)

  if(mouseX > 100 && mouseX < 850 && mouseY > 1165 ){
     fill(100,30,70)
  }
  else {
    fill(255,30,70)
  }

  fill(152,118,84)
  rect(100,1165,750,500)
  image(playbutton, 100,1165)

image(bottles,90,500,800)

  image(babysprite, 50,300,900,900)

//if (titlescreen)
//image(musicOff,0,0,90,90)

}
