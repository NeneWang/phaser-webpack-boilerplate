
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

let bird = null;


function create () {
  this.add.image(0, 0, 'sky').setOrigin(0);

  bird = this.physics.add.sprite(config.width * 0.1, config.height / 2, 'bird').setOrigin(0)
  // bird.body.velocity.x = VELOCITY;
  
  this.input.on("pointerdown", flap)

  this.input.keyboard.on("keydown_SPACE", flap)


}

function flap(){
  // debugger
  bird.body.velocity.y = -VELOCITY;
}


function update(time, delta){
  

}

new Phaser.Game(config);