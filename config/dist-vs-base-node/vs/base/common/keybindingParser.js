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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(44), __webpack_require__(45)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, keyCodes_1, scanCode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KeybindingParser = /** @class */ (function () {
        function KeybindingParser() {
        }
        KeybindingParser._readModifiers = function (input) {
            input = input.toLowerCase().trim();
            var ctrl = false;
            var shift = false;
            var alt = false;
            var meta = false;
            var matchedModifier;
            do {
                matchedModifier = false;
                if (/^ctrl(\+|\-)/.test(input)) {
                    ctrl = true;
                    input = input.substr('ctrl-'.length);
                    matchedModifier = true;
                }
                if (/^shift(\+|\-)/.test(input)) {
                    shift = true;
                    input = input.substr('shift-'.length);
                    matchedModifier = true;
                }
                if (/^alt(\+|\-)/.test(input)) {
                    alt = true;
                    input = input.substr('alt-'.length);
                    matchedModifier = true;
                }
                if (/^meta(\+|\-)/.test(input)) {
                    meta = true;
                    input = input.substr('meta-'.length);
                    matchedModifier = true;
                }
                if (/^win(\+|\-)/.test(input)) {
                    meta = true;
                    input = input.substr('win-'.length);
                    matchedModifier = true;
                }
                if (/^cmd(\+|\-)/.test(input)) {
                    meta = true;
                    input = input.substr('cmd-'.length);
                    matchedModifier = true;
                }
            } while (matchedModifier);
            var key;
            var firstSpaceIdx = input.indexOf(' ');
            if (firstSpaceIdx > 0) {
                key = input.substring(0, firstSpaceIdx);
                input = input.substring(firstSpaceIdx);
            }
            else {
                key = input;
                input = '';
            }
            return {
                remains: input,
                ctrl: ctrl,
                shift: shift,
                alt: alt,
                meta: meta,
                key: key
            };
        };
        KeybindingParser.parseSimpleKeybinding = function (input) {
            var mods = this._readModifiers(input);
            var keyCode = keyCodes_1.KeyCodeUtils.fromUserSettings(mods.key);
            return [new keyCodes_1.SimpleKeybinding(mods.ctrl, mods.shift, mods.alt, mods.meta, keyCode), mods.remains];
        };
        KeybindingParser.parseKeybinding = function (input, OS) {
            if (!input) {
                return null;
            }
            var _a = this.parseSimpleKeybinding(input), firstPart = _a[0], remains = _a[1];
            var chordPart = null;
            if (remains.length > 0) {
                chordPart = this.parseSimpleKeybinding(remains)[0];
            }
            if (chordPart) {
                return new keyCodes_1.ChordKeybinding(firstPart, chordPart);
            }
            return firstPart;
        };
        KeybindingParser.parseSimpleUserBinding = function (input) {
            var mods = this._readModifiers(input);
            var scanCodeMatch = mods.key.match(/^\[([^\]]+)\]$/);
            if (scanCodeMatch) {
                var strScanCode = scanCodeMatch[1];
                var scanCode = scanCode_1.ScanCodeUtils.lowerCaseToEnum(strScanCode);
                return [new scanCode_1.ScanCodeBinding(mods.ctrl, mods.shift, mods.alt, mods.meta, scanCode), mods.remains];
            }
            var keyCode = keyCodes_1.KeyCodeUtils.fromUserSettings(mods.key);
            return [new keyCodes_1.SimpleKeybinding(mods.ctrl, mods.shift, mods.alt, mods.meta, keyCode), mods.remains];
        };
        KeybindingParser.parseUserBinding = function (input) {
            if (!input) {
                return [null, null];
            }
            var _a = this.parseSimpleUserBinding(input), firstPart = _a[0], remains = _a[1];
            var chordPart = null;
            if (remains.length > 0) {
                chordPart = this.parseSimpleUserBinding(remains)[0];
            }
            return [firstPart, chordPart];
        };
        return KeybindingParser;
    }());
    exports.KeybindingParser = KeybindingParser;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=keybindingParser.js.map

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Virtual Key Codes, the value does not hold any inherent meaning.
     * Inspired somewhat from https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
     * But these are "more general", as they should work across browsers & OS`s.
     */
    var KeyCode;
    (function (KeyCode) {
        /**
         * Placed first to cover the 0 value of the enum.
         */
        KeyCode[KeyCode["Unknown"] = 0] = "Unknown";
        KeyCode[KeyCode["Backspace"] = 1] = "Backspace";
        KeyCode[KeyCode["Tab"] = 2] = "Tab";
        KeyCode[KeyCode["Enter"] = 3] = "Enter";
        KeyCode[KeyCode["Shift"] = 4] = "Shift";
        KeyCode[KeyCode["Ctrl"] = 5] = "Ctrl";
        KeyCode[KeyCode["Alt"] = 6] = "Alt";
        KeyCode[KeyCode["PauseBreak"] = 7] = "PauseBreak";
        KeyCode[KeyCode["CapsLock"] = 8] = "CapsLock";
        KeyCode[KeyCode["Escape"] = 9] = "Escape";
        KeyCode[KeyCode["Space"] = 10] = "Space";
        KeyCode[KeyCode["PageUp"] = 11] = "PageUp";
        KeyCode[KeyCode["PageDown"] = 12] = "PageDown";
        KeyCode[KeyCode["End"] = 13] = "End";
        KeyCode[KeyCode["Home"] = 14] = "Home";
        KeyCode[KeyCode["LeftArrow"] = 15] = "LeftArrow";
        KeyCode[KeyCode["UpArrow"] = 16] = "UpArrow";
        KeyCode[KeyCode["RightArrow"] = 17] = "RightArrow";
        KeyCode[KeyCode["DownArrow"] = 18] = "DownArrow";
        KeyCode[KeyCode["Insert"] = 19] = "Insert";
        KeyCode[KeyCode["Delete"] = 20] = "Delete";
        KeyCode[KeyCode["KEY_0"] = 21] = "KEY_0";
        KeyCode[KeyCode["KEY_1"] = 22] = "KEY_1";
        KeyCode[KeyCode["KEY_2"] = 23] = "KEY_2";
        KeyCode[KeyCode["KEY_3"] = 24] = "KEY_3";
        KeyCode[KeyCode["KEY_4"] = 25] = "KEY_4";
        KeyCode[KeyCode["KEY_5"] = 26] = "KEY_5";
        KeyCode[KeyCode["KEY_6"] = 27] = "KEY_6";
        KeyCode[KeyCode["KEY_7"] = 28] = "KEY_7";
        KeyCode[KeyCode["KEY_8"] = 29] = "KEY_8";
        KeyCode[KeyCode["KEY_9"] = 30] = "KEY_9";
        KeyCode[KeyCode["KEY_A"] = 31] = "KEY_A";
        KeyCode[KeyCode["KEY_B"] = 32] = "KEY_B";
        KeyCode[KeyCode["KEY_C"] = 33] = "KEY_C";
        KeyCode[KeyCode["KEY_D"] = 34] = "KEY_D";
        KeyCode[KeyCode["KEY_E"] = 35] = "KEY_E";
        KeyCode[KeyCode["KEY_F"] = 36] = "KEY_F";
        KeyCode[KeyCode["KEY_G"] = 37] = "KEY_G";
        KeyCode[KeyCode["KEY_H"] = 38] = "KEY_H";
        KeyCode[KeyCode["KEY_I"] = 39] = "KEY_I";
        KeyCode[KeyCode["KEY_J"] = 40] = "KEY_J";
        KeyCode[KeyCode["KEY_K"] = 41] = "KEY_K";
        KeyCode[KeyCode["KEY_L"] = 42] = "KEY_L";
        KeyCode[KeyCode["KEY_M"] = 43] = "KEY_M";
        KeyCode[KeyCode["KEY_N"] = 44] = "KEY_N";
        KeyCode[KeyCode["KEY_O"] = 45] = "KEY_O";
        KeyCode[KeyCode["KEY_P"] = 46] = "KEY_P";
        KeyCode[KeyCode["KEY_Q"] = 47] = "KEY_Q";
        KeyCode[KeyCode["KEY_R"] = 48] = "KEY_R";
        KeyCode[KeyCode["KEY_S"] = 49] = "KEY_S";
        KeyCode[KeyCode["KEY_T"] = 50] = "KEY_T";
        KeyCode[KeyCode["KEY_U"] = 51] = "KEY_U";
        KeyCode[KeyCode["KEY_V"] = 52] = "KEY_V";
        KeyCode[KeyCode["KEY_W"] = 53] = "KEY_W";
        KeyCode[KeyCode["KEY_X"] = 54] = "KEY_X";
        KeyCode[KeyCode["KEY_Y"] = 55] = "KEY_Y";
        KeyCode[KeyCode["KEY_Z"] = 56] = "KEY_Z";
        KeyCode[KeyCode["Meta"] = 57] = "Meta";
        KeyCode[KeyCode["ContextMenu"] = 58] = "ContextMenu";
        KeyCode[KeyCode["F1"] = 59] = "F1";
        KeyCode[KeyCode["F2"] = 60] = "F2";
        KeyCode[KeyCode["F3"] = 61] = "F3";
        KeyCode[KeyCode["F4"] = 62] = "F4";
        KeyCode[KeyCode["F5"] = 63] = "F5";
        KeyCode[KeyCode["F6"] = 64] = "F6";
        KeyCode[KeyCode["F7"] = 65] = "F7";
        KeyCode[KeyCode["F8"] = 66] = "F8";
        KeyCode[KeyCode["F9"] = 67] = "F9";
        KeyCode[KeyCode["F10"] = 68] = "F10";
        KeyCode[KeyCode["F11"] = 69] = "F11";
        KeyCode[KeyCode["F12"] = 70] = "F12";
        KeyCode[KeyCode["F13"] = 71] = "F13";
        KeyCode[KeyCode["F14"] = 72] = "F14";
        KeyCode[KeyCode["F15"] = 73] = "F15";
        KeyCode[KeyCode["F16"] = 74] = "F16";
        KeyCode[KeyCode["F17"] = 75] = "F17";
        KeyCode[KeyCode["F18"] = 76] = "F18";
        KeyCode[KeyCode["F19"] = 77] = "F19";
        KeyCode[KeyCode["NumLock"] = 78] = "NumLock";
        KeyCode[KeyCode["ScrollLock"] = 79] = "ScrollLock";
        /**
         * Used for miscellaneous characters; it can vary by keyboard.
         * For the US standard keyboard, the ';:' key
         */
        KeyCode[KeyCode["US_SEMICOLON"] = 80] = "US_SEMICOLON";
        /**
         * For any country/region, the '+' key
         * For the US standard keyboard, the '=+' key
         */
        KeyCode[KeyCode["US_EQUAL"] = 81] = "US_EQUAL";
        /**
         * For any country/region, the ',' key
         * For the US standard keyboard, the ',<' key
         */
        KeyCode[KeyCode["US_COMMA"] = 82] = "US_COMMA";
        /**
         * For any country/region, the '-' key
         * For the US standard keyboard, the '-_' key
         */
        KeyCode[KeyCode["US_MINUS"] = 83] = "US_MINUS";
        /**
         * For any country/region, the '.' key
         * For the US standard keyboard, the '.>' key
         */
        KeyCode[KeyCode["US_DOT"] = 84] = "US_DOT";
        /**
         * Used for miscellaneous characters; it can vary by keyboard.
         * For the US standard keyboard, the '/?' key
         */
        KeyCode[KeyCode["US_SLASH"] = 85] = "US_SLASH";
        /**
         * Used for miscellaneous characters; it can vary by keyboard.
         * For the US standard keyboard, the '`~' key
         */
        KeyCode[KeyCode["US_BACKTICK"] = 86] = "US_BACKTICK";
        /**
         * Used for miscellaneous characters; it can vary by keyboard.
         * For the US standard keyboard, the '[{' key
         */
        KeyCode[KeyCode["US_OPEN_SQUARE_BRACKET"] = 87] = "US_OPEN_SQUARE_BRACKET";
        /**
         * Used for miscellaneous characters; it can vary by keyboard.
         * For the US standard keyboard, the '\|' key
         */
        KeyCode[KeyCode["US_BACKSLASH"] = 88] = "US_BACKSLASH";
        /**
         * Used for miscellaneous characters; it can vary by keyboard.
         * For the US standard keyboard, the ']}' key
         */
        KeyCode[KeyCode["US_CLOSE_SQUARE_BRACKET"] = 89] = "US_CLOSE_SQUARE_BRACKET";
        /**
         * Used for miscellaneous characters; it can vary by keyboard.
         * For the US standard keyboard, the ''"' key
         */
        KeyCode[KeyCode["US_QUOTE"] = 90] = "US_QUOTE";
        /**
         * Used for miscellaneous characters; it can vary by keyboard.
         */
        KeyCode[KeyCode["OEM_8"] = 91] = "OEM_8";
        /**
         * Either the angle bracket key or the backslash key on the RT 102-key keyboard.
         */
        KeyCode[KeyCode["OEM_102"] = 92] = "OEM_102";
        KeyCode[KeyCode["NUMPAD_0"] = 93] = "NUMPAD_0";
        KeyCode[KeyCode["NUMPAD_1"] = 94] = "NUMPAD_1";
        KeyCode[KeyCode["NUMPAD_2"] = 95] = "NUMPAD_2";
        KeyCode[KeyCode["NUMPAD_3"] = 96] = "NUMPAD_3";
        KeyCode[KeyCode["NUMPAD_4"] = 97] = "NUMPAD_4";
        KeyCode[KeyCode["NUMPAD_5"] = 98] = "NUMPAD_5";
        KeyCode[KeyCode["NUMPAD_6"] = 99] = "NUMPAD_6";
        KeyCode[KeyCode["NUMPAD_7"] = 100] = "NUMPAD_7";
        KeyCode[KeyCode["NUMPAD_8"] = 101] = "NUMPAD_8";
        KeyCode[KeyCode["NUMPAD_9"] = 102] = "NUMPAD_9";
        KeyCode[KeyCode["NUMPAD_MULTIPLY"] = 103] = "NUMPAD_MULTIPLY";
        KeyCode[KeyCode["NUMPAD_ADD"] = 104] = "NUMPAD_ADD";
        KeyCode[KeyCode["NUMPAD_SEPARATOR"] = 105] = "NUMPAD_SEPARATOR";
        KeyCode[KeyCode["NUMPAD_SUBTRACT"] = 106] = "NUMPAD_SUBTRACT";
        KeyCode[KeyCode["NUMPAD_DECIMAL"] = 107] = "NUMPAD_DECIMAL";
        KeyCode[KeyCode["NUMPAD_DIVIDE"] = 108] = "NUMPAD_DIVIDE";
        /**
         * Cover all key codes when IME is processing input.
         */
        KeyCode[KeyCode["KEY_IN_COMPOSITION"] = 109] = "KEY_IN_COMPOSITION";
        KeyCode[KeyCode["ABNT_C1"] = 110] = "ABNT_C1";
        KeyCode[KeyCode["ABNT_C2"] = 111] = "ABNT_C2";
        /**
         * Placed last to cover the length of the enum.
         * Please do not depend on this value!
         */
        KeyCode[KeyCode["MAX_VALUE"] = 112] = "MAX_VALUE";
    })(KeyCode = exports.KeyCode || (exports.KeyCode = {}));
    var KeyCodeStrMap = /** @class */ (function () {
        function KeyCodeStrMap() {
            this._keyCodeToStr = [];
            this._strToKeyCode = Object.create(null);
        }
        KeyCodeStrMap.prototype.define = function (keyCode, str) {
            this._keyCodeToStr[keyCode] = str;
            this._strToKeyCode[str.toLowerCase()] = keyCode;
        };
        KeyCodeStrMap.prototype.keyCodeToStr = function (keyCode) {
            return this._keyCodeToStr[keyCode];
        };
        KeyCodeStrMap.prototype.strToKeyCode = function (str) {
            return this._strToKeyCode[str.toLowerCase()] || 0 /* Unknown */;
        };
        return KeyCodeStrMap;
    }());
    var uiMap = new KeyCodeStrMap();
    var userSettingsUSMap = new KeyCodeStrMap();
    var userSettingsGeneralMap = new KeyCodeStrMap();
    (function () {
        function define(keyCode, uiLabel, usUserSettingsLabel, generalUserSettingsLabel) {
            if (usUserSettingsLabel === void 0) { usUserSettingsLabel = uiLabel; }
            if (generalUserSettingsLabel === void 0) { generalUserSettingsLabel = usUserSettingsLabel; }
            uiMap.define(keyCode, uiLabel);
            userSettingsUSMap.define(keyCode, usUserSettingsLabel);
            userSettingsGeneralMap.define(keyCode, generalUserSettingsLabel);
        }
        define(0 /* Unknown */, 'unknown');
        define(1 /* Backspace */, 'Backspace');
        define(2 /* Tab */, 'Tab');
        define(3 /* Enter */, 'Enter');
        define(4 /* Shift */, 'Shift');
        define(5 /* Ctrl */, 'Ctrl');
        define(6 /* Alt */, 'Alt');
        define(7 /* PauseBreak */, 'PauseBreak');
        define(8 /* CapsLock */, 'CapsLock');
        define(9 /* Escape */, 'Escape');
        define(10 /* Space */, 'Space');
        define(11 /* PageUp */, 'PageUp');
        define(12 /* PageDown */, 'PageDown');
        define(13 /* End */, 'End');
        define(14 /* Home */, 'Home');
        define(15 /* LeftArrow */, 'LeftArrow', 'Left');
        define(16 /* UpArrow */, 'UpArrow', 'Up');
        define(17 /* RightArrow */, 'RightArrow', 'Right');
        define(18 /* DownArrow */, 'DownArrow', 'Down');
        define(19 /* Insert */, 'Insert');
        define(20 /* Delete */, 'Delete');
        define(21 /* KEY_0 */, '0');
        define(22 /* KEY_1 */, '1');
        define(23 /* KEY_2 */, '2');
        define(24 /* KEY_3 */, '3');
        define(25 /* KEY_4 */, '4');
        define(26 /* KEY_5 */, '5');
        define(27 /* KEY_6 */, '6');
        define(28 /* KEY_7 */, '7');
        define(29 /* KEY_8 */, '8');
        define(30 /* KEY_9 */, '9');
        define(31 /* KEY_A */, 'A');
        define(32 /* KEY_B */, 'B');
        define(33 /* KEY_C */, 'C');
        define(34 /* KEY_D */, 'D');
        define(35 /* KEY_E */, 'E');
        define(36 /* KEY_F */, 'F');
        define(37 /* KEY_G */, 'G');
        define(38 /* KEY_H */, 'H');
        define(39 /* KEY_I */, 'I');
        define(40 /* KEY_J */, 'J');
        define(41 /* KEY_K */, 'K');
        define(42 /* KEY_L */, 'L');
        define(43 /* KEY_M */, 'M');
        define(44 /* KEY_N */, 'N');
        define(45 /* KEY_O */, 'O');
        define(46 /* KEY_P */, 'P');
        define(47 /* KEY_Q */, 'Q');
        define(48 /* KEY_R */, 'R');
        define(49 /* KEY_S */, 'S');
        define(50 /* KEY_T */, 'T');
        define(51 /* KEY_U */, 'U');
        define(52 /* KEY_V */, 'V');
        define(53 /* KEY_W */, 'W');
        define(54 /* KEY_X */, 'X');
        define(55 /* KEY_Y */, 'Y');
        define(56 /* KEY_Z */, 'Z');
        define(57 /* Meta */, 'Meta');
        define(58 /* ContextMenu */, 'ContextMenu');
        define(59 /* F1 */, 'F1');
        define(60 /* F2 */, 'F2');
        define(61 /* F3 */, 'F3');
        define(62 /* F4 */, 'F4');
        define(63 /* F5 */, 'F5');
        define(64 /* F6 */, 'F6');
        define(65 /* F7 */, 'F7');
        define(66 /* F8 */, 'F8');
        define(67 /* F9 */, 'F9');
        define(68 /* F10 */, 'F10');
        define(69 /* F11 */, 'F11');
        define(70 /* F12 */, 'F12');
        define(71 /* F13 */, 'F13');
        define(72 /* F14 */, 'F14');
        define(73 /* F15 */, 'F15');
        define(74 /* F16 */, 'F16');
        define(75 /* F17 */, 'F17');
        define(76 /* F18 */, 'F18');
        define(77 /* F19 */, 'F19');
        define(78 /* NumLock */, 'NumLock');
        define(79 /* ScrollLock */, 'ScrollLock');
        define(80 /* US_SEMICOLON */, ';', ';', 'OEM_1');
        define(81 /* US_EQUAL */, '=', '=', 'OEM_PLUS');
        define(82 /* US_COMMA */, ',', ',', 'OEM_COMMA');
        define(83 /* US_MINUS */, '-', '-', 'OEM_MINUS');
        define(84 /* US_DOT */, '.', '.', 'OEM_PERIOD');
        define(85 /* US_SLASH */, '/', '/', 'OEM_2');
        define(86 /* US_BACKTICK */, '`', '`', 'OEM_3');
        define(110 /* ABNT_C1 */, 'ABNT_C1');
        define(111 /* ABNT_C2 */, 'ABNT_C2');
        define(87 /* US_OPEN_SQUARE_BRACKET */, '[', '[', 'OEM_4');
        define(88 /* US_BACKSLASH */, '\\', '\\', 'OEM_5');
        define(89 /* US_CLOSE_SQUARE_BRACKET */, ']', ']', 'OEM_6');
        define(90 /* US_QUOTE */, '\'', '\'', 'OEM_7');
        define(91 /* OEM_8 */, 'OEM_8');
        define(92 /* OEM_102 */, 'OEM_102');
        define(93 /* NUMPAD_0 */, 'NumPad0');
        define(94 /* NUMPAD_1 */, 'NumPad1');
        define(95 /* NUMPAD_2 */, 'NumPad2');
        define(96 /* NUMPAD_3 */, 'NumPad3');
        define(97 /* NUMPAD_4 */, 'NumPad4');
        define(98 /* NUMPAD_5 */, 'NumPad5');
        define(99 /* NUMPAD_6 */, 'NumPad6');
        define(100 /* NUMPAD_7 */, 'NumPad7');
        define(101 /* NUMPAD_8 */, 'NumPad8');
        define(102 /* NUMPAD_9 */, 'NumPad9');
        define(103 /* NUMPAD_MULTIPLY */, 'NumPad_Multiply');
        define(104 /* NUMPAD_ADD */, 'NumPad_Add');
        define(105 /* NUMPAD_SEPARATOR */, 'NumPad_Separator');
        define(106 /* NUMPAD_SUBTRACT */, 'NumPad_Subtract');
        define(107 /* NUMPAD_DECIMAL */, 'NumPad_Decimal');
        define(108 /* NUMPAD_DIVIDE */, 'NumPad_Divide');
    })();
    var KeyCodeUtils;
    (function (KeyCodeUtils) {
        function toString(keyCode) {
            return uiMap.keyCodeToStr(keyCode);
        }
        KeyCodeUtils.toString = toString;
        function fromString(key) {
            return uiMap.strToKeyCode(key);
        }
        KeyCodeUtils.fromString = fromString;
        function toUserSettingsUS(keyCode) {
            return userSettingsUSMap.keyCodeToStr(keyCode);
        }
        KeyCodeUtils.toUserSettingsUS = toUserSettingsUS;
        function toUserSettingsGeneral(keyCode) {
            return userSettingsGeneralMap.keyCodeToStr(keyCode);
        }
        KeyCodeUtils.toUserSettingsGeneral = toUserSettingsGeneral;
        function fromUserSettings(key) {
            return userSettingsUSMap.strToKeyCode(key) || userSettingsGeneralMap.strToKeyCode(key);
        }
        KeyCodeUtils.fromUserSettings = fromUserSettings;
    })(KeyCodeUtils = exports.KeyCodeUtils || (exports.KeyCodeUtils = {}));
    /**
     * Binary encoding strategy:
     * ```
     *    1111 11
     *    5432 1098 7654 3210
     *    ---- CSAW KKKK KKKK
     *  C = bit 11 = ctrlCmd flag
     *  S = bit 10 = shift flag
     *  A = bit 9 = alt flag
     *  W = bit 8 = winCtrl flag
     *  K = bits 0-7 = key code
     * ```
     */
    var BinaryKeybindingsMask;
    (function (BinaryKeybindingsMask) {
        BinaryKeybindingsMask[BinaryKeybindingsMask["CtrlCmd"] = 2048] = "CtrlCmd";
        BinaryKeybindingsMask[BinaryKeybindingsMask["Shift"] = 1024] = "Shift";
        BinaryKeybindingsMask[BinaryKeybindingsMask["Alt"] = 512] = "Alt";
        BinaryKeybindingsMask[BinaryKeybindingsMask["WinCtrl"] = 256] = "WinCtrl";
        BinaryKeybindingsMask[BinaryKeybindingsMask["KeyCode"] = 255] = "KeyCode";
    })(BinaryKeybindingsMask || (BinaryKeybindingsMask = {}));
    var KeyMod;
    (function (KeyMod) {
        KeyMod[KeyMod["CtrlCmd"] = 2048] = "CtrlCmd";
        KeyMod[KeyMod["Shift"] = 1024] = "Shift";
        KeyMod[KeyMod["Alt"] = 512] = "Alt";
        KeyMod[KeyMod["WinCtrl"] = 256] = "WinCtrl";
    })(KeyMod = exports.KeyMod || (exports.KeyMod = {}));
    function KeyChord(firstPart, secondPart) {
        var chordPart = ((secondPart & 0x0000ffff) << 16) >>> 0;
        return (firstPart | chordPart) >>> 0;
    }
    exports.KeyChord = KeyChord;
    function createKeybinding(keybinding, OS) {
        if (keybinding === 0) {
            return null;
        }
        var firstPart = (keybinding & 0x0000ffff) >>> 0;
        var chordPart = (keybinding & 0xffff0000) >>> 16;
        if (chordPart !== 0) {
            return new ChordKeybinding(createSimpleKeybinding(firstPart, OS), createSimpleKeybinding(chordPart, OS));
        }
        return createSimpleKeybinding(firstPart, OS);
    }
    exports.createKeybinding = createKeybinding;
    function createSimpleKeybinding(keybinding, OS) {
        var ctrlCmd = (keybinding & 2048 /* CtrlCmd */ ? true : false);
        var winCtrl = (keybinding & 256 /* WinCtrl */ ? true : false);
        var ctrlKey = (OS === 2 /* Macintosh */ ? winCtrl : ctrlCmd);
        var shiftKey = (keybinding & 1024 /* Shift */ ? true : false);
        var altKey = (keybinding & 512 /* Alt */ ? true : false);
        var metaKey = (OS === 2 /* Macintosh */ ? ctrlCmd : winCtrl);
        var keyCode = (keybinding & 255 /* KeyCode */);
        return new SimpleKeybinding(ctrlKey, shiftKey, altKey, metaKey, keyCode);
    }
    exports.createSimpleKeybinding = createSimpleKeybinding;
    var KeybindingType;
    (function (KeybindingType) {
        KeybindingType[KeybindingType["Simple"] = 1] = "Simple";
        KeybindingType[KeybindingType["Chord"] = 2] = "Chord";
    })(KeybindingType = exports.KeybindingType || (exports.KeybindingType = {}));
    var SimpleKeybinding = /** @class */ (function () {
        function SimpleKeybinding(ctrlKey, shiftKey, altKey, metaKey, keyCode) {
            this.type = 1 /* Simple */;
            this.ctrlKey = ctrlKey;
            this.shiftKey = shiftKey;
            this.altKey = altKey;
            this.metaKey = metaKey;
            this.keyCode = keyCode;
        }
        SimpleKeybinding.prototype.equals = function (other) {
            if (other.type !== 1 /* Simple */) {
                return false;
            }
            return (this.ctrlKey === other.ctrlKey
                && this.shiftKey === other.shiftKey
                && this.altKey === other.altKey
                && this.metaKey === other.metaKey
                && this.keyCode === other.keyCode);
        };
        SimpleKeybinding.prototype.getHashCode = function () {
            var ctrl = this.ctrlKey ? '1' : '0';
            var shift = this.shiftKey ? '1' : '0';
            var alt = this.altKey ? '1' : '0';
            var meta = this.metaKey ? '1' : '0';
            return "" + ctrl + shift + alt + meta + this.keyCode;
        };
        SimpleKeybinding.prototype.isModifierKey = function () {
            return (this.keyCode === 0 /* Unknown */
                || this.keyCode === 5 /* Ctrl */
                || this.keyCode === 57 /* Meta */
                || this.keyCode === 6 /* Alt */
                || this.keyCode === 4 /* Shift */);
        };
        /**
         * Does this keybinding refer to the key code of a modifier and it also has the modifier flag?
         */
        SimpleKeybinding.prototype.isDuplicateModifierCase = function () {
            return ((this.ctrlKey && this.keyCode === 5 /* Ctrl */)
                || (this.shiftKey && this.keyCode === 4 /* Shift */)
                || (this.altKey && this.keyCode === 6 /* Alt */)
                || (this.metaKey && this.keyCode === 57 /* Meta */));
        };
        return SimpleKeybinding;
    }());
    exports.SimpleKeybinding = SimpleKeybinding;
    var ChordKeybinding = /** @class */ (function () {
        function ChordKeybinding(firstPart, chordPart) {
            this.type = 2 /* Chord */;
            this.firstPart = firstPart;
            this.chordPart = chordPart;
        }
        ChordKeybinding.prototype.getHashCode = function () {
            return this.firstPart.getHashCode() + ";" + this.chordPart.getHashCode();
        };
        return ChordKeybinding;
    }());
    exports.ChordKeybinding = ChordKeybinding;
    var ResolvedKeybindingPart = /** @class */ (function () {
        function ResolvedKeybindingPart(ctrlKey, shiftKey, altKey, metaKey, kbLabel, kbAriaLabel) {
            this.ctrlKey = ctrlKey;
            this.shiftKey = shiftKey;
            this.altKey = altKey;
            this.metaKey = metaKey;
            this.keyLabel = kbLabel;
            this.keyAriaLabel = kbAriaLabel;
        }
        return ResolvedKeybindingPart;
    }());
    exports.ResolvedKeybindingPart = ResolvedKeybindingPart;
    /**
     * A resolved keybinding. Can be a simple keybinding or a chord keybinding.
     */
    var ResolvedKeybinding = /** @class */ (function () {
        function ResolvedKeybinding() {
        }
        return ResolvedKeybinding;
    }());
    exports.ResolvedKeybinding = ResolvedKeybinding;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=keyCodes.js.map

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * keyboardEvent.code
     */
    var ScanCode;
    (function (ScanCode) {
        ScanCode[ScanCode["None"] = 0] = "None";
        ScanCode[ScanCode["Hyper"] = 1] = "Hyper";
        ScanCode[ScanCode["Super"] = 2] = "Super";
        ScanCode[ScanCode["Fn"] = 3] = "Fn";
        ScanCode[ScanCode["FnLock"] = 4] = "FnLock";
        ScanCode[ScanCode["Suspend"] = 5] = "Suspend";
        ScanCode[ScanCode["Resume"] = 6] = "Resume";
        ScanCode[ScanCode["Turbo"] = 7] = "Turbo";
        ScanCode[ScanCode["Sleep"] = 8] = "Sleep";
        ScanCode[ScanCode["WakeUp"] = 9] = "WakeUp";
        ScanCode[ScanCode["KeyA"] = 10] = "KeyA";
        ScanCode[ScanCode["KeyB"] = 11] = "KeyB";
        ScanCode[ScanCode["KeyC"] = 12] = "KeyC";
        ScanCode[ScanCode["KeyD"] = 13] = "KeyD";
        ScanCode[ScanCode["KeyE"] = 14] = "KeyE";
        ScanCode[ScanCode["KeyF"] = 15] = "KeyF";
        ScanCode[ScanCode["KeyG"] = 16] = "KeyG";
        ScanCode[ScanCode["KeyH"] = 17] = "KeyH";
        ScanCode[ScanCode["KeyI"] = 18] = "KeyI";
        ScanCode[ScanCode["KeyJ"] = 19] = "KeyJ";
        ScanCode[ScanCode["KeyK"] = 20] = "KeyK";
        ScanCode[ScanCode["KeyL"] = 21] = "KeyL";
        ScanCode[ScanCode["KeyM"] = 22] = "KeyM";
        ScanCode[ScanCode["KeyN"] = 23] = "KeyN";
        ScanCode[ScanCode["KeyO"] = 24] = "KeyO";
        ScanCode[ScanCode["KeyP"] = 25] = "KeyP";
        ScanCode[ScanCode["KeyQ"] = 26] = "KeyQ";
        ScanCode[ScanCode["KeyR"] = 27] = "KeyR";
        ScanCode[ScanCode["KeyS"] = 28] = "KeyS";
        ScanCode[ScanCode["KeyT"] = 29] = "KeyT";
        ScanCode[ScanCode["KeyU"] = 30] = "KeyU";
        ScanCode[ScanCode["KeyV"] = 31] = "KeyV";
        ScanCode[ScanCode["KeyW"] = 32] = "KeyW";
        ScanCode[ScanCode["KeyX"] = 33] = "KeyX";
        ScanCode[ScanCode["KeyY"] = 34] = "KeyY";
        ScanCode[ScanCode["KeyZ"] = 35] = "KeyZ";
        ScanCode[ScanCode["Digit1"] = 36] = "Digit1";
        ScanCode[ScanCode["Digit2"] = 37] = "Digit2";
        ScanCode[ScanCode["Digit3"] = 38] = "Digit3";
        ScanCode[ScanCode["Digit4"] = 39] = "Digit4";
        ScanCode[ScanCode["Digit5"] = 40] = "Digit5";
        ScanCode[ScanCode["Digit6"] = 41] = "Digit6";
        ScanCode[ScanCode["Digit7"] = 42] = "Digit7";
        ScanCode[ScanCode["Digit8"] = 43] = "Digit8";
        ScanCode[ScanCode["Digit9"] = 44] = "Digit9";
        ScanCode[ScanCode["Digit0"] = 45] = "Digit0";
        ScanCode[ScanCode["Enter"] = 46] = "Enter";
        ScanCode[ScanCode["Escape"] = 47] = "Escape";
        ScanCode[ScanCode["Backspace"] = 48] = "Backspace";
        ScanCode[ScanCode["Tab"] = 49] = "Tab";
        ScanCode[ScanCode["Space"] = 50] = "Space";
        ScanCode[ScanCode["Minus"] = 51] = "Minus";
        ScanCode[ScanCode["Equal"] = 52] = "Equal";
        ScanCode[ScanCode["BracketLeft"] = 53] = "BracketLeft";
        ScanCode[ScanCode["BracketRight"] = 54] = "BracketRight";
        ScanCode[ScanCode["Backslash"] = 55] = "Backslash";
        ScanCode[ScanCode["IntlHash"] = 56] = "IntlHash";
        ScanCode[ScanCode["Semicolon"] = 57] = "Semicolon";
        ScanCode[ScanCode["Quote"] = 58] = "Quote";
        ScanCode[ScanCode["Backquote"] = 59] = "Backquote";
        ScanCode[ScanCode["Comma"] = 60] = "Comma";
        ScanCode[ScanCode["Period"] = 61] = "Period";
        ScanCode[ScanCode["Slash"] = 62] = "Slash";
        ScanCode[ScanCode["CapsLock"] = 63] = "CapsLock";
        ScanCode[ScanCode["F1"] = 64] = "F1";
        ScanCode[ScanCode["F2"] = 65] = "F2";
        ScanCode[ScanCode["F3"] = 66] = "F3";
        ScanCode[ScanCode["F4"] = 67] = "F4";
        ScanCode[ScanCode["F5"] = 68] = "F5";
        ScanCode[ScanCode["F6"] = 69] = "F6";
        ScanCode[ScanCode["F7"] = 70] = "F7";
        ScanCode[ScanCode["F8"] = 71] = "F8";
        ScanCode[ScanCode["F9"] = 72] = "F9";
        ScanCode[ScanCode["F10"] = 73] = "F10";
        ScanCode[ScanCode["F11"] = 74] = "F11";
        ScanCode[ScanCode["F12"] = 75] = "F12";
        ScanCode[ScanCode["PrintScreen"] = 76] = "PrintScreen";
        ScanCode[ScanCode["ScrollLock"] = 77] = "ScrollLock";
        ScanCode[ScanCode["Pause"] = 78] = "Pause";
        ScanCode[ScanCode["Insert"] = 79] = "Insert";
        ScanCode[ScanCode["Home"] = 80] = "Home";
        ScanCode[ScanCode["PageUp"] = 81] = "PageUp";
        ScanCode[ScanCode["Delete"] = 82] = "Delete";
        ScanCode[ScanCode["End"] = 83] = "End";
        ScanCode[ScanCode["PageDown"] = 84] = "PageDown";
        ScanCode[ScanCode["ArrowRight"] = 85] = "ArrowRight";
        ScanCode[ScanCode["ArrowLeft"] = 86] = "ArrowLeft";
        ScanCode[ScanCode["ArrowDown"] = 87] = "ArrowDown";
        ScanCode[ScanCode["ArrowUp"] = 88] = "ArrowUp";
        ScanCode[ScanCode["NumLock"] = 89] = "NumLock";
        ScanCode[ScanCode["NumpadDivide"] = 90] = "NumpadDivide";
        ScanCode[ScanCode["NumpadMultiply"] = 91] = "NumpadMultiply";
        ScanCode[ScanCode["NumpadSubtract"] = 92] = "NumpadSubtract";
        ScanCode[ScanCode["NumpadAdd"] = 93] = "NumpadAdd";
        ScanCode[ScanCode["NumpadEnter"] = 94] = "NumpadEnter";
        ScanCode[ScanCode["Numpad1"] = 95] = "Numpad1";
        ScanCode[ScanCode["Numpad2"] = 96] = "Numpad2";
        ScanCode[ScanCode["Numpad3"] = 97] = "Numpad3";
        ScanCode[ScanCode["Numpad4"] = 98] = "Numpad4";
        ScanCode[ScanCode["Numpad5"] = 99] = "Numpad5";
        ScanCode[ScanCode["Numpad6"] = 100] = "Numpad6";
        ScanCode[ScanCode["Numpad7"] = 101] = "Numpad7";
        ScanCode[ScanCode["Numpad8"] = 102] = "Numpad8";
        ScanCode[ScanCode["Numpad9"] = 103] = "Numpad9";
        ScanCode[ScanCode["Numpad0"] = 104] = "Numpad0";
        ScanCode[ScanCode["NumpadDecimal"] = 105] = "NumpadDecimal";
        ScanCode[ScanCode["IntlBackslash"] = 106] = "IntlBackslash";
        ScanCode[ScanCode["ContextMenu"] = 107] = "ContextMenu";
        ScanCode[ScanCode["Power"] = 108] = "Power";
        ScanCode[ScanCode["NumpadEqual"] = 109] = "NumpadEqual";
        ScanCode[ScanCode["F13"] = 110] = "F13";
        ScanCode[ScanCode["F14"] = 111] = "F14";
        ScanCode[ScanCode["F15"] = 112] = "F15";
        ScanCode[ScanCode["F16"] = 113] = "F16";
        ScanCode[ScanCode["F17"] = 114] = "F17";
        ScanCode[ScanCode["F18"] = 115] = "F18";
        ScanCode[ScanCode["F19"] = 116] = "F19";
        ScanCode[ScanCode["F20"] = 117] = "F20";
        ScanCode[ScanCode["F21"] = 118] = "F21";
        ScanCode[ScanCode["F22"] = 119] = "F22";
        ScanCode[ScanCode["F23"] = 120] = "F23";
        ScanCode[ScanCode["F24"] = 121] = "F24";
        ScanCode[ScanCode["Open"] = 122] = "Open";
        ScanCode[ScanCode["Help"] = 123] = "Help";
        ScanCode[ScanCode["Select"] = 124] = "Select";
        ScanCode[ScanCode["Again"] = 125] = "Again";
        ScanCode[ScanCode["Undo"] = 126] = "Undo";
        ScanCode[ScanCode["Cut"] = 127] = "Cut";
        ScanCode[ScanCode["Copy"] = 128] = "Copy";
        ScanCode[ScanCode["Paste"] = 129] = "Paste";
        ScanCode[ScanCode["Find"] = 130] = "Find";
        ScanCode[ScanCode["AudioVolumeMute"] = 131] = "AudioVolumeMute";
        ScanCode[ScanCode["AudioVolumeUp"] = 132] = "AudioVolumeUp";
        ScanCode[ScanCode["AudioVolumeDown"] = 133] = "AudioVolumeDown";
        ScanCode[ScanCode["NumpadComma"] = 134] = "NumpadComma";
        ScanCode[ScanCode["IntlRo"] = 135] = "IntlRo";
        ScanCode[ScanCode["KanaMode"] = 136] = "KanaMode";
        ScanCode[ScanCode["IntlYen"] = 137] = "IntlYen";
        ScanCode[ScanCode["Convert"] = 138] = "Convert";
        ScanCode[ScanCode["NonConvert"] = 139] = "NonConvert";
        ScanCode[ScanCode["Lang1"] = 140] = "Lang1";
        ScanCode[ScanCode["Lang2"] = 141] = "Lang2";
        ScanCode[ScanCode["Lang3"] = 142] = "Lang3";
        ScanCode[ScanCode["Lang4"] = 143] = "Lang4";
        ScanCode[ScanCode["Lang5"] = 144] = "Lang5";
        ScanCode[ScanCode["Abort"] = 145] = "Abort";
        ScanCode[ScanCode["Props"] = 146] = "Props";
        ScanCode[ScanCode["NumpadParenLeft"] = 147] = "NumpadParenLeft";
        ScanCode[ScanCode["NumpadParenRight"] = 148] = "NumpadParenRight";
        ScanCode[ScanCode["NumpadBackspace"] = 149] = "NumpadBackspace";
        ScanCode[ScanCode["NumpadMemoryStore"] = 150] = "NumpadMemoryStore";
        ScanCode[ScanCode["NumpadMemoryRecall"] = 151] = "NumpadMemoryRecall";
        ScanCode[ScanCode["NumpadMemoryClear"] = 152] = "NumpadMemoryClear";
        ScanCode[ScanCode["NumpadMemoryAdd"] = 153] = "NumpadMemoryAdd";
        ScanCode[ScanCode["NumpadMemorySubtract"] = 154] = "NumpadMemorySubtract";
        ScanCode[ScanCode["NumpadClear"] = 155] = "NumpadClear";
        ScanCode[ScanCode["NumpadClearEntry"] = 156] = "NumpadClearEntry";
        ScanCode[ScanCode["ControlLeft"] = 157] = "ControlLeft";
        ScanCode[ScanCode["ShiftLeft"] = 158] = "ShiftLeft";
        ScanCode[ScanCode["AltLeft"] = 159] = "AltLeft";
        ScanCode[ScanCode["MetaLeft"] = 160] = "MetaLeft";
        ScanCode[ScanCode["ControlRight"] = 161] = "ControlRight";
        ScanCode[ScanCode["ShiftRight"] = 162] = "ShiftRight";
        ScanCode[ScanCode["AltRight"] = 163] = "AltRight";
        ScanCode[ScanCode["MetaRight"] = 164] = "MetaRight";
        ScanCode[ScanCode["BrightnessUp"] = 165] = "BrightnessUp";
        ScanCode[ScanCode["BrightnessDown"] = 166] = "BrightnessDown";
        ScanCode[ScanCode["MediaPlay"] = 167] = "MediaPlay";
        ScanCode[ScanCode["MediaRecord"] = 168] = "MediaRecord";
        ScanCode[ScanCode["MediaFastForward"] = 169] = "MediaFastForward";
        ScanCode[ScanCode["MediaRewind"] = 170] = "MediaRewind";
        ScanCode[ScanCode["MediaTrackNext"] = 171] = "MediaTrackNext";
        ScanCode[ScanCode["MediaTrackPrevious"] = 172] = "MediaTrackPrevious";
        ScanCode[ScanCode["MediaStop"] = 173] = "MediaStop";
        ScanCode[ScanCode["Eject"] = 174] = "Eject";
        ScanCode[ScanCode["MediaPlayPause"] = 175] = "MediaPlayPause";
        ScanCode[ScanCode["MediaSelect"] = 176] = "MediaSelect";
        ScanCode[ScanCode["LaunchMail"] = 177] = "LaunchMail";
        ScanCode[ScanCode["LaunchApp2"] = 178] = "LaunchApp2";
        ScanCode[ScanCode["LaunchApp1"] = 179] = "LaunchApp1";
        ScanCode[ScanCode["SelectTask"] = 180] = "SelectTask";
        ScanCode[ScanCode["LaunchScreenSaver"] = 181] = "LaunchScreenSaver";
        ScanCode[ScanCode["BrowserSearch"] = 182] = "BrowserSearch";
        ScanCode[ScanCode["BrowserHome"] = 183] = "BrowserHome";
        ScanCode[ScanCode["BrowserBack"] = 184] = "BrowserBack";
        ScanCode[ScanCode["BrowserForward"] = 185] = "BrowserForward";
        ScanCode[ScanCode["BrowserStop"] = 186] = "BrowserStop";
        ScanCode[ScanCode["BrowserRefresh"] = 187] = "BrowserRefresh";
        ScanCode[ScanCode["BrowserFavorites"] = 188] = "BrowserFavorites";
        ScanCode[ScanCode["ZoomToggle"] = 189] = "ZoomToggle";
        ScanCode[ScanCode["MailReply"] = 190] = "MailReply";
        ScanCode[ScanCode["MailForward"] = 191] = "MailForward";
        ScanCode[ScanCode["MailSend"] = 192] = "MailSend";
        ScanCode[ScanCode["MAX_VALUE"] = 193] = "MAX_VALUE";
    })(ScanCode = exports.ScanCode || (exports.ScanCode = {}));
    var scanCodeIntToStr = [];
    var scanCodeStrToInt = Object.create(null);
    var scanCodeLowerCaseStrToInt = Object.create(null);
    exports.ScanCodeUtils = {
        lowerCaseToEnum: function (scanCode) { return scanCodeLowerCaseStrToInt[scanCode] || 0 /* None */; },
        toEnum: function (scanCode) { return scanCodeStrToInt[scanCode] || 0 /* None */; },
        toString: function (scanCode) { return scanCodeIntToStr[scanCode] || 'None'; }
    };
    /**
     * -1 if a ScanCode => KeyCode mapping depends on kb layout.
     */
    exports.IMMUTABLE_CODE_TO_KEY_CODE = [];
    /**
     * -1 if a KeyCode => ScanCode mapping depends on kb layout.
     */
    exports.IMMUTABLE_KEY_CODE_TO_CODE = [];
    var ScanCodeBinding = /** @class */ (function () {
        function ScanCodeBinding(ctrlKey, shiftKey, altKey, metaKey, scanCode) {
            this.ctrlKey = ctrlKey;
            this.shiftKey = shiftKey;
            this.altKey = altKey;
            this.metaKey = metaKey;
            this.scanCode = scanCode;
        }
        ScanCodeBinding.prototype.equals = function (other) {
            return (this.ctrlKey === other.ctrlKey
                && this.shiftKey === other.shiftKey
                && this.altKey === other.altKey
                && this.metaKey === other.metaKey
                && this.scanCode === other.scanCode);
        };
        /**
         * Does this keybinding refer to the key code of a modifier and it also has the modifier flag?
         */
        ScanCodeBinding.prototype.isDuplicateModifierCase = function () {
            return ((this.ctrlKey && (this.scanCode === 157 /* ControlLeft */ || this.scanCode === 161 /* ControlRight */))
                || (this.shiftKey && (this.scanCode === 158 /* ShiftLeft */ || this.scanCode === 162 /* ShiftRight */))
                || (this.altKey && (this.scanCode === 159 /* AltLeft */ || this.scanCode === 163 /* AltRight */))
                || (this.metaKey && (this.scanCode === 160 /* MetaLeft */ || this.scanCode === 164 /* MetaRight */)));
        };
        return ScanCodeBinding;
    }());
    exports.ScanCodeBinding = ScanCodeBinding;
    (function () {
        function d(intScanCode, strScanCode) {
            scanCodeIntToStr[intScanCode] = strScanCode;
            scanCodeStrToInt[strScanCode] = intScanCode;
            scanCodeLowerCaseStrToInt[strScanCode.toLowerCase()] = intScanCode;
        }
        d(0 /* None */, 'None');
        d(1 /* Hyper */, 'Hyper');
        d(2 /* Super */, 'Super');
        d(3 /* Fn */, 'Fn');
        d(4 /* FnLock */, 'FnLock');
        d(5 /* Suspend */, 'Suspend');
        d(6 /* Resume */, 'Resume');
        d(7 /* Turbo */, 'Turbo');
        d(8 /* Sleep */, 'Sleep');
        d(9 /* WakeUp */, 'WakeUp');
        d(10 /* KeyA */, 'KeyA');
        d(11 /* KeyB */, 'KeyB');
        d(12 /* KeyC */, 'KeyC');
        d(13 /* KeyD */, 'KeyD');
        d(14 /* KeyE */, 'KeyE');
        d(15 /* KeyF */, 'KeyF');
        d(16 /* KeyG */, 'KeyG');
        d(17 /* KeyH */, 'KeyH');
        d(18 /* KeyI */, 'KeyI');
        d(19 /* KeyJ */, 'KeyJ');
        d(20 /* KeyK */, 'KeyK');
        d(21 /* KeyL */, 'KeyL');
        d(22 /* KeyM */, 'KeyM');
        d(23 /* KeyN */, 'KeyN');
        d(24 /* KeyO */, 'KeyO');
        d(25 /* KeyP */, 'KeyP');
        d(26 /* KeyQ */, 'KeyQ');
        d(27 /* KeyR */, 'KeyR');
        d(28 /* KeyS */, 'KeyS');
        d(29 /* KeyT */, 'KeyT');
        d(30 /* KeyU */, 'KeyU');
        d(31 /* KeyV */, 'KeyV');
        d(32 /* KeyW */, 'KeyW');
        d(33 /* KeyX */, 'KeyX');
        d(34 /* KeyY */, 'KeyY');
        d(35 /* KeyZ */, 'KeyZ');
        d(36 /* Digit1 */, 'Digit1');
        d(37 /* Digit2 */, 'Digit2');
        d(38 /* Digit3 */, 'Digit3');
        d(39 /* Digit4 */, 'Digit4');
        d(40 /* Digit5 */, 'Digit5');
        d(41 /* Digit6 */, 'Digit6');
        d(42 /* Digit7 */, 'Digit7');
        d(43 /* Digit8 */, 'Digit8');
        d(44 /* Digit9 */, 'Digit9');
        d(45 /* Digit0 */, 'Digit0');
        d(46 /* Enter */, 'Enter');
        d(47 /* Escape */, 'Escape');
        d(48 /* Backspace */, 'Backspace');
        d(49 /* Tab */, 'Tab');
        d(50 /* Space */, 'Space');
        d(51 /* Minus */, 'Minus');
        d(52 /* Equal */, 'Equal');
        d(53 /* BracketLeft */, 'BracketLeft');
        d(54 /* BracketRight */, 'BracketRight');
        d(55 /* Backslash */, 'Backslash');
        d(56 /* IntlHash */, 'IntlHash');
        d(57 /* Semicolon */, 'Semicolon');
        d(58 /* Quote */, 'Quote');
        d(59 /* Backquote */, 'Backquote');
        d(60 /* Comma */, 'Comma');
        d(61 /* Period */, 'Period');
        d(62 /* Slash */, 'Slash');
        d(63 /* CapsLock */, 'CapsLock');
        d(64 /* F1 */, 'F1');
        d(65 /* F2 */, 'F2');
        d(66 /* F3 */, 'F3');
        d(67 /* F4 */, 'F4');
        d(68 /* F5 */, 'F5');
        d(69 /* F6 */, 'F6');
        d(70 /* F7 */, 'F7');
        d(71 /* F8 */, 'F8');
        d(72 /* F9 */, 'F9');
        d(73 /* F10 */, 'F10');
        d(74 /* F11 */, 'F11');
        d(75 /* F12 */, 'F12');
        d(76 /* PrintScreen */, 'PrintScreen');
        d(77 /* ScrollLock */, 'ScrollLock');
        d(78 /* Pause */, 'Pause');
        d(79 /* Insert */, 'Insert');
        d(80 /* Home */, 'Home');
        d(81 /* PageUp */, 'PageUp');
        d(82 /* Delete */, 'Delete');
        d(83 /* End */, 'End');
        d(84 /* PageDown */, 'PageDown');
        d(85 /* ArrowRight */, 'ArrowRight');
        d(86 /* ArrowLeft */, 'ArrowLeft');
        d(87 /* ArrowDown */, 'ArrowDown');
        d(88 /* ArrowUp */, 'ArrowUp');
        d(89 /* NumLock */, 'NumLock');
        d(90 /* NumpadDivide */, 'NumpadDivide');
        d(91 /* NumpadMultiply */, 'NumpadMultiply');
        d(92 /* NumpadSubtract */, 'NumpadSubtract');
        d(93 /* NumpadAdd */, 'NumpadAdd');
        d(94 /* NumpadEnter */, 'NumpadEnter');
        d(95 /* Numpad1 */, 'Numpad1');
        d(96 /* Numpad2 */, 'Numpad2');
        d(97 /* Numpad3 */, 'Numpad3');
        d(98 /* Numpad4 */, 'Numpad4');
        d(99 /* Numpad5 */, 'Numpad5');
        d(100 /* Numpad6 */, 'Numpad6');
        d(101 /* Numpad7 */, 'Numpad7');
        d(102 /* Numpad8 */, 'Numpad8');
        d(103 /* Numpad9 */, 'Numpad9');
        d(104 /* Numpad0 */, 'Numpad0');
        d(105 /* NumpadDecimal */, 'NumpadDecimal');
        d(106 /* IntlBackslash */, 'IntlBackslash');
        d(107 /* ContextMenu */, 'ContextMenu');
        d(108 /* Power */, 'Power');
        d(109 /* NumpadEqual */, 'NumpadEqual');
        d(110 /* F13 */, 'F13');
        d(111 /* F14 */, 'F14');
        d(112 /* F15 */, 'F15');
        d(113 /* F16 */, 'F16');
        d(114 /* F17 */, 'F17');
        d(115 /* F18 */, 'F18');
        d(116 /* F19 */, 'F19');
        d(117 /* F20 */, 'F20');
        d(118 /* F21 */, 'F21');
        d(119 /* F22 */, 'F22');
        d(120 /* F23 */, 'F23');
        d(121 /* F24 */, 'F24');
        d(122 /* Open */, 'Open');
        d(123 /* Help */, 'Help');
        d(124 /* Select */, 'Select');
        d(125 /* Again */, 'Again');
        d(126 /* Undo */, 'Undo');
        d(127 /* Cut */, 'Cut');
        d(128 /* Copy */, 'Copy');
        d(129 /* Paste */, 'Paste');
        d(130 /* Find */, 'Find');
        d(131 /* AudioVolumeMute */, 'AudioVolumeMute');
        d(132 /* AudioVolumeUp */, 'AudioVolumeUp');
        d(133 /* AudioVolumeDown */, 'AudioVolumeDown');
        d(134 /* NumpadComma */, 'NumpadComma');
        d(135 /* IntlRo */, 'IntlRo');
        d(136 /* KanaMode */, 'KanaMode');
        d(137 /* IntlYen */, 'IntlYen');
        d(138 /* Convert */, 'Convert');
        d(139 /* NonConvert */, 'NonConvert');
        d(140 /* Lang1 */, 'Lang1');
        d(141 /* Lang2 */, 'Lang2');
        d(142 /* Lang3 */, 'Lang3');
        d(143 /* Lang4 */, 'Lang4');
        d(144 /* Lang5 */, 'Lang5');
        d(145 /* Abort */, 'Abort');
        d(146 /* Props */, 'Props');
        d(147 /* NumpadParenLeft */, 'NumpadParenLeft');
        d(148 /* NumpadParenRight */, 'NumpadParenRight');
        d(149 /* NumpadBackspace */, 'NumpadBackspace');
        d(150 /* NumpadMemoryStore */, 'NumpadMemoryStore');
        d(151 /* NumpadMemoryRecall */, 'NumpadMemoryRecall');
        d(152 /* NumpadMemoryClear */, 'NumpadMemoryClear');
        d(153 /* NumpadMemoryAdd */, 'NumpadMemoryAdd');
        d(154 /* NumpadMemorySubtract */, 'NumpadMemorySubtract');
        d(155 /* NumpadClear */, 'NumpadClear');
        d(156 /* NumpadClearEntry */, 'NumpadClearEntry');
        d(157 /* ControlLeft */, 'ControlLeft');
        d(158 /* ShiftLeft */, 'ShiftLeft');
        d(159 /* AltLeft */, 'AltLeft');
        d(160 /* MetaLeft */, 'MetaLeft');
        d(161 /* ControlRight */, 'ControlRight');
        d(162 /* ShiftRight */, 'ShiftRight');
        d(163 /* AltRight */, 'AltRight');
        d(164 /* MetaRight */, 'MetaRight');
        d(165 /* BrightnessUp */, 'BrightnessUp');
        d(166 /* BrightnessDown */, 'BrightnessDown');
        d(167 /* MediaPlay */, 'MediaPlay');
        d(168 /* MediaRecord */, 'MediaRecord');
        d(169 /* MediaFastForward */, 'MediaFastForward');
        d(170 /* MediaRewind */, 'MediaRewind');
        d(171 /* MediaTrackNext */, 'MediaTrackNext');
        d(172 /* MediaTrackPrevious */, 'MediaTrackPrevious');
        d(173 /* MediaStop */, 'MediaStop');
        d(174 /* Eject */, 'Eject');
        d(175 /* MediaPlayPause */, 'MediaPlayPause');
        d(176 /* MediaSelect */, 'MediaSelect');
        d(177 /* LaunchMail */, 'LaunchMail');
        d(178 /* LaunchApp2 */, 'LaunchApp2');
        d(179 /* LaunchApp1 */, 'LaunchApp1');
        d(180 /* SelectTask */, 'SelectTask');
        d(181 /* LaunchScreenSaver */, 'LaunchScreenSaver');
        d(182 /* BrowserSearch */, 'BrowserSearch');
        d(183 /* BrowserHome */, 'BrowserHome');
        d(184 /* BrowserBack */, 'BrowserBack');
        d(185 /* BrowserForward */, 'BrowserForward');
        d(186 /* BrowserStop */, 'BrowserStop');
        d(187 /* BrowserRefresh */, 'BrowserRefresh');
        d(188 /* BrowserFavorites */, 'BrowserFavorites');
        d(189 /* ZoomToggle */, 'ZoomToggle');
        d(190 /* MailReply */, 'MailReply');
        d(191 /* MailForward */, 'MailForward');
        d(192 /* MailSend */, 'MailSend');
    })();
    (function () {
        for (var i = 0; i <= 193 /* MAX_VALUE */; i++) {
            exports.IMMUTABLE_CODE_TO_KEY_CODE[i] = -1;
        }
        for (var i = 0; i <= 112 /* MAX_VALUE */; i++) {
            exports.IMMUTABLE_KEY_CODE_TO_CODE[i] = -1;
        }
        function define(code, keyCode) {
            exports.IMMUTABLE_CODE_TO_KEY_CODE[code] = keyCode;
            if ((keyCode !== 0 /* Unknown */)
                && (keyCode !== 3 /* Enter */)
                && (keyCode !== 5 /* Ctrl */)
                && (keyCode !== 4 /* Shift */)
                && (keyCode !== 6 /* Alt */)
                && (keyCode !== 57 /* Meta */)) {
                exports.IMMUTABLE_KEY_CODE_TO_CODE[keyCode] = code;
            }
        }
        // Manually added due to the exclusion above (due to duplication with NumpadEnter)
        exports.IMMUTABLE_KEY_CODE_TO_CODE[3 /* Enter */] = 46 /* Enter */;
        define(0 /* None */, 0 /* Unknown */);
        define(1 /* Hyper */, 0 /* Unknown */);
        define(2 /* Super */, 0 /* Unknown */);
        define(3 /* Fn */, 0 /* Unknown */);
        define(4 /* FnLock */, 0 /* Unknown */);
        define(5 /* Suspend */, 0 /* Unknown */);
        define(6 /* Resume */, 0 /* Unknown */);
        define(7 /* Turbo */, 0 /* Unknown */);
        define(8 /* Sleep */, 0 /* Unknown */);
        define(9 /* WakeUp */, 0 /* Unknown */);
        // define(ScanCode.KeyA, KeyCode.Unknown);
        // define(ScanCode.KeyB, KeyCode.Unknown);
        // define(ScanCode.KeyC, KeyCode.Unknown);
        // define(ScanCode.KeyD, KeyCode.Unknown);
        // define(ScanCode.KeyE, KeyCode.Unknown);
        // define(ScanCode.KeyF, KeyCode.Unknown);
        // define(ScanCode.KeyG, KeyCode.Unknown);
        // define(ScanCode.KeyH, KeyCode.Unknown);
        // define(ScanCode.KeyI, KeyCode.Unknown);
        // define(ScanCode.KeyJ, KeyCode.Unknown);
        // define(ScanCode.KeyK, KeyCode.Unknown);
        // define(ScanCode.KeyL, KeyCode.Unknown);
        // define(ScanCode.KeyM, KeyCode.Unknown);
        // define(ScanCode.KeyN, KeyCode.Unknown);
        // define(ScanCode.KeyO, KeyCode.Unknown);
        // define(ScanCode.KeyP, KeyCode.Unknown);
        // define(ScanCode.KeyQ, KeyCode.Unknown);
        // define(ScanCode.KeyR, KeyCode.Unknown);
        // define(ScanCode.KeyS, KeyCode.Unknown);
        // define(ScanCode.KeyT, KeyCode.Unknown);
        // define(ScanCode.KeyU, KeyCode.Unknown);
        // define(ScanCode.KeyV, KeyCode.Unknown);
        // define(ScanCode.KeyW, KeyCode.Unknown);
        // define(ScanCode.KeyX, KeyCode.Unknown);
        // define(ScanCode.KeyY, KeyCode.Unknown);
        // define(ScanCode.KeyZ, KeyCode.Unknown);
        // define(ScanCode.Digit1, KeyCode.Unknown);
        // define(ScanCode.Digit2, KeyCode.Unknown);
        // define(ScanCode.Digit3, KeyCode.Unknown);
        // define(ScanCode.Digit4, KeyCode.Unknown);
        // define(ScanCode.Digit5, KeyCode.Unknown);
        // define(ScanCode.Digit6, KeyCode.Unknown);
        // define(ScanCode.Digit7, KeyCode.Unknown);
        // define(ScanCode.Digit8, KeyCode.Unknown);
        // define(ScanCode.Digit9, KeyCode.Unknown);
        // define(ScanCode.Digit0, KeyCode.Unknown);
        define(46 /* Enter */, 3 /* Enter */);
        define(47 /* Escape */, 9 /* Escape */);
        define(48 /* Backspace */, 1 /* Backspace */);
        define(49 /* Tab */, 2 /* Tab */);
        define(50 /* Space */, 10 /* Space */);
        // define(ScanCode.Minus, KeyCode.Unknown);
        // define(ScanCode.Equal, KeyCode.Unknown);
        // define(ScanCode.BracketLeft, KeyCode.Unknown);
        // define(ScanCode.BracketRight, KeyCode.Unknown);
        // define(ScanCode.Backslash, KeyCode.Unknown);
        // define(ScanCode.IntlHash, KeyCode.Unknown);
        // define(ScanCode.Semicolon, KeyCode.Unknown);
        // define(ScanCode.Quote, KeyCode.Unknown);
        // define(ScanCode.Backquote, KeyCode.Unknown);
        // define(ScanCode.Comma, KeyCode.Unknown);
        // define(ScanCode.Period, KeyCode.Unknown);
        // define(ScanCode.Slash, KeyCode.Unknown);
        define(63 /* CapsLock */, 8 /* CapsLock */);
        define(64 /* F1 */, 59 /* F1 */);
        define(65 /* F2 */, 60 /* F2 */);
        define(66 /* F3 */, 61 /* F3 */);
        define(67 /* F4 */, 62 /* F4 */);
        define(68 /* F5 */, 63 /* F5 */);
        define(69 /* F6 */, 64 /* F6 */);
        define(70 /* F7 */, 65 /* F7 */);
        define(71 /* F8 */, 66 /* F8 */);
        define(72 /* F9 */, 67 /* F9 */);
        define(73 /* F10 */, 68 /* F10 */);
        define(74 /* F11 */, 69 /* F11 */);
        define(75 /* F12 */, 70 /* F12 */);
        define(76 /* PrintScreen */, 0 /* Unknown */);
        define(77 /* ScrollLock */, 79 /* ScrollLock */);
        define(78 /* Pause */, 7 /* PauseBreak */);
        define(79 /* Insert */, 19 /* Insert */);
        define(80 /* Home */, 14 /* Home */);
        define(81 /* PageUp */, 11 /* PageUp */);
        define(82 /* Delete */, 20 /* Delete */);
        define(83 /* End */, 13 /* End */);
        define(84 /* PageDown */, 12 /* PageDown */);
        define(85 /* ArrowRight */, 17 /* RightArrow */);
        define(86 /* ArrowLeft */, 15 /* LeftArrow */);
        define(87 /* ArrowDown */, 18 /* DownArrow */);
        define(88 /* ArrowUp */, 16 /* UpArrow */);
        define(89 /* NumLock */, 78 /* NumLock */);
        define(90 /* NumpadDivide */, 108 /* NUMPAD_DIVIDE */);
        define(91 /* NumpadMultiply */, 103 /* NUMPAD_MULTIPLY */);
        define(92 /* NumpadSubtract */, 106 /* NUMPAD_SUBTRACT */);
        define(93 /* NumpadAdd */, 104 /* NUMPAD_ADD */);
        define(94 /* NumpadEnter */, 3 /* Enter */); // Duplicate
        define(95 /* Numpad1 */, 94 /* NUMPAD_1 */);
        define(96 /* Numpad2 */, 95 /* NUMPAD_2 */);
        define(97 /* Numpad3 */, 96 /* NUMPAD_3 */);
        define(98 /* Numpad4 */, 97 /* NUMPAD_4 */);
        define(99 /* Numpad5 */, 98 /* NUMPAD_5 */);
        define(100 /* Numpad6 */, 99 /* NUMPAD_6 */);
        define(101 /* Numpad7 */, 100 /* NUMPAD_7 */);
        define(102 /* Numpad8 */, 101 /* NUMPAD_8 */);
        define(103 /* Numpad9 */, 102 /* NUMPAD_9 */);
        define(104 /* Numpad0 */, 93 /* NUMPAD_0 */);
        define(105 /* NumpadDecimal */, 107 /* NUMPAD_DECIMAL */);
        // define(ScanCode.IntlBackslash, KeyCode.Unknown);
        define(107 /* ContextMenu */, 58 /* ContextMenu */);
        define(108 /* Power */, 0 /* Unknown */);
        define(109 /* NumpadEqual */, 0 /* Unknown */);
        define(110 /* F13 */, 71 /* F13 */);
        define(111 /* F14 */, 72 /* F14 */);
        define(112 /* F15 */, 73 /* F15 */);
        define(113 /* F16 */, 74 /* F16 */);
        define(114 /* F17 */, 75 /* F17 */);
        define(115 /* F18 */, 76 /* F18 */);
        define(116 /* F19 */, 77 /* F19 */);
        define(117 /* F20 */, 0 /* Unknown */);
        define(118 /* F21 */, 0 /* Unknown */);
        define(119 /* F22 */, 0 /* Unknown */);
        define(120 /* F23 */, 0 /* Unknown */);
        define(121 /* F24 */, 0 /* Unknown */);
        define(122 /* Open */, 0 /* Unknown */);
        define(123 /* Help */, 0 /* Unknown */);
        define(124 /* Select */, 0 /* Unknown */);
        define(125 /* Again */, 0 /* Unknown */);
        define(126 /* Undo */, 0 /* Unknown */);
        define(127 /* Cut */, 0 /* Unknown */);
        define(128 /* Copy */, 0 /* Unknown */);
        define(129 /* Paste */, 0 /* Unknown */);
        define(130 /* Find */, 0 /* Unknown */);
        define(131 /* AudioVolumeMute */, 0 /* Unknown */);
        define(132 /* AudioVolumeUp */, 0 /* Unknown */);
        define(133 /* AudioVolumeDown */, 0 /* Unknown */);
        define(134 /* NumpadComma */, 105 /* NUMPAD_SEPARATOR */);
        // define(ScanCode.IntlRo, KeyCode.Unknown);
        define(136 /* KanaMode */, 0 /* Unknown */);
        // define(ScanCode.IntlYen, KeyCode.Unknown);
        define(138 /* Convert */, 0 /* Unknown */);
        define(139 /* NonConvert */, 0 /* Unknown */);
        define(140 /* Lang1 */, 0 /* Unknown */);
        define(141 /* Lang2 */, 0 /* Unknown */);
        define(142 /* Lang3 */, 0 /* Unknown */);
        define(143 /* Lang4 */, 0 /* Unknown */);
        define(144 /* Lang5 */, 0 /* Unknown */);
        define(145 /* Abort */, 0 /* Unknown */);
        define(146 /* Props */, 0 /* Unknown */);
        define(147 /* NumpadParenLeft */, 0 /* Unknown */);
        define(148 /* NumpadParenRight */, 0 /* Unknown */);
        define(149 /* NumpadBackspace */, 0 /* Unknown */);
        define(150 /* NumpadMemoryStore */, 0 /* Unknown */);
        define(151 /* NumpadMemoryRecall */, 0 /* Unknown */);
        define(152 /* NumpadMemoryClear */, 0 /* Unknown */);
        define(153 /* NumpadMemoryAdd */, 0 /* Unknown */);
        define(154 /* NumpadMemorySubtract */, 0 /* Unknown */);
        define(155 /* NumpadClear */, 0 /* Unknown */);
        define(156 /* NumpadClearEntry */, 0 /* Unknown */);
        define(157 /* ControlLeft */, 5 /* Ctrl */); // Duplicate
        define(158 /* ShiftLeft */, 4 /* Shift */); // Duplicate
        define(159 /* AltLeft */, 6 /* Alt */); // Duplicate
        define(160 /* MetaLeft */, 57 /* Meta */); // Duplicate
        define(161 /* ControlRight */, 5 /* Ctrl */); // Duplicate
        define(162 /* ShiftRight */, 4 /* Shift */); // Duplicate
        define(163 /* AltRight */, 6 /* Alt */); // Duplicate
        define(164 /* MetaRight */, 57 /* Meta */); // Duplicate
        define(165 /* BrightnessUp */, 0 /* Unknown */);
        define(166 /* BrightnessDown */, 0 /* Unknown */);
        define(167 /* MediaPlay */, 0 /* Unknown */);
        define(168 /* MediaRecord */, 0 /* Unknown */);
        define(169 /* MediaFastForward */, 0 /* Unknown */);
        define(170 /* MediaRewind */, 0 /* Unknown */);
        define(171 /* MediaTrackNext */, 0 /* Unknown */);
        define(172 /* MediaTrackPrevious */, 0 /* Unknown */);
        define(173 /* MediaStop */, 0 /* Unknown */);
        define(174 /* Eject */, 0 /* Unknown */);
        define(175 /* MediaPlayPause */, 0 /* Unknown */);
        define(176 /* MediaSelect */, 0 /* Unknown */);
        define(177 /* LaunchMail */, 0 /* Unknown */);
        define(178 /* LaunchApp2 */, 0 /* Unknown */);
        define(179 /* LaunchApp1 */, 0 /* Unknown */);
        define(180 /* SelectTask */, 0 /* Unknown */);
        define(181 /* LaunchScreenSaver */, 0 /* Unknown */);
        define(182 /* BrowserSearch */, 0 /* Unknown */);
        define(183 /* BrowserHome */, 0 /* Unknown */);
        define(184 /* BrowserBack */, 0 /* Unknown */);
        define(185 /* BrowserForward */, 0 /* Unknown */);
        define(186 /* BrowserStop */, 0 /* Unknown */);
        define(187 /* BrowserRefresh */, 0 /* Unknown */);
        define(188 /* BrowserFavorites */, 0 /* Unknown */);
        define(189 /* ZoomToggle */, 0 /* Unknown */);
        define(190 /* MailReply */, 0 /* Unknown */);
        define(191 /* MailForward */, 0 /* Unknown */);
        define(192 /* MailSend */, 0 /* Unknown */);
    })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=scanCode.js.map

/***/ })

/******/ });