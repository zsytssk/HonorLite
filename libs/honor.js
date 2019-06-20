!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.honor=t():e.honor=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(6),i=n(4),a=n(7),s=n(8),c=n(13);t.director=new c.DirectorCtor;var u=!1;t.untilInit=function(){return new Promise(function(e,t){if(u)return e();r=e})},t.initState=function(){t.directorView=new i.DirectorViewCtor,t.sceneManager=new a.SceneManagerCtor,t.loaderManager=new s.LoaderManagerCtor,t.dialogManager=new o.DialogManagerCtor,t.director.init(),r&&(r(),u=!0,r=void 0)}},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.loadRes=function(t,n){var r=this;return new Promise(function(o,i){var a;n&&(a=new Laya.Handler(null,function(e){n(e)},null,!1));var s=new Laya.Handler(r,function(){e(o)});Laya.loader.load(t,s,a)})}}).call(this,n(9).setImmediate)},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.director=i.director;var a=n(14);t.utils=a.utils;var s=n(1),c=n(22);t.HonorScene=c.HonorScene;var u=n(4);t.HonorLoadScene=u.HonorLoadScene;var l=n(3);t.HonorDialog=l.HonorDialog,t.HonorDialogConfig=l.HonorDialogConfig;t.name="Honor";t.version="0.0.1-beta";var f=!1;function p(e,n){return void 0===n&&(n={}),r(this,void 0,void 0,function(){var a,c,u,l,p=this;return o(this,function(h){switch(h.label){case 0:return window.Laya3D?Laya3D.init(e.width,e.height):Laya.init(e.width,e.height,Laya.WebGL),Laya.Physics&&Laya.Physics.enable(),Laya.DebugPanel&&Laya.DebugPanel.enable(),Laya.stage.scaleMode=e.scaleMode,Laya.stage.screenMode=e.screenMode,Laya.stage.alignV=e.alignV,Laya.stage.alignH=e.alignH,Laya.URL.exportSceneToJson=e.exportSceneToJson,e.debug||"true"==Laya.Utils.getQueryString("debug")?(t.DEBUG_MODE=f=!0,Laya.enableDebugPanel()):t.DEBUG_MODE=f=!1,e.physicsDebug&&Laya.PhysicsDebugDraw&&Laya.PhysicsDebugDraw.enable(),e.stat&&Laya.Stat.show(),Laya.alertGlobalError=!1,a=n.defaultVersion,c=n.versionPath,a=a||"0",Laya.URL.customFormat=function(e){var t=Laya.URL.version||{};if(e.indexOf("data:image")<0&&e.indexOf("?")<0&&e.indexOf("?v=")<0){var n=t[e];!n&&a&&(n=a),e+="?v="+n}return e},u=[],l=new Promise(function(e,t){Laya.AtlasInfoManager.enable("fileconfig.json",Laya.Handler.create(null,function(){return r(p,void 0,void 0,function(){return o(this,function(t){return e(),[2]})})}))}),u.push(l),c&&u.push(s.loadRes([c])),[4,Promise.all(u)];case 1:return h.sent(),Laya.URL.version=Laya.loader.getRes(c),i.initState(),[2]}})})}t.DEBUG_MODE=f,t.run=p,t.Honor={name:"Honor",version:"0.0.1-beta",run:p,director:i.director,utils:a.utils,DEBUG_MODE:f}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_CONFIG={closeOther:!1,closeOnSide:!1,closeByGroup:!1,closeByName:!1,shadowAlpha:.5,shadowColor:"#000000",autoClose:!1,useExit:!0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=["SceneManager","DialogManager","LoadManager","AlertManager"],i={Scene:null,Dialog:null},a={},s=function(){function e(){for(var e=0,t=o;e<t.length;e++){var n=t[e],r=new Laya.Sprite;r.name="_$"+n,this[r.name]=r,Laya.stage.addChild(r)}}return e.prototype.onResize=function(e,t){for(var n=0,r=o;n<r.length;n++){this["_$"+r[n]].size(e,t)}for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];s&&(s.size(e,t),s.onResize&&s.onResize(e,t))}},e.prototype.createLoadViewByData=function(e,t,n){var r=this;return new Promise(function(o,i){if(!n)return i('Can not find "Scene":'+t);if(!n.props)return i('"Scene" data is error:'+t);var a=n.props.runtime?n.props.runtime:n.type,s=Laya.ClassUtils.getClass(a);r.createView(n,s,t).then(function(t){r.createLoadViewByClass(e,t),o()})})},e.prototype.createLoadViewByClass=function(e,t){var n=Laya.stage,r=n.width,o=n.height;t.size(r,o),t.onReset&&t.onReset(),this.addView("Load",t),i[e]=t},e.prototype.recoverView=function(e){var t=e.url||e.constructor.name;a[t]||(a[t]=[]),a[t].push(e)},e.prototype.getViewByPool=function(e){return a[e]?a[e].pop():null},e.prototype.createView=function(e,t,n,r){return new Promise(function(o,i){var a=new t;if(r&&a.onMounted&&a.onMounted.apply(a,r),"instance"===e.props.renderType&&(a=t.instance||(t.instance=a)),a&&(a instanceof Laya.Scene||a instanceof Laya.Dialog))return a.url=n,void(a._getBit(8)?(a.on("onViewCreated",null,function(){o(a)}),a.createView(e)):o(a));throw new Error("Can not find Scene:"+n)})},e.prototype.setLoadView=function(e,t){var n=this;return r.loaderManager.loadScene(null,t).then(function(r){n.createLoadViewByData(e,t,r)})},e.prototype.setLoadViewVisible=function(e,t){var n=i[e];n&&!n.destroyed&&(n.visible=t,t?n.onShow&&n.onShow():n.onReset&&n.onReset())},e.prototype.setLoadProgress=function(e,t){var n=i[e];n&&n.onProgress&&n.onProgress(t)},e.prototype.getView=function(e){return this["_$"+e+"Manager"]},e.prototype.setViewVisible=function(e,t){this["_$"+e+"Manager"].visible=t},e.prototype.addView=function(e,t){this["_$"+e+"Manager"].addChild(t)},e.prototype.addViewAt=function(e,t,n){this["_$"+e+"Manager"].addChildAt(t,n)},e}();t.DirectorViewCtor=s},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(3),u=n(0),l=Laya.Tween,f=Laya.Sprite,p=function(e){e.scale(1,1),e._effectTween=Laya.Tween.from(e,{x:Laya.stage.width/2,y:Laya.stage.height/2,scaleX:0,scaleY:0},300,Laya.Ease.backOut,Laya.Handler.create(this,this.doOpen,[e]),0,!1,!1)},h=function(e){e._effectTween=Laya.Tween.to(e,{x:Laya.stage.width/2,y:Laya.stage.height/2,scaleX:0,scaleY:0},300,Laya.Ease.backIn,Laya.Handler.create(this,this.doClose,[e]),0,!1,!1)},d=function(e){function t(){var t=e.call(this)||this;return t.viewContent=null,t.wait_open_dialog_map=new Map,t.dialog_list=[],t.maskLayerName="__$DialogManagerMaskLayer:"+Math.random(),t.popupEffectHandler=new Laya.Handler(t,p),t.closeEffectHandler=new Laya.Handler(t,h),t.maskLayer=new f,t.maskLayer.on("click",t,t.closeOnSide),t.maskLayer.name=t.maskLayerName,u.directorView.addView("Dialog",t.maskLayer),u.directorView.setViewVisible("Dialog",!1),t.viewContent=u.directorView.getView("Dialog"),t.viewContent.mouseThrough=!0,Laya.Dialog.manager=t,t}return o(t,e),t.prototype.getDialogConfig=function(e){for(var t=0,n=this.dialog_list;t<n.length;t++){var r=n[t];if(r.dialog===e)return r.config}},t.prototype.closeOnSide=function(){var e=this.viewContent,t=e.getChildAt(e.numChildren-1),n=this.getDialogConfig(t);t instanceof laya.ui.Dialog&&t.name!==this.maskLayerName&&t.isModal&&n.closeOnSide&&t.close()},t.prototype.onResize=function(e,t){var n=this.viewContent;this.maskLayer.size(e,t);for(var r=n.numChildren-1;r>-1;r--){var o=n.getChildAt(r);o.name!==this.maskLayerName&&(o.isPopupCenter&&this.centerDialog(o),o.onResize&&o.onResize(e,t))}this.checkMask()},t.prototype.centerDialog=function(e){e.x=Math.round((Laya.stage.width-e.width>>1)+e.pivotX),e.y=Math.round((Laya.stage.height-e.height>>1)+e.pivotY)},t.prototype.clearDialogEffect=function(e){Laya.timer.clear(e,e.close),e._effectTween&&(l.clear(e._effectTween),e._effectTween=null)},t.prototype.checkMask=function(){var e=this.viewContent;this.maskLayer.removeSelf();for(var t=e.numChildren-1;t>=0;t--){var n=e.getChildAt(t),r=this.getDialogConfig(n);if(n&&n.isModal)return this.maskLayer.graphics.clear(!0),this.maskLayer.graphics.drawRect(0,0,e.width,e.height,r.shadowColor),this.maskLayer.alpha=r.shadowAlpha,void u.directorView.addViewAt("Dialog",this.maskLayer,t)}0===e.numChildren&&u.directorView.setViewVisible("Dialog",!1)},t.prototype.openDialog=function(e,t,n,r){return void 0===r&&(r=!1),a(this,void 0,void 0,function(){var o,i,a,c,l=this;return s(this,function(s){switch(s.label){case 0:return r?(o=this.wait_open_dialog_map.get(e),i=void 0,o?[4,o.then(function(e){return e})]:[3,2]):[3,4];case 1:return i=s.sent(),[3,3];case 2:(a=this.dialog_list.find(function(t){return t.url===e}))&&(i=a.dialog),s.label=3;case 3:if(i)return t&&i.onMounted.apply(i,t),this.openDialogByClass(e,n,i),[2,i];s.label=4;case 4:return c=new Promise(function(r,o){var i=u.directorView.getViewByPool("function"==typeof e?e.name:e);if(i)return t&&i.onMounted.apply(i,t),l.openDialogByClass(e,n,i),r(i);"string"!=typeof e?"function"==typeof e&&(i=new e,t&&i.onMounted.apply(i,t),i.once("onViewCreated",l,function(){return l.openDialogByClass(e,n,i),r(i)})):u.loaderManager.loadScene("Dialog",e).then(function(o){l.openDialogByData(e,t,n,o).then(function(e){r(e)})})}),this.wait_open_dialog_map.set(e,c.then(function(t){return l.wait_open_dialog_map.delete(e),t})),[4,c];case 5:return[2,s.sent()]}})})},t.prototype.openDialogByData=function(e,t,n,r){var o=this;return new Promise(function(i,a){if(!r)throw new Error('Can not find "Dialog":'+e);if(!r.props)throw new Error('"Dialog" data is error:'+e);var s=r.props.runtime?r.props.runtime:r.type,c=Laya.ClassUtils.getClass(s);u.directorView.createView(r,c,e,t).then(function(t){o.openDialogByClass(e,n,t),i(t)})})},t.prototype.openDialogByClass=function(e,t,n){Laya.timer.callLater(this,function(){u.directorView.setViewVisible("Dialog",!0)}),this.clearDialogEffect(n);var r=i({},c.DEFAULT_CONFIG,n.config,t);this.dialog_list.push({dialog:n,config:r,url:e}),u.directorView.addView("Dialog",n),n.isPopupCenter&&this.centerDialog(n),r.closeOther&&this.closeAll(),n.group&&r.closeByGroup&&this.closeDialogsByGroup(n.group),n.name&&r.closeByName&&this.closeDialogByName(n.name),(n.isModal||this.viewContent._getBit(32))&&Laya.timer.callLater(this,this.checkMask),n.onResize&&(n.scale(1,1),n.onResize()),n.isShowEffect&&null!=n.popupEffect?n.popupEffect.runWith(n):this.doOpen(n)},t.prototype.doOpen=function(e){var t=this.getDialogConfig(e);t.autoClose&&Laya.timer.once(t.autoClose,e,e.close)},t.prototype.close=function(e){this.clearDialogEffect(e),null!=e.closeEffect&&e.closeEffect instanceof Laya.Handler?e.closeEffect.runWith([e]):this.doClose(e)},t.prototype.doClose=function(t){var n=this.dialog_list;e.prototype.doClose.call(this,t),t.autoDestroyAtClosed||u.directorView.recoverView(t);for(var r=0,o=n.entries();r<o.length;r++){var i=o[r],a=i[0];i[1].dialog===t&&n.splice(a,1)}Laya.timer.callLater(this,this.checkMask)},t.prototype.closeAll=function(){for(var e=this.viewContent,t=e.numChildren-1;t>-1;t--){var n=e.getChildAt(t);if(n.name===this.maskLayerName)break;this.close(n)}},t.prototype.closeDialogByName=function(e){if(e)for(var t=this.viewContent,n=t.numChildren-1;n>-1;n--){var r=t.getChildAt(n);if(r.name===e){this.close(r);break}}},t.prototype.closeDialogsByGroup=function(e){for(var t=this.viewContent,n=t.numChildren-1;n>-1;n--){var r=t.getChildAt(n);r&&r.group===e&&this.close(r)}},t.prototype.getDialogsByGroup=function(e){for(var t=this.viewContent,n=[],r=t.numChildren-1;r>-1;r--){var o=t.getChildAt(r);o&&o.group===e&&n.push(o)}return n},t.prototype.getDialogByName=function(e){for(var t=this.viewContent,n=t.numChildren-1;n>-1;n--){var r=t.getChildAt(n);if(r&&r.name===e)return r}},t}(Laya.DialogManager);t.DialogManagerCtor=d},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(){function e(){this.sceneChangeBeforeListener=[],this.sceneChangeAfterListener=[],this.sceneClassMap={}}return e.prototype.onResize=function(e,t){this.cur_scene&&(this.cur_scene.size(e,t),this.cur_scene.onResize&&this.cur_scene.onResize(e,t))},e.prototype.getCurScene=function(){return this.cur_scene},e.prototype.switchScene=function(e,t){var n=Laya.stage,r=n.width,o=n.height;t.size(r,o),t.onMounted&&t.onMounted.apply(t,e),i.directorView.addView("Scene",t);var a=this.cur_scene,s=a?a.url:null;return a&&(a.onClosed&&a.onClosed(),a.destroy()),this.cur_scene=t,{cur:t.url,prev:s}},e.prototype.callChangeListener=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];"before"===e?t=this.sceneChangeBeforeListener:"after"===e&&(t=this.sceneChangeAfterListener);for(var o=0,i=t;o<i.length;o++){var a=i[o].apply(void 0,n);if(a)return a}},e.prototype.runScene=function(e){for(var t=this,n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];return new Promise(function(a,s){return r(t,void 0,void 0,function(){var t,r,c,u=this;return o(this,function(o){switch(o.label){case 0:return this.callChangeListener("before",this.cur_scene&&this.cur_scene.url,e)?[2,s("has callChangeListener interrupt open:> "+e+" ")]:(t=i.directorView.getViewByPool(e))?(r=this.switchScene(n,t),[3,6]):[3,1];case 1:return"string"!=typeof e?[3,4]:[4,i.loaderManager.loadScene("Scene",e)];case 2:return c=o.sent(),[4,this.runSceneByCtor(e,c)];case 3:return t=o.sent(),r=this.switchScene(n,t),[3,6];case 4:return"function"!=typeof e?[3,6]:(t=new e,[4,new Promise(function(e,n){t.once("onViewCreated",u,function(){return e()})})]);case 5:o.sent(),r=this.switchScene(n,t),o.label=6;case 6:return this.callChangeListener("after",r.cur,r.prev),[2,a(t)]}})})})},e.prototype.runSceneByCtor=function(e,t){var n=this;return new Promise(function(r,o){if(!t)throw new Error('Can not find "Scene":'+e);if(!t.props)throw new Error('"Scene" data is error:'+e);var a=t.props.runtime?t.props.runtime:t.type,s=Laya.ClassUtils.getClass(a);n.sceneClassMap[e]=s,i.directorView.createView(t,s,e).then(function(e){r(e)})})},e}();t.SceneManagerCtor=a},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),a=n(0),s=n(12),c=function(){function e(){this.tmp_task={},this.scene_loader=new Laya.SceneLoader}return e.prototype.tmpLoadTask=function(e,t){var n=this,r=this.tmp_task[e];r||(r=[],this.tmp_task[e]=r),e&&(clearTimeout(this[e+"_timeout"]),a.directorView.setLoadViewVisible(e,!0)),s.tmpAsyncTask(r,t).then(function(t){e&&0===t&&(n[e+"_timeout"]=setTimeout(function(){a.directorView.setLoadViewVisible(e,!1)},500))})},e.prototype.loadScene=function(e,t){return r(this,void 0,void 0,function(){var n,r,i,a=this;return o(this,function(o){switch(o.label){case 0:return n=this.scene_loader,(r=Laya.Loader.getRes(t))?[2,r]:(Laya.loader.resetProgress(),i=new Promise(function(r,o){n.on(Laya.Event.PROGRESS,a,a.onLoadProgress,[e]),n.once(Laya.Event.COMPLETE,a,function(){n.off(Laya.Event.PROGRESS,null,a.onLoadProgress);var e=Laya.Loader.getRes(t);r(e)}),n.load(t)}),this.tmpLoadTask(e,i),[4,i]);case 1:return[2,o.sent()]}})})},e.prototype.load=function(e,t,n){var a=this,s=new Promise(function(s,c){return r(a,void 0,void 0,function(){var r,a=this;return o(this,function(o){switch(o.label){case 0:return t&&(r=function(e){a.onLoadProgress(t,e)}),[4,i.loadRes(e,r)];case 1:return o.sent(),n?[4,n]:[3,3];case 2:o.sent(),o.label=3;case 3:return[2,s()]}})})});return this.tmpLoadTask(t,s),s},e.prototype.onLoadProgress=function(e,t){e&&a.directorView.setLoadProgress(e,t)},e}();t.LoaderManagerCtor=c},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(10),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(5))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,s,c=1,u={},l=!1,f=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){d(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){d(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){d(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(d,0,e)}:(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&d(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(a+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return u[c]=o,r(c),c++},p.clearImmediate=h}function h(e){delete u[e]}function d(e){if(l)setTimeout(d,0,e);else{var t=u[e];if(t){l=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{h(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(5),n(11))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&h())}function h(){if(!l){var e=s(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||l||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tmpAsyncTask=function(e,t){return new Promise(function(n,r){e.push(t),t.then(function(){var r=e.indexOf(t);-1!==r&&e.splice(r,1),n(e.length)})})}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n(0),s=n(2),c=function(){function e(){}return e.prototype.init=function(){Laya.stage.on(Laya.Event.RESIZE,this,this.onResize),this.onResize()},e.prototype.onResize=function(){var e=Laya.stage,t=e.width,n=e.height;i.directorView.onResize(t,n),i.sceneManager.onResize(t,n),i.dialogManager.onResize(t,n)},e.prototype.runScene=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return i.sceneManager.runScene.apply(i.sceneManager,[e].concat(t)).catch(function(e){s.DEBUG_MODE&&console.error(e)})},Object.defineProperty(e.prototype,"runningScene",{get:function(){return i.sceneManager.getCurScene()},enumerable:!0,configurable:!0}),e.prototype.openDialog=function(e,t,n,r){return void 0===r&&(r=!1),i.dialogManager.openDialog(e,t,n,r)},e.prototype.load=function(e,t){return a.loaderManager.load(e,t)},e.prototype.getDialogByName=function(e){return i.dialogManager.getDialogByName(e)},e.prototype.getDialogsByGroup=function(e){return i.dialogManager.getDialogsByGroup(e)},e.prototype.closeDialogByName=function(e){i.dialogManager.closeDialogByName(e)},e.prototype.closeDialogsByGroup=function(e){i.dialogManager.closeDialogsByGroup(e)},e.prototype.closeAllDialogs=function(){i.dialogManager.closeAll()},e.prototype.setLoadPageForScene=function(e){return i.directorView.setLoadView("Scene",e)},e.prototype.setLoadPageForDialog=function(e,t){i.directorView.setLoadView("Dialog",e,t)},e.prototype.onSceneChangeBefore=function(e){return r(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,i.untilInit()];case 1:return t.sent(),i.sceneManager.sceneChangeBeforeListener.push(e),[2]}})})},e.prototype.onSceneChangeAfter=function(e){return r(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,i.untilInit()];case 1:return t.sent(),i.sceneManager.sceneChangeAfterListener.push(e),[2]}})})},e.prototype.clearListener=function(e){return r(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,i.untilInit()];case 1:return t.sent(),i.sceneManager.sceneChangeBeforeListener=i.sceneManager.sceneChangeBeforeListener.filter(function(t){return t!==e}),i.sceneManager.sceneChangeAfterListener=i.sceneManager.sceneChangeAfterListener.filter(function(t){return t!==e}),[2]}})})},e}();t.DirectorCtor=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),o=n(16),i=n(17),a=n(18),s=n(19),c=n(20),u=n(21),l=n(1);t.utils={createSkeleton:r.createSkeleton,extend:o.extend,cutStr:i.cutStr,getStringLength:a.getStringLength,formatTime:s.formatTime,formatMoney:c.formatMoney,getHtmlElementSize:u.getHtmlElementSize,loadRes:l.loadRes}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSkeleton=function(e,t,n){t=t||30,n=n||0;var r=Laya.loader.getRes(e+".png"),o=Laya.loader.getRes(e+".sk");if(!r||!o)return null;var i=new Laya.Templet;return i.parseData(r,o,t),i.buildArmature(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e={},t=e.toString,n=e.hasOwnProperty,r=n.toString,o=r.call(Object);return function(e){var i,a;return!(!e||"[object Object]"!==t.call(e)||(i=Object.getPrototypeOf(e))&&("function"!=typeof(a=n.call(i,"constructor")&&i.constructor)||r.call(a)!==o))}}();t.extend=function(){var e,t,n,o,i,a,s=arguments[0]||{},c=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[c]||{},c++),"object"!=typeof s&&(s={}),c===u&&(s=this,c--);c<u;c++)if(null!=(e=arguments[c]))for(t in e)n=s[t],s!==(o=e[t])&&(l&&o&&(r(o)||(i=Array.isArray(o)))?(i?(i=!1,a=n&&Array.isArray(n)?n:[]):a=n&&r(n)?n:{},s[t]=Utils.extend(l,a,o)):void 0!==o&&(s[t]=o));return s}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cutStr=function(e,t){var n=/[^\x00-\xff]/g;if((e+="").replace(n,"mm").length<=t)return e;for(var r=Math.floor(t/2);r<e.length;r++)if(e.substr(0,r).replace(n,"mm").length>=t)return e.substr(0,r)+"...";return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStringLength=function(e){return(""+e.replace(/[^\x00-\xff]/gi,"ox")).length}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatTime=function(e,t){void 0===t&&(t=["小时","分钟","秒"]);var n="",r=0,o=0,i=e%60;return"string"==typeof t&&(t=[t,t,""]),e>60&&(o=e/60|0),o>60&&(r=o/60|0,o%=60),i>0&&(n=i+t[2]),o>0&&(n=o+t[1]+n),r>0&&(n=r+t[0]+n),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatMoney=function(e,t,n,r,o){if(void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=""),void 0===r&&(r=","),void 0===o&&(o="."),e=Number(e),isNaN(e))return null;t=isNaN(t=Math.abs(t))?2:t;var i=e<0?"-":"",a=parseInt(e=Math.abs(+e||0).toFixed(t),10)+"",s=(s=a.length)>3?s%3:0;return n+i+(s?a.substr(0,s)+r:"")+a.substr(s).replace(/(\d{3})(?=\d)/g,"$1"+r)+(t?o+Math.abs(e-a).toFixed(t).slice(2):"")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getHtmlElementSize=function(e){var t=e._element._children[0];return{width:t.contextWidth,height:t.contextHeight}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})}])});