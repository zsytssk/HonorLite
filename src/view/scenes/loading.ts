import { ui } from '../../ui/layaMaxUI';
import { HonorLoadScene } from 'honor';

/** loading场景 */
export default class HonorLoadScene extends ui.scenes.loadingUI
    implements HonorLoadScene {
    constructor() {
        super();
        this.on(Laya.Event.PROGRESS, this, this.onProgress.bind(this));
    }

    public onOpened() {
        console.log('LoadingScene onReset');
    }

    public onReset() {
        console.log('LoadingScene onReset');
    }

    public onProgress(val: number) {
        this.progress.value = val;
    }
}
