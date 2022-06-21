
import Phaser from 'phaser';

class BaseScene extends Phaser.Scene {
    constructor(key, config) {
        super(key);
        this.config = config;
        this.screenCenter = [config.width / 2, config.height / 2];
    }

    create() {
        this.add.image(0, 0, 'sky').setOrigin(0);

    }

    createMenu(menu) {
        menu.forEach(menu => {
            const menuPosition = [...this.screenCenter];
            this.add.text(...menuPosition, menuItem.text, {fontSize});
        })
    }


    sayHello() {
        alert('Hello Guys!')
    }
}

export default BaseScene;



