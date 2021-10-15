var backgroundImg, rockImg, sciImg, paperImg, playerImg, computerImg, playerMad, pcMad, playerHappy, pcHappy;
var rock, paper, sci, player, computer;
var score = 0;
var computerScore = 0;

function preload() {

  backgroundImg = loadImage("background.jpg");
  rockImg = loadImage("rock.jpg");
  paperImg = loadImage("paper.jpg");
  sciImg = loadImage("sci.jpg");
  playerImg = loadImage("player.png");
  computerImg = loadImage("computer.png");
  playerHappy = loadImage("playerHappy.png");
  pcHappy = loadImage("pcHappy.png");
  playerMad = loadImage("playerMad.png");
  pcMad = loadImage("pcMad.png");
  
}

function setup() {
  createCanvas(800,800);

  player = createSprite(100,750,10,10);
  player.addImage("playing", playerImg);
  player.addImage("happy", playerHappy);
  player.addImage("mad", playerMad);
  player.scale = 0.3;

  computer = createSprite(700,730,10,10);
  computer.addImage("playing", computerImg);
  computer.addImage("happy", pcHappy);
  computer.addImage("mad", pcMad);
  computer.scale = 0.7;
}

function draw() {
  background(backgroundImg);  

textSize(40);
fill("red");
text(score + " - " + computerScore , 350, 730);

  drawSprites();
}