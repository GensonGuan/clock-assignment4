function setup() {
  createCanvas(800, 600)
  angleMode(DEGREES)
  textFont('Century Gothic')
  
}


function draw() {
  background(0)
  
  translate(400, 300)
  
  
  //hour---------------------------------------------------------
  push()
  if(hour() > 12) { var H = hour()-12 }
  else{ var H = hour() }
  drawOinger(12, 60, 120, (6), H-0.6)
  drawOinger(12, 60, 120, (26), H-0.4)
  drawOinger(12, 60, 120, (46), H-0.2)
  drawOinger(12, 60, 120, (66), H)
  pop()
  
  //big number
  push()
  textSize(50)
  textAlign(CENTER)
  fill(0)
    for(var e = 1; e <= 12; e++) {
    push();
    rotate(e * 30);
    text(e, 0, -100);
    pop();
  
    }
  
  //minute-------------------------------------------------------
  push()
  drawWinger(60, 25, 220, (120), minute())
  drawWinger(60, 24, 220, (105), (minute()-1))
  drawWinger(60, 23, 220, (90), (minute()-2))
  drawWinger(60, 22, 220, (75), (minute()-3))
  drawWinger(60, 21, 220, (60), (minute()-4))
  drawWinger(60, 20, 220, (45), (minute()-5))
  drawWinger(60, 19, 220, (30), (minute()-6))
  drawWinger(60, 18, 220, (15), (minute()-7))
  drawWinger(60, 17, 220, (10), (minute()-8))
  
  pop()
  
  //small number
  textSize(20)
  textAlign(CENTER)
  fill(0)
    for(var i = 1; i <= 60; i++) {
    push();
    rotate(i * 6);
    text(i, 0, -210);
    pop();
  
    }
  
  //second---------------------------------------------------------
  push()
  drawFinger(60, 22, 285, (200), second())
  drawFinger(60, 19, 285, (180), (second()-1))
  drawFinger(60, 18, 285, (160), (second()-2))
  drawFinger(60, 17, 285, (140), (second()-3))
  drawFinger(60, 16, 285, (120), (second()-4))
  drawFinger(60, 15, 285, (100), (second()-5))
  drawFinger(60, 14, 285, (80), (second()-6))
  drawFinger(60, 13, 285, (60), (second()-7))
  drawFinger(60, 12, 285, (40), (second()-8))
  drawFinger(60, 11, 285, (20), (second()-9))
  pop()
  
  //s small number
  textSize(15)
  textAlign(CENTER)
  fill(0)
  
  for(var j = 1; j <= 60; j++) {
    push()
    rotate(j * 6)
    text(j, 0, -276)
    pop()
  
  }
  
  
  

}
  //for second
  function drawFinger(Frange, Fweight, Fradius, Fcolor, Fvalue){
  var angle = map(Fvalue,0,Frange,-90,270)
  stroke(Fcolor)
  strokeWeight(Fweight)
  line((Fradius-40)*cos(angle), (Fradius-40)*sin(angle), Fradius*cos(angle), Fradius*sin(angle))
}
  //for minute
  function drawWinger(Wrange, Wweight, Wradius, Wcolor, Wvalue){
  var angle = map(Wvalue,0,Wrange,-90,270)
  stroke(Wcolor)
  strokeWeight(Wweight)
  line((Wradius-50)*cos(angle), (Wradius-50)*sin(angle), Wradius*cos(angle), Wradius*sin(angle))
  }
  //for hour
  function drawOinger(Orange, Oweight, Oradius, Ocolor, Ovalue){
  var angle = map(Ovalue,0,Orange,-90,270)
  stroke(Ocolor)
  strokeWeight(Oweight)
  line((Oradius-80)*cos(angle), (Oradius-80)*sin(angle), Oradius*cos(angle), Oradius*sin(angle))
}

