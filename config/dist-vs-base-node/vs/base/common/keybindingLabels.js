module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------
 *---------------------------------------------------------------------------------------------
 *---------------------------------------------------------------------------------------------
 *---------------------------------------------------------------------------------------------
 *---------------------------------------------------------------------------------------------
 * Please make sure to make edits in the .ts file at https://github.com/Microsoft/vscode-loader/
 *---------------------------------------------------------------------------------------------
 *---------------------------------------------------------------------------------------------
 *---------------------------------------------------------------------------------------------
 *---------------------------------------------------------------------------------------------
 *--------------------------------------------------------------------------------------------*/

var NLSLoaderPlugin;
(function (NLSLoaderPlugin) {
    var Environment = /** @class */ (function () {
        function Environment() {
            this._detected = false;
            this._isPseudo = false;
        }
        Object.defineProperty(Environment.prototype, "isPseudo", {
            get: function () {
                this._detect();
                return this._isPseudo;
            },
            enumerable: true,
            configurable: true
        });
        Environment.prototype._detect = function () {
            if (this._detected) {
                return;
            }
            this._detected = true;
            this._isPseudo = (typeof document !== 'undefined' && document.location && document.location.hash.indexOf('pseudo=true') >= 0);
        };
        return Environment;
    }());
    function _format(message, args, env) {
        var result;
        if (args.length === 0) {
            result = message;
        }
        else {
            result = message.replace(/\{(\d+)\}/g, function (match, rest) {
                var index = rest[0];
                var arg = args[index];
                var result = match;
                if (typeof arg === 'string') {
                    result = arg;
                }
                else if (typeof arg === 'number' || typeof arg === 'boolean' || arg === void 0 || arg === null) {
                    result = String(arg);
                }
                return result;
            });
        }
        if (env.isPseudo) {
            // FF3B and FF3D is the Unicode zenkaku representation for [ and ]
            result = '\uFF3B' + result.replace(/[aouei]/g, '$&$&') + '\uFF3D';
        }
        return result;
    }
    function findLanguageForModule(config, name) {
        var result = config[name];
        if (result)
            return result;
        result = config['*'];
        if (result)
            return result;
        return null;
    }
    function localize(env, data, message) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return _format(message, args, env);
    }
    function createScopedLocalize(scope, env) {
        return function (idx, defaultValue) {
            var restArgs = Array.prototype.slice.call(arguments, 2);
            return _format(scope[idx], restArgs, env);
        };
    }
    var NLSPlugin = /** @class */ (function () {
        function NLSPlugin(env) {
            var _this = this;
            this._env = env;
            this.localize = function (data, message) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                return localize.apply(void 0, [_this._env, data, message].concat(args));
            };
        }
        NLSPlugin.prototype.setPseudoTranslation = function (value) {
            this._env._isPseudo = value;
        };
        NLSPlugin.prototype.create = function (key, data) {
            return {
                localize: createScopedLocalize(data[key], this._env)
            };
        };
        NLSPlugin.prototype.load = function (name, req, load, config) {
            var _this = this;
            config = config || {};
            if (!name || name.length === 0) {
                load({
                    localize: this.localize
                });
            }
            else {
                var pluginConfig = config['vs/nls'] || {};
                var language = pluginConfig.availableLanguages ? findLanguageForModule(pluginConfig.availableLanguages, name) : null;
                var suffix = '.nls';
                if (language !== null && language !== NLSPlugin.DEFAULT_TAG) {
                    suffix = suffix + '.' + language;
                }
                var messagesLoaded_1 = function (messages) {
                    if (Array.isArray(messages)) {
                        messages.localize = createScopedLocalize(messages, _this._env);
                    }
                    else {
                        messages.localize = createScopedLocalize(messages[name], _this._env);
                    }
                    load(messages);
                };
                if (typeof pluginConfig.loadBundle === 'function') {
                    pluginConfig.loadBundle(name, language, function (err, messages) {
                        // We have an error. Load the English default strings to not fail
                        if (err) {
                            req([name + '.nls'], messagesLoaded_1);
                        }
                        else {
                            messagesLoaded_1(messages);
                        }
                    });
                }
                else {
                    req([name + suffix], messagesLoaded_1);
                }
            }
        };
        NLSPlugin.DEFAULT_TAG = 'i-default';
        return NLSPlugin;
    }());
    NLSLoaderPlugin.NLSPlugin = NLSPlugin;
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (new NLSPlugin(new Environment())),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(NLSLoaderPlugin || (NLSLoaderPlugin = {}));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(27)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, nls) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModifierLabelProvider = /** @class */ (function () {
        function ModifierLabelProvider(mac, windows, linux) {
            if (linux === void 0) { linux = windows; }
            this.modifierLabels = [null]; // index 0 will never me accessed.
            this.modifierLabels[2 /* Macintosh */] = mac;
            this.modifierLabels[1 /* Windows */] = windows;
            this.modifierLabels[3 /* Linux */] = linux;
        }
        ModifierLabelProvider.prototype.toLabel = function (firstPartMod, firstPartKey, chordPartMod, chordPartKey, OS) {
            if (firstPartMod === null || firstPartKey === null) {
                return null;
            }
            return _asString(firstPartMod, firstPartKey, chordPartMod, chordPartKey, this.modifierLabels[OS]);
        };
        return ModifierLabelProvider;
    }());
    exports.ModifierLabelProvider = ModifierLabelProvider;
    /**
     * A label provider that prints modifiers in a suitable format for displaying in the UI.
     */
    exports.UILabelProvider = new ModifierLabelProvider({
        ctrlKey: '⌃',
        shiftKey: '⇧',
        altKey: '⌥',
        metaKey: '⌘',
        separator: '',
    }, {
        ctrlKey: nls.localize({ key: 'ctrlKey', comment: ['This is the short form for the Control key on the keyboard'] }, "Ctrl"),
        shiftKey: nls.localize({ key: 'shiftKey', comment: ['This is the short form for the Shift key on the keyboard'] }, "Shift"),
        altKey: nls.localize({ key: 'altKey', comment: ['This is the short form for the Alt key on the keyboard'] }, "Alt"),
        metaKey: nls.localize({ key: 'windowsKey', comment: ['This is the short form for the Windows key on the keyboard'] }, "Windows"),
        separator: '+',
    }, {
        ctrlKey: nls.localize({ key: 'ctrlKey', comment: ['This is the short form for the Control key on the keyboard'] }, "Ctrl"),
        shiftKey: nls.localize({ key: 'shiftKey', comment: ['This is the short form for the Shift key on the keyboard'] }, "Shift"),
        altKey: nls.localize({ key: 'altKey', comment: ['This is the short form for the Alt key on the keyboard'] }, "Alt"),
        metaKey: nls.localize({ key: 'superKey', comment: ['This is the short form for the Super key on the keyboard'] }, "Super"),
        separator: '+',
    });
    /**
     * A label provider that prints modifiers in a suitable format for ARIA.
     */
    exports.AriaLabelProvider = new ModifierLabelProvider({
        ctrlKey: nls.localize({ key: 'ctrlKey.long', comment: ['This is the long form for the Control key on the keyboard'] }, "Control"),
        shiftKey: nls.localize({ key: 'shiftKey.long', comment: ['This is the long form for the Shift key on the keyboard'] }, "Shift"),
        altKey: nls.localize({ key: 'altKey.long', comment: ['This is the long form for the Alt key on the keyboard'] }, "Alt"),
        metaKey: nls.localize({ key: 'cmdKey.long', comment: ['This is the long form for the Command key on the keyboard'] }, "Command"),
        separator: '+',
    }, {
        ctrlKey: nls.localize({ key: 'ctrlKey.long', comment: ['This is the long form for the Control key on the keyboard'] }, "Control"),
        shiftKey: nls.localize({ key: 'shiftKey.long', comment: ['This is the long form for the Shift key on the keyboard'] }, "Shift"),
        altKey: nls.localize({ key: 'altKey.long', comment: ['This is the long form for the Alt key on the keyboard'] }, "Alt"),
        metaKey: nls.localize({ key: 'windowsKey.long', comment: ['This is the long form for the Windows key on the keyboard'] }, "Windows"),
        separator: '+',
    }, {
        ctrlKey: nls.localize({ key: 'ctrlKey.long', comment: ['This is the long form for the Control key on the keyboard'] }, "Control"),
        shiftKey: nls.localize({ key: 'shiftKey.long', comment: ['This is the long form for the Shift key on the keyboard'] }, "Shift"),
        altKey: nls.localize({ key: 'altKey.long', comment: ['This is the long form for the Alt key on the keyboard'] }, "Alt"),
        metaKey: nls.localize({ key: 'superKey.long', comment: ['This is the long form for the Super key on the keyboard'] }, "Super"),
        separator: '+',
    });
    /**
     * A label provider that prints modifiers in a suitable format for Electron Accelerators.
     * See https://github.com/electron/electron/blob/master/docs/api/accelerator.md
     */
    exports.ElectronAcceleratorLabelProvider = new ModifierLabelProvider({
        ctrlKey: 'Ctrl',
        shiftKey: 'Shift',
        altKey: 'Alt',
        metaKey: 'Cmd',
        separator: '+',
    }, {
        ctrlKey: 'Ctrl',
        shiftKey: 'Shift',
        altKey: 'Alt',
        metaKey: 'Super',
        separator: '+',
    });
    /**
     * A label provider that prints modifiers in a suitable format for user settings.
     */
    exports.UserSettingsLabelProvider = new ModifierLabelProvider({
        ctrlKey: 'ctrl',
        shiftKey: 'shift',
        altKey: 'alt',
        metaKey: 'cmd',
        separator: '+',
    }, {
        ctrlKey: 'ctrl',
        shiftKey: 'shift',
        altKey: 'alt',
        metaKey: 'win',
        separator: '+',
    }, {
        ctrlKey: 'ctrl',
        shiftKey: 'shift',
        altKey: 'alt',
        metaKey: 'meta',
        separator: '+',
    });
    function _simpleAsString(modifiers, key, labels) {
        if (key === null) {
            return '';
        }
        var result = [];
        // translate modifier keys: Ctrl-Shift-Alt-Meta
        if (modifiers.ctrlKey) {
            result.push(labels.ctrlKey);
        }
        if (modifiers.shiftKey) {
            result.push(labels.shiftKey);
        }
        if (modifiers.altKey) {
            result.push(labels.altKey);
        }
        if (modifiers.metaKey) {
            result.push(labels.metaKey);
        }
        // the actual key
        result.push(key);
        return result.join(labels.separator);
    }
    function _asString(firstPartMod, firstPartKey, chordPartMod, chordPartKey, labels) {
        var result = _simpleAsString(firstPartMod, firstPartKey, labels);
        if (chordPartMod !== null && chordPartKey !== null) {
            result += ' ';
            result += _simpleAsString(chordPartMod, chordPartKey, labels);
        }
        return result;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=keybindingLabels.js.map

/***/ })

/******/ });