import GameConfig from './GameConfig';
import { Honor } from 'honor';
import * as version from '../bin/version.json';
import './ui/layaMaxUI';
import Login from './view/scenes/login';

declare global {
    interface Window {
        CDN_VERSION: string;
    }
}

async function main() {
    await Honor.run(GameConfig, {
        versionPath: version,
        defaultVersion: window.CDN_VERSION,
    });
    await Honor.director.setLoadPageForScene('scenes/loading.scene');

    Login.preEnter();
}
main();
