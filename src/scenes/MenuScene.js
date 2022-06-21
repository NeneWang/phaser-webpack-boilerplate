
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
        this.createMenu(this.menu, this.setupMenuEvets);
    }

    setupMenuEvets(menuItem) {
        const textGO = menuItem.textGO;
        
    }


}

export default MenuScene;










