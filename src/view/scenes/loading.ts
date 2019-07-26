import { ui } from '../../ui/layaMaxUI';
import { HonorScene } from 'honor/ui/directorView';

/** loading场景 */
export default class LoadScene extends ui.scenes.loadingUI
    implements HonorScene {
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
