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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

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