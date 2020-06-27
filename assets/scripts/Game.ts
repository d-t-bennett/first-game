// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    update(dt) {
        console.log(dt);
        this.node.setPosition(this.node.position.x -= 100 * dt, this.node.position.y, this.node.position.z);
        if (this.node.position.x < -(this.node.parent.width / 2) - this.node.width / 2)
            this.node.setPosition(this.node.parent.width/2 + this.node.width /2, this.node.position.y, this.node.position.z);
    }

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
