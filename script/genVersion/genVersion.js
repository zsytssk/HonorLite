/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./script/const.ts":
/*!*************************!*\
  !*** ./script/const.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst asyncUtil_1 = __webpack_require__(/*! ./ls/asyncUtil */ \"./script/ls/asyncUtil.ts\");\r\nasync function intConfig(config_path) {\r\n    const config_raw = await asyncUtil_1.readFile(config_path);\r\n    const config = JSON.parse(config_raw);\r\n    exports.project_folder = config.project_folder;\r\n    exports.binJs = config.binJs;\r\n    exports.exclude_files = config.exclude;\r\n    exports.laya_assets = config.laya_assets;\r\n    exports.laya_pages = config.laya_pages;\r\n    exports.include = config.include;\r\n    exports.bin = config.bin;\r\n}\r\nexports.intConfig = intConfig;\r\n\n\n//# sourceURL=webpack:///./script/const.ts?");

/***/ }),

/***/ "./script/genVersion.ts":
/*!******************************!*\
  !*** ./script/genVersion.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst md5_file_1 = __importDefault(__webpack_require__(/*! md5-file */ \"md5-file\"));\r\nconst path = __importStar(__webpack_require__(/*! path */ \"path\"));\r\nconst const_1 = __webpack_require__(/*! ./const */ \"./script/const.ts\");\r\nconst write_1 = __webpack_require__(/*! ./ls/write */ \"./script/ls/write.ts\");\r\nconst listBinFiles_1 = __webpack_require__(/*! ./utils/listBinFiles */ \"./script/utils/listBinFiles.ts\");\r\nconst util_1 = __webpack_require__(/*! ./utils/util */ \"./script/utils/util.ts\");\r\nasync function genVersion() {\r\n    const result = {};\r\n    const files = await listBinFiles_1.findBinFiles();\r\n    for (const item of files) {\r\n        const md5 = await getFileMd5(item);\r\n        const key = item.replace('bin/', '');\r\n        result[key] = md5;\r\n    }\r\n    write_1.write('bin/version.json', util_1.stringify(result));\r\n}\r\nexports.genVersion = genVersion;\r\nasync function getFileMd5(file) {\r\n    return new Promise((resolve, reject) => {\r\n        file = path.resolve(const_1.project_folder, file);\r\n        md5_file_1.default(file, (err, hash) => {\r\n            if (err) {\r\n                return reject(err);\r\n            }\r\n            resolve(hash);\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./script/genVersion.ts?");

/***/ }),

/***/ "./script/ls/asyncUtil.ts":
/*!********************************!*\
  !*** ./script/ls/asyncUtil.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst fs = __importStar(__webpack_require__(/*! fs */ \"fs\"));\r\nfunction readdir(dir) {\r\n    return new Promise((resolve, reject) => {\r\n        fs.readdir(dir, (err, file_list) => {\r\n            if (err) {\r\n                return reject(err);\r\n            }\r\n            resolve(file_list);\r\n        });\r\n    });\r\n}\r\nexports.readdir = readdir;\r\nasync function readFile(file_path) {\r\n    return new Promise((resolve, reject) => {\r\n        fs.readFile(file_path, 'utf8', (err, file_str) => {\r\n            if (err) {\r\n                return reject(err);\r\n            }\r\n            resolve(file_str);\r\n        });\r\n    });\r\n}\r\nexports.readFile = readFile;\r\nfunction exists(path) {\r\n    return new Promise((resolve, reject) => {\r\n        fs.exists(path, exist => {\r\n            resolve(exist);\r\n        });\r\n    });\r\n}\r\nexports.exists = exists;\r\nfunction lstatFile(path) {\r\n    return new Promise((resolve, reject) => {\r\n        fs.lstat(path, (err, data) => {\r\n            if (err) {\r\n                return reject(err);\r\n            }\r\n            return resolve(data);\r\n        });\r\n    });\r\n}\r\nexports.lstatFile = lstatFile;\r\nfunction rmdir(path) {\r\n    return new Promise((resolve, reject) => {\r\n        fs.rmdir(path, err => {\r\n            if (err) {\r\n                return reject(err);\r\n            }\r\n            resolve();\r\n        });\r\n    });\r\n}\r\nexports.rmdir = rmdir;\r\nfunction unlink(path) {\r\n    return new Promise((resolve, reject) => {\r\n        fs.unlink(path, err => {\r\n            if (err) {\r\n                return reject(err);\r\n            }\r\n            resolve();\r\n        });\r\n    });\r\n}\r\nexports.unlink = unlink;\r\nfunction mkdir(path) {\r\n    return new Promise((resolve, reject) => {\r\n        fs.mkdir(path, e => {\r\n            if (!e || (e && e.code === 'EEXIST')) {\r\n                resolve();\r\n            }\r\n            else {\r\n                resolve();\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.mkdir = mkdir;\r\nfunction sleep(time) {\r\n    return new Promise((resolve, reject) => {\r\n        setTimeout(() => {\r\n            resolve();\r\n        }, time);\r\n    });\r\n}\r\nexports.sleep = sleep;\r\n\n\n//# sourceURL=webpack:///./script/ls/asyncUtil.ts?");

/***/ }),

/***/ "./script/ls/mk.ts":
/*!*************************!*\
  !*** ./script/ls/mk.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// 从一个文件夹复制文件到另外文件夹\r\nconst path = __importStar(__webpack_require__(/*! path */ \"path\"));\r\nconst asyncUtil_1 = __webpack_require__(/*! ./asyncUtil */ \"./script/ls/asyncUtil.ts\");\r\nasync function mk(dir_path) {\r\n    if (await asyncUtil_1.exists(dir_path)) {\r\n        return true;\r\n    }\r\n    dir_path = path.normalize(dir_path);\r\n    const path_arr = dir_path.split(path.sep);\r\n    for (let i = 0; i < path_arr.length; i++) {\r\n        if (!path_arr[i]) {\r\n            continue;\r\n        }\r\n        const cur_dir = path_arr.slice(0, i + 1).join(path.sep);\r\n        if (!(await asyncUtil_1.exists(cur_dir))) {\r\n            await asyncUtil_1.mkdir(cur_dir);\r\n        }\r\n    }\r\n}\r\nexports.mk = mk;\r\n\n\n//# sourceURL=webpack:///./script/ls/mk.ts?");

/***/ }),

/***/ "./script/ls/pathUtil.ts":
/*!*******************************!*\
  !*** ./script/ls/pathUtil.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst path = __importStar(__webpack_require__(/*! path */ \"path\"));\r\nconst asyncUtil_1 = __webpack_require__(/*! ./asyncUtil */ \"./script/ls/asyncUtil.ts\");\r\nconst split_sign = '\\\\';\r\nfunction normalize(file_path) {\r\n    file_path = path.normalize(file_path);\r\n    return file_path.replace(/\\\\$/, '');\r\n}\r\nexports.normalize = normalize;\r\nfunction calcClosestDepth(path_str, parent_path) {\r\n    path_str = normalize(path_str);\r\n    const parent = normalize(parent_path);\r\n    if (parent === path_str) {\r\n        return 0;\r\n    }\r\n    if (path_str.indexOf(parent + split_sign) === -1) {\r\n        return -1;\r\n    }\r\n    return 1 + calcClosestDepth(path.resolve(path_str, '..'), parent_path);\r\n}\r\nexports.calcClosestDepth = calcClosestDepth;\r\nasync function getFileInfo(file_path) {\r\n    const ls_info = await asyncUtil_1.lstatFile(file_path);\r\n    let type;\r\n    let ext;\r\n    let name;\r\n    let parent;\r\n    if (ls_info.isDirectory()) {\r\n        type = 'directory';\r\n        name = path.basename(file_path);\r\n        parent = path.resolve(file_path, '..');\r\n    }\r\n    else if (ls_info.isFile()) {\r\n        type = 'file';\r\n        ext = path.extname(file_path);\r\n        name = path.basename(file_path).replace(ext, '');\r\n        parent = path.dirname(file_path);\r\n    }\r\n    return {\r\n        type,\r\n        name,\r\n        parent,\r\n        ext,\r\n    };\r\n}\r\nexports.getFileInfo = getFileInfo;\r\n\n\n//# sourceURL=webpack:///./script/ls/pathUtil.ts?");

/***/ }),

/***/ "./script/ls/write.ts":
/*!****************************!*\
  !*** ./script/ls/write.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst fs = __importStar(__webpack_require__(/*! fs */ \"fs\"));\r\nconst path = __importStar(__webpack_require__(/*! path */ \"path\"));\r\nconst asyncUtil_1 = __webpack_require__(/*! ./asyncUtil */ \"./script/ls/asyncUtil.ts\");\r\nconst mk_1 = __webpack_require__(/*! ./mk */ \"./script/ls/mk.ts\");\r\nasync function write(file_path, file_content) {\r\n    const dir_path = path.dirname(file_path);\r\n    if (!(await asyncUtil_1.exists(dir_path))) {\r\n        await mk_1.mk(dir_path);\r\n    }\r\n    await new Promise((resolve, reject) => {\r\n        fs.writeFile(file_path, file_content, err => {\r\n            if (err) {\r\n                return reject(err);\r\n            }\r\n            resolve();\r\n        });\r\n    });\r\n}\r\nexports.write = write;\r\n\n\n//# sourceURL=webpack:///./script/ls/write.ts?");

/***/ }),

/***/ "./script/main.ts":
/*!************************!*\
  !*** ./script/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst path = __importStar(__webpack_require__(/*! path */ \"path\"));\r\nconst const_1 = __webpack_require__(/*! ./const */ \"./script/const.ts\");\r\nconst genVersion_1 = __webpack_require__(/*! ./genVersion */ \"./script/genVersion.ts\");\r\nconst type = process.argv.slice(2)[0] || 'genVersion';\r\nconst config_path = path.resolve(path.dirname(process.argv[1]), './config.json');\r\nasync function main() {\r\n    console.time('costTime');\r\n    await const_1.intConfig(config_path);\r\n    const actions = {\r\n        genVersion: genVersion_1.genVersion,\r\n    };\r\n    if (actions[type]) {\r\n        await actions[type]();\r\n    }\r\n    console.timeEnd('costTime');\r\n}\r\nmain();\r\n\n\n//# sourceURL=webpack:///./script/main.ts?");

/***/ }),

/***/ "./script/utils/exec.ts":
/*!******************************!*\
  !*** ./script/utils/exec.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst child_process = __importStar(__webpack_require__(/*! child_process */ \"child_process\"));\r\nconst { exec } = child_process;\r\nfunction excuse(command, opts) {\r\n    const { path, output } = opts;\r\n    const config = { maxBuffer: 1024 * 1024 * 100, encoding: 'utf-8' };\r\n    if (path) {\r\n        config.cwd = path;\r\n    }\r\n    return new Promise((resolve, reject) => {\r\n        let std_out = '';\r\n        let std_err = '';\r\n        const run_process = exec(command, config);\r\n        if (output) {\r\n            run_process.stdout.pipe(process.stdout);\r\n            run_process.stderr.pipe(process.stderr);\r\n        }\r\n        run_process.stdout.on('data', data => {\r\n            std_out += data;\r\n        });\r\n        run_process.stderr.on('data', data => {\r\n            std_err += data;\r\n        });\r\n        run_process.on('exit', code => {\r\n            if (code === 0) {\r\n                resolve(std_out);\r\n            }\r\n            else {\r\n                resolve(std_err);\r\n            }\r\n        });\r\n    });\r\n}\r\nasync function execArr(cmds, opts) {\r\n    if (!Array.isArray(cmds)) {\r\n        return await excuse(cmds, opts);\r\n    }\r\n    const result = [];\r\n    for (const cmd of cmds) {\r\n        const item = await excuse(cmd, opts);\r\n        result.push(item);\r\n    }\r\n    return result;\r\n}\r\nexports.execArr = execArr;\r\n\n\n//# sourceURL=webpack:///./script/utils/exec.ts?");

/***/ }),

/***/ "./script/utils/listBinFiles.ts":
/*!**************************************!*\
  !*** ./script/utils/listBinFiles.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst path = __importStar(__webpack_require__(/*! path */ \"path\"));\r\nconst const_1 = __webpack_require__(/*! ../const */ \"./script/const.ts\");\r\nconst asyncUtil_1 = __webpack_require__(/*! ../ls/asyncUtil */ \"./script/ls/asyncUtil.ts\");\r\nconst pathUtil_1 = __webpack_require__(/*! ../ls/pathUtil */ \"./script/ls/pathUtil.ts\");\r\nconst exec_1 = __webpack_require__(/*! ./exec */ \"./script/utils/exec.ts\");\r\nasync function findBinFiles() {\r\n    const files = await findOriAllFiles();\r\n    let result = [];\r\n    for (const file of files) {\r\n        // console.log(file, isExcludeFile(file), isIncludeFile(file));\r\n        if (isExcludeFile(file)) {\r\n            continue;\r\n        }\r\n        if (!isIncludeFile(file)) {\r\n            continue;\r\n        }\r\n        try {\r\n            const target = await findTargetFile(file);\r\n            if (Array.isArray(target)) {\r\n                result = result.concat(target);\r\n            }\r\n            else {\r\n                result.push(target);\r\n            }\r\n        }\r\n        catch (err) {\r\n            console.error(err);\r\n        }\r\n    }\r\n    result = result.filter((item, index) => {\r\n        return result.indexOf(item) === index;\r\n    });\r\n    return result;\r\n}\r\nexports.findBinFiles = findBinFiles;\r\nasync function findOriAllFiles() {\r\n    const files_str = (await exec_1.execArr(`git ls-tree --full-tree -r HEAD`, {\r\n        path: const_1.project_folder,\r\n    }));\r\n    let list = files_str.split('\\n');\r\n    list.pop();\r\n    const result = [];\r\n    for (const item of list) {\r\n        const item_arr = item.split(/\\s+/);\r\n        result.push(item_arr[item_arr.length - 1]);\r\n    }\r\n    return result;\r\n}\r\nexports.findOriAllFiles = findOriAllFiles;\r\nasync function findTargetFile(ori_file) {\r\n    // 目标文件名 == 源文件名 ||  合并\r\n    const bin_file = await findBinFile(ori_file);\r\n    if (bin_file) {\r\n        return bin_file;\r\n    }\r\n    // js + ui\r\n    if (isScriptFile(ori_file) || isUIFile(ori_file)) {\r\n        return [const_1.binJs];\r\n    }\r\n    throw new Error(`cant find target file for ${ori_file}`);\r\n}\r\nfunction isScriptFile(ori_file) {\r\n    if (ori_file.match(/(\\.ts|\\.js|\\.json)$/)) {\r\n        return true;\r\n    }\r\n    if (ori_file.match(/^src/)) {\r\n        return true;\r\n    }\r\n    if (ori_file.match(/^libs/)) {\r\n        return true;\r\n    }\r\n    if (ori_file.match(/^test/)) {\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\nfunction isUIFile(ori_file) {\r\n    if (ori_file.match(/^laya\\/pages\\//)) {\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\nasync function findBinFile(ori_file) {\r\n    /** bin 文件夹中存在的文件 */\r\n    if (ori_file.indexOf(`${const_1.bin}/`) === 0) {\r\n        if (await asyncUtil_1.exists(path.resolve(const_1.project_folder, ori_file))) {\r\n            return ori_file;\r\n        }\r\n    }\r\n    /** laya/assets  中直接copy到 bin 文件 */\r\n    if (ori_file.indexOf(const_1.laya_assets) === 0) {\r\n        const assets_file = ori_file.replace(const_1.laya_assets, const_1.bin);\r\n        if (await asyncUtil_1.exists(path.resolve(const_1.project_folder, assets_file))) {\r\n            return assets_file;\r\n        }\r\n    }\r\n    /** laya/pages  中直接copy到 bin 文件 */\r\n    if (ori_file.indexOf(const_1.laya_pages) === 0) {\r\n        const pages_file = ori_file.replace(const_1.laya_pages, const_1.bin);\r\n        if (await asyncUtil_1.exists(path.resolve(const_1.project_folder, pages_file))) {\r\n            return pages_file;\r\n        }\r\n    }\r\n    const bin_folder = path.dirname(ori_file.replace(const_1.laya_assets, const_1.bin));\r\n    const assets_atlas = `${bin_folder}.atlas`;\r\n    const assets_json = `${bin_folder}.json`;\r\n    const assets_png = `${bin_folder}.png`;\r\n    if (await asyncUtil_1.exists(path.resolve(const_1.project_folder, assets_json))) {\r\n        return [assets_json, assets_png];\r\n    }\r\n    if (await asyncUtil_1.exists(path.resolve(const_1.project_folder, assets_atlas))) {\r\n        return [assets_atlas, assets_png];\r\n    }\r\n}\r\nfunction isExcludeFile(ori_file) {\r\n    ori_file = path.resolve(const_1.project_folder, ori_file);\r\n    if (const_1.exclude_files) {\r\n        for (let item of const_1.exclude_files) {\r\n            item = path.resolve(const_1.project_folder, item);\r\n            if (pathUtil_1.calcClosestDepth(ori_file, item) > -1) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    return false;\r\n}\r\nfunction isIncludeFile(ori_file) {\r\n    ori_file = path.resolve(const_1.project_folder, ori_file);\r\n    if (const_1.include) {\r\n        for (let item of const_1.include) {\r\n            item = path.resolve(const_1.project_folder, item);\r\n            if (pathUtil_1.calcClosestDepth(ori_file, item) > -1) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\n\n\n//# sourceURL=webpack:///./script/utils/listBinFiles.ts?");

/***/ }),

/***/ "./script/utils/util.ts":
/*!******************************!*\
  !*** ./script/utils/util.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst _ = __importStar(__webpack_require__(/*! lodash */ \"lodash\"));\r\nfunction stringify(obj, deep, indent = 1) {\r\n    if (deep === 0 || deep < 0) {\r\n        return jsonStringify(obj);\r\n    }\r\n    if (_.isArray(obj)) {\r\n        return stringifyArray(obj, deep, indent);\r\n    }\r\n    else if (_.isObject(obj)) {\r\n        return stringifyObject(obj, deep, indent);\r\n    }\r\n    else {\r\n        return jsonStringify(obj);\r\n    }\r\n}\r\nexports.stringify = stringify;\r\nfunction stringifyArray(array, deep, indent = 1) {\r\n    if (deep === 0) {\r\n        return jsonStringify(array);\r\n    }\r\n    let result = `[\\n`;\r\n    const tab = `  `;\r\n    for (let i = 0; i < array.length; i++) {\r\n        result += tab.repeat(indent);\r\n        result += stringify(array[i], deep - 1, indent + 1);\r\n        if (i !== array.length - 1) {\r\n            result += `,`;\r\n        }\r\n        result += `\\n`;\r\n    }\r\n    result += tab.repeat(indent - 1);\r\n    result += `]`;\r\n    return result;\r\n}\r\nfunction stringifyObject(obj, deep, indent = 1) {\r\n    if (deep === 0) {\r\n        return jsonStringify(obj);\r\n    }\r\n    let result = `{\\n`;\r\n    const tab = `  `;\r\n    indent = indent || 1;\r\n    let keys = Object.keys(obj);\r\n    keys = keys.filter(key => {\r\n        return obj[key] !== undefined;\r\n    });\r\n    for (let i = 0; i < keys.length; i++) {\r\n        const key = keys[i];\r\n        const item = obj[key];\r\n        result += tab.repeat(indent);\r\n        result += `\"${key}\": ${stringify(item, deep - 1, indent + 1)}`;\r\n        if (i !== keys.length - 1) {\r\n            result += `,`;\r\n        }\r\n        result += `\\n`;\r\n    }\r\n    result += tab.repeat(indent - 1);\r\n    result += `}`;\r\n    return result;\r\n}\r\nfunction jsonStringify(o) {\r\n    if (o === undefined) {\r\n        o = null;\r\n    }\r\n    return JSON.stringify(o);\r\n}\r\nfunction log(...params) {\r\n    // tslint:disable-next-line:no-console\r\n    console.log(...params);\r\n}\r\nexports.log = log;\r\nfunction setProps(data, props) {\r\n    for (let key in props) {\r\n        if (!props.hasOwnProperty(key)) {\r\n            continue;\r\n        }\r\n        data[key] = props[key];\r\n    }\r\n}\r\nexports.setProps = setProps;\r\nfunction getXArr(start, end) {\r\n    // prettier-ignore\r\n    // tslint:disable-next-line:max-line-length\r\n    const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\r\n    const result = [];\r\n    let cur_prefix = '';\r\n    let round = 0;\r\n    let is_start = false;\r\n    let is_end = false;\r\n    while (true) {\r\n        for (const key of keys) {\r\n            const cur_key = cur_prefix + key;\r\n            if (cur_key === start) {\r\n                is_start = true;\r\n            }\r\n            if (is_start) {\r\n                result.push(cur_key);\r\n            }\r\n            if (cur_key === end) {\r\n                is_end = true;\r\n                break;\r\n            }\r\n        }\r\n        if (is_end) {\r\n            break;\r\n        }\r\n        cur_prefix = keys[round];\r\n        round++;\r\n    }\r\n    return result;\r\n}\r\nexports.getXArr = getXArr;\r\nfunction getYArr(start, end) {\r\n    // prettier-ignore\r\n    // tslint:disable-next-line:max-line-length\r\n    const result = [];\r\n    for (let i = start; i <= end; i++) {\r\n        result.push(i);\r\n    }\r\n    return result;\r\n}\r\nexports.getYArr = getYArr;\r\n\n\n//# sourceURL=webpack:///./script/utils/util.ts?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");\n\n//# sourceURL=webpack:///external_%22child_process%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "md5-file":
/*!***************************!*\
  !*** external "md5-file" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"md5-file\");\n\n//# sourceURL=webpack:///external_%22md5-file%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });