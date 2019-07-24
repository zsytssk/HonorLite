import { Test } from '../testBuilder';
import Alert, { alert_url } from 'view/pop/alert';
import { sleep } from '../utils/testUtils';
import honor from 'honor';
import Tip from 'view/pop/tip';

export default new Test('honor_test', runner => {
    /** 打开弹出层 --> 关闭 */
    runner.describe('open_dialog', async () => {
        const dialog = await Alert.preOpen(`this is a test!`);
        console.log(dialog);
        await sleep(3);
        honor.director.closeDialogByName(alert_url);
    });

    /** 获取 弹出层 */
    runner.describe('close_dialog_all', async () => {
        await Alert.preOpen(`this is a test!`);
        const dialog = honor.director.getDialogByName('alert');
        await sleep(3);
        honor.director.closeAllDialogs();
    });

    /** 关闭所有 弹出层 */
    runner.describe('close_dialog_all', async () => {
        await Alert.preOpen(`this is a test!`);
        await sleep(1);
        await Tip.preOpen(`this is a test!`);
        await sleep(3);
        honor.director.closeAllDialogs();
    });

    /** 切换场景 */
    runner.describe('change_scene', async () => {});

    /** 设置loading */
    runner.describe('loading', async () => {});
});
