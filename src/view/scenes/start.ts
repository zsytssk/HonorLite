import { ui } from '../../ui/layaMaxUI';
import * as Honor from 'honor';
import Login from './login';

export default class Start extends ui.scenes.startUI {
    public static preEnter() {
        Honor.director.runScene('scenes/start.scene', '参数1', '参数2');
    }
    public onMounted(...params) {
        const { btn_back } = this;
        const { CLICK } = Laya.Event;

        btn_back.on(CLICK, this, () => {
            console.log('btn_back');
            Login.preEnter();
        });
    }
}
