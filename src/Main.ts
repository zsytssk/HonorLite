import GameConfig from './GameConfig';
import * as Honor from 'honor.js';
import './ui/layaMaxUI';
import Login from './view/scenes/login';

function onStart() {
    Honor.director.setLoadPageForScene(
        'Scenes/Loading.scene',
        Laya.Handler.create(this, () => {
            Login.preEnter();
        })
    );
}

Honor.run(GameConfig, onStart);
