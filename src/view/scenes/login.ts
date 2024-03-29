import { Honor, HonorScene } from 'honor';
import { ui } from '../../ui/layaMaxUI';
import Start from './start';

export default class Login extends ui.scenes.loginUI implements HonorScene {
    public static async preEnter() {
        Honor.director.runScene('scenes/login.scene', '参数1', '参数2');
    }
    public onMounted(...params) {
        console.log(...params);
    }
    public onResize(width: number, height: number) {
        console.log('Scene onResize', width, height);
    }
    public onAwake(...params) {
        console.log(...params);
        this.initEvent();
    }
    public onEnable(...params) {
        console.log(...params);
    }
    private initEvent() {
        const { open_dialog, enter_start } = this;
        const { CLICK } = Laya.Event;
        open_dialog.on(CLICK, this, () => {
            console.log('openDialog');
            Honor.director.openDialog('pop/alert.scene', [
                'sasdasdasdasd',
                msg => {
                    console.log(msg);
                },
            ]);
        });
        enter_start.on(CLICK, this, () => {
            console.log('enter_start');
            Start.preEnter();
        });
    }
}
