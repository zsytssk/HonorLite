/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = 'sensor_landscape';

//-----libs-begin-----
loadLib('libs/laya.core.js?v=' + CDN_VERSION);
loadLib('libs/laya.webgl.js?v=' + CDN_VERSION);
loadLib('libs/laya.ani.js?v=' + CDN_VERSION);
loadLib('libs/laya.filter.js?v=' + CDN_VERSION);
loadLib('libs/laya.html.js?v=' + CDN_VERSION);
loadLib('libs/laya.ui.js?v=' + CDN_VERSION);
loadLib('libs/laya.effect.js?v=' + CDN_VERSION);
loadLib('libs/bytebuffer.js?v=' + CDN_VERSION);
loadLib('libs/BigInteger.min.js?v=' + CDN_VERSION);
loadLib('libs/crypto-js.min.js?v=' + CDN_VERSION);
//-----libs-end-------
loadLib('js/bundle.js?v=' + CDN_VERSION);
