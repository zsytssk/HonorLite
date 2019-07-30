import { ui } from '../../ui/layaMaxUI';
import { HonorLoadScene, HonorDialog } from 'honor/ui/view';
import { Honor } from 'honor';

/** loading场景 */
export default class Loading extends ui.scenes.loadingUI {
    public zOrder: 100;
    constructor() {
        super();
        this.popupEffect = undefined;
        this.closeEffect = undefined;
    }

    public onShow() {
        // Laya.stage.addChild(this);
        this.open(false);
        Honor.director.openDialog(this);
        console.log('LoadingScene onReset');
    }

    public onHide() {
        this.removeSelf();
        console.log('LoadingScene onReset');
    }

    public onProgress(val: number) {
        this.progress.value = val;
    }
}
