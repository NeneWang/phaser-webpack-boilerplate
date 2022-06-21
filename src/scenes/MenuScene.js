
import BaseScene from "./BaseScene";

class MenuScene extends BaseScene {
    constructor(config) {
        super('MenuScene', config);

        this.menu = [
            { scene: 'PlayScene', text: 'Play' },
            { scene: 'Score', text: 'Score' },
            { scene: null, text: "Exit" }
        ]


    }

    create() {
        super.create()
        this.createMenu(this.menu, () => this.setupMenuEvets() );
    }

    setupMenuEvets(menuItem) {
        const textGO = menuItem.textGO;
        textGO.setInteractive();

        textGO.on('pointerover', () => {
            textGO.setStyle({ fill: '#ff0' })
        })

        textGO.on('pointerout', () => {
            textGO.setStyle({ fill: '#fff' })
        })
    }


}

export default MenuScene;










