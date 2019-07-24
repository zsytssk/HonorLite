import { ui } from '../../ui/layaMaxUI';
import honor, { HonorDialog } from 'honor';

export const alert_url = `pop/alert.scene`;
export default class Alert extends ui.pop.alertUI implements HonorDialog {
    private close_callback: (msg) => void;
    constructor() {
        super();
    }
    public static preOpen(msg: string) {
        return honor.director.openDialog(alert_url, [msg]);
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
            this.close('sdfsdfsdf');
        });
        btn_cancel.on(CLICK, this, () => {
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
