
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
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

let bird = null;
function create () {

  // x
  // y
  // Key of the image
console.log("somasda")
this.add.image(0, 0, 'sky').setOrigin(0);

  bird = this.physics.add.sprite(config.width * 0.1, config.height / 2, 'bird').setOrigin(0)
  bird.body.gravity.y = 200;
  
  console.log(bird.body)
  debugger

}
// Updated 60 times a second (60fps)
function update(time, delta){
  console.log(bird.body.velocity.y)
}

new Phaser.Game(config);