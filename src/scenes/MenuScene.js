
import BaseScene from "./BaseScene";

class MenuScene extends BaseScene{
    constructor(config){
        super('MenuScene', config);
        
    }


    create(){
        super.create()
        this.add.image(0, 0, 'sky').setOrigin(0);
        
    }
}

export default MenuScene;










