
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let last_words = "";
let last_words_opacity = 0;
let firstRun = true
let img
let sunA
let sunB
let city
let lights
let stars

function draw_one_frame(words, vocal, drum, bass, other,counter) {
  if(firstRun){
   city = loadImage('city.png') 
   img = loadImage('nebula.png')
    sunA = loadImage('sun front.png')
    sunB = loadImage('sun background.png')
    lights = loadImage('lights.png')
    stars = loadImage('stars.png')
    firstRun = false
  }

  angleMode(DEGREES);
  background(8,8,13); // dark blue
 
  image(stars,1536/2,432)
  imageMode(CENTER)
  let Hue = map(vocal,0,100,10,255)
  tint(Hue, 100,150)
  image(img,768,432,1536,864);
  noTint()
  
   image(city,1536/2,864/2)

  push()
    let signs = map(other,40,100,0,255)
    colorMode(HSB)
    tint(255,0,signs)//brigtness changes w/other

   image(lights,1536/2,864/2)//glow around billboards/signs


   pop()
  let drumSize = map(drum, 30, 100, 500, 600, true);

  //image(sunB,300,200,200+drumSize,drumSize)
 
  // push() //sun background roates w/ other
  // let starBurst = map(other,0,100,0,140)
  // translate(300,200)
  // rotate(starBurst)
  // image(sunA,0,0,550,380)
  
  // pop()
  
  

  // strokeWeight(0)
  // fill(246,192,6) // yellow
  // ellipse(300,200,200)
 
  let starPoint = map(bass,0,100,0,60)

  fill(500,500,500)
  beginShape() // star that pulses with bass
    vertex(1010,220-starPoint)//top point
    vertex(1000,240)
    vertex(990-starPoint,250)//west point
    vertex(1000,260)
    vertex(1010,280+starPoint)//south point
    vertex(1020,260)
    vertex(1030+starPoint,250)//east point
    vertex(1020,240)
   
  endShape(CLOSE)

  fill(500,500,500)
  beginShape() // star that pulses with bass
    vertex(510,120-starPoint)//top point
    vertex(500,140)
    vertex(490-starPoint,150)//west point
    vertex(500,160)
    vertex(510,180+starPoint)//south point
    vertex(520,160)
    vertex(530+starPoint,150)//east point
    vertex(520,140)
   
  endShape(CLOSE)

  beginShape() // star that pulses with bass (slightly smaller)
  vertex(210,325-starPoint)//top point
  vertex(202,342)
  vertex(195-starPoint,350)//west point
  vertex(202,358)
  vertex(210,375+starPoint)//south point
  vertex(218,358)
  vertex(225+starPoint,350)//east point
  vertex(218,342)
 
endShape(CLOSE)

  ellipse(100,100,5)
  ellipse(500,500,5)
  ellipse(700,300,5)
  ellipse(450,600,5)

  
  


  // let ovalPlace = map(vocal, 20, 100, height-50, 50, true);
  // let ovalSize = map(vocal, 20, 100, 60, 150, true);
  // fill(229,119,30); // darker orange
  // ellipse(width/2, ovalPlace, ovalSize);



  textFont('Georgia');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(80);
  noStroke();
  fill(0, 0, 0, int(last_words_opacity));
  text(words, width/2, height/2);
}

    
  






  


  // let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);
