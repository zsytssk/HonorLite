import { ui } from '../../ui/layaMaxUI';
import honor, { HonorDialog, HonorDialogConfig } from 'honor';

export const alert1_url = `pop/alert1.scene`;
export default class Alert1 extends ui.pop.alert1UI implements HonorDialog {
    private close_callback: (msg) => void;
    public config: HonorDialogConfig;
    constructor() {
        super();
    }
    public static preOpen(msg: string) {
        return honor.director.openDialog(alert1_url, [msg]);
    }
    public onClosed(t) {
        console.log(t);
        if (this.close_callback) {
            this.close_callback(t);
        }
    }
}
