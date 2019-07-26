import Alert from 'view/pop/alert';
import { Test } from './testBuilder';
import Start from 'view/scenes/start';

export default new Test('scene', runner => {
    /** 打开弹出层 url --> 关闭 */
    runner.describe('open_scene', async () => {
        await Alert.preOpen(`this is a test!`);
        Start.preEnter();
    });
});
