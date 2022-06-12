
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: { y: 200 }
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


const VELOCITY = 600;

let bird = null;
function create () {
  this.add.image(0, 0, 'sky').setOrigin(0);

  bird = this.physics.add.sprite(config.width * 0.1, config.height / 2, 'bird').setOrigin(0)
  bird.body.velocity.x = VELOCITY;
  
  console.log(bird.body)

}
// Updated 60 times a second (60fps)

let totalDelta = 0

function update(time, delta){
  
  if(bird.x >= config.width){
    bird.body.velocity.x = -VELOCITY;
  }else if (bird.x <= 0){
    bird.body.velocity.x = VELOCITY;
  }

}

new Phaser.Game(config);