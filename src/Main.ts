import GameConfig from './GameConfig';
import * as Honor from 'honor.js';
import './ui/layaMaxUI';
import Login from './view/scenes/login';

function onStart() {
    Login.preEnter();
}

Honor.run(GameConfig, onStart);
