var canvas;
var database;
var bg;
var redHorseImg;
var redHorseAni;
var greenHorseImg;
var greenHorseAni;
var track;
var gameState;
var playerCount;
var player;
var game;
var form;
var obstacle1Image;
var obstacle2Image;
var obstacle3Image;
var powerCoinImage;
var lifeImage;
var boomImg;
var FootstepSound;
var horse1;
var horse2;
var food1;
var food2;
var horses = [];
var powerCoins,obstacles,food;

function preload() {
  bg = loadImage("./assets/bg.jpg");
  redHorseImg = loadAnimation("./assets/red1.gif");
  redHorseAni = loadAnimation("./assets/red2.gif");
  greenHorseImg = loadAnimation("./assets/green1.png");
  greenHorseAni = loadAnimation("./assets/green2.gif");
  track = loadImage("./assets/Track.jpg");
  obstacle1Image = loadImage("./assets/WoodObt1.png");
  obstacle2Image = loadImage("./assets/stoneObt2.png");
  obstacle3Image = loadImage("./assets/boxObt3.jpg");
  powerCoinImage = loadImage("./assets/coin.png");
  lifeImage = loadImage("./assets/life.png");
  boomImg = loadImage("./assets/boom.png");
  // FootstepSound = loadSound("./assets/footstep.wav");
  food1 = loadImage("./assets/food1.png");
  food2 = loadImage("./assets/food2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(bg);
  if(playerCount === 2){
    game.update(1);
  }
  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
