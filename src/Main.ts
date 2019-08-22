import GameConfig from './GameConfig';
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

    const task1 = honor.director.setLoadPageForScene('scenes/loading.scene');
    const task2 = honor.director.setLoadPageForDialog('scenes/loading.scene');
    await Promise.all([task1, task2]);
    Login.preEnter();
}
main();
