// Caracteristicas da bola uwu
let xBacon = 300;
let ySalada = 200;
let diametro = 15;
let r = diametro/2;

//V da bola uwu
let vX = 6;
let vY = 6;

// Caracteristicas raquete -_-
let xRaquete = 5;
let yRaquete = 150;
let raqueteTamanhoX = 10;
let raqueteTamanhoY = 90;

let xOpp = 580;
let yOpp = 150;
let vOppY;

let meusPontos = 0;
let oppPontos = 0;

// Sons kkj
let raquetada;
let ponto1;
let ponto2;
let ost;

function preload() {
  ost = loadSound("eder - pongcraft.mp3");
  ponto1 = loadSound("ponto1.mp3");
  ponto2 = loadSound("ponto2.mp3");
  raquetada = loadSound("raquetada.wav");
}

let hit = false;

function setup() {
  createCanvas(600, 400);
  ost.loop();
}

function draw() {
  background(0);
  bolinha();
  moveBola();
  colisaoBola();   
  raqueteUwU(xRaquete, yRaquete);
  raqueteUwU(xOpp, yOpp);
  moveRaquete();
  moveRaqOpp();
  //colisaoRaq();
  
  colRaqLib(xRaquete, yRaquete);
  colRaqLib(xOpp, yOpp);
  incluiPlacar();
  marcaPontokk();
  
}

function raqueteUwU(x, y) {
  rect(x, y, raqueteTamanhoX, raqueteTamanhoY)
}
function moveRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function moveRaqOpp() {
    if (keyIsDown(87)) {
    yOpp -= 10;
  }
  if (keyIsDown(83)) {
    yOpp += 10;
  }
}

function bolinha() {
  circle(xBacon, ySalada, diametro);
  //rect(xBacon, ySalada, 15, 15)
}
function moveBola() {
  xBacon += vX;
  ySalada += vY;
}
function colisaoBola() {
  if (xBacon > width - r || xBacon < 0 + r) {
    vX *= -1;
    
  }
  
  if (ySalada > height || ySalada  < 0) {
    vY *= -1;
    
  }
}

function colisaoRaq() {
  if (xBacon - r < xRaquete + raqueteTamanhoX && ySalada - r < yRaquete + raqueteTamanhoY && ySalada + r > yRaquete) {
    vX *= -1;
  }
}
function colRaqLib(x, y) {
  hit = collideRectCircle(x,y,raqueteTamanhoX,raqueteTamanhoY,xBacon,ySalada,r);
  if (hit) {
    vX *= -1
    raquetada.play();
  }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  
  fill(color(255,140,0));
  rect(150, 10, 40, 20);
  fill(255);
  
  fill(color(255,140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  text(oppPontos, 470, 26)
}
function marcaPontokk() {
  if (xBacon > 590){
    
    meusPontos += 1;
    ponto1.play();
    
  }
  if (xBacon < 10) {
    
    oppPontos += 1;
    ponto2.play();
    
  }
}
