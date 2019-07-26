import GameConfig from './GameConfig';
import './ui/layaMaxUI';
import Login from './view/scenes/login';
import honor from 'honor';

declare global {
    interface Window {
        CDN_VERSION: string;
    }
}

async function main() {
    await honor.run(GameConfig, {
        defaultVersion: window.CDN_VERSION,
    });
    await honor.director.setLoadPageForScene('scenes/loading.scene');
    await honor.director.setLoadPageForDialog('scenes/loading.scene');

    Login.preEnter();
}
main();
