import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('hello')
export class hello extends Component {
    start() {
        console.log('hello test started');
    }

    update(deltaTime: number) {
        
    }
}

