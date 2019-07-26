import { ui } from '../../ui/layaMaxUI';
import { HonorLoadScene } from 'honor/ui/view';

/** loading场景 */
export default class Loading extends ui.scenes.loadingUI
    implements HonorLoadScene {
    constructor() {
        super();
    }

    public onShow() {
        Laya.stage.addChild(this);
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
