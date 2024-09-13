
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
    nebula = loadImage('backlight.png')
    lights = loadImage('lights.png')
    stars = loadImage('stars.png')
    firstRun = false
  }

  angleMode(DEGREES);
  background(8,8,13); // dark blue
 
  image(stars,1536/2,432) //inserting background stars
  imageMode(CENTER)
  let Hue = map(vocal,0,100,10,255) //mapping the vocals to red
  tint(Hue, 100,150) //tint changes red balance based on vocal
  image(nebula,768,432,1536,864); //nebula in bg
  noTint()
  
   image(city,1536/2,864/2) //inserting city drawing

  push()
    let signs = map(other,40,100,0,255)
    colorMode(HSB)
    tint(255,0,signs)//brigtness changes w/other

   image(lights,1536/2,864/2)//glow around billboards/signs


  pop()
  
   let moon = map(drum, 70, 100, 30, 40);

  fill(500,500,500)

  ellipse(150,150,150)
  fill(8,8,13)

  ellipse(160+moon,150,150)

  let starPoint = map(bass,0,100,0,60)

  

  fill(500,500,500)
  beginShape() // star that pulses with bass
    vertex(910,220-starPoint)//top point
    vertex(900,240)
    vertex(890-starPoint,250)//west point
    vertex(900,260)
    vertex(910,280+starPoint)//south point
    vertex(920,260)
    vertex(930+starPoint,250)//east point
    vertex(920,240)
   
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

  ellipse(100,100,5) //background stars
  ellipse(500,500,5)
  ellipse(700,300,5)
  ellipse(450,600,5)

}

  