import { ui } from '../../ui/layaMaxUI';
import { HonorDialog } from 'honor';

export default class Alert extends ui.pop.alertUI implements HonorDialog {
    private close_callback: (msg) => void;
    constructor() {
        super();
        // this.popupEffect = null;
    }
    /** 只会在弹出层第一次创建完成的时候执行 */
    public onAwake() {
        this.initEvent();
    }
    public onMounted(msg: string, close_callback: (msg) => void) {
        this.msg.text = msg;
        this.close_callback = close_callback;
    }
    private initEvent() {
        const { btn_confirm, btn_cancel } = this;
        const { CLICK } = Laya.Event;
        btn_confirm.on(CLICK, this, () => {
            console.log('btn_confirm');
            this.close('sdfsdfsdf');
        });
        btn_cancel.on(CLICK, this, () => {
            console.log('btn_cancel');
            this.close('sdfsfssdfsdfsd1');
        });
    }
    public onClosed(t) {
        console.log(t);
        if (this.close_callback) {
            this.close_callback(t);
        }
    }
}
