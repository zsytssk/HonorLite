import GameConfig from './GameConfig';
import { Honor } from 'honor';
import './ui/layaMaxUI';
import Login from './view/scenes/login';

function onStart() {
    Honor.director.setLoadPageForScene(
        'Scenes/Loading.scene',
        Laya.Handler.create(this, () => {
            // Honor.director.runScene('scenes/login.scene', '参数1', '参数2');
            Login.preEnter();
        }),
    );
}

Honor.run(GameConfig, onStart);
