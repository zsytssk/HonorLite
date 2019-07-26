import { HonorScene } from '../directorView';
import { SceneCtor } from './loaderManager';
import { loaderManager, directorView } from '../../state';
import { resolve } from 'dns';

export type SceneChangeListener = (
    cur1: string,
    cur2: string,
) => boolean | void;
export type SceneChangeData = { cur: string; prev: string };
export type SceneClassMap = { [key: string]: HonorScene };

export type SceneRefUrl = string | Ctor<HonorScene>;
type SceneMap = Map<SceneRefUrl, HonorScene>;
export class SceneManagerCtor {
    public sceneChangeBeforeListener = [] as SceneChangeListener[];
    public sceneChangeAfterListener = [] as SceneChangeListener[];
    public sceneClassMap: SceneClassMap = {};
    public scene_pool = new Map() as SceneMap;
    private cur_scene: HonorScene;

    public onResize(width, height) {
        if (this.cur_scene) {
            this.cur_scene.size(width, height);
            if (this.cur_scene.onResize) {
                this.cur_scene.onResize(width, height);
            }
        }
    }

    public getCurScene() {
        return this.cur_scene;
    }
    public setLoadingScene(url: string) {
        return new Promise((resolve, reject) => {
            Laya.Scene.load(
                url,
                Laya.Handler.create(null, scene => {
                    Laya.Scene.setLoadingPage(scene);
                    resolve();
                }),
            );
        });
    }

    public switchScene(params: any[], scene: HonorScene): SceneChangeData {
        const { scene_pool } = this;
        const { width, height } = Laya.stage;
        scene.size(width, height);

        const old_scene = this.cur_scene;
        const prev = old_scene ? old_scene.url : null;

        this.cur_scene = scene;
        scene.open(true);
        if (scene.onMounted) {
            scene.onMounted.apply(scene, params);
        }

        if (old_scene && !old_scene.destroyed) {
            scene_pool.set(prev, old_scene);
        }

        const cur = scene.url;
        return {
            cur,
            prev,
        };
    }
    private callChangeListener(
        type: 'after' | 'before',
        ...params: string[]
    ): boolean {
        let listener;
        if (type === 'before') {
            listener = this.sceneChangeBeforeListener;
        } else if (type === 'after') {
            listener = this.sceneChangeAfterListener;
        }

        for (const fn of listener) {
            const result = fn(...params);
            if (result) {
                return result;
            }
        }
    }
    /** 运行场景 */
    public runScene(url: SceneRefUrl, ...params): Promise<Laya.Scene> {
        return new Promise(async (resolve, reject) => {
            /** 场景切换前执行, 如果被截取 就不进入场景 */
            const before_handle = this.callChangeListener(
                'before',
                this.cur_scene && this.cur_scene.url,
                url,
            );
            if (before_handle) {
                return reject(
                    `has callChangeListener interrupt open:> ${url} `,
                );
            }

            let scene: HonorScene = this.scene_pool.get(url);
            let change_data: { cur: string; prev: string };
            if (scene) {
                change_data = this.switchScene(params, scene);
            } else if (typeof url === 'string') {
                scene = await new Promise((_resolve, _reject) => {
                    Laya.Scene.showLoadingPage(undefined, 1);
                    Laya.Scene.load(
                        url,
                        Laya.Handler.create(null, scene => {
                            _resolve(scene);
                            Laya.Scene.hideLoadingPage();
                        }),
                    );
                });
            } else if (typeof url === 'function') {
                scene = new url();
                await new Promise((resolve, reject) => {
                    scene.once('onViewCreated', this, () => {
                        return resolve();
                    });
                });
            }

            change_data = this.switchScene(params, scene);
            this.callChangeListener('after', change_data.cur, change_data.prev);
            return resolve(scene);
        });
    }
}
