import { ui } from '../../ui/layaMaxUI';
import { HonorLoadScene } from 'honor';

/** loading场景 */
export default class LoadingScene extends ui.scenes.loadingUI
    implements HonorLoadScene {
    constructor() {
        super();
    }

    public onShow() {
        console.log('LoadingScene onReset');
    }

    public onReset() {
        console.log('LoadingScene onReset');
    }

    public onProgress(val: number) {
        this.progress.value = val;
    }
}
