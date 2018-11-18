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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ({

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



/*global define*/

// This module can be loaded in an amd and commonjs-context.
// Because we want both instances to use the same perf-data
// we store them globally
// stores data as 'type','name','startTime','duration'

if (false) {}

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {

	var _global = this;
	if (typeof global !== 'undefined') {
		_global = global;
	}
	_global._performanceEntries = _global._performanceEntries || [];

	// const _now = global.performance && performance.now ? performance.now : Date.now
	const _now = Date.now;

	function importEntries(entries) {
		global._performanceEntries.splice(0, 0, ...entries);
	}

	function exportEntries() {
		return global._performanceEntries.slice(0);
	}

	function getEntries(type, name) {
		const result = [];
		const entries = global._performanceEntries;
		for (let i = 0; i < entries.length; i += 5) {
			if (entries[i] === type && (name === void 0 || entries[i + 1] === name)) {
				result.push({
					type: entries[i],
					name: entries[i + 1],
					startTime: entries[i + 2],
					duration: entries[i + 3],
					seq: entries[i + 4],
				});
			}
		}

		return result.sort((a, b) => {
			return a.startTime - b.startTime || a.seq - b.seq;
		});
	}

	function getEntry(type, name) {
		const entries = global._performanceEntries;
		for (let i = 0; i < entries.length; i += 5) {
			if (entries[i] === type && entries[i + 1] === name) {
				return {
					type: entries[i],
					name: entries[i + 1],
					startTime: entries[i + 2],
					duration: entries[i + 3],
					seq: entries[i + 4],
				};
			}
		}
	}

	function getDuration(from, to) {
		const entries = global._performanceEntries;
		let target = to;
		let endTime = 0;
		for (let i = entries.length - 1; i >= 0; i -= 5) {
			if (entries[i - 3] === target) {
				if (target === to) {
					// found `to` (end of interval)
					endTime = entries[i - 2];
					target = from;
				} else {
					return endTime - entries[i - 2];
				}
			}
		}
		return 0;
	}

	let seq = 0;

	function mark(name) {
		global._performanceEntries.push('mark', name, _now(), 0, seq++);
		if (typeof console.timeStamp === 'function') {
			console.timeStamp(name);
		}
	}

	function measure(name, from, to) {

		let startTime;
		let duration;
		let now = _now();

		if (!from) {
			startTime = now;
		} else {
			startTime = _getLastStartTime(from);
		}

		if (!to) {
			duration = now - startTime;
		} else {
			duration = _getLastStartTime(to) - startTime;
		}

		global._performanceEntries.push('measure', name, startTime, duration);
	}

	function _getLastStartTime(name) {
		const entries = global._performanceEntries;
		for (let i = entries.length - 1; i >= 0; i -= 5) {
			if (entries[i - 3] === name) {
				return entries[i - 2];
			}
		}

		throw new Error(name + ' not found');
	}

	var exports = {
		mark: mark,
		measure: measure,
		getEntries: getEntries,
		getEntry: getEntry,
		getDuration: getDuration,
		importEntries: importEntries,
		exportEntries: exportEntries
	};

	return exports;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });