
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
    preload: preload,
    create: create
  }
};

new Phaser.Game(config);

function preload () {
  // This is the scene - and contains the properties whens starting.
  this.load.image('sky', 'assets/sky.png');





}

function create () {

  // x
  // y
  // Key of the image


  this.add.image(config.width/2, config.height/2, 'sky');
}
