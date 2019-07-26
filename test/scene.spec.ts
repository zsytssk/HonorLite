import Alert from 'view/pop/alert';
import { Test } from './testBuilder';
import Start from 'view/scenes/start';
import { sleep } from './utils/testUtils';

export default new Test('scene', runner => {
    /** 切换场景 url --> 关闭 */
    runner.describe('open_scene', async () => {
        await Alert.preOpen(`this is a test!`);
        await sleep(2);
        Start.preEnter();
    });

    /** 打开弹出层 url --> 关闭 */
    runner.describe('open_scene', async () => {});
});
