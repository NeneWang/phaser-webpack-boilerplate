
import BaseScene from "./BaseScene";

class PauseScene extends BaseScene {
    constructor(config) {
        super('PauseScene', config);

        this.menu = [
            { scene: 'PlayScene', text: 'Continue' },
            { scene: 'MenuScene', text: 'Exit' },
        ]


    }

    create() {
        super.create()
        this.createMenu(this.menu, this.setupMenuEvets.bind(this));
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

        textGO.on('pointerup', () => {
            // console.log("Clicking on Some Option!")
            console.log(menuItem)
            if (menuItem.scene && menuItem.text === "Continue") {
                // Shutting Down the Pause Scene and resuming the  PlayScene
                this.scene.stop();
                this.scene.resume(menuItem.scene);

            } else {
                // PlayScene, PauseScene and Running Menu
                this.scene.stop('PlayScene');
                this.scene.start(menuItem.scene);
            }

        })
    }


}

export default PauseScene;

