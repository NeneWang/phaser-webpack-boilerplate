
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 200 }
    }
  },
  scene: {
    preload,
    create,
    update: update

  }
};


function preload () {
  // This is the scene - and contains the properties whens starting.
  this.load.image('sky', 'assets/sky.png');
  this.load.image('bird', 'assets/bird.png');

}


const VELOCITY = 200;
const FLAP_VELOCITY = 300;
const initalBirdPosition = {x: config.width * 0.1, y: config.height / 2}

let bird = null;

function create () {
  this.add.image(0, 0, 'sky').setOrigin(0);

  bird = this.physics.add.sprite(initalBirdPosition.x, initalBirdPosition.y, 'bird').setOrigin(0)
  // bird.body.velocity.x = VELOCITY;
  
  this.input.on("pointerdown", flap)

  this.input.keyboard.on("keydown_SPACE", flap)


}

function restartBirdPosition(){
  bird.x = initalBirdPosition.x;
  bird.y = initalBirdPosition.y;


}




function flap(){
  // debugger
  bird.body.velocity.y = -FLAP_VELOCITY;
}


function update(time, delta){
  // If the bird y position is small than 0 or greater than height oof the cnavas then alert they have lost.

  if(bird.y > config.height || bird.y < - bird.height){
    alert("You have lost")
  }
}

function restartPlayerPosition(){

}


new Phaser.Game(config);