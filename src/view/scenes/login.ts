import * as Honor from 'honor.js';
import { ui } from '../../ui/layaMaxUI';
import Start from './start';

export default class Login extends ui.scenes.loginUI {
    public static preEnter() {
        Honor.director.runScene('scenes/login.scene', '参数1', '参数2');
    }
    public onMounted(...params) {
        console.log(...params);
        this.initEvent();
    }
    public onResize(width: number, height: number) {
        console.log('Scene onResize', width, height);
    }
    private initEvent() {
        const { open_dialog, enter_start } = this;
        const { CLICK } = Laya.Event;
        open_dialog.on(CLICK, this, () => {
            console.log('openDialog');
            Honor.director.openDialog('pop/alert.scene', [
                'this is a message!',
            ]);
        });
        enter_start.on(CLICK, this, () => {
            console.log('enter_start');
            Start.preEnter();
        });
    }
}
