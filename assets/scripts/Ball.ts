// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BallClass extends cc.Component {


    @property(cc.Integer)
    bounceHeight = 600;

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Integer)
    xShift = 0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    getBounceAction(): cc.Action {
        const u = cc.moveBy(1, cc.v2(this.xShift, this.bounceHeight)).easing(cc.easeCircleActionOut());
        const d = cc.moveBy(1, cc.v2(this.xShift, -this.bounceHeight)).easing(cc.easeCircleActionIn());
        return cc.repeatForever(cc.sequence(u, d));
    }


    setupControls() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event: cc.Event.EventKeyboard) => {
            switch (event.keyCode) {
                case cc.macro.KEY.left:
                    this.xShift -= 1;
                    break;
                case cc.macro.KEY.right:
                    this.xShift += 1;
                    break;
            }  
            console.log(this.xShift);
        }
    }

    onLoad() {
        this.setupControls();
        this.node.runAction(this.getBounceAction());
    }

    // update (dt) {}
}
