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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, functional_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isDisposable(thing) {
        return typeof thing.dispose === 'function'
            && thing.dispose.length === 0;
    }
    exports.isDisposable = isDisposable;
    function dispose(first) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        if (Array.isArray(first)) {
            first.forEach(function (d) { return d && d.dispose(); });
            return [];
        }
        else if (rest.length === 0) {
            if (first) {
                first.dispose();
                return first;
            }
            return undefined;
        }
        else {
            dispose(first);
            dispose(rest);
            return [];
        }
    }
    exports.dispose = dispose;
    function combinedDisposable(disposables) {
        return { dispose: function () { return dispose(disposables); } };
    }
    exports.combinedDisposable = combinedDisposable;
    function toDisposable(fn) {
        return { dispose: function () { fn(); } };
    }
    exports.toDisposable = toDisposable;
    var Disposable = /** @class */ (function () {
        function Disposable() {
            this._toDispose = [];
        }
        Object.defineProperty(Disposable.prototype, "toDispose", {
            get: function () { return this._toDispose; },
            enumerable: true,
            configurable: true
        });
        Disposable.prototype.dispose = function () {
            this._toDispose = dispose(this._toDispose);
        };
        Disposable.prototype._register = function (t) {
            this._toDispose.push(t);
            return t;
        };
        Disposable.None = Object.freeze({ dispose: function () { } });
        return Disposable;
    }());
    exports.Disposable = Disposable;
    var ReferenceCollection = /** @class */ (function () {
        function ReferenceCollection() {
            this.references = Object.create(null);
        }
        ReferenceCollection.prototype.acquire = function (key) {
            var _this = this;
            var reference = this.references[key];
            if (!reference) {
                reference = this.references[key] = { counter: 0, object: this.createReferencedObject(key) };
            }
            var object = reference.object;
            var dispose = functional_1.once(function () {
                if (--reference.counter === 0) {
                    _this.destroyReferencedObject(key, reference.object);
                    delete _this.references[key];
                }
            });
            reference.counter++;
            return { object: object, dispose: dispose };
        };
        return ReferenceCollection;
    }());
    exports.ReferenceCollection = ReferenceCollection;
    var ImmortalReference = /** @class */ (function () {
        function ImmortalReference(object) {
            this.object = object;
        }
        ImmortalReference.prototype.dispose = function () { };
        return ImmortalReference;
    }());
    exports.ImmortalReference = ImmortalReference;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=lifecycle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function once(fn) {
        var _this = this;
        var didCall = false;
        var result;
        return function () {
            if (didCall) {
                return result;
            }
            didCall = true;
            result = fn.apply(_this, arguments);
            return result;
        };
    }
    exports.once = once;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=functional.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(2), __webpack_require__(1), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, errors_1, functional_1, lifecycle_1, linkedList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Event;
    (function (Event) {
        var _disposable = { dispose: function () { } };
        Event.None = function () { return _disposable; };
    })(Event = exports.Event || (exports.Event = {}));
    var _globalLeakWarningThreshold = -1;
    function setGlobalLeakWarningThreshold(n) {
        var oldValue = _globalLeakWarningThreshold;
        _globalLeakWarningThreshold = n;
        return {
            dispose: function () {
                _globalLeakWarningThreshold = oldValue;
            }
        };
    }
    exports.setGlobalLeakWarningThreshold = setGlobalLeakWarningThreshold;
    var LeakageMonitor = /** @class */ (function () {
        function LeakageMonitor(customThreshold, name) {
            if (name === void 0) { name = Math.random().toString(18).slice(2, 5); }
            this.customThreshold = customThreshold;
            this.name = name;
            this._warnCountdown = 0;
        }
        LeakageMonitor.prototype.dispose = function () {
            if (this._stacks) {
                this._stacks.clear();
            }
        };
        LeakageMonitor.prototype.check = function (listenerCount) {
            var threshold = _globalLeakWarningThreshold;
            if (typeof this.customThreshold === 'number') {
                threshold = this.customThreshold;
            }
            if (threshold > 1 && threshold < listenerCount) {
                if (!this._stacks) {
                    this._stacks = new Map();
                }
                var stack = new Error().stack.split('\n').slice(3).join('\n');
                var count = (this._stacks.get(stack) || 0) + 1;
                this._stacks.set(stack, count);
                this._warnCountdown -= 1;
                if (this._warnCountdown <= 0) {
                    // only warn on first exceed and then every time the limit
                    // is exceeded by 50% again
                    this._warnCountdown = threshold * .5;
                    // find most frequent listener and print warning
                    var topStack_1;
                    var topCount_1 = 0;
                    this._stacks.forEach(function (count, stack) {
                        if (!topStack_1 || topCount_1 < count) {
                            topStack_1 = stack;
                            topCount_1 = count;
                        }
                    });
                    console.warn("[" + this.name + "] potential listener LEAK detected, having " + listenerCount + " listeners already. MOST frequent listener (" + topCount_1 + "):");
                    console.warn(topStack_1);
                }
            }
        };
        return LeakageMonitor;
    }());
    /**
     * The Emitter can be used to expose an Event to the public
     * to fire it from the insides.
     * Sample:
        class Document {
    
            private _onDidChange = new Emitter<(value:string)=>any>();
    
            public onDidChange = this._onDidChange.event;
    
            // getter-style
            // get onDidChange(): Event<(value:string)=>any> {
            // 	return this._onDidChange.event;
            // }
    
            private _doIt() {
                //...
                this._onDidChange.fire(value);
            }
        }
     */
    var Emitter = /** @class */ (function () {
        function Emitter(options) {
            this._disposed = false;
            this._options = options;
            this._leakageMon = new LeakageMonitor(this._options && this._options.leakWarningThreshold);
        }
        Object.defineProperty(Emitter.prototype, "event", {
            /**
             * For the public to allow to subscribe
             * to events from this Emitter
             */
            get: function () {
                var _this = this;
                if (!this._event) {
                    this._event = function (listener, thisArgs, disposables) {
                        if (!_this._listeners) {
                            _this._listeners = new linkedList_1.LinkedList();
                        }
                        var firstListener = _this._listeners.isEmpty();
                        if (firstListener && _this._options && _this._options.onFirstListenerAdd) {
                            _this._options.onFirstListenerAdd(_this);
                        }
                        var remove = _this._listeners.push(!thisArgs ? listener : [listener, thisArgs]);
                        if (firstListener && _this._options && _this._options.onFirstListenerDidAdd) {
                            _this._options.onFirstListenerDidAdd(_this);
                        }
                        if (_this._options && _this._options.onListenerDidAdd) {
                            _this._options.onListenerDidAdd(_this, listener, thisArgs);
                        }
                        // check and record this emitter for potential leakage
                        _this._leakageMon.check(_this._listeners.size);
                        var result;
                        result = {
                            dispose: function () {
                                result.dispose = Emitter._noop;
                                if (!_this._disposed) {
                                    remove();
                                    if (_this._options && _this._options.onLastListenerRemove) {
                                        var hasListeners = (_this._listeners && !_this._listeners.isEmpty());
                                        if (!hasListeners) {
                                            _this._options.onLastListenerRemove(_this);
                                        }
                                    }
                                }
                            }
                        };
                        if (Array.isArray(disposables)) {
                            disposables.push(result);
                        }
                        return result;
                    };
                }
                return this._event;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * To be kept private to fire an event to
         * subscribers
         */
        Emitter.prototype.fire = function (event) {
            if (this._listeners) {
                // put all [listener,event]-pairs into delivery queue
                // then emit all event. an inner/nested event might be
                // the driver of this
                if (!this._deliveryQueue) {
                    this._deliveryQueue = [];
                }
                for (var iter = this._listeners.iterator(), e = iter.next(); !e.done; e = iter.next()) {
                    this._deliveryQueue.push([e.value, event]);
                }
                while (this._deliveryQueue.length > 0) {
                    var _a = this._deliveryQueue.shift(), listener = _a[0], event_1 = _a[1];
                    try {
                        if (typeof listener === 'function') {
                            listener.call(undefined, event_1);
                        }
                        else {
                            listener[0].call(listener[1], event_1);
                        }
                    }
                    catch (e) {
                        errors_1.onUnexpectedError(e);
                    }
                }
            }
        };
        Emitter.prototype.dispose = function () {
            if (this._listeners) {
                this._listeners = undefined;
            }
            if (this._deliveryQueue) {
                this._deliveryQueue.length = 0;
            }
            this._leakageMon.dispose();
            this._disposed = true;
        };
        Emitter._noop = function () { };
        return Emitter;
    }());
    exports.Emitter = Emitter;
    var AsyncEmitter = /** @class */ (function (_super) {
        __extends(AsyncEmitter, _super);
        function AsyncEmitter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AsyncEmitter.prototype.fireAsync = function (eventFn) {
            return __awaiter(this, void 0, void 0, function () {
                var iter, e, thenables, _a, listener, event_2, thenables;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this._listeners) {
                                return [2 /*return*/];
                            }
                            // put all [listener,event]-pairs into delivery queue
                            // then emit all event. an inner/nested event might be
                            // the driver of this
                            if (!this._asyncDeliveryQueue) {
                                this._asyncDeliveryQueue = [];
                            }
                            for (iter = this._listeners.iterator(), e = iter.next(); !e.done; e = iter.next()) {
                                thenables = [];
                                this._asyncDeliveryQueue.push([e.value, eventFn(thenables, typeof e.value === 'function' ? e.value : e.value[0]), thenables]);
                            }
                            _b.label = 1;
                        case 1:
                            if (!(this._asyncDeliveryQueue.length > 0)) return [3 /*break*/, 3];
                            _a = this._asyncDeliveryQueue.shift(), listener = _a[0], event_2 = _a[1], thenables = _a[2];
                            try {
                                if (typeof listener === 'function') {
                                    listener.call(undefined, event_2);
                                }
                                else {
                                    listener[0].call(listener[1], event_2);
                                }
                            }
                            catch (e) {
                                errors_1.onUnexpectedError(e);
                                return [3 /*break*/, 1];
                            }
                            // freeze thenables-collection to enforce sync-calls to
                            // wait until and then wait for all thenables to resolve
                            Object.freeze(thenables);
                            return [4 /*yield*/, Promise.all(thenables)];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 1];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return AsyncEmitter;
    }(Emitter));
    exports.AsyncEmitter = AsyncEmitter;
    var EventMultiplexer = /** @class */ (function () {
        function EventMultiplexer() {
            var _this = this;
            this.hasListeners = false;
            this.events = [];
            this.emitter = new Emitter({
                onFirstListenerAdd: function () { return _this.onFirstListenerAdd(); },
                onLastListenerRemove: function () { return _this.onLastListenerRemove(); }
            });
        }
        Object.defineProperty(EventMultiplexer.prototype, "event", {
            get: function () {
                return this.emitter.event;
            },
            enumerable: true,
            configurable: true
        });
        EventMultiplexer.prototype.add = function (event) {
            var _this = this;
            var e = { event: event, listener: null };
            this.events.push(e);
            if (this.hasListeners) {
                this.hook(e);
            }
            var dispose = function () {
                if (_this.hasListeners) {
                    _this.unhook(e);
                }
                var idx = _this.events.indexOf(e);
                _this.events.splice(idx, 1);
            };
            return lifecycle_1.toDisposable(functional_1.once(dispose));
        };
        EventMultiplexer.prototype.onFirstListenerAdd = function () {
            var _this = this;
            this.hasListeners = true;
            this.events.forEach(function (e) { return _this.hook(e); });
        };
        EventMultiplexer.prototype.onLastListenerRemove = function () {
            var _this = this;
            this.hasListeners = false;
            this.events.forEach(function (e) { return _this.unhook(e); });
        };
        EventMultiplexer.prototype.hook = function (e) {
            var _this = this;
            e.listener = e.event(function (r) { return _this.emitter.fire(r); });
        };
        EventMultiplexer.prototype.unhook = function (e) {
            if (e.listener) {
                e.listener.dispose();
            }
            e.listener = null;
        };
        EventMultiplexer.prototype.dispose = function () {
            this.emitter.dispose();
        };
        return EventMultiplexer;
    }());
    exports.EventMultiplexer = EventMultiplexer;
    function fromPromise(promise) {
        var emitter = new Emitter();
        var shouldEmit = false;
        promise
            .then(undefined, function () { return null; })
            .then(function () {
            if (!shouldEmit) {
                setTimeout(function () { return emitter.fire(); }, 0);
            }
            else {
                emitter.fire();
            }
        });
        shouldEmit = true;
        return emitter.event;
    }
    exports.fromPromise = fromPromise;
    function toPromise(event) {
        return new Promise(function (c) { return once(event)(c); });
    }
    exports.toPromise = toPromise;
    function once(event) {
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            // we need this, in case the event fires during the listener call
            var didFire = false;
            var result = event(function (e) {
                if (didFire) {
                    return;
                }
                else if (result) {
                    result.dispose();
                }
                else {
                    didFire = true;
                }
                return listener.call(thisArgs, e);
            }, null, disposables);
            if (didFire) {
                result.dispose();
            }
            return result;
        };
    }
    exports.once = once;
    function anyEvent() {
        var events = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            events[_i] = arguments[_i];
        }
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return lifecycle_1.combinedDisposable(events.map(function (event) { return event(function (e) { return listener.call(thisArgs, e); }, null, disposables); }));
        };
    }
    exports.anyEvent = anyEvent;
    function debounceEvent(event, merger, delay, leading) {
        if (delay === void 0) { delay = 100; }
        if (leading === void 0) { leading = false; }
        var subscription;
        var output = undefined;
        var handle = undefined;
        var numDebouncedCalls = 0;
        var emitter = new Emitter({
            onFirstListenerAdd: function () {
                subscription = event(function (cur) {
                    numDebouncedCalls++;
                    output = merger(output, cur);
                    if (leading && !handle) {
                        emitter.fire(output);
                    }
                    clearTimeout(handle);
                    handle = setTimeout(function () {
                        var _output = output;
                        output = undefined;
                        handle = undefined;
                        if (!leading || numDebouncedCalls > 1) {
                            emitter.fire(_output);
                        }
                        numDebouncedCalls = 0;
                    }, delay);
                });
            },
            onLastListenerRemove: function () {
                subscription.dispose();
            }
        });
        return emitter.event;
    }
    exports.debounceEvent = debounceEvent;
    /**
     * The EventDelayer is useful in situations in which you want
     * to delay firing your events during some code.
     * You can wrap that code and be sure that the event will not
     * be fired during that wrap.
     *
     * ```
     * const emitter: Emitter;
     * const delayer = new EventDelayer();
     * const delayedEvent = delayer.wrapEvent(emitter.event);
     *
     * delayedEvent(console.log);
     *
     * delayer.bufferEvents(() => {
     *   emitter.fire(); // event will not be fired yet
     * });
     *
     * // event will only be fired at this point
     * ```
     */
    var EventBufferer = /** @class */ (function () {
        function EventBufferer() {
            this.buffers = [];
        }
        EventBufferer.prototype.wrapEvent = function (event) {
            var _this = this;
            return function (listener, thisArgs, disposables) {
                return event(function (i) {
                    var buffer = _this.buffers[_this.buffers.length - 1];
                    if (buffer) {
                        buffer.push(function () { return listener.call(thisArgs, i); });
                    }
                    else {
                        listener.call(thisArgs, i);
                    }
                }, void 0, disposables);
            };
        };
        EventBufferer.prototype.bufferEvents = function (fn) {
            var buffer = [];
            this.buffers.push(buffer);
            var r = fn();
            this.buffers.pop();
            buffer.forEach(function (flush) { return flush(); });
            return r;
        };
        return EventBufferer;
    }());
    exports.EventBufferer = EventBufferer;
    function mapEvent(event, map) {
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return event(function (i) { return listener.call(thisArgs, map(i)); }, null, disposables);
        };
    }
    exports.mapEvent = mapEvent;
    function forEach(event, each) {
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return event(function (i) { each(i); listener.call(thisArgs, i); }, null, disposables);
        };
    }
    exports.forEach = forEach;
    function filterEvent(event, filter) {
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return event(function (e) { return filter(e) && listener.call(thisArgs, e); }, null, disposables);
        };
    }
    exports.filterEvent = filterEvent;
    function signalEvent(event) {
        return event;
    }
    exports.signalEvent = signalEvent;
    var ChainableEvent = /** @class */ (function () {
        function ChainableEvent(_event) {
            this._event = _event;
        }
        Object.defineProperty(ChainableEvent.prototype, "event", {
            get: function () { return this._event; },
            enumerable: true,
            configurable: true
        });
        ChainableEvent.prototype.map = function (fn) {
            return new ChainableEvent(mapEvent(this._event, fn));
        };
        ChainableEvent.prototype.forEach = function (fn) {
            return new ChainableEvent(forEach(this._event, fn));
        };
        ChainableEvent.prototype.filter = function (fn) {
            return new ChainableEvent(filterEvent(this._event, fn));
        };
        ChainableEvent.prototype.latch = function () {
            return new ChainableEvent(latch(this._event));
        };
        ChainableEvent.prototype.on = function (listener, thisArgs, disposables) {
            return this._event(listener, thisArgs, disposables);
        };
        ChainableEvent.prototype.once = function (listener, thisArgs, disposables) {
            return once(this._event)(listener, thisArgs, disposables);
        };
        return ChainableEvent;
    }());
    function chain(event) {
        return new ChainableEvent(event);
    }
    exports.chain = chain;
    function stopwatch(event) {
        var start = new Date().getTime();
        return mapEvent(once(event), function (_) { return new Date().getTime() - start; });
    }
    exports.stopwatch = stopwatch;
    /**
     * Buffers the provided event until a first listener comes
     * along, at which point fire all the events at once and
     * pipe the event from then on.
     *
     * ```typescript
     * const emitter = new Emitter<number>();
     * const event = emitter.event;
     * const bufferedEvent = buffer(event);
     *
     * emitter.fire(1);
     * emitter.fire(2);
     * emitter.fire(3);
     * // nothing...
     *
     * const listener = bufferedEvent(num => console.log(num));
     * // 1, 2, 3
     *
     * emitter.fire(4);
     * // 4
     * ```
     */
    function buffer(event, nextTick, _buffer) {
        if (nextTick === void 0) { nextTick = false; }
        if (_buffer === void 0) { _buffer = []; }
        var buffer = _buffer.slice();
        var listener = event(function (e) {
            if (buffer) {
                buffer.push(e);
            }
            else {
                emitter.fire(e);
            }
        });
        var flush = function () {
            if (buffer) {
                buffer.forEach(function (e) { return emitter.fire(e); });
            }
            buffer = null;
        };
        var emitter = new Emitter({
            onFirstListenerAdd: function () {
                if (!listener) {
                    listener = event(function (e) { return emitter.fire(e); });
                }
            },
            onFirstListenerDidAdd: function () {
                if (buffer) {
                    if (nextTick) {
                        setTimeout(flush);
                    }
                    else {
                        flush();
                    }
                }
            },
            onLastListenerRemove: function () {
                if (listener) {
                    listener.dispose();
                }
                listener = null;
            }
        });
        return emitter.event;
    }
    exports.buffer = buffer;
    /**
     * Similar to `buffer` but it buffers indefinitely and repeats
     * the buffered events to every new listener.
     */
    function echo(event, nextTick, buffer) {
        if (nextTick === void 0) { nextTick = false; }
        if (buffer === void 0) { buffer = []; }
        buffer = buffer.slice();
        event(function (e) {
            buffer.push(e);
            emitter.fire(e);
        });
        var flush = function (listener, thisArgs) { return buffer.forEach(function (e) { return listener.call(thisArgs, e); }); };
        var emitter = new Emitter({
            onListenerDidAdd: function (emitter, listener, thisArgs) {
                if (nextTick) {
                    setTimeout(function () { return flush(listener, thisArgs); });
                }
                else {
                    flush(listener, thisArgs);
                }
            }
        });
        return emitter.event;
    }
    exports.echo = echo;
    var Relay = /** @class */ (function () {
        function Relay() {
            var _this = this;
            this.listening = false;
            this.inputEvent = Event.None;
            this.inputEventListener = lifecycle_1.Disposable.None;
            this.emitter = new Emitter({
                onFirstListenerDidAdd: function () {
                    _this.listening = true;
                    _this.inputEventListener = _this.inputEvent(_this.emitter.fire, _this.emitter);
                },
                onLastListenerRemove: function () {
                    _this.listening = false;
                    _this.inputEventListener.dispose();
                }
            });
            this.event = this.emitter.event;
        }
        Object.defineProperty(Relay.prototype, "input", {
            set: function (event) {
                this.inputEvent = event;
                if (this.listening) {
                    this.inputEventListener.dispose();
                    this.inputEventListener = event(this.emitter.fire, this.emitter);
                }
            },
            enumerable: true,
            configurable: true
        });
        Relay.prototype.dispose = function () {
            this.inputEventListener.dispose();
            this.emitter.dispose();
        };
        return Relay;
    }());
    exports.Relay = Relay;
    function fromNodeEventEmitter(emitter, eventName, map) {
        if (map === void 0) { map = function (id) { return id; }; }
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return result.fire(map.apply(void 0, args));
        };
        var onFirstListenerAdd = function () { return emitter.on(eventName, fn); };
        var onLastListenerRemove = function () { return emitter.removeListener(eventName, fn); };
        var result = new Emitter({ onFirstListenerAdd: onFirstListenerAdd, onLastListenerRemove: onLastListenerRemove });
        return result.event;
    }
    exports.fromNodeEventEmitter = fromNodeEventEmitter;
    function latch(event) {
        var firstCall = true;
        var cache;
        return filterEvent(event, function (value) {
            var shouldEmit = firstCall || value !== cache;
            firstCall = false;
            cache = value;
            return shouldEmit;
        });
    }
    exports.latch = latch;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, winjs_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // ------ BEGIN Hook up error listeners to winjs promises
    var outstandingPromiseErrors = {};
    function promiseErrorHandler(e) {
        //
        // e.detail looks like: { exception, error, promise, handler, id, parent }
        //
        var details = e.detail;
        var id = details.id;
        // If the error has a parent promise then this is not the origination of the
        //  error so we check if it has a handler, and if so we mark that the error
        //  was handled by removing it from outstandingPromiseErrors
        //
        if (details.parent) {
            if (details.handler && outstandingPromiseErrors) {
                delete outstandingPromiseErrors[id];
            }
            return;
        }
        // Indicate that this error was originated and needs to be handled
        outstandingPromiseErrors[id] = details;
        // The first time the queue fills up this iteration, schedule a timeout to
        // check if any errors are still unhandled.
        if (Object.keys(outstandingPromiseErrors).length === 1) {
            setTimeout(function () {
                var errors = outstandingPromiseErrors;
                outstandingPromiseErrors = {};
                Object.keys(errors).forEach(function (errorId) {
                    var error = errors[errorId];
                    if (error.exception) {
                        onUnexpectedError(error.exception);
                    }
                    else if (error.error) {
                        onUnexpectedError(error.error);
                    }
                    console.log('WARNING: Promise with no error callback:' + error.id);
                    console.log(error);
                    if (error.exception) {
                        console.log(error.exception.stack);
                    }
                });
            }, 0);
        }
    }
    winjs_base_1.TPromise.addEventListener('error', promiseErrorHandler);
    // Avoid circular dependency on EventEmitter by implementing a subset of the interface.
    var ErrorHandler = /** @class */ (function () {
        function ErrorHandler() {
            this.listeners = [];
            this.unexpectedErrorHandler = function (e) {
                setTimeout(function () {
                    if (e.stack) {
                        throw new Error(e.message + '\n\n' + e.stack);
                    }
                    throw e;
                }, 0);
            };
        }
        ErrorHandler.prototype.addListener = function (listener) {
            var _this = this;
            this.listeners.push(listener);
            return function () {
                _this._removeListener(listener);
            };
        };
        ErrorHandler.prototype.emit = function (e) {
            this.listeners.forEach(function (listener) {
                listener(e);
            });
        };
        ErrorHandler.prototype._removeListener = function (listener) {
            this.listeners.splice(this.listeners.indexOf(listener), 1);
        };
        ErrorHandler.prototype.setUnexpectedErrorHandler = function (newUnexpectedErrorHandler) {
            this.unexpectedErrorHandler = newUnexpectedErrorHandler;
        };
        ErrorHandler.prototype.getUnexpectedErrorHandler = function () {
            return this.unexpectedErrorHandler;
        };
        ErrorHandler.prototype.onUnexpectedError = function (e) {
            this.unexpectedErrorHandler(e);
            this.emit(e);
        };
        // For external errors, we don't want the listeners to be called
        ErrorHandler.prototype.onUnexpectedExternalError = function (e) {
            this.unexpectedErrorHandler(e);
        };
        return ErrorHandler;
    }());
    exports.ErrorHandler = ErrorHandler;
    exports.errorHandler = new ErrorHandler();
    function setUnexpectedErrorHandler(newUnexpectedErrorHandler) {
        exports.errorHandler.setUnexpectedErrorHandler(newUnexpectedErrorHandler);
    }
    exports.setUnexpectedErrorHandler = setUnexpectedErrorHandler;
    function onUnexpectedError(e) {
        // ignore errors from cancelled promises
        if (!isPromiseCanceledError(e)) {
            exports.errorHandler.onUnexpectedError(e);
        }
        return undefined;
    }
    exports.onUnexpectedError = onUnexpectedError;
    function onUnexpectedExternalError(e) {
        // ignore errors from cancelled promises
        if (!isPromiseCanceledError(e)) {
            exports.errorHandler.onUnexpectedExternalError(e);
        }
        return undefined;
    }
    exports.onUnexpectedExternalError = onUnexpectedExternalError;
    function transformErrorForSerialization(error) {
        if (error instanceof Error) {
            var name_1 = error.name, message = error.message;
            var stack = error.stacktrace || error.stack;
            return {
                $isError: true,
                name: name_1,
                message: message,
                stack: stack
            };
        }
        // return as is
        return error;
    }
    exports.transformErrorForSerialization = transformErrorForSerialization;
    var canceledName = 'Canceled';
    /**
     * Checks if the given error is a promise in canceled state
     */
    function isPromiseCanceledError(error) {
        return error instanceof Error && error.name === canceledName && error.message === canceledName;
    }
    exports.isPromiseCanceledError = isPromiseCanceledError;
    /**
     * Returns an error that signals cancellation.
     */
    function canceled() {
        var error = new Error(canceledName);
        error.name = error.message;
        return error;
    }
    exports.canceled = canceled;
    function illegalArgument(name) {
        if (name) {
            return new Error("Illegal argument: " + name);
        }
        else {
            return new Error('Illegal argument');
        }
    }
    exports.illegalArgument = illegalArgument;
    function illegalState(name) {
        if (name) {
            return new Error("Illegal state: " + name);
        }
        else {
            return new Error('Illegal state');
        }
    }
    exports.illegalState = illegalState;
    function readonly(name) {
        return name
            ? new Error("readonly property '" + name + " cannot be changed'")
            : new Error('readonly property cannot be changed');
    }
    exports.readonly = readonly;
    function disposed(what) {
        var result = new Error(what + " has been disposed");
        result.name = 'DISPOSED';
        return result;
    }
    exports.disposed = disposed;
    function getErrorMessage(err) {
        if (!err) {
            return 'Error';
        }
        if (err.message) {
            return err.message;
        }
        if (err.stack) {
            return err.stack.split('\n')[0];
        }
        return String(err);
    }
    exports.getErrorMessage = getErrorMessage;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=errors.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Extracted from https://github.com/winjs/winjs
 * Version: 4.4.0(ec3258a9f3a36805a187848984e3bb938044178d)
 * Copyright (c) Microsoft Corporation.
 * All Rights Reserved.
 * Licensed under the MIT License.
 */
var __winjs_exports;

(function() {

var _modules = Object.create(null);//{};
_modules["WinJS/Core/_WinJS"] = {};

var _winjs = function(moduleId, deps, factory) {
    var exports = {};
    var exportsPassedIn = false;

    var depsValues = deps.map(function(dep) {
        if (dep === 'exports') {
            exportsPassedIn = true;
            return exports;
        }
        return _modules[dep];
    });

    var result = factory.apply({}, depsValues);

    _modules[moduleId] = exportsPassedIn ? exports : result;
};


_winjs("WinJS/Core/_Global", [], function () {
    "use strict";

    // Appease jshint
    /* global window, self, global */

    var globalObject =
        typeof window !== 'undefined' ? window :
        typeof self !== 'undefined' ? self :
        typeof global !== 'undefined' ? global :
        {};
    return globalObject;
});

_winjs("WinJS/Core/_BaseCoreUtils", ["WinJS/Core/_Global"], function baseCoreUtilsInit(_Global) {
    "use strict";

    var hasWinRT = !!_Global.Windows;

    function markSupportedForProcessing(func) {
        /// <signature helpKeyword="WinJS.Utilities.markSupportedForProcessing">
        /// <summary locid="WinJS.Utilities.markSupportedForProcessing">
        /// Marks a function as being compatible with declarative processing, such as WinJS.UI.processAll
        /// or WinJS.Binding.processAll.
        /// </summary>
        /// <param name="func" type="Function" locid="WinJS.Utilities.markSupportedForProcessing_p:func">
        /// The function to be marked as compatible with declarative processing.
        /// </param>
        /// <returns type="Function" locid="WinJS.Utilities.markSupportedForProcessing_returnValue">
        /// The input function.
        /// </returns>
        /// </signature>
        func.supportedForProcessing = true;
        return func;
    }

    var actualSetImmediate = null;

    return {
        hasWinRT: hasWinRT,
        markSupportedForProcessing: markSupportedForProcessing,
        _setImmediate: function (callback) {
            // BEGIN monaco change
            if (actualSetImmediate === null) {
                if (_Global.setImmediate) {
                    actualSetImmediate = _Global.setImmediate.bind(_Global);
                } else if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
                    actualSetImmediate = process.nextTick.bind(process);
                } else {
                    actualSetImmediate = _Global.setTimeout.bind(_Global);
                }
            }
            actualSetImmediate(callback);
            // END monaco change
        }
    };
});
_winjs("WinJS/Core/_WriteProfilerMark", ["WinJS/Core/_Global"], function profilerInit(_Global) {
    "use strict";

    return _Global.msWriteProfilerMark || function () { };
});
_winjs("WinJS/Core/_Base", ["WinJS/Core/_WinJS","WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_WriteProfilerMark"], function baseInit(_WinJS, _Global, _BaseCoreUtils, _WriteProfilerMark) {
    "use strict";

    function initializeProperties(target, members, prefix) {
        var keys = Object.keys(members);
        var isArray = Array.isArray(target);
        var properties;
        var i, len;
        for (i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var enumerable = key.charCodeAt(0) !== /*_*/95;
            var member = members[key];
            if (member && typeof member === 'object') {
                if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
                    if (member.enumerable === undefined) {
                        member.enumerable = enumerable;
                    }
                    if (prefix && member.setName && typeof member.setName === 'function') {
                        member.setName(prefix + "." + key);
                    }
                    properties = properties || {};
                    properties[key] = member;
                    continue;
                }
            }
            if (!enumerable) {
                properties = properties || {};
                properties[key] = { value: member, enumerable: enumerable, configurable: true, writable: true };
                continue;
            }
            if (isArray) {
                target.forEach(function (target) {
                    target[key] = member;
                });
            } else {
                target[key] = member;
            }
        }
        if (properties) {
            if (isArray) {
                target.forEach(function (target) {
                    Object.defineProperties(target, properties);
                });
            } else {
                Object.defineProperties(target, properties);
            }
        }
    }

    (function () {

        var _rootNamespace = _WinJS;
        if (!_rootNamespace.Namespace) {
            _rootNamespace.Namespace = Object.create(Object.prototype);
        }

        function createNamespace(parentNamespace, name) {
            var currentNamespace = parentNamespace || {};
            if (name) {
                var namespaceFragments = name.split(".");
                if (currentNamespace === _Global && namespaceFragments[0] === "WinJS") {
                    currentNamespace = _WinJS;
                    namespaceFragments.splice(0, 1);
                }
                for (var i = 0, len = namespaceFragments.length; i < len; i++) {
                    var namespaceName = namespaceFragments[i];
                    if (!currentNamespace[namespaceName]) {
                        Object.defineProperty(currentNamespace, namespaceName,
                            { value: {}, writable: false, enumerable: true, configurable: true }
                        );
                    }
                    currentNamespace = currentNamespace[namespaceName];
                }
            }
            return currentNamespace;
        }

        function defineWithParent(parentNamespace, name, members) {
            /// <signature helpKeyword="WinJS.Namespace.defineWithParent">
            /// <summary locid="WinJS.Namespace.defineWithParent">
            /// Defines a new namespace with the specified name under the specified parent namespace.
            /// </summary>
            /// <param name="parentNamespace" type="Object" locid="WinJS.Namespace.defineWithParent_p:parentNamespace">
            /// The parent namespace.
            /// </param>
            /// <param name="name" type="String" locid="WinJS.Namespace.defineWithParent_p:name">
            /// The name of the new namespace.
            /// </param>
            /// <param name="members" type="Object" locid="WinJS.Namespace.defineWithParent_p:members">
            /// The members of the new namespace.
            /// </param>
            /// <returns type="Object" locid="WinJS.Namespace.defineWithParent_returnValue">
            /// The newly-defined namespace.
            /// </returns>
            /// </signature>
            var currentNamespace = createNamespace(parentNamespace, name);

            if (members) {
                initializeProperties(currentNamespace, members, name || "<ANONYMOUS>");
            }

            return currentNamespace;
        }

        function define(name, members) {
            /// <signature helpKeyword="WinJS.Namespace.define">
            /// <summary locid="WinJS.Namespace.define">
            /// Defines a new namespace with the specified name.
            /// </summary>
            /// <param name="name" type="String" locid="WinJS.Namespace.define_p:name">
            /// The name of the namespace. This could be a dot-separated name for nested namespaces.
            /// </param>
            /// <param name="members" type="Object" locid="WinJS.Namespace.define_p:members">
            /// The members of the new namespace.
            /// </param>
            /// <returns type="Object" locid="WinJS.Namespace.define_returnValue">
            /// The newly-defined namespace.
            /// </returns>
            /// </signature>
            return defineWithParent(_Global, name, members);
        }

        var LazyStates = {
            uninitialized: 1,
            working: 2,
            initialized: 3,
        };

        function lazy(f) {
            var name;
            var state = LazyStates.uninitialized;
            var result;
            return {
                setName: function (value) {
                    name = value;
                },
                get: function () {
                    switch (state) {
                        case LazyStates.initialized:
                            return result;

                        case LazyStates.uninitialized:
                            state = LazyStates.working;
                            try {
                                _WriteProfilerMark("WinJS.Namespace._lazy:" + name + ",StartTM");
                                result = f();
                            } finally {
                                _WriteProfilerMark("WinJS.Namespace._lazy:" + name + ",StopTM");
                                state = LazyStates.uninitialized;
                            }
                            f = null;
                            state = LazyStates.initialized;
                            return result;

                        case LazyStates.working:
                            throw "Illegal: reentrancy on initialization";

                        default:
                            throw "Illegal";
                    }
                },
                set: function (value) {
                    switch (state) {
                        case LazyStates.working:
                            throw "Illegal: reentrancy on initialization";

                        default:
                            state = LazyStates.initialized;
                            result = value;
                            break;
                    }
                },
                enumerable: true,
                configurable: true,
            };
        }

        // helper for defining AMD module members
        function moduleDefine(exports, name, members) {
            var target = [exports];
            var publicNS = null;
            if (name) {
                publicNS = createNamespace(_Global, name);
                target.push(publicNS);
            }
            initializeProperties(target, members, name || "<ANONYMOUS>");
            return publicNS;
        }

        // Establish members of the "WinJS.Namespace" namespace
        Object.defineProperties(_rootNamespace.Namespace, {

            defineWithParent: { value: defineWithParent, writable: true, enumerable: true, configurable: true },

            define: { value: define, writable: true, enumerable: true, configurable: true },

            _lazy: { value: lazy, writable: true, enumerable: true, configurable: true },

            _moduleDefine: { value: moduleDefine, writable: true, enumerable: true, configurable: true }

        });

    })();

    (function () {

        function define(constructor, instanceMembers, staticMembers) {
            /// <signature helpKeyword="WinJS.Class.define">
            /// <summary locid="WinJS.Class.define">
            /// Defines a class using the given constructor and the specified instance members.
            /// </summary>
            /// <param name="constructor" type="Function" locid="WinJS.Class.define_p:constructor">
            /// A constructor function that is used to instantiate this class.
            /// </param>
            /// <param name="instanceMembers" type="Object" locid="WinJS.Class.define_p:instanceMembers">
            /// The set of instance fields, properties, and methods made available on the class.
            /// </param>
            /// <param name="staticMembers" type="Object" locid="WinJS.Class.define_p:staticMembers">
            /// The set of static fields, properties, and methods made available on the class.
            /// </param>
            /// <returns type="Function" locid="WinJS.Class.define_returnValue">
            /// The newly-defined class.
            /// </returns>
            /// </signature>
            constructor = constructor || function () { };
            _BaseCoreUtils.markSupportedForProcessing(constructor);
            if (instanceMembers) {
                initializeProperties(constructor.prototype, instanceMembers);
            }
            if (staticMembers) {
                initializeProperties(constructor, staticMembers);
            }
            return constructor;
        }

        function derive(baseClass, constructor, instanceMembers, staticMembers) {
            /// <signature helpKeyword="WinJS.Class.derive">
            /// <summary locid="WinJS.Class.derive">
            /// Creates a sub-class based on the supplied baseClass parameter, using prototypal inheritance.
            /// </summary>
            /// <param name="baseClass" type="Function" locid="WinJS.Class.derive_p:baseClass">
            /// The class to inherit from.
            /// </param>
            /// <param name="constructor" type="Function" locid="WinJS.Class.derive_p:constructor">
            /// A constructor function that is used to instantiate this class.
            /// </param>
            /// <param name="instanceMembers" type="Object" locid="WinJS.Class.derive_p:instanceMembers">
            /// The set of instance fields, properties, and methods to be made available on the class.
            /// </param>
            /// <param name="staticMembers" type="Object" locid="WinJS.Class.derive_p:staticMembers">
            /// The set of static fields, properties, and methods to be made available on the class.
            /// </param>
            /// <returns type="Function" locid="WinJS.Class.derive_returnValue">
            /// The newly-defined class.
            /// </returns>
            /// </signature>
            if (baseClass) {
                constructor = constructor || function () { };
                var basePrototype = baseClass.prototype;
                constructor.prototype = Object.create(basePrototype);
                _BaseCoreUtils.markSupportedForProcessing(constructor);
                Object.defineProperty(constructor.prototype, "constructor", { value: constructor, writable: true, configurable: true, enumerable: true });
                if (instanceMembers) {
                    initializeProperties(constructor.prototype, instanceMembers);
                }
                if (staticMembers) {
                    initializeProperties(constructor, staticMembers);
                }
                return constructor;
            } else {
                return define(constructor, instanceMembers, staticMembers);
            }
        }

        function mix(constructor) {
            /// <signature helpKeyword="WinJS.Class.mix">
            /// <summary locid="WinJS.Class.mix">
            /// Defines a class using the given constructor and the union of the set of instance members
            /// specified by all the mixin objects. The mixin parameter list is of variable length.
            /// </summary>
            /// <param name="constructor" locid="WinJS.Class.mix_p:constructor">
            /// A constructor function that is used to instantiate this class.
            /// </param>
            /// <returns type="Function" locid="WinJS.Class.mix_returnValue">
            /// The newly-defined class.
            /// </returns>
            /// </signature>
            constructor = constructor || function () { };
            var i, len;
            for (i = 1, len = arguments.length; i < len; i++) {
                initializeProperties(constructor.prototype, arguments[i]);
            }
            return constructor;
        }

        // Establish members of "WinJS.Class" namespace
        _WinJS.Namespace.define("WinJS.Class", {
            define: define,
            derive: derive,
            mix: mix
        });

    })();

    return {
        Namespace: _WinJS.Namespace,
        Class: _WinJS.Class
    };

});
_winjs("WinJS/Core/_ErrorFromName", ["WinJS/Core/_Base"], function errorsInit(_Base) {
    "use strict";

    var ErrorFromName = _Base.Class.derive(Error, function (name, message) {
        /// <signature helpKeyword="WinJS.ErrorFromName">
        /// <summary locid="WinJS.ErrorFromName">
        /// Creates an Error object with the specified name and message properties.
        /// </summary>
        /// <param name="name" type="String" locid="WinJS.ErrorFromName_p:name">The name of this error. The name is meant to be consumed programmatically and should not be localized.</param>
        /// <param name="message" type="String" optional="true" locid="WinJS.ErrorFromName_p:message">The message for this error. The message is meant to be consumed by humans and should be localized.</param>
        /// <returns type="Error" locid="WinJS.ErrorFromName_returnValue">Error instance with .name and .message properties populated</returns>
        /// </signature>
        this.name = name;
        this.message = message || name;
    }, {
        /* empty */
    }, {
        supportedForProcessing: false,
    });

    _Base.Namespace.define("WinJS", {
        // ErrorFromName establishes a simple pattern for returning error codes.
        //
        ErrorFromName: ErrorFromName
    });

    return ErrorFromName;

});


_winjs("WinJS/Core/_Events", ["exports","WinJS/Core/_Base"], function eventsInit(exports, _Base) {
    "use strict";


    function createEventProperty(name) {
        var eventPropStateName = "_on" + name + "state";

        return {
            get: function () {
                var state = this[eventPropStateName];
                return state && state.userHandler;
            },
            set: function (handler) {
                var state = this[eventPropStateName];
                if (handler) {
                    if (!state) {
                        state = { wrapper: function (evt) { return state.userHandler(evt); }, userHandler: handler };
                        Object.defineProperty(this, eventPropStateName, { value: state, enumerable: false, writable:true, configurable: true });
                        this.addEventListener(name, state.wrapper, false);
                    }
                    state.userHandler = handler;
                } else if (state) {
                    this.removeEventListener(name, state.wrapper, false);
                    this[eventPropStateName] = null;
                }
            },
            enumerable: true
        };
    }

    function createEventProperties() {
        /// <signature helpKeyword="WinJS.Utilities.createEventProperties">
        /// <summary locid="WinJS.Utilities.createEventProperties">
        /// Creates an object that has one property for each name passed to the function.
        /// </summary>
        /// <param name="events" locid="WinJS.Utilities.createEventProperties_p:events">
        /// A variable list of property names.
        /// </param>
        /// <returns type="Object" locid="WinJS.Utilities.createEventProperties_returnValue">
        /// The object with the specified properties. The names of the properties are prefixed with 'on'.
        /// </returns>
        /// </signature>
        var props = {};
        for (var i = 0, len = arguments.length; i < len; i++) {
            var name = arguments[i];
            props["on" + name] = createEventProperty(name);
        }
        return props;
    }

    var EventMixinEvent = _Base.Class.define(
        function EventMixinEvent_ctor(type, detail, target) {
            this.detail = detail;
            this.target = target;
            this.timeStamp = Date.now();
            this.type = type;
        },
        {
            bubbles: { value: false, writable: false },
            cancelable: { value: false, writable: false },
            currentTarget: {
                get: function () { return this.target; }
            },
            defaultPrevented: {
                get: function () { return this._preventDefaultCalled; }
            },
            trusted: { value: false, writable: false },
            eventPhase: { value: 0, writable: false },
            target: null,
            timeStamp: null,
            type: null,

            preventDefault: function () {
                this._preventDefaultCalled = true;
            },
            stopImmediatePropagation: function () {
                this._stopImmediatePropagationCalled = true;
            },
            stopPropagation: function () {
            }
        }, {
            supportedForProcessing: false,
        }
    );

    var eventMixin = {
        _listeners: null,

        addEventListener: function (type, listener, useCapture) {
            /// <signature helpKeyword="WinJS.Utilities.eventMixin.addEventListener">
            /// <summary locid="WinJS.Utilities.eventMixin.addEventListener">
            /// Adds an event listener to the control.
            /// </summary>
            /// <param name="type" locid="WinJS.Utilities.eventMixin.addEventListener_p:type">
            /// The type (name) of the event.
            /// </param>
            /// <param name="listener" locid="WinJS.Utilities.eventMixin.addEventListener_p:listener">
            /// The listener to invoke when the event is raised.
            /// </param>
            /// <param name="useCapture" locid="WinJS.Utilities.eventMixin.addEventListener_p:useCapture">
            /// if true initiates capture, otherwise false.
            /// </param>
            /// </signature>
            useCapture = useCapture || false;
            this._listeners = this._listeners || {};
            var eventListeners = (this._listeners[type] = this._listeners[type] || []);
            for (var i = 0, len = eventListeners.length; i < len; i++) {
                var l = eventListeners[i];
                if (l.useCapture === useCapture && l.listener === listener) {
                    return;
                }
            }
            eventListeners.push({ listener: listener, useCapture: useCapture });
        },
        dispatchEvent: function (type, details) {
            /// <signature helpKeyword="WinJS.Utilities.eventMixin.dispatchEvent">
            /// <summary locid="WinJS.Utilities.eventMixin.dispatchEvent">
            /// Raises an event of the specified type and with the specified additional properties.
            /// </summary>
            /// <param name="type" locid="WinJS.Utilities.eventMixin.dispatchEvent_p:type">
            /// The type (name) of the event.
            /// </param>
            /// <param name="details" locid="WinJS.Utilities.eventMixin.dispatchEvent_p:details">
            /// The set of additional properties to be attached to the event object when the event is raised.
            /// </param>
            /// <returns type="Boolean" locid="WinJS.Utilities.eventMixin.dispatchEvent_returnValue">
            /// true if preventDefault was called on the event.
            /// </returns>
            /// </signature>
            var listeners = this._listeners && this._listeners[type];
            if (listeners) {
                var eventValue = new EventMixinEvent(type, details, this);
                // Need to copy the array to protect against people unregistering while we are dispatching
                listeners = listeners.slice(0, listeners.length);
                for (var i = 0, len = listeners.length; i < len && !eventValue._stopImmediatePropagationCalled; i++) {
                    listeners[i].listener(eventValue);
                }
                return eventValue.defaultPrevented || false;
            }
            return false;
        },
        removeEventListener: function (type, listener, useCapture) {
            /// <signature helpKeyword="WinJS.Utilities.eventMixin.removeEventListener">
            /// <summary locid="WinJS.Utilities.eventMixin.removeEventListener">
            /// Removes an event listener from the control.
            /// </summary>
            /// <param name="type" locid="WinJS.Utilities.eventMixin.removeEventListener_p:type">
            /// The type (name) of the event.
            /// </param>
            /// <param name="listener" locid="WinJS.Utilities.eventMixin.removeEventListener_p:listener">
            /// The listener to remove.
            /// </param>
            /// <param name="useCapture" locid="WinJS.Utilities.eventMixin.removeEventListener_p:useCapture">
            /// Specifies whether to initiate capture.
            /// </param>
            /// </signature>
            useCapture = useCapture || false;
            var listeners = this._listeners && this._listeners[type];
            if (listeners) {
                for (var i = 0, len = listeners.length; i < len; i++) {
                    var l = listeners[i];
                    if (l.listener === listener && l.useCapture === useCapture) {
                        listeners.splice(i, 1);
                        if (listeners.length === 0) {
                            delete this._listeners[type];
                        }
                        // Only want to remove one element for each call to removeEventListener
                        break;
                    }
                }
            }
        }
    };

    _Base.Namespace._moduleDefine(exports, "WinJS.Utilities", {
        _createEventProperty: createEventProperty,
        createEventProperties: createEventProperties,
        eventMixin: eventMixin
    });

});


_winjs("WinJS/Core/_Trace", ["WinJS/Core/_Global"], function traceInit(_Global) {
    "use strict";

    function nop(v) {
        return v;
    }

    return {
        _traceAsyncOperationStarting: (_Global.Debug && _Global.Debug.msTraceAsyncOperationStarting && _Global.Debug.msTraceAsyncOperationStarting.bind(_Global.Debug)) || nop,
        _traceAsyncOperationCompleted: (_Global.Debug && _Global.Debug.msTraceAsyncOperationCompleted && _Global.Debug.msTraceAsyncOperationCompleted.bind(_Global.Debug)) || nop,
        _traceAsyncCallbackStarting: (_Global.Debug && _Global.Debug.msTraceAsyncCallbackStarting && _Global.Debug.msTraceAsyncCallbackStarting.bind(_Global.Debug)) || nop,
        _traceAsyncCallbackCompleted: (_Global.Debug && _Global.Debug.msTraceAsyncCallbackCompleted && _Global.Debug.msTraceAsyncCallbackCompleted.bind(_Global.Debug)) || nop
    };
});
_winjs("WinJS/Promise/_StateMachine", ["WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_Base","WinJS/Core/_ErrorFromName","WinJS/Core/_Events","WinJS/Core/_Trace"], function promiseStateMachineInit(_Global, _BaseCoreUtils, _Base, _ErrorFromName, _Events, _Trace) {
    "use strict";

    _Global.Debug && (_Global.Debug.setNonUserCodeExceptions = true);

    var ListenerType = _Base.Class.mix(_Base.Class.define(null, { /*empty*/ }, { supportedForProcessing: false }), _Events.eventMixin);
    var promiseEventListeners = new ListenerType();
    // make sure there is a listeners collection so that we can do a more trivial check below
    promiseEventListeners._listeners = {};
    var errorET = "error";
    var canceledName = "Canceled";
    var tagWithStack = false;
    var tag = {
        promise: 0x01,
        thenPromise: 0x02,
        errorPromise: 0x04,
        exceptionPromise: 0x08,
        completePromise: 0x10,
    };
    tag.all = tag.promise | tag.thenPromise | tag.errorPromise | tag.exceptionPromise | tag.completePromise;

    //
    // Global error counter, for each error which enters the system we increment this once and then
    // the error number travels with the error as it traverses the tree of potential handlers.
    //
    // When someone has registered to be told about errors (WinJS.Promise.callonerror) promises
    // which are in error will get tagged with a ._errorId field. This tagged field is the
    // contract by which nested promises with errors will be identified as chaining for the
    // purposes of the callonerror semantics. If a nested promise in error is encountered without
    // a ._errorId it will be assumed to be foreign and treated as an interop boundary and
    // a new error id will be minted.
    //
    var error_number = 1;

    //
    // The state machine has a interesting hiccup in it with regards to notification, in order
    // to flatten out notification and avoid recursion for synchronous completion we have an
    // explicit set of *_notify states which are responsible for notifying their entire tree
    // of children. They can do this because they know that immediate children are always
    // ThenPromise instances and we can therefore reach into their state to access the
    // _listeners collection.
    //
    // So, what happens is that a Promise will be fulfilled through the _completed or _error
    // messages at which point it will enter a *_notify state and be responsible for to move
    // its children into an (as appropriate) success or error state and also notify that child's
    // listeners of the state transition, until leaf notes are reached.
    //

    var state_created,              // -> working
        state_working,              // -> error | error_notify | success | success_notify | canceled | waiting
        state_waiting,              // -> error | error_notify | success | success_notify | waiting_canceled
        state_waiting_canceled,     // -> error | error_notify | success | success_notify | canceling
        state_canceled,             // -> error | error_notify | success | success_notify | canceling
        state_canceling,            // -> error_notify
        state_success_notify,       // -> success
        state_success,              // -> .
        state_error_notify,         // -> error
        state_error;                // -> .

    // Noop function, used in the various states to indicate that they don't support a given
    // message. Named with the somewhat cute name '_' because it reads really well in the states.

    function _() { }

    // Initial state
    //
    state_created = {
        name: "created",
        enter: function (promise) {
            promise._setState(state_working);
        },
        cancel: _,
        done: _,
        then: _,
        _completed: _,
        _error: _,
        _notify: _,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Ready state, waiting for a message (completed/error/progress), able to be canceled
    //
    state_working = {
        name: "working",
        enter: _,
        cancel: function (promise) {
            promise._setState(state_canceled);
        },
        done: done,
        then: then,
        _completed: completed,
        _error: error,
        _notify: _,
        _progress: progress,
        _setCompleteValue: setCompleteValue,
        _setErrorValue: setErrorValue
    };

    // Waiting state, if a promise is completed with a value which is itself a promise
    // (has a then() method) it signs up to be informed when that child promise is
    // fulfilled at which point it will be fulfilled with that value.
    //
    state_waiting = {
        name: "waiting",
        enter: function (promise) {
            var waitedUpon = promise._value;
            // We can special case our own intermediate promises which are not in a
            //  terminal state by just pushing this promise as a listener without
            //  having to create new indirection functions
            if (waitedUpon instanceof ThenPromise &&
                waitedUpon._state !== state_error &&
                waitedUpon._state !== state_success) {
                pushListener(waitedUpon, { promise: promise });
            } else {
                var error = function (value) {
                    if (waitedUpon._errorId) {
                        promise._chainedError(value, waitedUpon);
                    } else {
                        // Because this is an interop boundary we want to indicate that this
                        //  error has been handled by the promise infrastructure before we
                        //  begin a new handling chain.
                        //
                        callonerror(promise, value, detailsForHandledError, waitedUpon, error);
                        promise._error(value);
                    }
                };
                error.handlesOnError = true;
                waitedUpon.then(
                    promise._completed.bind(promise),
                    error,
                    promise._progress.bind(promise)
                );
            }
        },
        cancel: function (promise) {
            promise._setState(state_waiting_canceled);
        },
        done: done,
        then: then,
        _completed: completed,
        _error: error,
        _notify: _,
        _progress: progress,
        _setCompleteValue: setCompleteValue,
        _setErrorValue: setErrorValue
    };

    // Waiting canceled state, when a promise has been in a waiting state and receives a
    // request to cancel its pending work it will forward that request to the child promise
    // and then waits to be informed of the result. This promise moves itself into the
    // canceling state but understands that the child promise may instead push it to a
    // different state.
    //
    state_waiting_canceled = {
        name: "waiting_canceled",
        enter: function (promise) {
            // Initiate a transition to canceling. Triggering a cancel on the promise
            // that we are waiting upon may result in a different state transition
            // before the state machine pump runs again.
            promise._setState(state_canceling);
            var waitedUpon = promise._value;
            if (waitedUpon.cancel) {
                waitedUpon.cancel();
            }
        },
        cancel: _,
        done: done,
        then: then,
        _completed: completed,
        _error: error,
        _notify: _,
        _progress: progress,
        _setCompleteValue: setCompleteValue,
        _setErrorValue: setErrorValue
    };

    // Canceled state, moves to the canceling state and then tells the promise to do
    // whatever it might need to do on cancelation.
    //
    state_canceled = {
        name: "canceled",
        enter: function (promise) {
            // Initiate a transition to canceling. The _cancelAction may change the state
            // before the state machine pump runs again.
            promise._setState(state_canceling);
            promise._cancelAction();
        },
        cancel: _,
        done: done,
        then: then,
        _completed: completed,
        _error: error,
        _notify: _,
        _progress: progress,
        _setCompleteValue: setCompleteValue,
        _setErrorValue: setErrorValue
    };

    // Canceling state, commits to the promise moving to an error state with an error
    // object whose 'name' and 'message' properties contain the string "Canceled"
    //
    state_canceling = {
        name: "canceling",
        enter: function (promise) {
            var error = new Error(canceledName);
            error.name = error.message;
            promise._value = error;
            promise._setState(state_error_notify);
        },
        cancel: _,
        done: _,
        then: _,
        _completed: _,
        _error: _,
        _notify: _,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Success notify state, moves a promise to the success state and notifies all children
    //
    state_success_notify = {
        name: "complete_notify",
        enter: function (promise) {
            promise.done = CompletePromise.prototype.done;
            promise.then = CompletePromise.prototype.then;
            if (promise._listeners) {
                var queue = [promise];
                var p;
                while (queue.length) {
                    p = queue.shift();
                    p._state._notify(p, queue);
                }
            }
            promise._setState(state_success);
        },
        cancel: _,
        done: null, /*error to get here */
        then: null, /*error to get here */
        _completed: _,
        _error: _,
        _notify: notifySuccess,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Success state, moves a promise to the success state and does NOT notify any children.
    // Some upstream promise is owning the notification pass.
    //
    state_success = {
        name: "success",
        enter: function (promise) {
            promise.done = CompletePromise.prototype.done;
            promise.then = CompletePromise.prototype.then;
            promise._cleanupAction();
        },
        cancel: _,
        done: null, /*error to get here */
        then: null, /*error to get here */
        _completed: _,
        _error: _,
        _notify: notifySuccess,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Error notify state, moves a promise to the error state and notifies all children
    //
    state_error_notify = {
        name: "error_notify",
        enter: function (promise) {
            promise.done = ErrorPromise.prototype.done;
            promise.then = ErrorPromise.prototype.then;
            if (promise._listeners) {
                var queue = [promise];
                var p;
                while (queue.length) {
                    p = queue.shift();
                    p._state._notify(p, queue);
                }
            }
            promise._setState(state_error);
        },
        cancel: _,
        done: null, /*error to get here*/
        then: null, /*error to get here*/
        _completed: _,
        _error: _,
        _notify: notifyError,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Error state, moves a promise to the error state and does NOT notify any children.
    // Some upstream promise is owning the notification pass.
    //
    state_error = {
        name: "error",
        enter: function (promise) {
            promise.done = ErrorPromise.prototype.done;
            promise.then = ErrorPromise.prototype.then;
            promise._cleanupAction();
        },
        cancel: _,
        done: null, /*error to get here*/
        then: null, /*error to get here*/
        _completed: _,
        _error: _,
        _notify: notifyError,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    //
    // The statemachine implementation follows a very particular pattern, the states are specified
    // as static stateless bags of functions which are then indirected through the state machine
    // instance (a Promise). As such all of the functions on each state have the promise instance
    // passed to them explicitly as a parameter and the Promise instance members do a little
    // dance where they indirect through the state and insert themselves in the argument list.
    //
    // We could instead call directly through the promise states however then every caller
    // would have to remember to do things like pumping the state machine to catch state transitions.
    //

    var PromiseStateMachine = _Base.Class.define(null, {
        _listeners: null,
        _nextState: null,
        _state: null,
        _value: null,

        cancel: function () {
            /// <signature helpKeyword="WinJS.PromiseStateMachine.cancel">
            /// <summary locid="WinJS.PromiseStateMachine.cancel">
            /// Attempts to cancel the fulfillment of a promised value. If the promise hasn't
            /// already been fulfilled and cancellation is supported, the promise enters
            /// the error state with a value of Error("Canceled").
            /// </summary>
            /// </signature>
            this._state.cancel(this);
            this._run();
        },
        done: function Promise_done(onComplete, onError, onProgress) {
            /// <signature helpKeyword="WinJS.PromiseStateMachine.done">
            /// <summary locid="WinJS.PromiseStateMachine.done">
            /// Allows you to specify the work to be done on the fulfillment of the promised value,
            /// the error handling to be performed if the promise fails to fulfill
            /// a value, and the handling of progress notifications along the way.
            ///
            /// After the handlers have finished executing, this function throws any error that would have been returned
            /// from then() as a promise in the error state.
            /// </summary>
            /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.done_p:onComplete">
            /// The function to be called if the promise is fulfilled successfully with a value.
            /// The fulfilled value is passed as the single argument. If the value is null,
            /// the fulfilled value is returned. The value returned
            /// from the function becomes the fulfilled value of the promise returned by
            /// then(). If an exception is thrown while executing the function, the promise returned
            /// by then() moves into the error state.
            /// </param>
            /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onError">
            /// The function to be called if the promise is fulfilled with an error. The error
            /// is passed as the single argument. If it is null, the error is forwarded.
            /// The value returned from the function is the fulfilled value of the promise returned by then().
            /// </param>
            /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onProgress">
            /// the function to be called if the promise reports progress. Data about the progress
            /// is passed as the single argument. Promises are not required to support
            /// progress.
            /// </param>
            /// </signature>
            this._state.done(this, onComplete, onError, onProgress);
        },
        then: function Promise_then(onComplete, onError, onProgress) {
            /// <signature helpKeyword="WinJS.PromiseStateMachine.then">
            /// <summary locid="WinJS.PromiseStateMachine.then">
            /// Allows you to specify the work to be done on the fulfillment of the promised value,
            /// the error handling to be performed if the promise fails to fulfill
            /// a value, and the handling of progress notifications along the way.
            /// </summary>
            /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.then_p:onComplete">
            /// The function to be called if the promise is fulfilled successfully with a value.
            /// The value is passed as the single argument. If the value is null, the value is returned.
            /// The value returned from the function becomes the fulfilled value of the promise returned by
            /// then(). If an exception is thrown while this function is being executed, the promise returned
            /// by then() moves into the error state.
            /// </param>
            /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onError">
            /// The function to be called if the promise is fulfilled with an error. The error
            /// is passed as the single argument. If it is null, the error is forwarded.
            /// The value returned from the function becomes the fulfilled value of the promise returned by then().
            /// </param>
            /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onProgress">
            /// The function to be called if the promise reports progress. Data about the progress
            /// is passed as the single argument. Promises are not required to support
            /// progress.
            /// </param>
            /// <returns type="WinJS.Promise" locid="WinJS.PromiseStateMachine.then_returnValue">
            /// The promise whose value is the result of executing the complete or
            /// error function.
            /// </returns>
            /// </signature>
            // BEGIN monaco change
            if (this.then !== Promise_then) {
                this.then(onComplete, onError, onProgress);
                return;
            }
            // END monaco change
            return this._state.then(this, onComplete, onError, onProgress);
        },

        _chainedError: function (value, context) {
            var result = this._state._error(this, value, detailsForChainedError, context);
            this._run();
            return result;
        },
        _completed: function (value) {
            var result = this._state._completed(this, value);
            this._run();
            return result;
        },
        _error: function (value) {
            var result = this._state._error(this, value, detailsForError);
            this._run();
            return result;
        },
        _progress: function (value) {
            this._state._progress(this, value);
        },
        _setState: function (state) {
            this._nextState = state;
        },
        _setCompleteValue: function (value) {
            this._state._setCompleteValue(this, value);
            this._run();
        },
        _setChainedErrorValue: function (value, context) {
            var result = this._state._setErrorValue(this, value, detailsForChainedError, context);
            this._run();
            return result;
        },
        _setExceptionValue: function (value) {
            var result = this._state._setErrorValue(this, value, detailsForException);
            this._run();
            return result;
        },
        _run: function () {
            while (this._nextState) {
                this._state = this._nextState;
                this._nextState = null;
                this._state.enter(this);
            }
        }
    }, {
        supportedForProcessing: false
    });

    //
    // Implementations of shared state machine code.
    //

    function completed(promise, value) {
        var targetState;
        if (value && typeof value === "object" && typeof value.then === "function") {
            targetState = state_waiting;
        } else {
            targetState = state_success_notify;
        }
        promise._value = value;
        promise._setState(targetState);
    }
    function createErrorDetails(exception, error, promise, id, parent, handler) {
        return {
            exception: exception,
            error: error,
            promise: promise,
            handler: handler,
            id: id,
            parent: parent
        };
    }
    function detailsForHandledError(promise, errorValue, context, handler) {
        var exception = context._isException;
        var errorId = context._errorId;
        return createErrorDetails(
            exception ? errorValue : null,
            exception ? null : errorValue,
            promise,
            errorId,
            context,
            handler
        );
    }
    function detailsForChainedError(promise, errorValue, context) {
        var exception = context._isException;
        var errorId = context._errorId;
        setErrorInfo(promise, errorId, exception);
        return createErrorDetails(
            exception ? errorValue : null,
            exception ? null : errorValue,
            promise,
            errorId,
            context
        );
    }
    function detailsForError(promise, errorValue) {
        var errorId = ++error_number;
        setErrorInfo(promise, errorId);
        return createErrorDetails(
            null,
            errorValue,
            promise,
            errorId
        );
    }
    function detailsForException(promise, exceptionValue) {
        var errorId = ++error_number;
        setErrorInfo(promise, errorId, true);
        return createErrorDetails(
            exceptionValue,
            null,
            promise,
            errorId
        );
    }
    function done(promise, onComplete, onError, onProgress) {
        var asyncOpID = _Trace._traceAsyncOperationStarting("WinJS.Promise.done");
        pushListener(promise, { c: onComplete, e: onError, p: onProgress, asyncOpID: asyncOpID });
    }
    function error(promise, value, onerrorDetails, context) {
        promise._value = value;
        callonerror(promise, value, onerrorDetails, context);
        promise._setState(state_error_notify);
    }
    function notifySuccess(promise, queue) {
        var value = promise._value;
        var listeners = promise._listeners;
        if (!listeners) {
            return;
        }
        promise._listeners = null;
        var i, len;
        for (i = 0, len = Array.isArray(listeners) ? listeners.length : 1; i < len; i++) {
            var listener = len === 1 ? listeners : listeners[i];
            var onComplete = listener.c;
            var target = listener.promise;

            _Trace._traceAsyncOperationCompleted(listener.asyncOpID, _Global.Debug && _Global.Debug.MS_ASYNC_OP_STATUS_SUCCESS);

            if (target) {
                _Trace._traceAsyncCallbackStarting(listener.asyncOpID);
                try {
                    target._setCompleteValue(onComplete ? onComplete(value) : value);
                } catch (ex) {
                    target._setExceptionValue(ex);
                } finally {
                    _Trace._traceAsyncCallbackCompleted();
                }
                if (target._state !== state_waiting && target._listeners) {
                    queue.push(target);
                }
            } else {
                CompletePromise.prototype.done.call(promise, onComplete);
            }
        }
    }
    function notifyError(promise, queue) {
        var value = promise._value;
        var listeners = promise._listeners;
        if (!listeners) {
            return;
        }
        promise._listeners = null;
        var i, len;
        for (i = 0, len = Array.isArray(listeners) ? listeners.length : 1; i < len; i++) {
            var listener = len === 1 ? listeners : listeners[i];
            var onError = listener.e;
            var target = listener.promise;

            var errorID = _Global.Debug && (value && value.name === canceledName ? _Global.Debug.MS_ASYNC_OP_STATUS_CANCELED : _Global.Debug.MS_ASYNC_OP_STATUS_ERROR);
            _Trace._traceAsyncOperationCompleted(listener.asyncOpID, errorID);

            if (target) {
                var asyncCallbackStarted = false;
                try {
                    if (onError) {
                        _Trace._traceAsyncCallbackStarting(listener.asyncOpID);
                        asyncCallbackStarted = true;
                        if (!onError.handlesOnError) {
                            callonerror(target, value, detailsForHandledError, promise, onError);
                        }
                        target._setCompleteValue(onError(value));
                    } else {
                        target._setChainedErrorValue(value, promise);
                    }
                } catch (ex) {
                    target._setExceptionValue(ex);
                } finally {
                    if (asyncCallbackStarted) {
                        _Trace._traceAsyncCallbackCompleted();
                    }
                }
                if (target._state !== state_waiting && target._listeners) {
                    queue.push(target);
                }
            } else {
                ErrorPromise.prototype.done.call(promise, null, onError);
            }
        }
    }
    function callonerror(promise, value, onerrorDetailsGenerator, context, handler) {
        if (promiseEventListeners._listeners[errorET]) {
            if (value instanceof Error && value.message === canceledName) {
                return;
            }
            promiseEventListeners.dispatchEvent(errorET, onerrorDetailsGenerator(promise, value, context, handler));
        }
    }
    function progress(promise, value) {
        var listeners = promise._listeners;
        if (listeners) {
            var i, len;
            for (i = 0, len = Array.isArray(listeners) ? listeners.length : 1; i < len; i++) {
                var listener = len === 1 ? listeners : listeners[i];
                var onProgress = listener.p;
                if (onProgress) {
                    try { onProgress(value); } catch (ex) { }
                }
                if (!(listener.c || listener.e) && listener.promise) {
                    listener.promise._progress(value);
                }
            }
        }
    }
    function pushListener(promise, listener) {
        var listeners = promise._listeners;
        if (listeners) {
            // We may have either a single listener (which will never be wrapped in an array)
            // or 2+ listeners (which will be wrapped). Since we are now adding one more listener
            // we may have to wrap the single listener before adding the second.
            listeners = Array.isArray(listeners) ? listeners : [listeners];
            listeners.push(listener);
        } else {
            listeners = listener;
        }
        promise._listeners = listeners;
    }
    // The difference beween setCompleteValue()/setErrorValue() and complete()/error() is that setXXXValue() moves
    // a promise directly to the success/error state without starting another notification pass (because one
    // is already ongoing).
    function setErrorInfo(promise, errorId, isException) {
        promise._isException = isException || false;
        promise._errorId = errorId;
    }
    function setErrorValue(promise, value, onerrorDetails, context) {
        promise._value = value;
        callonerror(promise, value, onerrorDetails, context);
        promise._setState(state_error);
    }
    function setCompleteValue(promise, value) {
        var targetState;
        if (value && typeof value === "object" && typeof value.then === "function") {
            targetState = state_waiting;
        } else {
            targetState = state_success;
        }
        promise._value = value;
        promise._setState(targetState);
    }
    function then(promise, onComplete, onError, onProgress) {
        var result = new ThenPromise(promise);
        var asyncOpID = _Trace._traceAsyncOperationStarting("WinJS.Promise.then");
        pushListener(promise, { promise: result, c: onComplete, e: onError, p: onProgress, asyncOpID: asyncOpID });
        return result;
    }

    //
    // Internal implementation detail promise, ThenPromise is created when a promise needs
    // to be returned from a then() method.
    //
    var ThenPromise = _Base.Class.derive(PromiseStateMachine,
        function (creator) {

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.thenPromise))) {
                this._stack = Promise._getStack();
            }

            this._creator = creator;
            this._setState(state_created);
            this._run();
        }, {
            _creator: null,

            _cancelAction: function () { if (this._creator) { this._creator.cancel(); } },
            _cleanupAction: function () { this._creator = null; }
        }, {
            supportedForProcessing: false
        }
    );

    //
    // Slim promise implementations for already completed promises, these are created
    // under the hood on synchronous completion paths as well as by WinJS.Promise.wrap
    // and WinJS.Promise.wrapError.
    //

    var ErrorPromise = _Base.Class.define(
        function ErrorPromise_ctor(value) {

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.errorPromise))) {
                this._stack = Promise._getStack();
            }

            this._value = value;
            callonerror(this, value, detailsForError);
        }, {
            cancel: function () {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.cancel">
                /// <summary locid="WinJS.PromiseStateMachine.cancel">
                /// Attempts to cancel the fulfillment of a promised value. If the promise hasn't
                /// already been fulfilled and cancellation is supported, the promise enters
                /// the error state with a value of Error("Canceled").
                /// </summary>
                /// </signature>
            },
            done: function ErrorPromise_done(unused, onError) {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.done">
                /// <summary locid="WinJS.PromiseStateMachine.done">
                /// Allows you to specify the work to be done on the fulfillment of the promised value,
                /// the error handling to be performed if the promise fails to fulfill
                /// a value, and the handling of progress notifications along the way.
                ///
                /// After the handlers have finished executing, this function throws any error that would have been returned
                /// from then() as a promise in the error state.
                /// </summary>
                /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.done_p:onComplete">
                /// The function to be called if the promise is fulfilled successfully with a value.
                /// The fulfilled value is passed as the single argument. If the value is null,
                /// the fulfilled value is returned. The value returned
                /// from the function becomes the fulfilled value of the promise returned by
                /// then(). If an exception is thrown while executing the function, the promise returned
                /// by then() moves into the error state.
                /// </param>
                /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onError">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument. If it is null, the error is forwarded.
                /// The value returned from the function is the fulfilled value of the promise returned by then().
                /// </param>
                /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onProgress">
                /// the function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// </signature>
                var value = this._value;
                if (onError) {
                    try {
                        if (!onError.handlesOnError) {
                            callonerror(null, value, detailsForHandledError, this, onError);
                        }
                        var result = onError(value);
                        if (result && typeof result === "object" && typeof result.done === "function") {
                            // If a promise is returned we need to wait on it.
                            result.done();
                        }
                        return;
                    } catch (ex) {
                        value = ex;
                    }
                }
                if (value instanceof Error && value.message === canceledName) {
                    // suppress cancel
                    return;
                }
                // force the exception to be thrown asyncronously to avoid any try/catch blocks
                //
                Promise._doneHandler(value);
            },
            then: function ErrorPromise_then(unused, onError) {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.then">
                /// <summary locid="WinJS.PromiseStateMachine.then">
                /// Allows you to specify the work to be done on the fulfillment of the promised value,
                /// the error handling to be performed if the promise fails to fulfill
                /// a value, and the handling of progress notifications along the way.
                /// </summary>
                /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.then_p:onComplete">
                /// The function to be called if the promise is fulfilled successfully with a value.
                /// The value is passed as the single argument. If the value is null, the value is returned.
                /// The value returned from the function becomes the fulfilled value of the promise returned by
                /// then(). If an exception is thrown while this function is being executed, the promise returned
                /// by then() moves into the error state.
                /// </param>
                /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onError">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument. If it is null, the error is forwarded.
                /// The value returned from the function becomes the fulfilled value of the promise returned by then().
                /// </param>
                /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onProgress">
                /// The function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.PromiseStateMachine.then_returnValue">
                /// The promise whose value is the result of executing the complete or
                /// error function.
                /// </returns>
                /// </signature>

                // If the promise is already in a error state and no error handler is provided
                // we optimize by simply returning the promise instead of creating a new one.
                //
                if (!onError) { return this; }
                var result;
                var value = this._value;
                try {
                    if (!onError.handlesOnError) {
                        callonerror(null, value, detailsForHandledError, this, onError);
                    }
                    result = new CompletePromise(onError(value));
                } catch (ex) {
                    // If the value throw from the error handler is the same as the value
                    // provided to the error handler then there is no need for a new promise.
                    //
                    if (ex === value) {
                        result = this;
                    } else {
                        result = new ExceptionPromise(ex);
                    }
                }
                return result;
            }
        }, {
            supportedForProcessing: false
        }
    );

    var ExceptionPromise = _Base.Class.derive(ErrorPromise,
        function ExceptionPromise_ctor(value) {

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.exceptionPromise))) {
                this._stack = Promise._getStack();
            }

            this._value = value;
            callonerror(this, value, detailsForException);
        }, {
            /* empty */
        }, {
            supportedForProcessing: false
        }
    );

    var CompletePromise = _Base.Class.define(
        function CompletePromise_ctor(value) {

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.completePromise))) {
                this._stack = Promise._getStack();
            }

            if (value && typeof value === "object" && typeof value.then === "function") {
                var result = new ThenPromise(null);
                result._setCompleteValue(value);
                return result;
            }
            this._value = value;
        }, {
            cancel: function () {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.cancel">
                /// <summary locid="WinJS.PromiseStateMachine.cancel">
                /// Attempts to cancel the fulfillment of a promised value. If the promise hasn't
                /// already been fulfilled and cancellation is supported, the promise enters
                /// the error state with a value of Error("Canceled").
                /// </summary>
                /// </signature>
            },
            done: function CompletePromise_done(onComplete) {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.done">
                /// <summary locid="WinJS.PromiseStateMachine.done">
                /// Allows you to specify the work to be done on the fulfillment of the promised value,
                /// the error handling to be performed if the promise fails to fulfill
                /// a value, and the handling of progress notifications along the way.
                ///
                /// After the handlers have finished executing, this function throws any error that would have been returned
                /// from then() as a promise in the error state.
                /// </summary>
                /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.done_p:onComplete">
                /// The function to be called if the promise is fulfilled successfully with a value.
                /// The fulfilled value is passed as the single argument. If the value is null,
                /// the fulfilled value is returned. The value returned
                /// from the function becomes the fulfilled value of the promise returned by
                /// then(). If an exception is thrown while executing the function, the promise returned
                /// by then() moves into the error state.
                /// </param>
                /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onError">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument. If it is null, the error is forwarded.
                /// The value returned from the function is the fulfilled value of the promise returned by then().
                /// </param>
                /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onProgress">
                /// the function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// </signature>
                if (!onComplete) { return; }
                try {
                    var result = onComplete(this._value);
                    if (result && typeof result === "object" && typeof result.done === "function") {
                        result.done();
                    }
                } catch (ex) {
                    // force the exception to be thrown asynchronously to avoid any try/catch blocks
                    Promise._doneHandler(ex);
                }
            },
            then: function CompletePromise_then(onComplete) {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.then">
                /// <summary locid="WinJS.PromiseStateMachine.then">
                /// Allows you to specify the work to be done on the fulfillment of the promised value,
                /// the error handling to be performed if the promise fails to fulfill
                /// a value, and the handling of progress notifications along the way.
                /// </summary>
                /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.then_p:onComplete">
                /// The function to be called if the promise is fulfilled successfully with a value.
                /// The value is passed as the single argument. If the value is null, the value is returned.
                /// The value returned from the function becomes the fulfilled value of the promise returned by
                /// then(). If an exception is thrown while this function is being executed, the promise returned
                /// by then() moves into the error state.
                /// </param>
                /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onError">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument. If it is null, the error is forwarded.
                /// The value returned from the function becomes the fulfilled value of the promise returned by then().
                /// </param>
                /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onProgress">
                /// The function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.PromiseStateMachine.then_returnValue">
                /// The promise whose value is the result of executing the complete or
                /// error function.
                /// </returns>
                /// </signature>
                try {
                    // If the value returned from the completion handler is the same as the value
                    // provided to the completion handler then there is no need for a new promise.
                    //
                    var newValue = onComplete ? onComplete(this._value) : this._value;
                    return newValue === this._value ? this : new CompletePromise(newValue);
                } catch (ex) {
                    return new ExceptionPromise(ex);
                }
            }
        }, {
            supportedForProcessing: false
        }
    );

    //
    // Promise is the user-creatable WinJS.Promise object.
    //

    function timeout(timeoutMS) {
        var id;
        return new Promise(
            function (c) {
                if (timeoutMS) {
                    id = _Global.setTimeout(c, timeoutMS);
                } else {
                    _BaseCoreUtils._setImmediate(c);
                }
            },
            function () {
                if (id) {
                    _Global.clearTimeout(id);
                }
            }
        );
    }

    function timeoutWithPromise(timeout, promise) {
        var cancelPromise = function () { promise.cancel(); };
        var cancelTimeout = function () { timeout.cancel(); };
        timeout.then(cancelPromise);
        promise.then(cancelTimeout, cancelTimeout);
        return promise;
    }

    var staticCanceledPromise;

    var Promise = _Base.Class.derive(PromiseStateMachine,
        function Promise_ctor(init, oncancel) {
            /// <signature helpKeyword="WinJS.Promise">
            /// <summary locid="WinJS.Promise">
            /// A promise provides a mechanism to schedule work to be done on a value that
            /// has not yet been computed. It is a convenient abstraction for managing
            /// interactions with asynchronous APIs.
            /// </summary>
            /// <param name="init" type="Function" locid="WinJS.Promise_p:init">
            /// The function that is called during construction of the  promise. The function
            /// is given three arguments (complete, error, progress). Inside this function
            /// you should add event listeners for the notifications supported by this value.
            /// </param>
            /// <param name="oncancel" optional="true" locid="WinJS.Promise_p:oncancel">
            /// The function to call if a consumer of this promise wants
            /// to cancel its undone work. Promises are not required to
            /// support cancellation.
            /// </param>
            /// </signature>

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.promise))) {
                this._stack = Promise._getStack();
            }

            this._oncancel = oncancel;
            this._setState(state_created);
            this._run();

            try {
                var complete = this._completed.bind(this);
                var error = this._error.bind(this);
                var progress = this._progress.bind(this);
                init(complete, error, progress);
            } catch (ex) {
                this._setExceptionValue(ex);
            }
        }, {
            _oncancel: null,

            _cancelAction: function () {
                // BEGIN monaco change
                try {
                    if (this._oncancel) {
                        this._oncancel();
                    } else {
                        throw new Error('Promise did not implement oncancel');
                    }
                } catch (ex) {
                    // Access fields to get them created
                    var msg = ex.message;
                    var stack = ex.stack;
                    promiseEventListeners.dispatchEvent('error', ex);
                }
                // END monaco change
            },
            _cleanupAction: function () { this._oncancel = null; }
        }, {

            addEventListener: function Promise_addEventListener(eventType, listener, capture) {
                /// <signature helpKeyword="WinJS.Promise.addEventListener">
                /// <summary locid="WinJS.Promise.addEventListener">
                /// Adds an event listener to the control.
                /// </summary>
                /// <param name="eventType" locid="WinJS.Promise.addEventListener_p:eventType">
                /// The type (name) of the event.
                /// </param>
                /// <param name="listener" locid="WinJS.Promise.addEventListener_p:listener">
                /// The listener to invoke when the event is raised.
                /// </param>
                /// <param name="capture" locid="WinJS.Promise.addEventListener_p:capture">
                /// Specifies whether or not to initiate capture.
                /// </param>
                /// </signature>
                promiseEventListeners.addEventListener(eventType, listener, capture);
            },
            any: function Promise_any(values) {
                /// <signature helpKeyword="WinJS.Promise.any">
                /// <summary locid="WinJS.Promise.any">
                /// Returns a promise that is fulfilled when one of the input promises
                /// has been fulfilled.
                /// </summary>
                /// <param name="values" type="Array" locid="WinJS.Promise.any_p:values">
                /// An array that contains promise objects or objects whose property
                /// values include promise objects.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.any_returnValue">
                /// A promise that on fulfillment yields the value of the input (complete or error).
                /// </returns>
                /// </signature>
                return new Promise(
                    function (complete, error) {
                        var keys = Object.keys(values);
                        if (keys.length === 0) {
                            complete();
                        }
                        var canceled = 0;
                        keys.forEach(function (key) {
                            Promise.as(values[key]).then(
                                function () { complete({ key: key, value: values[key] }); },
                                function (e) {
                                    if (e instanceof Error && e.name === canceledName) {
                                        if ((++canceled) === keys.length) {
                                            complete(Promise.cancel);
                                        }
                                        return;
                                    }
                                    error({ key: key, value: values[key] });
                                }
                            );
                        });
                    },
                    function () {
                        var keys = Object.keys(values);
                        keys.forEach(function (key) {
                            var promise = Promise.as(values[key]);
                            if (typeof promise.cancel === "function") {
                                promise.cancel();
                            }
                        });
                    }
                );
            },
            as: function Promise_as(value) {
                /// <signature helpKeyword="WinJS.Promise.as">
                /// <summary locid="WinJS.Promise.as">
                /// Returns a promise. If the object is already a promise it is returned;
                /// otherwise the object is wrapped in a promise.
                /// </summary>
                /// <param name="value" locid="WinJS.Promise.as_p:value">
                /// The value to be treated as a promise.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.as_returnValue">
                /// A promise.
                /// </returns>
                /// </signature>
                if (value && typeof value === "object" && typeof value.then === "function") {
                    return value;
                }
                return new CompletePromise(value);
            },
            /// <field type="WinJS.Promise" helpKeyword="WinJS.Promise.cancel" locid="WinJS.Promise.cancel">
            /// Canceled promise value, can be returned from a promise completion handler
            /// to indicate cancelation of the promise chain.
            /// </field>
            cancel: {
                get: function () {
                    return (staticCanceledPromise = staticCanceledPromise || new ErrorPromise(new _ErrorFromName(canceledName)));
                }
            },
            dispatchEvent: function Promise_dispatchEvent(eventType, details) {
                /// <signature helpKeyword="WinJS.Promise.dispatchEvent">
                /// <summary locid="WinJS.Promise.dispatchEvent">
                /// Raises an event of the specified type and properties.
                /// </summary>
                /// <param name="eventType" locid="WinJS.Promise.dispatchEvent_p:eventType">
                /// The type (name) of the event.
                /// </param>
                /// <param name="details" locid="WinJS.Promise.dispatchEvent_p:details">
                /// The set of additional properties to be attached to the event object.
                /// </param>
                /// <returns type="Boolean" locid="WinJS.Promise.dispatchEvent_returnValue">
                /// Specifies whether preventDefault was called on the event.
                /// </returns>
                /// </signature>
                return promiseEventListeners.dispatchEvent(eventType, details);
            },
            is: function Promise_is(value) {
                /// <signature helpKeyword="WinJS.Promise.is">
                /// <summary locid="WinJS.Promise.is">
                /// Determines whether a value fulfills the promise contract.
                /// </summary>
                /// <param name="value" locid="WinJS.Promise.is_p:value">
                /// A value that may be a promise.
                /// </param>
                /// <returns type="Boolean" locid="WinJS.Promise.is_returnValue">
                /// true if the specified value is a promise, otherwise false.
                /// </returns>
                /// </signature>
                return value && typeof value === "object" && typeof value.then === "function";
            },
            join: function Promise_join(values) {
                /// <signature helpKeyword="WinJS.Promise.join">
                /// <summary locid="WinJS.Promise.join">
                /// Creates a promise that is fulfilled when all the values are fulfilled.
                /// </summary>
                /// <param name="values" type="Object" locid="WinJS.Promise.join_p:values">
                /// An object whose fields contain values, some of which may be promises.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.join_returnValue">
                /// A promise whose value is an object with the same field names as those of the object in the values parameter, where
                /// each field value is the fulfilled value of a promise.
                /// </returns>
                /// </signature>
                return new Promise(
                    function (complete, error, progress) {
                        var keys = Object.keys(values);
                        var errors = Array.isArray(values) ? [] : {};
                        var results = Array.isArray(values) ? [] : {};
                        var undefineds = 0;
                        var pending = keys.length;
                        var argDone = function (key) {
                            if ((--pending) === 0) {
                                var errorCount = Object.keys(errors).length;
                                if (errorCount === 0) {
                                    complete(results);
                                } else {
                                    var canceledCount = 0;
                                    keys.forEach(function (key) {
                                        var e = errors[key];
                                        if (e instanceof Error && e.name === canceledName) {
                                            canceledCount++;
                                        }
                                    });
                                    if (canceledCount === errorCount) {
                                        complete(Promise.cancel);
                                    } else {
                                        error(errors);
                                    }
                                }
                            } else {
                                progress({ Key: key, Done: true });
                            }
                        };
                        keys.forEach(function (key) {
                            var value = values[key];
                            if (value === undefined) {
                                undefineds++;
                            } else {
                                Promise.then(value,
                                    function (value) { results[key] = value; argDone(key); },
                                    function (value) { errors[key] = value; argDone(key); }
                                );
                            }
                        });
                        pending -= undefineds;
                        if (pending === 0) {
                            complete(results);
                            return;
                        }
                    },
                    function () {
                        Object.keys(values).forEach(function (key) {
                            var promise = Promise.as(values[key]);
                            if (typeof promise.cancel === "function") {
                                promise.cancel();
                            }
                        });
                    }
                );
            },
            removeEventListener: function Promise_removeEventListener(eventType, listener, capture) {
                /// <signature helpKeyword="WinJS.Promise.removeEventListener">
                /// <summary locid="WinJS.Promise.removeEventListener">
                /// Removes an event listener from the control.
                /// </summary>
                /// <param name='eventType' locid="WinJS.Promise.removeEventListener_eventType">
                /// The type (name) of the event.
                /// </param>
                /// <param name='listener' locid="WinJS.Promise.removeEventListener_listener">
                /// The listener to remove.
                /// </param>
                /// <param name='capture' locid="WinJS.Promise.removeEventListener_capture">
                /// Specifies whether or not to initiate capture.
                /// </param>
                /// </signature>
                promiseEventListeners.removeEventListener(eventType, listener, capture);
            },
            supportedForProcessing: false,
            then: function Promise_then(value, onComplete, onError, onProgress) {
                /// <signature helpKeyword="WinJS.Promise.then">
                /// <summary locid="WinJS.Promise.then">
                /// A static version of the promise instance method then().
                /// </summary>
                /// <param name="value" locid="WinJS.Promise.then_p:value">
                /// the value to be treated as a promise.
                /// </param>
                /// <param name="onComplete" type="Function" locid="WinJS.Promise.then_p:complete">
                /// The function to be called if the promise is fulfilled with a value.
                /// If it is null, the promise simply
                /// returns the value. The value is passed as the single argument.
                /// </param>
                /// <param name="onError" type="Function" optional="true" locid="WinJS.Promise.then_p:error">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument.
                /// </param>
                /// <param name="onProgress" type="Function" optional="true" locid="WinJS.Promise.then_p:progress">
                /// The function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.then_returnValue">
                /// A promise whose value is the result of executing the provided complete function.
                /// </returns>
                /// </signature>
                return Promise.as(value).then(onComplete, onError, onProgress);
            },
            thenEach: function Promise_thenEach(values, onComplete, onError, onProgress) {
                /// <signature helpKeyword="WinJS.Promise.thenEach">
                /// <summary locid="WinJS.Promise.thenEach">
                /// Performs an operation on all the input promises and returns a promise
                /// that has the shape of the input and contains the result of the operation
                /// that has been performed on each input.
                /// </summary>
                /// <param name="values" locid="WinJS.Promise.thenEach_p:values">
                /// A set of values (which could be either an array or an object) of which some or all are promises.
                /// </param>
                /// <param name="onComplete" type="Function" locid="WinJS.Promise.thenEach_p:complete">
                /// The function to be called if the promise is fulfilled with a value.
                /// If the value is null, the promise returns the value.
                /// The value is passed as the single argument.
                /// </param>
                /// <param name="onError" type="Function" optional="true" locid="WinJS.Promise.thenEach_p:error">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument.
                /// </param>
                /// <param name="onProgress" type="Function" optional="true" locid="WinJS.Promise.thenEach_p:progress">
                /// The function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.thenEach_returnValue">
                /// A promise that is the result of calling Promise.join on the values parameter.
                /// </returns>
                /// </signature>
                var result = Array.isArray(values) ? [] : {};
                Object.keys(values).forEach(function (key) {
                    result[key] = Promise.as(values[key]).then(onComplete, onError, onProgress);
                });
                return Promise.join(result);
            },
            timeout: function Promise_timeout(time, promise) {
                /// <signature helpKeyword="WinJS.Promise.timeout">
                /// <summary locid="WinJS.Promise.timeout">
                /// Creates a promise that is fulfilled after a timeout.
                /// </summary>
                /// <param name="timeout" type="Number" optional="true" locid="WinJS.Promise.timeout_p:timeout">
                /// The timeout period in milliseconds. If this value is zero or not specified
                /// setImmediate is called, otherwise setTimeout is called.
                /// </param>
                /// <param name="promise" type="Promise" optional="true" locid="WinJS.Promise.timeout_p:promise">
                /// A promise that will be canceled if it doesn't complete before the
                /// timeout has expired.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.timeout_returnValue">
                /// A promise that is completed asynchronously after the specified timeout.
                /// </returns>
                /// </signature>
                var to = timeout(time);
                return promise ? timeoutWithPromise(to, promise) : to;
            },
            wrap: function Promise_wrap(value) {
                /// <signature helpKeyword="WinJS.Promise.wrap">
                /// <summary locid="WinJS.Promise.wrap">
                /// Wraps a non-promise value in a promise. You can use this function if you need
                /// to pass a value to a function that requires a promise.
                /// </summary>
                /// <param name="value" locid="WinJS.Promise.wrap_p:value">
                /// Some non-promise value to be wrapped in a promise.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.wrap_returnValue">
                /// A promise that is successfully fulfilled with the specified value
                /// </returns>
                /// </signature>
                return new CompletePromise(value);
            },
            wrapError: function Promise_wrapError(error) {
                /// <signature helpKeyword="WinJS.Promise.wrapError">
                /// <summary locid="WinJS.Promise.wrapError">
                /// Wraps a non-promise error value in a promise. You can use this function if you need
                /// to pass an error to a function that requires a promise.
                /// </summary>
                /// <param name="error" locid="WinJS.Promise.wrapError_p:error">
                /// A non-promise error value to be wrapped in a promise.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.wrapError_returnValue">
                /// A promise that is in an error state with the specified value.
                /// </returns>
                /// </signature>
                return new ErrorPromise(error);
            },

            _veryExpensiveTagWithStack: {
                get: function () { return tagWithStack; },
                set: function (value) { tagWithStack = value; }
            },
            _veryExpensiveTagWithStack_tag: tag,
            _getStack: function () {
                if (_Global.Debug && _Global.Debug.debuggerEnabled) {
                    try { throw new Error(); } catch (e) { return e.stack; }
                }
            },

            _cancelBlocker: function Promise__cancelBlocker(input, oncancel) {
                //
                // Returns a promise which on cancelation will still result in downstream cancelation while
                //  protecting the promise 'input' from being  canceled which has the effect of allowing
                //  'input' to be shared amoung various consumers.
                //
                if (!Promise.is(input)) {
                    return Promise.wrap(input);
                }
                var complete;
                var error;
                var output = new Promise(
                    function (c, e) {
                        complete = c;
                        error = e;
                    },
                    function () {
                        complete = null;
                        error = null;
                        oncancel && oncancel();
                    }
                );
                input.then(
                    function (v) { complete && complete(v); },
                    function (e) { error && error(e); }
                );
                return output;
            },

        }
    );
    Object.defineProperties(Promise, _Events.createEventProperties(errorET));

    Promise._doneHandler = function (value) {
        _BaseCoreUtils._setImmediate(function Promise_done_rethrow() {
            throw value;
        });
    };

    return {
        PromiseStateMachine: PromiseStateMachine,
        Promise: Promise,
        state_created: state_created
    };
});

_winjs("WinJS/Promise", ["WinJS/Core/_Base","WinJS/Promise/_StateMachine"], function promiseInit( _Base, _StateMachine) {
    "use strict";

    _Base.Namespace.define("WinJS", {
        Promise: _StateMachine.Promise
    });

    return _StateMachine.Promise;
});

__winjs_exports = _modules["WinJS/Core/_WinJS"];
__winjs_exports.TPromise = __winjs_exports.Promise;
__winjs_exports.PPromise = __winjs_exports.Promise;

// ESM-comment-begin
if (false) {} else {
    module.exports = __winjs_exports;
}
// ESM-comment-end

})();

// ESM-uncomment-begin
// export var Promise = __winjs_exports.Promise;
// export var TPromise = __winjs_exports.TPromise;
// export var PPromise = __winjs_exports.PPromise;
// ESM-uncomment-end


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, iterator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Node = /** @class */ (function () {
        function Node(element) {
            this.element = element;
        }
        return Node;
    }());
    var LinkedList = /** @class */ (function () {
        function LinkedList() {
            this._size = 0;
        }
        Object.defineProperty(LinkedList.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: true,
            configurable: true
        });
        LinkedList.prototype.isEmpty = function () {
            return !this._first;
        };
        LinkedList.prototype.clear = function () {
            this._first = undefined;
            this._last = undefined;
        };
        LinkedList.prototype.unshift = function (element) {
            return this.insert(element, false);
        };
        LinkedList.prototype.push = function (element) {
            return this.insert(element, true);
        };
        LinkedList.prototype.insert = function (element, atTheEnd) {
            var _this = this;
            var newNode = new Node(element);
            if (!this._first) {
                this._first = newNode;
                this._last = newNode;
            }
            else if (atTheEnd) {
                // push
                var oldLast = this._last;
                this._last = newNode;
                newNode.prev = oldLast;
                oldLast.next = newNode;
            }
            else {
                // unshift
                var oldFirst = this._first;
                this._first = newNode;
                newNode.next = oldFirst;
                oldFirst.prev = newNode;
            }
            this._size += 1;
            return function () {
                var candidate = _this._first;
                while (candidate instanceof Node) {
                    if (candidate !== newNode) {
                        candidate = candidate.next;
                        continue;
                    }
                    if (candidate.prev && candidate.next) {
                        // middle
                        var anchor = candidate.prev;
                        anchor.next = candidate.next;
                        candidate.next.prev = anchor;
                    }
                    else if (!candidate.prev && !candidate.next) {
                        // only node
                        _this._first = undefined;
                        _this._last = undefined;
                    }
                    else if (!candidate.next) {
                        // last
                        _this._last = _this._last.prev;
                        _this._last.next = undefined;
                    }
                    else if (!candidate.prev) {
                        // first
                        _this._first = _this._first.next;
                        _this._first.prev = undefined;
                    }
                    // done
                    _this._size -= 1;
                    break;
                }
            };
        };
        LinkedList.prototype.iterator = function () {
            var element;
            var node = this._first;
            return {
                next: function () {
                    if (!node) {
                        return iterator_1.FIN;
                    }
                    if (!element) {
                        element = { done: false, value: node.element };
                    }
                    else {
                        element.value = node.element;
                    }
                    node = node.next;
                    return element;
                }
            };
        };
        LinkedList.prototype.toArray = function () {
            var result = [];
            for (var node = this._first; node instanceof Node; node = node.next) {
                result.push(node.element);
            }
            return result;
        };
        return LinkedList;
    }());
    exports.LinkedList = LinkedList;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=linkedList.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FIN = { done: true, value: undefined };
    var Iterator;
    (function (Iterator) {
        var _empty = {
            next: function () {
                return exports.FIN;
            }
        };
        function empty() {
            return _empty;
        }
        Iterator.empty = empty;
        function fromArray(array, index, length) {
            if (index === void 0) { index = 0; }
            if (length === void 0) { length = array.length; }
            return {
                next: function () {
                    if (index >= length) {
                        return exports.FIN;
                    }
                    return { done: false, value: array[index++] };
                }
            };
        }
        Iterator.fromArray = fromArray;
        function from(elements) {
            if (!elements) {
                return Iterator.empty();
            }
            else if (Array.isArray(elements)) {
                return Iterator.fromArray(elements);
            }
            else {
                return elements;
            }
        }
        Iterator.from = from;
        function map(iterator, fn) {
            return {
                next: function () {
                    var element = iterator.next();
                    if (element.done) {
                        return exports.FIN;
                    }
                    else {
                        return { done: false, value: fn(element.value) };
                    }
                }
            };
        }
        Iterator.map = map;
        function filter(iterator, fn) {
            return {
                next: function () {
                    while (true) {
                        var element = iterator.next();
                        if (element.done) {
                            return exports.FIN;
                        }
                        if (fn(element.value)) {
                            return { done: false, value: element.value };
                        }
                    }
                }
            };
        }
        Iterator.filter = filter;
        function forEach(iterator, fn) {
            for (var next = iterator.next(); !next.done; next = iterator.next()) {
                fn(next.value);
            }
        }
        Iterator.forEach = forEach;
        function collect(iterator) {
            var result = [];
            forEach(iterator, function (value) { return result.push(value); });
            return result;
        }
        Iterator.collect = collect;
    })(Iterator = exports.Iterator || (exports.Iterator = {}));
    function getSequenceIterator(arg) {
        if (Array.isArray(arg)) {
            return Iterator.fromArray(arg);
        }
        else {
            return arg;
        }
    }
    exports.getSequenceIterator = getSequenceIterator;
    var ArrayIterator = /** @class */ (function () {
        function ArrayIterator(items, start, end, index) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = items.length; }
            if (index === void 0) { index = start - 1; }
            this.items = items;
            this.start = start;
            this.end = end;
            this.index = index;
        }
        ArrayIterator.prototype.first = function () {
            this.index = this.start;
            return this.current();
        };
        ArrayIterator.prototype.next = function () {
            this.index = Math.min(this.index + 1, this.end);
            return this.current();
        };
        ArrayIterator.prototype.current = function () {
            if (this.index === this.start - 1 || this.index === this.end) {
                return null;
            }
            return this.items[this.index];
        };
        return ArrayIterator;
    }());
    exports.ArrayIterator = ArrayIterator;
    var ArrayNavigator = /** @class */ (function (_super) {
        __extends(ArrayNavigator, _super);
        function ArrayNavigator(items, start, end, index) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = items.length; }
            if (index === void 0) { index = start - 1; }
            return _super.call(this, items, start, end, index) || this;
        }
        ArrayNavigator.prototype.current = function () {
            return _super.prototype.current.call(this);
        };
        ArrayNavigator.prototype.previous = function () {
            this.index = Math.max(this.index - 1, this.start - 1);
            return this.current();
        };
        ArrayNavigator.prototype.first = function () {
            this.index = this.start;
            return this.current();
        };
        ArrayNavigator.prototype.last = function () {
            this.index = this.end - 1;
            return this.current();
        };
        ArrayNavigator.prototype.parent = function () {
            return null;
        };
        return ArrayNavigator;
    }(ArrayIterator));
    exports.ArrayNavigator = ArrayNavigator;
    var MappedIterator = /** @class */ (function () {
        function MappedIterator(iterator, fn) {
            this.iterator = iterator;
            this.fn = fn;
            // noop
        }
        MappedIterator.prototype.next = function () { return this.fn(this.iterator.next()); };
        return MappedIterator;
    }());
    exports.MappedIterator = MappedIterator;
    var MappedNavigator = /** @class */ (function (_super) {
        __extends(MappedNavigator, _super);
        function MappedNavigator(navigator, fn) {
            var _this = _super.call(this, navigator, fn) || this;
            _this.navigator = navigator;
            return _this;
        }
        MappedNavigator.prototype.current = function () { return this.fn(this.navigator.current()); };
        MappedNavigator.prototype.previous = function () { return this.fn(this.navigator.previous()); };
        MappedNavigator.prototype.parent = function () { return this.fn(this.navigator.parent()); };
        MappedNavigator.prototype.first = function () { return this.fn(this.navigator.first()); };
        MappedNavigator.prototype.last = function () { return this.fn(this.navigator.last()); };
        MappedNavigator.prototype.next = function () { return this.fn(this.navigator.next()); };
        return MappedNavigator;
    }(MappedIterator));
    exports.MappedNavigator = MappedNavigator;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=iterator.js.map

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, platform_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _a;
    var _schemePattern = /^\w[\w\d+.-]*$/;
    var _singleSlashStart = /^\//;
    var _doubleSlashStart = /^\/\//;
    var _throwOnMissingSchema = true;
    /**
     * @internal
     */
    function setUriThrowOnMissingScheme(value) {
        var old = _throwOnMissingSchema;
        _throwOnMissingSchema = value;
        return old;
    }
    exports.setUriThrowOnMissingScheme = setUriThrowOnMissingScheme;
    function _validateUri(ret, _strict) {
        // scheme, must be set
        if (!ret.scheme) {
            if (_strict || _throwOnMissingSchema) {
                throw new Error("[UriError]: Scheme is missing: {scheme: \"\", authority: \"" + ret.authority + "\", path: \"" + ret.path + "\", query: \"" + ret.query + "\", fragment: \"" + ret.fragment + "\"}");
            }
            else {
                console.warn("[UriError]: Scheme is missing: {scheme: \"\", authority: \"" + ret.authority + "\", path: \"" + ret.path + "\", query: \"" + ret.query + "\", fragment: \"" + ret.fragment + "\"}");
            }
        }
        // scheme, https://tools.ietf.org/html/rfc3986#section-3.1
        // ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
        if (ret.scheme && !_schemePattern.test(ret.scheme)) {
            throw new Error('[UriError]: Scheme contains illegal characters.');
        }
        // path, http://tools.ietf.org/html/rfc3986#section-3.3
        // If a URI contains an authority component, then the path component
        // must either be empty or begin with a slash ("/") character.  If a URI
        // does not contain an authority component, then the path cannot begin
        // with two slash characters ("//").
        if (ret.path) {
            if (ret.authority) {
                if (!_singleSlashStart.test(ret.path)) {
                    throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
                }
            }
            else {
                if (_doubleSlashStart.test(ret.path)) {
                    throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
                }
            }
        }
    }
    // implements a bit of https://tools.ietf.org/html/rfc3986#section-5
    function _referenceResolution(scheme, path) {
        // the slash-character is our 'default base' as we don't
        // support constructing URIs relative to other URIs. This
        // also means that we alter and potentially break paths.
        // see https://tools.ietf.org/html/rfc3986#section-5.1.4
        switch (scheme) {
            case 'https':
            case 'http':
            case 'file':
                if (!path) {
                    path = _slash;
                }
                else if (path[0] !== _slash) {
                    path = _slash + path;
                }
                break;
        }
        return path;
    }
    var _empty = '';
    var _slash = '/';
    var _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    /**
     * Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986.
     * This class is a simple parser which creates the basic component parts
     * (http://tools.ietf.org/html/rfc3986#section-3) with minimal validation
     * and encoding.
     *
     *       foo://example.com:8042/over/there?name=ferret#nose
     *       \_/   \______________/\_________/ \_________/ \__/
     *        |           |            |            |        |
     *     scheme     authority       path        query   fragment
     *        |   _____________________|__
     *       / \ /                        \
     *       urn:example:animal:ferret:nose
     */
    var URI = /** @class */ (function () {
        /**
         * @internal
         */
        function URI(schemeOrData, authority, path, query, fragment, _strict) {
            if (typeof schemeOrData === 'object') {
                this.scheme = schemeOrData.scheme || _empty;
                this.authority = schemeOrData.authority || _empty;
                this.path = schemeOrData.path || _empty;
                this.query = schemeOrData.query || _empty;
                this.fragment = schemeOrData.fragment || _empty;
                // no validation because it's this URI
                // that creates uri components.
                // _validateUri(this);
            }
            else {
                this.scheme = schemeOrData || _empty;
                this.authority = authority || _empty;
                this.path = _referenceResolution(this.scheme, path || _empty);
                this.query = query || _empty;
                this.fragment = fragment || _empty;
                _validateUri(this, _strict);
            }
        }
        URI.isUri = function (thing) {
            if (thing instanceof URI) {
                return true;
            }
            if (!thing) {
                return false;
            }
            return typeof thing.authority === 'string'
                && typeof thing.fragment === 'string'
                && typeof thing.path === 'string'
                && typeof thing.query === 'string'
                && typeof thing.scheme === 'string';
        };
        Object.defineProperty(URI.prototype, "fsPath", {
            // ---- filesystem path -----------------------
            /**
             * Returns a string representing the corresponding file system path of this URI.
             * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
             * platform specific path separator.
             *
             * * Will *not* validate the path for invalid characters and semantics.
             * * Will *not* look at the scheme of this URI.
             * * The result shall *not* be used for display purposes but for accessing a file on disk.
             *
             *
             * The *difference* to `URI#path` is the use of the platform specific separator and the handling
             * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
             *
             * ```ts
                const u = URI.parse('file://server/c$/folder/file.txt')
                u.authority === 'server'
                u.path === '/shares/c$/file.txt'
                u.fsPath === '\\server\c$\folder\file.txt'
            ```
             *
             * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
             * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
             * with URIs that represent files on disk (`file` scheme).
             */
            get: function () {
                // if (this.scheme !== 'file') {
                // 	console.warn(`[UriError] calling fsPath with scheme ${this.scheme}`);
                // }
                return _makeFsPath(this);
            },
            enumerable: true,
            configurable: true
        });
        // ---- modify to new -------------------------
        URI.prototype.with = function (change) {
            if (!change) {
                return this;
            }
            var scheme = change.scheme, authority = change.authority, path = change.path, query = change.query, fragment = change.fragment;
            if (scheme === void 0) {
                scheme = this.scheme;
            }
            else if (scheme === null) {
                scheme = _empty;
            }
            if (authority === void 0) {
                authority = this.authority;
            }
            else if (authority === null) {
                authority = _empty;
            }
            if (path === void 0) {
                path = this.path;
            }
            else if (path === null) {
                path = _empty;
            }
            if (query === void 0) {
                query = this.query;
            }
            else if (query === null) {
                query = _empty;
            }
            if (fragment === void 0) {
                fragment = this.fragment;
            }
            else if (fragment === null) {
                fragment = _empty;
            }
            if (scheme === this.scheme
                && authority === this.authority
                && path === this.path
                && query === this.query
                && fragment === this.fragment) {
                return this;
            }
            return new _URI(scheme, authority, path, query, fragment);
        };
        // ---- parse & validate ------------------------
        /**
         * Creates a new URI from a string, e.g. `http://www.msft.com/some/path`,
         * `file:///usr/home`, or `scheme:with/path`.
         *
         * @param value A string which represents an URI (see `URI#toString`).
         */
        URI.parse = function (value, _strict) {
            if (_strict === void 0) { _strict = false; }
            var match = _regexp.exec(value);
            if (!match) {
                return new _URI(_empty, _empty, _empty, _empty, _empty);
            }
            return new _URI(match[2] || _empty, decodeURIComponent(match[4] || _empty), decodeURIComponent(match[5] || _empty), decodeURIComponent(match[7] || _empty), decodeURIComponent(match[9] || _empty), _strict);
        };
        /**
         * Creates a new URI from a file system path, e.g. `c:\my\files`,
         * `/usr/home`, or `\\server\share\some\path`.
         *
         * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
         * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
         * `URI.parse('file://' + path)` because the path might contain characters that are
         * interpreted (# and ?). See the following sample:
         * ```ts
        const good = URI.file('/coding/c#/project1');
        good.scheme === 'file';
        good.path === '/coding/c#/project1';
        good.fragment === '';
        const bad = URI.parse('file://' + '/coding/c#/project1');
        bad.scheme === 'file';
        bad.path === '/coding/c'; // path is now broken
        bad.fragment === '/project1';
        ```
         *
         * @param path A file system path (see `URI#fsPath`)
         */
        URI.file = function (path) {
            var authority = _empty;
            // normalize to fwd-slashes on windows,
            // on other systems bwd-slashes are valid
            // filename character, eg /f\oo/ba\r.txt
            if (platform_1.isWindows) {
                path = path.replace(/\\/g, _slash);
            }
            // check for authority as used in UNC shares
            // or use the path as given
            if (path[0] === _slash && path[1] === _slash) {
                var idx = path.indexOf(_slash, 2);
                if (idx === -1) {
                    authority = path.substring(2);
                    path = _slash;
                }
                else {
                    authority = path.substring(2, idx);
                    path = path.substring(idx) || _slash;
                }
            }
            return new _URI('file', authority, path, _empty, _empty);
        };
        URI.from = function (components) {
            return new _URI(components.scheme, components.authority, components.path, components.query, components.fragment);
        };
        // ---- printing/externalize ---------------------------
        /**
         * Creates a string presentation for this URI. It's guaranteed that calling
         * `URI.parse` with the result of this function creates an URI which is equal
         * to this URI.
         *
         * * The result shall *not* be used for display purposes but for externalization or transport.
         * * The result will be encoded using the percentage encoding and encoding happens mostly
         * ignore the scheme-specific encoding rules.
         *
         * @param skipEncoding Do not encode the result, default is `false`
         */
        URI.prototype.toString = function (skipEncoding) {
            if (skipEncoding === void 0) { skipEncoding = false; }
            return _asFormatted(this, skipEncoding);
        };
        URI.prototype.toJSON = function () {
            return this;
        };
        URI.revive = function (data) {
            if (!data) {
                return data;
            }
            else if (data instanceof URI) {
                return data;
            }
            else {
                var result = new _URI(data);
                result._fsPath = data.fsPath;
                result._formatted = data.external;
                return result;
            }
        };
        return URI;
    }());
    exports.URI = URI;
    // tslint:disable-next-line:class-name
    var _URI = /** @class */ (function (_super) {
        __extends(_URI, _super);
        function _URI() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._formatted = null;
            _this._fsPath = null;
            return _this;
        }
        Object.defineProperty(_URI.prototype, "fsPath", {
            get: function () {
                if (!this._fsPath) {
                    this._fsPath = _makeFsPath(this);
                }
                return this._fsPath;
            },
            enumerable: true,
            configurable: true
        });
        _URI.prototype.toString = function (skipEncoding) {
            if (skipEncoding === void 0) { skipEncoding = false; }
            if (!skipEncoding) {
                if (!this._formatted) {
                    this._formatted = _asFormatted(this, false);
                }
                return this._formatted;
            }
            else {
                // we don't cache that
                return _asFormatted(this, true);
            }
        };
        _URI.prototype.toJSON = function () {
            var res = {
                $mid: 1
            };
            // cached state
            if (this._fsPath) {
                res.fsPath = this._fsPath;
            }
            if (this._formatted) {
                res.external = this._formatted;
            }
            // uri components
            if (this.path) {
                res.path = this.path;
            }
            if (this.scheme) {
                res.scheme = this.scheme;
            }
            if (this.authority) {
                res.authority = this.authority;
            }
            if (this.query) {
                res.query = this.query;
            }
            if (this.fragment) {
                res.fragment = this.fragment;
            }
            return res;
        };
        return _URI;
    }(URI));
    // reserved characters: https://tools.ietf.org/html/rfc3986#section-2.2
    var encodeTable = (_a = {},
        _a[58 /* Colon */] = '%3A',
        _a[47 /* Slash */] = '%2F',
        _a[63 /* QuestionMark */] = '%3F',
        _a[35 /* Hash */] = '%23',
        _a[91 /* OpenSquareBracket */] = '%5B',
        _a[93 /* CloseSquareBracket */] = '%5D',
        _a[64 /* AtSign */] = '%40',
        _a[33 /* ExclamationMark */] = '%21',
        _a[36 /* DollarSign */] = '%24',
        _a[38 /* Ampersand */] = '%26',
        _a[39 /* SingleQuote */] = '%27',
        _a[40 /* OpenParen */] = '%28',
        _a[41 /* CloseParen */] = '%29',
        _a[42 /* Asterisk */] = '%2A',
        _a[43 /* Plus */] = '%2B',
        _a[44 /* Comma */] = '%2C',
        _a[59 /* Semicolon */] = '%3B',
        _a[61 /* Equals */] = '%3D',
        _a[32 /* Space */] = '%20',
        _a);
    function encodeURIComponentFast(uriComponent, allowSlash) {
        var res = undefined;
        var nativeEncodePos = -1;
        for (var pos = 0; pos < uriComponent.length; pos++) {
            var code = uriComponent.charCodeAt(pos);
            // unreserved characters: https://tools.ietf.org/html/rfc3986#section-2.3
            if ((code >= 97 /* a */ && code <= 122 /* z */)
                || (code >= 65 /* A */ && code <= 90 /* Z */)
                || (code >= 48 /* Digit0 */ && code <= 57 /* Digit9 */)
                || code === 45 /* Dash */
                || code === 46 /* Period */
                || code === 95 /* Underline */
                || code === 126 /* Tilde */
                || (allowSlash && code === 47 /* Slash */)) {
                // check if we are delaying native encode
                if (nativeEncodePos !== -1) {
                    res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                    nativeEncodePos = -1;
                }
                // check if we write into a new string (by default we try to return the param)
                if (res !== undefined) {
                    res += uriComponent.charAt(pos);
                }
            }
            else {
                // encoding needed, we need to allocate a new string
                if (res === undefined) {
                    res = uriComponent.substr(0, pos);
                }
                // check with default table first
                var escaped = encodeTable[code];
                if (escaped !== undefined) {
                    // check if we are delaying native encode
                    if (nativeEncodePos !== -1) {
                        res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                        nativeEncodePos = -1;
                    }
                    // append escaped variant to result
                    res += escaped;
                }
                else if (nativeEncodePos === -1) {
                    // use native encode only when needed
                    nativeEncodePos = pos;
                }
            }
        }
        if (nativeEncodePos !== -1) {
            res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
        }
        return res !== undefined ? res : uriComponent;
    }
    function encodeURIComponentMinimal(path) {
        var res = undefined;
        for (var pos = 0; pos < path.length; pos++) {
            var code = path.charCodeAt(pos);
            if (code === 35 /* Hash */ || code === 63 /* QuestionMark */) {
                if (res === undefined) {
                    res = path.substr(0, pos);
                }
                res += encodeTable[code];
            }
            else {
                if (res !== undefined) {
                    res += path[pos];
                }
            }
        }
        return res !== undefined ? res : path;
    }
    /**
     * Compute `fsPath` for the given uri
     * @param uri
     */
    function _makeFsPath(uri) {
        var value;
        if (uri.authority && uri.path.length > 1 && uri.scheme === 'file') {
            // unc path: file://shares/c$/far/boo
            value = "//" + uri.authority + uri.path;
        }
        else if (uri.path.charCodeAt(0) === 47 /* Slash */
            && (uri.path.charCodeAt(1) >= 65 /* A */ && uri.path.charCodeAt(1) <= 90 /* Z */ || uri.path.charCodeAt(1) >= 97 /* a */ && uri.path.charCodeAt(1) <= 122 /* z */)
            && uri.path.charCodeAt(2) === 58 /* Colon */) {
            // windows drive letter: file:///c:/far/boo
            value = uri.path[1].toLowerCase() + uri.path.substr(2);
        }
        else {
            // other path
            value = uri.path;
        }
        if (platform_1.isWindows) {
            value = value.replace(/\//g, '\\');
        }
        return value;
    }
    /**
     * Create the external version of a uri
     */
    function _asFormatted(uri, skipEncoding) {
        var encoder = !skipEncoding
            ? encodeURIComponentFast
            : encodeURIComponentMinimal;
        var res = '';
        var scheme = uri.scheme, authority = uri.authority, path = uri.path, query = uri.query, fragment = uri.fragment;
        if (scheme) {
            res += scheme;
            res += ':';
        }
        if (authority || scheme === 'file') {
            res += _slash;
            res += _slash;
        }
        if (authority) {
            var idx = authority.indexOf('@');
            if (idx !== -1) {
                // <user>@<auth>
                var userinfo = authority.substr(0, idx);
                authority = authority.substr(idx + 1);
                idx = userinfo.indexOf(':');
                if (idx === -1) {
                    res += encoder(userinfo, false);
                }
                else {
                    // <user>:<pass>@<auth>
                    res += encoder(userinfo.substr(0, idx), false);
                    res += ':';
                    res += encoder(userinfo.substr(idx + 1), false);
                }
                res += '@';
            }
            authority = authority.toLowerCase();
            idx = authority.indexOf(':');
            if (idx === -1) {
                res += encoder(authority, false);
            }
            else {
                // <auth>:<port>
                res += encoder(authority.substr(0, idx), false);
                res += authority.substr(idx);
            }
        }
        if (path) {
            // lower-case windows drive letters in /C:/fff or C:/fff
            if (path.length >= 3 && path.charCodeAt(0) === 47 /* Slash */ && path.charCodeAt(2) === 58 /* Colon */) {
                var code = path.charCodeAt(1);
                if (code >= 65 /* A */ && code <= 90 /* Z */) {
                    path = "/" + String.fromCharCode(code + 32) + ":" + path.substr(3); // "/c:".length === 3
                }
            }
            else if (path.length >= 2 && path.charCodeAt(1) === 58 /* Colon */) {
                var code = path.charCodeAt(0);
                if (code >= 65 /* A */ && code <= 90 /* Z */) {
                    path = String.fromCharCode(code + 32) + ":" + path.substr(2); // "/c:".length === 3
                }
            }
            // encode the rest of the path
            res += encoder(path, true);
        }
        if (query) {
            res += '?';
            res += encoder(query, false);
        }
        if (fragment) {
            res += '#';
            res += !skipEncoding ? encodeURIComponentFast(fragment, false) : fragment;
        }
        return res;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=uri.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _isWindows = false;
    var _isMacintosh = false;
    var _isLinux = false;
    var _isNative = false;
    var _isWeb = false;
    var _locale = undefined;
    var _language = undefined;
    var _translationsConfigFile = undefined;
    exports.LANGUAGE_DEFAULT = 'en';
    var isElectronRenderer = (typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.electron !== 'undefined' && process.type === 'renderer');
    // OS detection
    if (typeof navigator === 'object' && !isElectronRenderer) {
        var userAgent = navigator.userAgent;
        _isWindows = userAgent.indexOf('Windows') >= 0;
        _isMacintosh = userAgent.indexOf('Macintosh') >= 0;
        _isLinux = userAgent.indexOf('Linux') >= 0;
        _isWeb = true;
        _locale = navigator.language;
        _language = _locale;
    }
    else if (typeof process === 'object') {
        _isWindows = (process.platform === 'win32');
        _isMacintosh = (process.platform === 'darwin');
        _isLinux = (process.platform === 'linux');
        _locale = exports.LANGUAGE_DEFAULT;
        _language = exports.LANGUAGE_DEFAULT;
        var rawNlsConfig = process.env['VSCODE_NLS_CONFIG'];
        if (rawNlsConfig) {
            try {
                var nlsConfig = JSON.parse(rawNlsConfig);
                var resolved = nlsConfig.availableLanguages['*'];
                _locale = nlsConfig.locale;
                // VSCode's default language is 'en'
                _language = resolved ? resolved : exports.LANGUAGE_DEFAULT;
                _translationsConfigFile = nlsConfig._translationsConfigFile;
            }
            catch (e) {
            }
        }
        _isNative = true;
    }
    var Platform;
    (function (Platform) {
        Platform[Platform["Web"] = 0] = "Web";
        Platform[Platform["Mac"] = 1] = "Mac";
        Platform[Platform["Linux"] = 2] = "Linux";
        Platform[Platform["Windows"] = 3] = "Windows";
    })(Platform = exports.Platform || (exports.Platform = {}));
    function PlatformToString(platform) {
        switch (platform) {
            case 0 /* Web */: return 'Web';
            case 1 /* Mac */: return 'Mac';
            case 2 /* Linux */: return 'Linux';
            case 3 /* Windows */: return 'Windows';
        }
    }
    exports.PlatformToString = PlatformToString;
    var _platform = 0 /* Web */;
    if (_isNative) {
        if (_isMacintosh) {
            _platform = 1 /* Mac */;
        }
        else if (_isWindows) {
            _platform = 3 /* Windows */;
        }
        else if (_isLinux) {
            _platform = 2 /* Linux */;
        }
    }
    exports.isWindows = _isWindows;
    exports.isMacintosh = _isMacintosh;
    exports.isLinux = _isLinux;
    exports.isNative = _isNative;
    exports.isWeb = _isWeb;
    exports.platform = _platform;
    function isRootUser() {
        return _isNative && !_isWindows && (process.getuid() === 0);
    }
    exports.isRootUser = isRootUser;
    /**
     * The language used for the user interface. The format of
     * the string is all lower case (e.g. zh-tw for Traditional
     * Chinese)
     */
    exports.language = _language;
    /**
     * The OS locale or the locale specified by --locale. The format of
     * the string is all lower case (e.g. zh-tw for Traditional
     * Chinese). The UI is not necessarily shown in the provided locale.
     */
    exports.locale = _locale;
    /**
     * The translatios that are available through language packs.
     */
    exports.translationsConfigFile = _translationsConfigFile;
    var _globals = (typeof self === 'object' ? self : typeof global === 'object' ? global : {});
    exports.globals = _globals;
    var _setImmediate = null;
    function setImmediate(callback) {
        if (_setImmediate === null) {
            if (exports.globals.setImmediate) {
                _setImmediate = exports.globals.setImmediate.bind(exports.globals);
            }
            else if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
                _setImmediate = process.nextTick.bind(process);
            }
            else {
                _setImmediate = exports.globals.setTimeout.bind(exports.globals);
            }
        }
        return _setImmediate(callback);
    }
    exports.setImmediate = setImmediate;
    var OperatingSystem;
    (function (OperatingSystem) {
        OperatingSystem[OperatingSystem["Windows"] = 1] = "Windows";
        OperatingSystem[OperatingSystem["Macintosh"] = 2] = "Macintosh";
        OperatingSystem[OperatingSystem["Linux"] = 3] = "Linux";
    })(OperatingSystem = exports.OperatingSystem || (exports.OperatingSystem = {}));
    exports.OS = (_isMacintosh ? 2 /* Macintosh */ : (_isWindows ? 1 /* Windows */ : 3 /* Linux */));
    var AccessibilitySupport;
    (function (AccessibilitySupport) {
        /**
         * This should be the browser case where it is not known if a screen reader is attached or no.
         */
        AccessibilitySupport[AccessibilitySupport["Unknown"] = 0] = "Unknown";
        AccessibilitySupport[AccessibilitySupport["Disabled"] = 1] = "Disabled";
        AccessibilitySupport[AccessibilitySupport["Enabled"] = 2] = "Enabled";
    })(AccessibilitySupport = exports.AccessibilitySupport || (exports.AccessibilitySupport = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=platform.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Returns the last element of an array.
     * @param array The array.
     * @param n Which element from the end (default is zero).
     */
    function tail(array, n) {
        if (n === void 0) { n = 0; }
        return array[array.length - (1 + n)];
    }
    exports.tail = tail;
    function tail2(arr) {
        if (arr.length === 0) {
            throw new Error('Invalid tail call');
        }
        return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
    }
    exports.tail2 = tail2;
    function equals(one, other, itemEquals) {
        if (itemEquals === void 0) { itemEquals = function (a, b) { return a === b; }; }
        if (one === other) {
            return true;
        }
        if (!one || !other) {
            return false;
        }
        if (one.length !== other.length) {
            return false;
        }
        for (var i = 0, len = one.length; i < len; i++) {
            if (!itemEquals(one[i], other[i])) {
                return false;
            }
        }
        return true;
    }
    exports.equals = equals;
    function binarySearch(array, key, comparator) {
        var low = 0, high = array.length - 1;
        while (low <= high) {
            var mid = ((low + high) / 2) | 0;
            var comp = comparator(array[mid], key);
            if (comp < 0) {
                low = mid + 1;
            }
            else if (comp > 0) {
                high = mid - 1;
            }
            else {
                return mid;
            }
        }
        return -(low + 1);
    }
    exports.binarySearch = binarySearch;
    /**
     * Takes a sorted array and a function p. The array is sorted in such a way that all elements where p(x) is false
     * are located before all elements where p(x) is true.
     * @returns the least x for which p(x) is true or array.length if no element fullfills the given function.
     */
    function findFirstInSorted(array, p) {
        var low = 0, high = array.length;
        if (high === 0) {
            return 0; // no children
        }
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (p(array[mid])) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        return low;
    }
    exports.findFirstInSorted = findFirstInSorted;
    /**
     * Like `Array#sort` but always stable. Usually runs a little slower `than Array#sort`
     * so only use this when actually needing stable sort.
     */
    function mergeSort(data, compare) {
        _sort(data, compare, 0, data.length - 1, []);
        return data;
    }
    exports.mergeSort = mergeSort;
    function _merge(a, compare, lo, mid, hi, aux) {
        var leftIdx = lo, rightIdx = mid + 1;
        for (var i = lo; i <= hi; i++) {
            aux[i] = a[i];
        }
        for (var i = lo; i <= hi; i++) {
            if (leftIdx > mid) {
                // left side consumed
                a[i] = aux[rightIdx++];
            }
            else if (rightIdx > hi) {
                // right side consumed
                a[i] = aux[leftIdx++];
            }
            else if (compare(aux[rightIdx], aux[leftIdx]) < 0) {
                // right element is less -> comes first
                a[i] = aux[rightIdx++];
            }
            else {
                // left element comes first (less or equal)
                a[i] = aux[leftIdx++];
            }
        }
    }
    function _sort(a, compare, lo, hi, aux) {
        if (hi <= lo) {
            return;
        }
        var mid = lo + ((hi - lo) / 2) | 0;
        _sort(a, compare, lo, mid, aux);
        _sort(a, compare, mid + 1, hi, aux);
        if (compare(a[mid], a[mid + 1]) <= 0) {
            // left and right are sorted and if the last-left element is less
            // or equals than the first-right element there is nothing else
            // to do
            return;
        }
        _merge(a, compare, lo, mid, hi, aux);
    }
    function groupBy(data, compare) {
        var result = [];
        var currentGroup = undefined;
        for (var _i = 0, _a = mergeSort(data.slice(0), compare); _i < _a.length; _i++) {
            var element = _a[_i];
            if (!currentGroup || compare(currentGroup[0], element) !== 0) {
                currentGroup = [element];
                result.push(currentGroup);
            }
            else {
                currentGroup.push(element);
            }
        }
        return result;
    }
    exports.groupBy = groupBy;
    /**
     * Diffs two *sorted* arrays and computes the splices which apply the diff.
     */
    function sortedDiff(before, after, compare) {
        var result = [];
        function pushSplice(start, deleteCount, toInsert) {
            var _a;
            if (deleteCount === 0 && toInsert.length === 0) {
                return;
            }
            var latest = result[result.length - 1];
            if (latest && latest.start + latest.deleteCount === start) {
                latest.deleteCount += deleteCount;
                (_a = latest.toInsert).push.apply(_a, toInsert);
            }
            else {
                result.push({ start: start, deleteCount: deleteCount, toInsert: toInsert });
            }
        }
        var beforeIdx = 0;
        var afterIdx = 0;
        while (true) {
            if (beforeIdx === before.length) {
                pushSplice(beforeIdx, 0, after.slice(afterIdx));
                break;
            }
            if (afterIdx === after.length) {
                pushSplice(beforeIdx, before.length - beforeIdx, []);
                break;
            }
            var beforeElement = before[beforeIdx];
            var afterElement = after[afterIdx];
            var n = compare(beforeElement, afterElement);
            if (n === 0) {
                // equal
                beforeIdx += 1;
                afterIdx += 1;
            }
            else if (n < 0) {
                // beforeElement is smaller -> before element removed
                pushSplice(beforeIdx, 1, []);
                beforeIdx += 1;
            }
            else if (n > 0) {
                // beforeElement is greater -> after element added
                pushSplice(beforeIdx, 0, [afterElement]);
                afterIdx += 1;
            }
        }
        return result;
    }
    exports.sortedDiff = sortedDiff;
    /**
     * Takes two *sorted* arrays and computes their delta (removed, added elements).
     * Finishes in `Math.min(before.length, after.length)` steps.
     * @param before
     * @param after
     * @param compare
     */
    function delta(before, after, compare) {
        var splices = sortedDiff(before, after, compare);
        var removed = [];
        var added = [];
        for (var _i = 0, splices_1 = splices; _i < splices_1.length; _i++) {
            var splice = splices_1[_i];
            removed.push.apply(removed, before.slice(splice.start, splice.start + splice.deleteCount));
            added.push.apply(added, splice.toInsert);
        }
        return { removed: removed, added: added };
    }
    exports.delta = delta;
    /**
     * Returns the top N elements from the array.
     *
     * Faster than sorting the entire array when the array is a lot larger than N.
     *
     * @param array The unsorted array.
     * @param compare A sort function for the elements.
     * @param n The number of elements to return.
     * @return The first n elemnts from array when sorted with compare.
     */
    function top(array, compare, n) {
        if (n === 0) {
            return [];
        }
        var result = array.slice(0, n).sort(compare);
        topStep(array, compare, result, n, array.length);
        return result;
    }
    exports.top = top;
    /**
     * Asynchronous variant of `top()` allowing for splitting up work in batches between which the event loop can run.
     *
     * Returns the top N elements from the array.
     *
     * Faster than sorting the entire array when the array is a lot larger than N.
     *
     * @param array The unsorted array.
     * @param compare A sort function for the elements.
     * @param n The number of elements to return.
     * @param batch The number of elements to examine before yielding to the event loop.
     * @return The first n elemnts from array when sorted with compare.
     */
    function topAsync(array, compare, n, batch, token) {
        var _this = this;
        if (n === 0) {
            return Promise.resolve([]);
        }
        return new Promise(function (resolve, reject) {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var o, result, i, m;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            o = array.length;
                            result = array.slice(0, n).sort(compare);
                            i = n, m = Math.min(n + batch, o);
                            _a.label = 1;
                        case 1:
                            if (!(i < o)) return [3 /*break*/, 5];
                            if (!(i > n)) return [3 /*break*/, 3];
                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                        case 2:
                            _a.sent(); // nextTick() would starve I/O.
                            _a.label = 3;
                        case 3:
                            if (token && token.isCancellationRequested) {
                                throw errors_1.canceled();
                            }
                            topStep(array, compare, result, i, m);
                            _a.label = 4;
                        case 4:
                            i = m, m = Math.min(m + batch, o);
                            return [3 /*break*/, 1];
                        case 5: return [2 /*return*/, result];
                    }
                });
            }); })()
                .then(resolve, reject);
        });
    }
    exports.topAsync = topAsync;
    function topStep(array, compare, result, i, m) {
        var _loop_1 = function (n) {
            var element = array[i];
            if (compare(element, result[n - 1]) < 0) {
                result.pop();
                var j = findFirstInSorted(result, function (e) { return compare(element, e) < 0; });
                result.splice(j, 0, element);
            }
        };
        for (var n = result.length; i < m; i++) {
            _loop_1(n);
        }
    }
    /**
     * @returns a new array with all falsy values removed. The original array IS NOT modified.
     */
    function coalesce(array) {
        if (!array) {
            return array;
        }
        return array.filter(function (e) { return !!e; });
    }
    exports.coalesce = coalesce;
    /**
     * Remove all falsey values from `array`. The original array IS modified.
     */
    function coalesceInPlace(array) {
        if (!array) {
            return;
        }
        var to = 0;
        for (var i = 0; i < array.length; i++) {
            if (!!array[i]) {
                array[to] = array[i];
                to += 1;
            }
        }
        array.length = to;
    }
    exports.coalesceInPlace = coalesceInPlace;
    /**
     * Moves the element in the array for the provided positions.
     */
    function move(array, from, to) {
        array.splice(to, 0, array.splice(from, 1)[0]);
    }
    exports.move = move;
    /**
     * @returns {{false}} if the provided object is an array
     * 	and not empty.
     */
    function isFalsyOrEmpty(obj) {
        return !Array.isArray(obj) || obj.length === 0;
    }
    exports.isFalsyOrEmpty = isFalsyOrEmpty;
    /**
     * @returns {{true}} if the provided object is an array and has at least one element.
     */
    function isNonEmptyArray(obj) {
        return Array.isArray(obj) && obj.length > 0;
    }
    exports.isNonEmptyArray = isNonEmptyArray;
    /**
     * Removes duplicates from the given array. The optional keyFn allows to specify
     * how elements are checked for equalness by returning a unique string for each.
     */
    function distinct(array, keyFn) {
        if (!keyFn) {
            return array.filter(function (element, position) {
                return array.indexOf(element) === position;
            });
        }
        var seen = Object.create(null);
        return array.filter(function (elem) {
            var key = keyFn(elem);
            if (seen[key]) {
                return false;
            }
            seen[key] = true;
            return true;
        });
    }
    exports.distinct = distinct;
    function uniqueFilter(keyFn) {
        var seen = Object.create(null);
        return function (element) {
            var key = keyFn(element);
            if (seen[key]) {
                return false;
            }
            seen[key] = true;
            return true;
        };
    }
    exports.uniqueFilter = uniqueFilter;
    function firstIndex(array, fn) {
        for (var i = 0; i < array.length; i++) {
            var element = array[i];
            if (fn(element)) {
                return i;
            }
        }
        return -1;
    }
    exports.firstIndex = firstIndex;
    function first(array, fn, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = null; }
        var index = firstIndex(array, fn);
        return index < 0 ? notFoundValue : array[index];
    }
    exports.first = first;
    function commonPrefixLength(one, other, equals) {
        if (equals === void 0) { equals = function (a, b) { return a === b; }; }
        var result = 0;
        for (var i = 0, len = Math.min(one.length, other.length); i < len && equals(one[i], other[i]); i++) {
            result++;
        }
        return result;
    }
    exports.commonPrefixLength = commonPrefixLength;
    function flatten(arr) {
        var _a;
        return (_a = []).concat.apply(_a, arr);
    }
    exports.flatten = flatten;
    function range(arg, to) {
        var from = typeof to === 'number' ? arg : 0;
        if (typeof to === 'number') {
            from = arg;
        }
        else {
            from = 0;
            to = arg;
        }
        var result = [];
        if (from <= to) {
            for (var i = from; i < to; i++) {
                result.push(i);
            }
        }
        else {
            for (var i = from; i > to; i--) {
                result.push(i);
            }
        }
        return result;
    }
    exports.range = range;
    function fill(num, valueFn, arr) {
        if (arr === void 0) { arr = []; }
        for (var i = 0; i < num; i++) {
            arr[i] = valueFn();
        }
        return arr;
    }
    exports.fill = fill;
    function index(array, indexer, merger) {
        if (merger === void 0) { merger = function (t) { return t; }; }
        return array.reduce(function (r, t) {
            var key = indexer(t);
            r[key] = merger(t, r[key]);
            return r;
        }, Object.create(null));
    }
    exports.index = index;
    /**
     * Inserts an element into an array. Returns a function which, when
     * called, will remove that element from the array.
     */
    function insert(array, element) {
        array.push(element);
        return function () {
            var index = array.indexOf(element);
            if (index > -1) {
                array.splice(index, 1);
            }
        };
    }
    exports.insert = insert;
    /**
     * Insert `insertArr` inside `target` at `insertIndex`.
     * Please don't touch unless you understand https://jsperf.com/inserting-an-array-within-an-array
     */
    function arrayInsert(target, insertIndex, insertArr) {
        var before = target.slice(0, insertIndex);
        var after = target.slice(insertIndex);
        return before.concat(insertArr, after);
    }
    exports.arrayInsert = arrayInsert;
    /**
     * Uses Fisher-Yates shuffle to shuffle the given array
     * @param array
     */
    function shuffle(array, _seed) {
        var rand;
        if (typeof _seed === 'number') {
            var seed_1 = _seed;
            // Seeded random number generator in JS. Modified from:
            // https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
            rand = function () {
                var x = Math.sin(seed_1++) * 179426549; // throw away most significant digits and reduce any potential bias
                return x - Math.floor(x);
            };
        }
        else {
            rand = Math.random;
        }
        for (var i = array.length - 1; i > 0; i -= 1) {
            var j = Math.floor(rand() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    exports.shuffle = shuffle;
    /**
     * Pushes an element to the start of the array, if found.
     */
    function pushToStart(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
            arr.unshift(value);
        }
    }
    exports.pushToStart = pushToStart;
    /**
     * Pushes an element to the end of the array, if found.
     */
    function pushToEnd(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
            arr.push(value);
        }
    }
    exports.pushToEnd = pushToEnd;
    function find(arr, predicate) {
        for (var i = 0; i < arr.length; i++) {
            var element = arr[i];
            if (predicate(element, i, arr)) {
                return element;
            }
        }
        return undefined;
    }
    exports.find = find;
    function mapArrayOrNot(items, fn) {
        return Array.isArray(items) ?
            items.map(fn) :
            fn(items);
    }
    exports.mapArrayOrNot = mapArrayOrNot;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=arrays.js.map

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(14), __webpack_require__(4), __webpack_require__(3), __webpack_require__(1), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, cancellation_1, errors, event_1, lifecycle_1, winjs_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isThenable(obj) {
        return obj && typeof obj.then === 'function';
    }
    exports.isThenable = isThenable;
    function createCancelablePromise(callback) {
        var source = new cancellation_1.CancellationTokenSource();
        var thenable = callback(source.token);
        var promise = new Promise(function (resolve, reject) {
            source.token.onCancellationRequested(function () {
                reject(errors.canceled());
            });
            Promise.resolve(thenable).then(function (value) {
                source.dispose();
                resolve(value);
            }, function (err) {
                source.dispose();
                reject(err);
            });
        });
        return new /** @class */ (function () {
            function class_1() {
            }
            class_1.prototype.cancel = function () {
                source.cancel();
            };
            class_1.prototype.then = function (resolve, reject) {
                return promise.then(resolve, reject);
            };
            class_1.prototype.catch = function (reject) {
                return this.then(undefined, reject);
            };
            return class_1;
        }());
    }
    exports.createCancelablePromise = createCancelablePromise;
    function asThenable(callback) {
        return new Promise(function (resolve, reject) {
            var item = callback();
            if (isThenable(item)) {
                item.then(resolve, reject);
            }
            else {
                resolve(item);
            }
        });
    }
    exports.asThenable = asThenable;
    /**
     * A helper to prevent accumulation of sequential async tasks.
     *
     * Imagine a mail man with the sole task of delivering letters. As soon as
     * a letter submitted for delivery, he drives to the destination, delivers it
     * and returns to his base. Imagine that during the trip, N more letters were submitted.
     * When the mail man returns, he picks those N letters and delivers them all in a
     * single trip. Even though N+1 submissions occurred, only 2 deliveries were made.
     *
     * The throttler implements this via the queue() method, by providing it a task
     * factory. Following the example:
     *
     * 		const throttler = new Throttler();
     * 		const letters = [];
     *
     * 		function deliver() {
     * 			const lettersToDeliver = letters;
     * 			letters = [];
     * 			return makeTheTrip(lettersToDeliver);
     * 		}
     *
     * 		function onLetterReceived(l) {
     * 			letters.push(l);
     * 			throttler.queue(deliver);
     * 		}
     */
    var Throttler = /** @class */ (function () {
        function Throttler() {
            this.activePromise = null;
            this.queuedPromise = null;
            this.queuedPromiseFactory = null;
        }
        Throttler.prototype.queue = function (promiseFactory) {
            var _this = this;
            if (this.activePromise) {
                this.queuedPromiseFactory = promiseFactory;
                if (!this.queuedPromise) {
                    var onComplete_1 = function () {
                        _this.queuedPromise = null;
                        var result = _this.queue(_this.queuedPromiseFactory);
                        _this.queuedPromiseFactory = null;
                        return result;
                    };
                    this.queuedPromise = new winjs_base_1.TPromise(function (c) {
                        _this.activePromise.then(onComplete_1, onComplete_1).then(c);
                    });
                }
                return new winjs_base_1.TPromise(function (c, e) {
                    _this.queuedPromise.then(c, e);
                });
            }
            this.activePromise = promiseFactory();
            return new winjs_base_1.TPromise(function (c, e) {
                _this.activePromise.then(function (result) {
                    _this.activePromise = null;
                    c(result);
                }, function (err) {
                    _this.activePromise = null;
                    e(err);
                });
            });
        };
        return Throttler;
    }());
    exports.Throttler = Throttler;
    // TODO@Joao: can the previous throttler be replaced with this?
    var SimpleThrottler = /** @class */ (function () {
        function SimpleThrottler() {
            this.current = winjs_base_1.TPromise.wrap(null);
        }
        SimpleThrottler.prototype.queue = function (promiseTask) {
            return this.current = this.current.then(function () { return promiseTask(); });
        };
        return SimpleThrottler;
    }());
    exports.SimpleThrottler = SimpleThrottler;
    /**
     * A helper to delay execution of a task that is being requested often.
     *
     * Following the throttler, now imagine the mail man wants to optimize the number of
     * trips proactively. The trip itself can be long, so he decides not to make the trip
     * as soon as a letter is submitted. Instead he waits a while, in case more
     * letters are submitted. After said waiting period, if no letters were submitted, he
     * decides to make the trip. Imagine that N more letters were submitted after the first
     * one, all within a short period of time between each other. Even though N+1
     * submissions occurred, only 1 delivery was made.
     *
     * The delayer offers this behavior via the trigger() method, into which both the task
     * to be executed and the waiting period (delay) must be passed in as arguments. Following
     * the example:
     *
     * 		const delayer = new Delayer(WAITING_PERIOD);
     * 		const letters = [];
     *
     * 		function letterReceived(l) {
     * 			letters.push(l);
     * 			delayer.trigger(() => { return makeTheTrip(); });
     * 		}
     */
    var Delayer = /** @class */ (function () {
        function Delayer(defaultDelay) {
            this.defaultDelay = defaultDelay;
            this.timeout = null;
            this.completionPromise = null;
            this.doResolve = null;
            this.task = null;
        }
        Delayer.prototype.trigger = function (task, delay) {
            var _this = this;
            if (delay === void 0) { delay = this.defaultDelay; }
            this.task = task;
            this.cancelTimeout();
            if (!this.completionPromise) {
                this.completionPromise = new winjs_base_1.TPromise(function (c, e) {
                    _this.doResolve = c;
                    _this.doReject = e;
                }).then(function () {
                    _this.completionPromise = null;
                    _this.doResolve = null;
                    var task = _this.task;
                    _this.task = null;
                    return task();
                });
            }
            this.timeout = setTimeout(function () {
                _this.timeout = null;
                _this.doResolve(null);
            }, delay);
            return this.completionPromise;
        };
        Delayer.prototype.isTriggered = function () {
            return this.timeout !== null;
        };
        Delayer.prototype.cancel = function () {
            this.cancelTimeout();
            if (this.completionPromise) {
                this.doReject(errors.canceled());
                this.completionPromise = null;
            }
        };
        Delayer.prototype.cancelTimeout = function () {
            if (this.timeout !== null) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
        };
        Delayer.prototype.dispose = function () {
            this.cancelTimeout();
        };
        return Delayer;
    }());
    exports.Delayer = Delayer;
    /**
     * A helper to delay execution of a task that is being requested often, while
     * preventing accumulation of consecutive executions, while the task runs.
     *
     * The mail man is clever and waits for a certain amount of time, before going
     * out to deliver letters. While the mail man is going out, more letters arrive
     * and can only be delivered once he is back. Once he is back the mail man will
     * do one more trip to deliver the letters that have accumulated while he was out.
     */
    var ThrottledDelayer = /** @class */ (function (_super) {
        __extends(ThrottledDelayer, _super);
        function ThrottledDelayer(defaultDelay) {
            var _this = _super.call(this, defaultDelay) || this;
            _this.throttler = new Throttler();
            return _this;
        }
        ThrottledDelayer.prototype.trigger = function (promiseFactory, delay) {
            var _this = this;
            return _super.prototype.trigger.call(this, function () { return _this.throttler.queue(promiseFactory); }, delay);
        };
        return ThrottledDelayer;
    }(Delayer));
    exports.ThrottledDelayer = ThrottledDelayer;
    /**
     * A barrier that is initially closed and then becomes opened permanently.
     */
    var Barrier = /** @class */ (function () {
        function Barrier() {
            var _this = this;
            this._isOpen = false;
            this._promise = new Promise(function (c, e) {
                _this._completePromise = c;
            });
        }
        Barrier.prototype.isOpen = function () {
            return this._isOpen;
        };
        Barrier.prototype.open = function () {
            this._isOpen = true;
            this._completePromise(true);
        };
        Barrier.prototype.wait = function () {
            return this._promise;
        };
        return Barrier;
    }());
    exports.Barrier = Barrier;
    function timeout(millis, token) {
        if (!token) {
            return createCancelablePromise(function (token) { return timeout(millis, token); });
        }
        return new Promise(function (resolve, reject) {
            var handle = setTimeout(resolve, millis);
            token.onCancellationRequested(function () {
                clearTimeout(handle);
                reject(errors.canceled());
            });
        });
    }
    exports.timeout = timeout;
    function disposableTimeout(handler, timeout) {
        if (timeout === void 0) { timeout = 0; }
        var timer = setTimeout(handler, timeout);
        return {
            dispose: function () {
                clearTimeout(timer);
            }
        };
    }
    exports.disposableTimeout = disposableTimeout;
    /**
     * Returns a new promise that joins the provided promise. Upon completion of
     * the provided promise the provided function will always be called. This
     * method is comparable to a try-finally code block.
     * @param promise a promise
     * @param callback a function that will be call in the success and error case.
     */
    function always(promise, callback) {
        function safeCallback() {
            try {
                callback();
            }
            catch (err) {
                errors.onUnexpectedError(err);
            }
        }
        promise.then(function (_) { return safeCallback(); }, function (_) { return safeCallback(); });
        return Promise.resolve(promise);
    }
    exports.always = always;
    /**
     * Runs the provided list of promise factories in sequential order. The returned
     * promise will complete to an array of results from each promise.
     */
    function sequence(promiseFactories) {
        var results = [];
        var index = 0;
        var len = promiseFactories.length;
        function next() {
            return index < len ? promiseFactories[index++]() : null;
        }
        function thenHandler(result) {
            if (result !== undefined && result !== null) {
                results.push(result);
            }
            var n = next();
            if (n) {
                return n.then(thenHandler);
            }
            return Promise.resolve(results);
        }
        return Promise.resolve(null).then(thenHandler);
    }
    exports.sequence = sequence;
    function first(promiseFactories, shouldStop, defaultValue) {
        if (shouldStop === void 0) { shouldStop = function (t) { return !!t; }; }
        if (defaultValue === void 0) { defaultValue = null; }
        var index = 0;
        var len = promiseFactories.length;
        var loop = function () {
            if (index >= len) {
                return Promise.resolve(defaultValue);
            }
            var factory = promiseFactories[index++];
            var promise = Promise.resolve(factory());
            return promise.then(function (result) {
                if (shouldStop(result)) {
                    return Promise.resolve(result);
                }
                return loop();
            });
        };
        return loop();
    }
    exports.first = first;
    /**
     * A helper to queue N promises and run them all with a max degree of parallelism. The helper
     * ensures that at any time no more than M promises are running at the same time.
     */
    var Limiter = /** @class */ (function () {
        function Limiter(maxDegreeOfParalellism) {
            this.maxDegreeOfParalellism = maxDegreeOfParalellism;
            this.outstandingPromises = [];
            this.runningPromises = 0;
            this._onFinished = new event_1.Emitter();
        }
        Object.defineProperty(Limiter.prototype, "onFinished", {
            get: function () {
                return this._onFinished.event;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Limiter.prototype, "size", {
            get: function () {
                return this.runningPromises + this.outstandingPromises.length;
            },
            enumerable: true,
            configurable: true
        });
        Limiter.prototype.queue = function (factory) {
            var _this = this;
            return new winjs_base_1.TPromise(function (c, e) {
                _this.outstandingPromises.push({ factory: factory, c: c, e: e });
                _this.consume();
            });
        };
        Limiter.prototype.consume = function () {
            var _this = this;
            while (this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism) {
                var iLimitedTask = this.outstandingPromises.shift();
                this.runningPromises++;
                var promise = iLimitedTask.factory();
                promise.then(iLimitedTask.c, iLimitedTask.e);
                promise.then(function () { return _this.consumed(); }, function () { return _this.consumed(); });
            }
        };
        Limiter.prototype.consumed = function () {
            this.runningPromises--;
            if (this.outstandingPromises.length > 0) {
                this.consume();
            }
            else {
                this._onFinished.fire();
            }
        };
        Limiter.prototype.dispose = function () {
            this._onFinished.dispose();
        };
        return Limiter;
    }());
    exports.Limiter = Limiter;
    /**
     * A queue is handles one promise at a time and guarantees that at any time only one promise is executing.
     */
    var Queue = /** @class */ (function (_super) {
        __extends(Queue, _super);
        function Queue() {
            return _super.call(this, 1) || this;
        }
        return Queue;
    }(Limiter));
    exports.Queue = Queue;
    /**
     * A helper to organize queues per resource. The ResourceQueue makes sure to manage queues per resource
     * by disposing them once the queue is empty.
     */
    var ResourceQueue = /** @class */ (function () {
        function ResourceQueue() {
            this.queues = Object.create(null);
        }
        ResourceQueue.prototype.queueFor = function (resource) {
            var _this = this;
            var key = resource.toString();
            if (!this.queues[key]) {
                var queue_1 = new Queue();
                queue_1.onFinished(function () {
                    queue_1.dispose();
                    delete _this.queues[key];
                });
                this.queues[key] = queue_1;
            }
            return this.queues[key];
        };
        return ResourceQueue;
    }());
    exports.ResourceQueue = ResourceQueue;
    var TimeoutTimer = /** @class */ (function (_super) {
        __extends(TimeoutTimer, _super);
        function TimeoutTimer(runner, timeout) {
            var _this = _super.call(this) || this;
            _this._token = -1;
            if (typeof runner === 'function' && typeof timeout === 'number') {
                _this.setIfNotSet(runner, timeout);
            }
            return _this;
        }
        TimeoutTimer.prototype.dispose = function () {
            this.cancel();
            _super.prototype.dispose.call(this);
        };
        TimeoutTimer.prototype.cancel = function () {
            if (this._token !== -1) {
                clearTimeout(this._token);
                this._token = -1;
            }
        };
        TimeoutTimer.prototype.cancelAndSet = function (runner, timeout) {
            var _this = this;
            this.cancel();
            this._token = setTimeout(function () {
                _this._token = -1;
                runner();
            }, timeout);
        };
        TimeoutTimer.prototype.setIfNotSet = function (runner, timeout) {
            var _this = this;
            if (this._token !== -1) {
                // timer is already set
                return;
            }
            this._token = setTimeout(function () {
                _this._token = -1;
                runner();
            }, timeout);
        };
        return TimeoutTimer;
    }(lifecycle_1.Disposable));
    exports.TimeoutTimer = TimeoutTimer;
    var IntervalTimer = /** @class */ (function (_super) {
        __extends(IntervalTimer, _super);
        function IntervalTimer() {
            var _this = _super.call(this) || this;
            _this._token = -1;
            return _this;
        }
        IntervalTimer.prototype.dispose = function () {
            this.cancel();
            _super.prototype.dispose.call(this);
        };
        IntervalTimer.prototype.cancel = function () {
            if (this._token !== -1) {
                clearInterval(this._token);
                this._token = -1;
            }
        };
        IntervalTimer.prototype.cancelAndSet = function (runner, interval) {
            this.cancel();
            this._token = setInterval(function () {
                runner();
            }, interval);
        };
        return IntervalTimer;
    }(lifecycle_1.Disposable));
    exports.IntervalTimer = IntervalTimer;
    var RunOnceScheduler = /** @class */ (function () {
        function RunOnceScheduler(runner, timeout) {
            this.timeoutToken = -1;
            this.runner = runner;
            this.timeout = timeout;
            this.timeoutHandler = this.onTimeout.bind(this);
        }
        /**
         * Dispose RunOnceScheduler
         */
        RunOnceScheduler.prototype.dispose = function () {
            this.cancel();
            this.runner = null;
        };
        /**
         * Cancel current scheduled runner (if any).
         */
        RunOnceScheduler.prototype.cancel = function () {
            if (this.isScheduled()) {
                clearTimeout(this.timeoutToken);
                this.timeoutToken = -1;
            }
        };
        /**
         * Cancel previous runner (if any) & schedule a new runner.
         */
        RunOnceScheduler.prototype.schedule = function (delay) {
            if (delay === void 0) { delay = this.timeout; }
            this.cancel();
            this.timeoutToken = setTimeout(this.timeoutHandler, delay);
        };
        /**
         * Returns true if scheduled.
         */
        RunOnceScheduler.prototype.isScheduled = function () {
            return this.timeoutToken !== -1;
        };
        RunOnceScheduler.prototype.onTimeout = function () {
            this.timeoutToken = -1;
            if (this.runner) {
                this.doRun();
            }
        };
        RunOnceScheduler.prototype.doRun = function () {
            if (this.runner) {
                this.runner();
            }
        };
        return RunOnceScheduler;
    }());
    exports.RunOnceScheduler = RunOnceScheduler;
    var RunOnceWorker = /** @class */ (function (_super) {
        __extends(RunOnceWorker, _super);
        function RunOnceWorker(runner, timeout) {
            var _this = _super.call(this, runner, timeout) || this;
            _this.units = [];
            return _this;
        }
        RunOnceWorker.prototype.work = function (unit) {
            this.units.push(unit);
            if (!this.isScheduled()) {
                this.schedule();
            }
        };
        RunOnceWorker.prototype.doRun = function () {
            var units = this.units;
            this.units = [];
            if (this.runner) {
                this.runner(units);
            }
        };
        RunOnceWorker.prototype.dispose = function () {
            this.units = [];
            _super.prototype.dispose.call(this);
        };
        return RunOnceWorker;
    }(RunOnceScheduler));
    exports.RunOnceWorker = RunOnceWorker;
    function nfcall(fn) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new winjs_base_1.TPromise(function (c, e) { return fn.apply(void 0, args.concat([function (err, result) { return err ? e(err) : c(result); }])); });
    }
    exports.nfcall = nfcall;
    function ninvoke(thisArg, fn) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return new Promise(function (resolve, reject) { return fn.call.apply(fn, [thisArg].concat(args, [function (err, result) { return err ? reject(err) : resolve(result); }])); });
    }
    exports.ninvoke = ninvoke;
    (function () {
        if (typeof requestIdleCallback !== 'function' || typeof cancelIdleCallback !== 'function') {
            var dummyIdle_1 = Object.freeze({
                didTimeout: true,
                timeRemaining: function () { return 15; }
            });
            exports.runWhenIdle = function (runner, timeout) {
                if (timeout === void 0) { timeout = 0; }
                var handle = setTimeout(function () { return runner(dummyIdle_1); }, timeout);
                var disposed = false;
                return {
                    dispose: function () {
                        if (disposed) {
                            return;
                        }
                        disposed = true;
                        clearTimeout(handle);
                    }
                };
            };
        }
        else {
            exports.runWhenIdle = function (runner, timeout) {
                var handle = requestIdleCallback(runner, typeof timeout === 'number' ? { timeout: timeout } : undefined);
                var disposed = false;
                return {
                    dispose: function () {
                        if (disposed) {
                            return;
                        }
                        disposed = true;
                        cancelIdleCallback(handle);
                    }
                };
            };
        }
    })();
    /**
     * An implementation of the "idle-until-urgent"-strategy as introduced
     * here: https://philipwalton.com/articles/idle-until-urgent/
     */
    var IdleValue = /** @class */ (function () {
        function IdleValue(executor) {
            var _this = this;
            this._executor = function () {
                try {
                    _this._value = executor();
                }
                catch (err) {
                    _this._error = err;
                }
                finally {
                    _this._didRun = true;
                }
            };
            this._handle = exports.runWhenIdle(function () { return _this._executor(); });
        }
        IdleValue.prototype.dispose = function () {
            this._handle.dispose();
        };
        IdleValue.prototype.getValue = function () {
            if (!this._didRun) {
                this._handle.dispose();
                this._executor();
            }
            if (this._error) {
                throw this._error;
            }
            return this._value;
        };
        return IdleValue;
    }());
    exports.IdleValue = IdleValue;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//#endregion
//# sourceMappingURL=async.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shortcutEvent = Object.freeze(function (callback, context) {
        var handle = setTimeout(callback.bind(context), 0);
        return { dispose: function () { clearTimeout(handle); } };
    });
    var CancellationToken;
    (function (CancellationToken) {
        function isCancellationToken(thing) {
            if (thing === CancellationToken.None || thing === CancellationToken.Cancelled) {
                return true;
            }
            if (thing instanceof MutableToken) {
                return true;
            }
            if (!thing || typeof thing !== 'object') {
                return false;
            }
            return typeof thing.isCancellationRequested === 'boolean'
                && typeof thing.onCancellationRequested === 'function';
        }
        CancellationToken.isCancellationToken = isCancellationToken;
        CancellationToken.None = Object.freeze({
            isCancellationRequested: false,
            onCancellationRequested: event_1.Event.None
        });
        CancellationToken.Cancelled = Object.freeze({
            isCancellationRequested: true,
            onCancellationRequested: shortcutEvent
        });
    })(CancellationToken = exports.CancellationToken || (exports.CancellationToken = {}));
    var MutableToken = /** @class */ (function () {
        function MutableToken() {
            this._isCancelled = false;
            this._emitter = null;
        }
        MutableToken.prototype.cancel = function () {
            if (!this._isCancelled) {
                this._isCancelled = true;
                if (this._emitter) {
                    this._emitter.fire(undefined);
                    this.dispose();
                }
            }
        };
        Object.defineProperty(MutableToken.prototype, "isCancellationRequested", {
            get: function () {
                return this._isCancelled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MutableToken.prototype, "onCancellationRequested", {
            get: function () {
                if (this._isCancelled) {
                    return shortcutEvent;
                }
                if (!this._emitter) {
                    this._emitter = new event_1.Emitter();
                }
                return this._emitter.event;
            },
            enumerable: true,
            configurable: true
        });
        MutableToken.prototype.dispose = function () {
            if (this._emitter) {
                this._emitter.dispose();
                this._emitter = null;
            }
        };
        return MutableToken;
    }());
    var CancellationTokenSource = /** @class */ (function () {
        function CancellationTokenSource() {
        }
        Object.defineProperty(CancellationTokenSource.prototype, "token", {
            get: function () {
                if (!this._token) {
                    // be lazy and create the token only when
                    // actually needed
                    this._token = new MutableToken();
                }
                return this._token;
            },
            enumerable: true,
            configurable: true
        });
        CancellationTokenSource.prototype.cancel = function () {
            if (!this._token) {
                // save an object by returning the default
                // cancelled token when cancellation happens
                // before someone asks for the token
                this._token = CancellationToken.Cancelled;
            }
            else if (this._token instanceof MutableToken) {
                // actually cancel
                this._token.cancel();
            }
        };
        CancellationTokenSource.prototype.dispose = function () {
            if (!this._token) {
                // ensure to initialize with an empty token if we had none
                this._token = CancellationToken.None;
            }
            else if (this._token instanceof MutableToken) {
                // actually dispose
                this._token.dispose();
            }
        };
        return CancellationTokenSource;
    }());
    exports.CancellationTokenSource = CancellationTokenSource;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=cancellation.js.map

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The empty string.
     */
    exports.empty = '';
    function isFalsyOrWhitespace(str) {
        if (!str || typeof str !== 'string') {
            return true;
        }
        return str.trim().length === 0;
    }
    exports.isFalsyOrWhitespace = isFalsyOrWhitespace;
    /**
     * @returns the provided number with the given number of preceding zeros.
     */
    function pad(n, l, char) {
        if (char === void 0) { char = '0'; }
        var str = '' + n;
        var r = [str];
        for (var i = str.length; i < l; i++) {
            r.push(char);
        }
        return r.reverse().join('');
    }
    exports.pad = pad;
    var _formatRegexp = /{(\d+)}/g;
    /**
     * Helper to produce a string with a variable number of arguments. Insert variable segments
     * into the string using the {n} notation where N is the index of the argument following the string.
     * @param value string to which formatting is applied
     * @param args replacements for {n}-entries
     */
    function format(value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (args.length === 0) {
            return value;
        }
        return value.replace(_formatRegexp, function (match, group) {
            var idx = parseInt(group, 10);
            return isNaN(idx) || idx < 0 || idx >= args.length ?
                match :
                args[idx];
        });
    }
    exports.format = format;
    /**
     * Converts HTML characters inside the string to use entities instead. Makes the string safe from
     * being used e.g. in HTMLElement.innerHTML.
     */
    function escape(html) {
        return html.replace(/[<|>|&]/g, function (match) {
            switch (match) {
                case '<': return '&lt;';
                case '>': return '&gt;';
                case '&': return '&amp;';
                default: return match;
            }
        });
    }
    exports.escape = escape;
    /**
     * Escapes regular expression characters in a given string
     */
    function escapeRegExpCharacters(value) {
        return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, '\\$&');
    }
    exports.escapeRegExpCharacters = escapeRegExpCharacters;
    /**
     * Removes all occurrences of needle from the beginning and end of haystack.
     * @param haystack string to trim
     * @param needle the thing to trim (default is a blank)
     */
    function trim(haystack, needle) {
        if (needle === void 0) { needle = ' '; }
        var trimmed = ltrim(haystack, needle);
        return rtrim(trimmed, needle);
    }
    exports.trim = trim;
    /**
     * Removes all occurrences of needle from the beginning of haystack.
     * @param haystack string to trim
     * @param needle the thing to trim
     */
    function ltrim(haystack, needle) {
        if (!haystack || !needle) {
            return haystack;
        }
        var needleLen = needle.length;
        if (needleLen === 0 || haystack.length === 0) {
            return haystack;
        }
        var offset = 0;
        while (haystack.indexOf(needle, offset) === offset) {
            offset = offset + needleLen;
        }
        return haystack.substring(offset);
    }
    exports.ltrim = ltrim;
    /**
     * Removes all occurrences of needle from the end of haystack.
     * @param haystack string to trim
     * @param needle the thing to trim
     */
    function rtrim(haystack, needle) {
        if (!haystack || !needle) {
            return haystack;
        }
        var needleLen = needle.length, haystackLen = haystack.length;
        if (needleLen === 0 || haystackLen === 0) {
            return haystack;
        }
        var offset = haystackLen, idx = -1;
        while (true) {
            idx = haystack.lastIndexOf(needle, offset - 1);
            if (idx === -1 || idx + needleLen !== offset) {
                break;
            }
            if (idx === 0) {
                return '';
            }
            offset = idx;
        }
        return haystack.substring(0, offset);
    }
    exports.rtrim = rtrim;
    function convertSimple2RegExpPattern(pattern) {
        return pattern.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
    }
    exports.convertSimple2RegExpPattern = convertSimple2RegExpPattern;
    function stripWildcards(pattern) {
        return pattern.replace(/\*/g, '');
    }
    exports.stripWildcards = stripWildcards;
    /**
     * Determines if haystack starts with needle.
     */
    function startsWith(haystack, needle) {
        if (haystack.length < needle.length) {
            return false;
        }
        if (haystack === needle) {
            return true;
        }
        for (var i = 0; i < needle.length; i++) {
            if (haystack[i] !== needle[i]) {
                return false;
            }
        }
        return true;
    }
    exports.startsWith = startsWith;
    /**
     * Determines if haystack ends with needle.
     */
    function endsWith(haystack, needle) {
        var diff = haystack.length - needle.length;
        if (diff > 0) {
            return haystack.indexOf(needle, diff) === diff;
        }
        else if (diff === 0) {
            return haystack === needle;
        }
        else {
            return false;
        }
    }
    exports.endsWith = endsWith;
    function createRegExp(searchString, isRegex, options) {
        if (options === void 0) { options = {}; }
        if (!searchString) {
            throw new Error('Cannot create regex from empty string');
        }
        if (!isRegex) {
            searchString = escapeRegExpCharacters(searchString);
        }
        if (options.wholeWord) {
            if (!/\B/.test(searchString.charAt(0))) {
                searchString = '\\b' + searchString;
            }
            if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
                searchString = searchString + '\\b';
            }
        }
        var modifiers = '';
        if (options.global) {
            modifiers += 'g';
        }
        if (!options.matchCase) {
            modifiers += 'i';
        }
        if (options.multiline) {
            modifiers += 'm';
        }
        return new RegExp(searchString, modifiers);
    }
    exports.createRegExp = createRegExp;
    function regExpLeadsToEndlessLoop(regexp) {
        // Exit early if it's one of these special cases which are meant to match
        // against an empty string
        if (regexp.source === '^' || regexp.source === '^$' || regexp.source === '$' || regexp.source === '^\\s*$') {
            return false;
        }
        // We check against an empty string. If the regular expression doesn't advance
        // (e.g. ends in an endless loop) it will match an empty string.
        var match = regexp.exec('');
        return !!(match && regexp.lastIndex === 0);
    }
    exports.regExpLeadsToEndlessLoop = regExpLeadsToEndlessLoop;
    function regExpContainsBackreference(regexpValue) {
        return !!regexpValue.match(/([^\\]|^)(\\\\)*\\\d+/);
    }
    exports.regExpContainsBackreference = regExpContainsBackreference;
    /**
     * Returns first index of the string that is not whitespace.
     * If string is empty or contains only whitespaces, returns -1
     */
    function firstNonWhitespaceIndex(str) {
        for (var i = 0, len = str.length; i < len; i++) {
            var chCode = str.charCodeAt(i);
            if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
                return i;
            }
        }
        return -1;
    }
    exports.firstNonWhitespaceIndex = firstNonWhitespaceIndex;
    /**
     * Returns the leading whitespace of the string.
     * If the string contains only whitespaces, returns entire string
     */
    function getLeadingWhitespace(str, start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = str.length; }
        for (var i = start; i < end; i++) {
            var chCode = str.charCodeAt(i);
            if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
                return str.substring(start, i);
            }
        }
        return str.substring(start, end);
    }
    exports.getLeadingWhitespace = getLeadingWhitespace;
    /**
     * Returns last index of the string that is not whitespace.
     * If string is empty or contains only whitespaces, returns -1
     */
    function lastNonWhitespaceIndex(str, startIndex) {
        if (startIndex === void 0) { startIndex = str.length - 1; }
        for (var i = startIndex; i >= 0; i--) {
            var chCode = str.charCodeAt(i);
            if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
                return i;
            }
        }
        return -1;
    }
    exports.lastNonWhitespaceIndex = lastNonWhitespaceIndex;
    function compare(a, b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else {
            return 0;
        }
    }
    exports.compare = compare;
    function compareIgnoreCase(a, b) {
        var len = Math.min(a.length, b.length);
        for (var i = 0; i < len; i++) {
            var codeA = a.charCodeAt(i);
            var codeB = b.charCodeAt(i);
            if (codeA === codeB) {
                // equal
                continue;
            }
            if (isUpperAsciiLetter(codeA)) {
                codeA += 32;
            }
            if (isUpperAsciiLetter(codeB)) {
                codeB += 32;
            }
            var diff = codeA - codeB;
            if (diff === 0) {
                // equal -> ignoreCase
                continue;
            }
            else if (isLowerAsciiLetter(codeA) && isLowerAsciiLetter(codeB)) {
                //
                return diff;
            }
            else {
                return compare(a.toLowerCase(), b.toLowerCase());
            }
        }
        if (a.length < b.length) {
            return -1;
        }
        else if (a.length > b.length) {
            return 1;
        }
        else {
            return 0;
        }
    }
    exports.compareIgnoreCase = compareIgnoreCase;
    function isLowerAsciiLetter(code) {
        return code >= 97 /* a */ && code <= 122 /* z */;
    }
    exports.isLowerAsciiLetter = isLowerAsciiLetter;
    function isUpperAsciiLetter(code) {
        return code >= 65 /* A */ && code <= 90 /* Z */;
    }
    exports.isUpperAsciiLetter = isUpperAsciiLetter;
    function isAsciiLetter(code) {
        return isLowerAsciiLetter(code) || isUpperAsciiLetter(code);
    }
    function equalsIgnoreCase(a, b) {
        var len1 = a ? a.length : 0;
        var len2 = b ? b.length : 0;
        if (len1 !== len2) {
            return false;
        }
        return doEqualsIgnoreCase(a, b);
    }
    exports.equalsIgnoreCase = equalsIgnoreCase;
    function doEqualsIgnoreCase(a, b, stopAt) {
        if (stopAt === void 0) { stopAt = a.length; }
        if (typeof a !== 'string' || typeof b !== 'string') {
            return false;
        }
        for (var i = 0; i < stopAt; i++) {
            var codeA = a.charCodeAt(i);
            var codeB = b.charCodeAt(i);
            if (codeA === codeB) {
                continue;
            }
            // a-z A-Z
            if (isAsciiLetter(codeA) && isAsciiLetter(codeB)) {
                var diff = Math.abs(codeA - codeB);
                if (diff !== 0 && diff !== 32) {
                    return false;
                }
            }
            // Any other charcode
            else {
                if (String.fromCharCode(codeA).toLowerCase() !== String.fromCharCode(codeB).toLowerCase()) {
                    return false;
                }
            }
        }
        return true;
    }
    function startsWithIgnoreCase(str, candidate) {
        var candidateLength = candidate.length;
        if (candidate.length > str.length) {
            return false;
        }
        return doEqualsIgnoreCase(str, candidate, candidateLength);
    }
    exports.startsWithIgnoreCase = startsWithIgnoreCase;
    /**
     * @returns the length of the common prefix of the two strings.
     */
    function commonPrefixLength(a, b) {
        var i, len = Math.min(a.length, b.length);
        for (i = 0; i < len; i++) {
            if (a.charCodeAt(i) !== b.charCodeAt(i)) {
                return i;
            }
        }
        return len;
    }
    exports.commonPrefixLength = commonPrefixLength;
    /**
     * @returns the length of the common suffix of the two strings.
     */
    function commonSuffixLength(a, b) {
        var i, len = Math.min(a.length, b.length);
        var aLastIndex = a.length - 1;
        var bLastIndex = b.length - 1;
        for (i = 0; i < len; i++) {
            if (a.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
                return i;
            }
        }
        return len;
    }
    exports.commonSuffixLength = commonSuffixLength;
    function substrEquals(a, aStart, aEnd, b, bStart, bEnd) {
        while (aStart < aEnd && bStart < bEnd) {
            if (a[aStart] !== b[bStart]) {
                return false;
            }
            aStart += 1;
            bStart += 1;
        }
        return true;
    }
    /**
     * Return the overlap between the suffix of `a` and the prefix of `b`.
     * For instance `overlap("foobar", "arr, I'm a pirate") === 2`.
     */
    function overlap(a, b) {
        var aEnd = a.length;
        var bEnd = b.length;
        var aStart = aEnd - bEnd;
        if (aStart === 0) {
            return a === b ? aEnd : 0;
        }
        else if (aStart < 0) {
            bEnd += aStart;
            aStart = 0;
        }
        while (aStart < aEnd && bEnd > 0) {
            if (substrEquals(a, aStart, aEnd, b, 0, bEnd)) {
                return bEnd;
            }
            bEnd -= 1;
            aStart += 1;
        }
        return 0;
    }
    exports.overlap = overlap;
    // --- unicode
    // http://en.wikipedia.org/wiki/Surrogate_pair
    // Returns the code point starting at a specified index in a string
    // Code points U+0000 to U+D7FF and U+E000 to U+FFFF are represented on a single character
    // Code points U+10000 to U+10FFFF are represented on two consecutive characters
    //export function getUnicodePoint(str:string, index:number, len:number):number {
    //	let chrCode = str.charCodeAt(index);
    //	if (0xD800 <= chrCode && chrCode <= 0xDBFF && index + 1 < len) {
    //		let nextChrCode = str.charCodeAt(index + 1);
    //		if (0xDC00 <= nextChrCode && nextChrCode <= 0xDFFF) {
    //			return (chrCode - 0xD800) << 10 + (nextChrCode - 0xDC00) + 0x10000;
    //		}
    //	}
    //	return chrCode;
    //}
    function isHighSurrogate(charCode) {
        return (0xD800 <= charCode && charCode <= 0xDBFF);
    }
    exports.isHighSurrogate = isHighSurrogate;
    function isLowSurrogate(charCode) {
        return (0xDC00 <= charCode && charCode <= 0xDFFF);
    }
    exports.isLowSurrogate = isLowSurrogate;
    /**
     * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-rtl-test.js
     */
    var CONTAINS_RTL = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
    /**
     * Returns true if `str` contains any Unicode character that is classified as "R" or "AL".
     */
    function containsRTL(str) {
        return CONTAINS_RTL.test(str);
    }
    exports.containsRTL = containsRTL;
    /**
     * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-emoji-test.js
     */
    var CONTAINS_EMOJI = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
    function containsEmoji(str) {
        return CONTAINS_EMOJI.test(str);
    }
    exports.containsEmoji = containsEmoji;
    var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
    /**
     * Returns true if `str` contains only basic ASCII characters in the range 32 - 126 (including 32 and 126) or \n, \r, \t
     */
    function isBasicASCII(str) {
        return IS_BASIC_ASCII.test(str);
    }
    exports.isBasicASCII = isBasicASCII;
    function containsFullWidthCharacter(str) {
        for (var i = 0, len = str.length; i < len; i++) {
            if (isFullWidthCharacter(str.charCodeAt(i))) {
                return true;
            }
        }
        return false;
    }
    exports.containsFullWidthCharacter = containsFullWidthCharacter;
    function isFullWidthCharacter(charCode) {
        // Do a cheap trick to better support wrapping of wide characters, treat them as 2 columns
        // http://jrgraphix.net/research/unicode_blocks.php
        //          2E80 — 2EFF   CJK Radicals Supplement
        //          2F00 — 2FDF   Kangxi Radicals
        //          2FF0 — 2FFF   Ideographic Description Characters
        //          3000 — 303F   CJK Symbols and Punctuation
        //          3040 — 309F   Hiragana
        //          30A0 — 30FF   Katakana
        //          3100 — 312F   Bopomofo
        //          3130 — 318F   Hangul Compatibility Jamo
        //          3190 — 319F   Kanbun
        //          31A0 — 31BF   Bopomofo Extended
        //          31F0 — 31FF   Katakana Phonetic Extensions
        //          3200 — 32FF   Enclosed CJK Letters and Months
        //          3300 — 33FF   CJK Compatibility
        //          3400 — 4DBF   CJK Unified Ideographs Extension A
        //          4DC0 — 4DFF   Yijing Hexagram Symbols
        //          4E00 — 9FFF   CJK Unified Ideographs
        //          A000 — A48F   Yi Syllables
        //          A490 — A4CF   Yi Radicals
        //          AC00 — D7AF   Hangul Syllables
        // [IGNORE] D800 — DB7F   High Surrogates
        // [IGNORE] DB80 — DBFF   High Private Use Surrogates
        // [IGNORE] DC00 — DFFF   Low Surrogates
        // [IGNORE] E000 — F8FF   Private Use Area
        //          F900 — FAFF   CJK Compatibility Ideographs
        // [IGNORE] FB00 — FB4F   Alphabetic Presentation Forms
        // [IGNORE] FB50 — FDFF   Arabic Presentation Forms-A
        // [IGNORE] FE00 — FE0F   Variation Selectors
        // [IGNORE] FE20 — FE2F   Combining Half Marks
        // [IGNORE] FE30 — FE4F   CJK Compatibility Forms
        // [IGNORE] FE50 — FE6F   Small Form Variants
        // [IGNORE] FE70 — FEFF   Arabic Presentation Forms-B
        //          FF00 — FFEF   Halfwidth and Fullwidth Forms
        //               [https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms]
        //               of which FF01 - FF5E fullwidth ASCII of 21 to 7E
        // [IGNORE]    and FF65 - FFDC halfwidth of Katakana and Hangul
        // [IGNORE] FFF0 — FFFF   Specials
        charCode = +charCode; // @perf
        return ((charCode >= 0x2E80 && charCode <= 0xD7AF)
            || (charCode >= 0xF900 && charCode <= 0xFAFF)
            || (charCode >= 0xFF01 && charCode <= 0xFF5E));
    }
    exports.isFullWidthCharacter = isFullWidthCharacter;
    /**
     * Given a string and a max length returns a shorted version. Shorting
     * happens at favorable positions - such as whitespace or punctuation characters.
     */
    function lcut(text, n) {
        if (text.length < n) {
            return text;
        }
        var re = /\b/g;
        var i = 0;
        while (re.test(text)) {
            if (text.length - re.lastIndex < n) {
                break;
            }
            i = re.lastIndex;
            re.lastIndex += 1;
        }
        return text.substring(i).replace(/^\s/, exports.empty);
    }
    exports.lcut = lcut;
    // Escape codes
    // http://en.wikipedia.org/wiki/ANSI_escape_code
    var EL = /\x1B\x5B[12]?K/g; // Erase in line
    var COLOR_START = /\x1b\[\d+m/g; // Color
    var COLOR_END = /\x1b\[0?m/g; // Color
    function removeAnsiEscapeCodes(str) {
        if (str) {
            str = str.replace(EL, '');
            str = str.replace(COLOR_START, '');
            str = str.replace(COLOR_END, '');
        }
        return str;
    }
    exports.removeAnsiEscapeCodes = removeAnsiEscapeCodes;
    // -- UTF-8 BOM
    exports.UTF8_BOM_CHARACTER = String.fromCharCode(65279 /* UTF8_BOM */);
    function startsWithUTF8BOM(str) {
        return !!(str && str.length > 0 && str.charCodeAt(0) === 65279 /* UTF8_BOM */);
    }
    exports.startsWithUTF8BOM = startsWithUTF8BOM;
    function stripUTF8BOM(str) {
        return startsWithUTF8BOM(str) ? str.substr(1) : str;
    }
    exports.stripUTF8BOM = stripUTF8BOM;
    function safeBtoa(str) {
        return btoa(encodeURIComponent(str)); // we use encodeURIComponent because btoa fails for non Latin 1 values
    }
    exports.safeBtoa = safeBtoa;
    function repeat(s, count) {
        var result = '';
        for (var i = 0; i < count; i++) {
            result += s;
        }
        return result;
    }
    exports.repeat = repeat;
    /**
     * Checks if the characters of the provided query string are included in the
     * target string. The characters do not have to be contiguous within the string.
     */
    function fuzzyContains(target, query) {
        if (!target || !query) {
            return false; // return early if target or query are undefined
        }
        if (target.length < query.length) {
            return false; // impossible for query to be contained in target
        }
        var queryLen = query.length;
        var targetLower = target.toLowerCase();
        var index = 0;
        var lastIndexOf = -1;
        while (index < queryLen) {
            var indexOf = targetLower.indexOf(query[index], lastIndexOf + 1);
            if (indexOf < 0) {
                return false;
            }
            lastIndexOf = indexOf;
            index++;
        }
        return true;
    }
    exports.fuzzyContains = fuzzyContains;
    function containsUppercaseCharacter(target, ignoreEscapedChars) {
        if (ignoreEscapedChars === void 0) { ignoreEscapedChars = false; }
        if (!target) {
            return false;
        }
        if (ignoreEscapedChars) {
            target = target.replace(/\\./g, '');
        }
        return target.toLowerCase() !== target;
    }
    exports.containsUppercaseCharacter = containsUppercaseCharacter;
    function uppercaseFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    exports.uppercaseFirstLetter = uppercaseFirstLetter;
    function getNLines(str, n) {
        if (n === void 0) { n = 1; }
        if (n === 0) {
            return '';
        }
        var idx = -1;
        do {
            idx = str.indexOf('\n', idx + 1);
            n--;
        } while (n > 0 && idx >= 0);
        return idx >= 0 ?
            str.substr(0, idx) :
            str;
    }
    exports.getNLines = getNLines;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=strings.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(10), __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, platform_1, strings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The forward slash path separator.
     */
    exports.sep = '/';
    /**
     * The native path separator depending on the OS.
     */
    exports.nativeSep = platform_1.isWindows ? '\\' : '/';
    /**
     * @param path the path to get the dirname from
     * @param separator the separator to use
     * @returns the directory name of a path.
     *
     */
    function dirname(path, separator) {
        if (separator === void 0) { separator = exports.nativeSep; }
        var idx = ~path.lastIndexOf('/') || ~path.lastIndexOf('\\');
        if (idx === 0) {
            return '.';
        }
        else if (~idx === 0) {
            return path[0];
        }
        else if (~idx === path.length - 1) {
            return dirname(path.substring(0, path.length - 1));
        }
        else {
            var res = path.substring(0, ~idx);
            if (platform_1.isWindows && res[res.length - 1] === ':') {
                res += separator; // make sure drive letters end with backslash
            }
            return res;
        }
    }
    exports.dirname = dirname;
    /**
     * @returns the base name of a path.
     */
    function basename(path) {
        var idx = ~path.lastIndexOf('/') || ~path.lastIndexOf('\\');
        if (idx === 0) {
            return path;
        }
        else if (~idx === path.length - 1) {
            return basename(path.substring(0, path.length - 1));
        }
        else {
            return path.substr(~idx + 1);
        }
    }
    exports.basename = basename;
    /**
     * @returns `.far` from `boo.far` or the empty string.
     */
    function extname(path) {
        path = basename(path);
        var idx = ~path.lastIndexOf('.');
        return idx ? path.substring(~idx) : '';
    }
    exports.extname = extname;
    var _posixBadPath = /(\/\.\.?\/)|(\/\.\.?)$|^(\.\.?\/)|(\/\/+)|(\\)/;
    var _winBadPath = /(\\\.\.?\\)|(\\\.\.?)$|^(\.\.?\\)|(\\\\+)|(\/)/;
    function _isNormal(path, win) {
        return win
            ? !_winBadPath.test(path)
            : !_posixBadPath.test(path);
    }
    function normalize(path, toOSPath) {
        if (path === null || path === void 0) {
            return path;
        }
        var len = path.length;
        if (len === 0) {
            return '.';
        }
        var wantsBackslash = !!(platform_1.isWindows && toOSPath);
        if (_isNormal(path, wantsBackslash)) {
            return path;
        }
        var sep = wantsBackslash ? '\\' : '/';
        var root = getRoot(path, sep);
        // skip the root-portion of the path
        var start = root.length;
        var skip = false;
        var res = '';
        for (var end = root.length; end <= len; end++) {
            // either at the end or at a path-separator character
            if (end === len || path.charCodeAt(end) === 47 /* Slash */ || path.charCodeAt(end) === 92 /* Backslash */) {
                if (streql(path, start, end, '..')) {
                    // skip current and remove parent (if there is already something)
                    var prev_start = res.lastIndexOf(sep);
                    var prev_part = res.slice(prev_start + 1);
                    if ((root || prev_part.length > 0) && prev_part !== '..') {
                        res = prev_start === -1 ? '' : res.slice(0, prev_start);
                        skip = true;
                    }
                }
                else if (streql(path, start, end, '.') && (root || res || end < len - 1)) {
                    // skip current (if there is already something or if there is more to come)
                    skip = true;
                }
                if (!skip) {
                    var part = path.slice(start, end);
                    if (res !== '' && res[res.length - 1] !== sep) {
                        res += sep;
                    }
                    res += part;
                }
                start = end + 1;
                skip = false;
            }
        }
        return root + res;
    }
    exports.normalize = normalize;
    function streql(value, start, end, other) {
        return start + other.length === end && value.indexOf(other, start) === start;
    }
    /**
     * Computes the _root_ this path, like `getRoot('c:\files') === c:\`,
     * `getRoot('files:///files/path') === files:///`,
     * or `getRoot('\\server\shares\path') === \\server\shares\`
     */
    function getRoot(path, sep) {
        if (sep === void 0) { sep = '/'; }
        if (!path) {
            return '';
        }
        var len = path.length;
        var code = path.charCodeAt(0);
        if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
            code = path.charCodeAt(1);
            if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                // UNC candidate \\localhost\shares\ddd
                //               ^^^^^^^^^^^^^^^^^^^
                code = path.charCodeAt(2);
                if (code !== 47 /* Slash */ && code !== 92 /* Backslash */) {
                    var pos_1 = 3;
                    var start = pos_1;
                    for (; pos_1 < len; pos_1++) {
                        code = path.charCodeAt(pos_1);
                        if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                            break;
                        }
                    }
                    code = path.charCodeAt(pos_1 + 1);
                    if (start !== pos_1 && code !== 47 /* Slash */ && code !== 92 /* Backslash */) {
                        pos_1 += 1;
                        for (; pos_1 < len; pos_1++) {
                            code = path.charCodeAt(pos_1);
                            if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                                return path.slice(0, pos_1 + 1) // consume this separator
                                    .replace(/[\\/]/g, sep);
                            }
                        }
                    }
                }
            }
            // /user/far
            // ^
            return sep;
        }
        else if ((code >= 65 /* A */ && code <= 90 /* Z */) || (code >= 97 /* a */ && code <= 122 /* z */)) {
            // check for windows drive letter c:\ or c:
            if (path.charCodeAt(1) === 58 /* Colon */) {
                code = path.charCodeAt(2);
                if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                    // C:\fff
                    // ^^^
                    return path.slice(0, 2) + sep;
                }
                else {
                    // C:
                    // ^^
                    return path.slice(0, 2);
                }
            }
        }
        // check for URI
        // scheme://authority/path
        // ^^^^^^^^^^^^^^^^^^^
        var pos = path.indexOf('://');
        if (pos !== -1) {
            pos += 3; // 3 -> "://".length
            for (; pos < len; pos++) {
                code = path.charCodeAt(pos);
                if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                    return path.slice(0, pos + 1); // consume this separator
                }
            }
        }
        return '';
    }
    exports.getRoot = getRoot;
    exports.join = function () {
        // Not using a function with var-args because of how TS compiles
        // them to JS - it would result in 2*n runtime cost instead
        // of 1*n, where n is parts.length.
        var value = '';
        for (var i = 0; i < arguments.length; i++) {
            var part = arguments[i];
            if (i > 0) {
                // add the separater between two parts unless
                // there already is one
                var last = value.charCodeAt(value.length - 1);
                if (last !== 47 /* Slash */ && last !== 92 /* Backslash */) {
                    var next = part.charCodeAt(0);
                    if (next !== 47 /* Slash */ && next !== 92 /* Backslash */) {
                        value += exports.sep;
                    }
                }
            }
            value += part;
        }
        return normalize(value);
    };
    /**
     * Check if the path follows this pattern: `\\hostname\sharename`.
     *
     * @see https://msdn.microsoft.com/en-us/library/gg465305.aspx
     * @return A boolean indication if the path is a UNC path, on none-windows
     * always false.
     */
    function isUNC(path) {
        if (!platform_1.isWindows) {
            // UNC is a windows concept
            return false;
        }
        if (!path || path.length < 5) {
            // at least \\a\b
            return false;
        }
        var code = path.charCodeAt(0);
        if (code !== 92 /* Backslash */) {
            return false;
        }
        code = path.charCodeAt(1);
        if (code !== 92 /* Backslash */) {
            return false;
        }
        var pos = 2;
        var start = pos;
        for (; pos < path.length; pos++) {
            code = path.charCodeAt(pos);
            if (code === 92 /* Backslash */) {
                break;
            }
        }
        if (start === pos) {
            return false;
        }
        code = path.charCodeAt(pos + 1);
        if (isNaN(code) || code === 92 /* Backslash */) {
            return false;
        }
        return true;
    }
    exports.isUNC = isUNC;
    // Reference: https://en.wikipedia.org/wiki/Filename
    var INVALID_FILE_CHARS = platform_1.isWindows ? /[\\/:\*\?"<>\|]/g : /[\\/]/g;
    var WINDOWS_FORBIDDEN_NAMES = /^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])$/i;
    function isValidBasename(name) {
        if (!name || name.length === 0 || /^\s+$/.test(name)) {
            return false; // require a name that is not just whitespace
        }
        INVALID_FILE_CHARS.lastIndex = 0; // the holy grail of software development
        if (INVALID_FILE_CHARS.test(name)) {
            return false; // check for certain invalid file characters
        }
        if (platform_1.isWindows && WINDOWS_FORBIDDEN_NAMES.test(name)) {
            return false; // check for certain invalid file names
        }
        if (name === '.' || name === '..') {
            return false; // check for reserved values
        }
        if (platform_1.isWindows && name[name.length - 1] === '.') {
            return false; // Windows: file cannot end with a "."
        }
        if (platform_1.isWindows && name.length !== name.trim().length) {
            return false; // Windows: file cannot end with a whitespace
        }
        return true;
    }
    exports.isValidBasename = isValidBasename;
    function isEqual(pathA, pathB, ignoreCase) {
        var identityEquals = (pathA === pathB);
        if (!ignoreCase || identityEquals) {
            return identityEquals;
        }
        if (!pathA || !pathB) {
            return false;
        }
        return strings_1.equalsIgnoreCase(pathA, pathB);
    }
    exports.isEqual = isEqual;
    function isEqualOrParent(path, candidate, ignoreCase, separator) {
        if (separator === void 0) { separator = exports.nativeSep; }
        if (path === candidate) {
            return true;
        }
        if (!path || !candidate) {
            return false;
        }
        if (candidate.length > path.length) {
            return false;
        }
        if (ignoreCase) {
            var beginsWith = strings_1.startsWithIgnoreCase(path, candidate);
            if (!beginsWith) {
                return false;
            }
            if (candidate.length === path.length) {
                return true; // same path, different casing
            }
            var sepOffset = candidate.length;
            if (candidate.charAt(candidate.length - 1) === separator) {
                sepOffset--; // adjust the expected sep offset in case our candidate already ends in separator character
            }
            return path.charAt(sepOffset) === separator;
        }
        if (candidate.charAt(candidate.length - 1) !== separator) {
            candidate += separator;
        }
        return path.indexOf(candidate) === 0;
    }
    exports.isEqualOrParent = isEqualOrParent;
    /**
     * Adapted from Node's path.isAbsolute functions
     */
    function isAbsolute(path) {
        return platform_1.isWindows ?
            isAbsolute_win32(path) :
            isAbsolute_posix(path);
    }
    exports.isAbsolute = isAbsolute;
    function isAbsolute_win32(path) {
        if (!path) {
            return false;
        }
        var char0 = path.charCodeAt(0);
        if (char0 === 47 /* Slash */ || char0 === 92 /* Backslash */) {
            return true;
        }
        else if ((char0 >= 65 /* A */ && char0 <= 90 /* Z */) || (char0 >= 97 /* a */ && char0 <= 122 /* z */)) {
            if (path.length > 2 && path.charCodeAt(1) === 58 /* Colon */) {
                var char2 = path.charCodeAt(2);
                if (char2 === 47 /* Slash */ || char2 === 92 /* Backslash */) {
                    return true;
                }
            }
        }
        return false;
    }
    exports.isAbsolute_win32 = isAbsolute_win32;
    function isAbsolute_posix(path) {
        return !!(path && path.charCodeAt(0) === 47 /* Slash */);
    }
    exports.isAbsolute_posix = isAbsolute_posix;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=paths.js.map

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, uri_1, iterator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function values(forEachable) {
        var result = [];
        forEachable.forEach(function (value) { return result.push(value); });
        return result;
    }
    exports.values = values;
    function keys(map) {
        var result = [];
        map.forEach(function (value, key) { return result.push(key); });
        return result;
    }
    exports.keys = keys;
    function getOrSet(map, key, value) {
        var result = map.get(key);
        if (result === void 0) {
            result = value;
            map.set(key, result);
        }
        return result;
    }
    exports.getOrSet = getOrSet;
    function mapToString(map) {
        var entries = [];
        map.forEach(function (value, key) {
            entries.push(key + " => " + value);
        });
        return "Map(" + map.size + ") {" + entries.join(', ') + "}";
    }
    exports.mapToString = mapToString;
    function setToString(set) {
        var entries = [];
        set.forEach(function (value) {
            entries.push(value);
        });
        return "Set(" + set.size + ") {" + entries.join(', ') + "}";
    }
    exports.setToString = setToString;
    var StringIterator = /** @class */ (function () {
        function StringIterator() {
            this._value = '';
            this._pos = 0;
        }
        StringIterator.prototype.reset = function (key) {
            this._value = key;
            this._pos = 0;
            return this;
        };
        StringIterator.prototype.next = function () {
            this._pos += 1;
            return this;
        };
        StringIterator.prototype.hasNext = function () {
            return this._pos < this._value.length - 1;
        };
        StringIterator.prototype.cmp = function (a) {
            var aCode = a.charCodeAt(0);
            var thisCode = this._value.charCodeAt(this._pos);
            return aCode - thisCode;
        };
        StringIterator.prototype.value = function () {
            return this._value[this._pos];
        };
        return StringIterator;
    }());
    exports.StringIterator = StringIterator;
    var PathIterator = /** @class */ (function () {
        function PathIterator() {
        }
        PathIterator.prototype.reset = function (key) {
            this._value = key.replace(/\\$|\/$/, '');
            this._from = 0;
            this._to = 0;
            return this.next();
        };
        PathIterator.prototype.hasNext = function () {
            return this._to < this._value.length;
        };
        PathIterator.prototype.next = function () {
            // this._data = key.split(/[\\/]/).filter(s => !!s);
            this._from = this._to;
            var justSeps = true;
            for (; this._to < this._value.length; this._to++) {
                var ch = this._value.charCodeAt(this._to);
                if (ch === 47 /* Slash */ || ch === 92 /* Backslash */) {
                    if (justSeps) {
                        this._from++;
                    }
                    else {
                        break;
                    }
                }
                else {
                    justSeps = false;
                }
            }
            return this;
        };
        PathIterator.prototype.cmp = function (a) {
            var aPos = 0;
            var aLen = a.length;
            var thisPos = this._from;
            while (aPos < aLen && thisPos < this._to) {
                var cmp = a.charCodeAt(aPos) - this._value.charCodeAt(thisPos);
                if (cmp !== 0) {
                    return cmp;
                }
                aPos += 1;
                thisPos += 1;
            }
            if (aLen === this._to - this._from) {
                return 0;
            }
            else if (aPos < aLen) {
                return -1;
            }
            else {
                return 1;
            }
        };
        PathIterator.prototype.value = function () {
            return this._value.substring(this._from, this._to);
        };
        return PathIterator;
    }());
    exports.PathIterator = PathIterator;
    var TernarySearchTreeNode = /** @class */ (function () {
        function TernarySearchTreeNode() {
        }
        TernarySearchTreeNode.prototype.isEmpty = function () {
            return !this.left && !this.mid && !this.right && !this.value;
        };
        return TernarySearchTreeNode;
    }());
    var TernarySearchTree = /** @class */ (function () {
        function TernarySearchTree(segments) {
            this._iter = segments;
        }
        TernarySearchTree.forPaths = function () {
            return new TernarySearchTree(new PathIterator());
        };
        TernarySearchTree.forStrings = function () {
            return new TernarySearchTree(new StringIterator());
        };
        TernarySearchTree.prototype.clear = function () {
            this._root = undefined;
        };
        TernarySearchTree.prototype.set = function (key, element) {
            var iter = this._iter.reset(key);
            var node;
            if (!this._root) {
                this._root = new TernarySearchTreeNode();
                this._root.segment = iter.value();
            }
            node = this._root;
            while (true) {
                var val = iter.cmp(node.segment);
                if (val > 0) {
                    // left
                    if (!node.left) {
                        node.left = new TernarySearchTreeNode();
                        node.left.segment = iter.value();
                    }
                    node = node.left;
                }
                else if (val < 0) {
                    // right
                    if (!node.right) {
                        node.right = new TernarySearchTreeNode();
                        node.right.segment = iter.value();
                    }
                    node = node.right;
                }
                else if (iter.hasNext()) {
                    // mid
                    iter.next();
                    if (!node.mid) {
                        node.mid = new TernarySearchTreeNode();
                        node.mid.segment = iter.value();
                    }
                    node = node.mid;
                }
                else {
                    break;
                }
            }
            var oldElement = node.value;
            node.value = element;
            node.key = key;
            return oldElement;
        };
        TernarySearchTree.prototype.get = function (key) {
            var iter = this._iter.reset(key);
            var node = this._root;
            while (node) {
                var val = iter.cmp(node.segment);
                if (val > 0) {
                    // left
                    node = node.left;
                }
                else if (val < 0) {
                    // right
                    node = node.right;
                }
                else if (iter.hasNext()) {
                    // mid
                    iter.next();
                    node = node.mid;
                }
                else {
                    break;
                }
            }
            return node ? node.value : undefined;
        };
        TernarySearchTree.prototype.delete = function (key) {
            var iter = this._iter.reset(key);
            var stack = [];
            var node = this._root;
            // find and unset node
            while (node) {
                var val = iter.cmp(node.segment);
                if (val > 0) {
                    // left
                    stack.push([1, node]);
                    node = node.left;
                }
                else if (val < 0) {
                    // right
                    stack.push([-1, node]);
                    node = node.right;
                }
                else if (iter.hasNext()) {
                    // mid
                    iter.next();
                    stack.push([0, node]);
                    node = node.mid;
                }
                else {
                    // remove element
                    node.value = undefined;
                    // clean up empty nodes
                    while (stack.length > 0 && node.isEmpty()) {
                        var _a = stack.pop(), dir = _a[0], parent_1 = _a[1];
                        switch (dir) {
                            case 1:
                                parent_1.left = undefined;
                                break;
                            case 0:
                                parent_1.mid = undefined;
                                break;
                            case -1:
                                parent_1.right = undefined;
                                break;
                        }
                        node = parent_1;
                    }
                    break;
                }
            }
        };
        TernarySearchTree.prototype.findSubstr = function (key) {
            var iter = this._iter.reset(key);
            var node = this._root;
            var candidate = undefined;
            while (node) {
                var val = iter.cmp(node.segment);
                if (val > 0) {
                    // left
                    node = node.left;
                }
                else if (val < 0) {
                    // right
                    node = node.right;
                }
                else if (iter.hasNext()) {
                    // mid
                    iter.next();
                    candidate = node.value || candidate;
                    node = node.mid;
                }
                else {
                    break;
                }
            }
            return node && node.value || candidate;
        };
        TernarySearchTree.prototype.findSuperstr = function (key) {
            var iter = this._iter.reset(key);
            var node = this._root;
            while (node) {
                var val = iter.cmp(node.segment);
                if (val > 0) {
                    // left
                    node = node.left;
                }
                else if (val < 0) {
                    // right
                    node = node.right;
                }
                else if (iter.hasNext()) {
                    // mid
                    iter.next();
                    node = node.mid;
                }
                else {
                    // collect
                    if (!node.mid) {
                        return undefined;
                    }
                    else {
                        return this._nodeIterator(node.mid);
                    }
                }
            }
            return undefined;
        };
        TernarySearchTree.prototype._nodeIterator = function (node) {
            var _this = this;
            var res;
            var idx;
            var data;
            var next = function () {
                if (!data) {
                    // lazy till first invocation
                    data = [];
                    idx = 0;
                    _this._forEach(node, function (value) { return data.push(value); });
                }
                if (idx >= data.length) {
                    return iterator_1.FIN;
                }
                if (!res) {
                    res = { done: false, value: data[idx++] };
                }
                else {
                    res.value = data[idx++];
                }
                return res;
            };
            return { next: next };
        };
        TernarySearchTree.prototype.forEach = function (callback) {
            this._forEach(this._root, callback);
        };
        TernarySearchTree.prototype._forEach = function (node, callback) {
            if (node) {
                // left
                this._forEach(node.left, callback);
                // node
                if (node.value) {
                    // callback(node.value, this._iter.join(parts));
                    callback(node.value, node.key);
                }
                // mid
                this._forEach(node.mid, callback);
                // right
                this._forEach(node.right, callback);
            }
        };
        return TernarySearchTree;
    }());
    exports.TernarySearchTree = TernarySearchTree;
    var ResourceMap = /** @class */ (function () {
        function ResourceMap() {
            this.map = new Map();
            this.ignoreCase = false; // in the future this should be an uri-comparator
        }
        ResourceMap.prototype.set = function (resource, value) {
            this.map.set(this.toKey(resource), value);
        };
        ResourceMap.prototype.get = function (resource) {
            return this.map.get(this.toKey(resource));
        };
        ResourceMap.prototype.has = function (resource) {
            return this.map.has(this.toKey(resource));
        };
        Object.defineProperty(ResourceMap.prototype, "size", {
            get: function () {
                return this.map.size;
            },
            enumerable: true,
            configurable: true
        });
        ResourceMap.prototype.clear = function () {
            this.map.clear();
        };
        ResourceMap.prototype.delete = function (resource) {
            return this.map.delete(this.toKey(resource));
        };
        ResourceMap.prototype.forEach = function (clb) {
            this.map.forEach(clb);
        };
        ResourceMap.prototype.values = function () {
            return values(this.map);
        };
        ResourceMap.prototype.toKey = function (resource) {
            var key = resource.toString();
            if (this.ignoreCase) {
                key = key.toLowerCase();
            }
            return key;
        };
        ResourceMap.prototype.keys = function () {
            return keys(this.map).map(function (k) { return uri_1.URI.parse(k); });
        };
        ResourceMap.prototype.clone = function () {
            var resourceMap = new ResourceMap();
            this.map.forEach(function (value, key) { return resourceMap.map.set(key, value); });
            return resourceMap;
        };
        return ResourceMap;
    }());
    exports.ResourceMap = ResourceMap;
    var Touch;
    (function (Touch) {
        Touch[Touch["None"] = 0] = "None";
        Touch[Touch["AsOld"] = 1] = "AsOld";
        Touch[Touch["AsNew"] = 2] = "AsNew";
    })(Touch = exports.Touch || (exports.Touch = {}));
    var LinkedMap = /** @class */ (function () {
        function LinkedMap() {
            this._map = new Map();
            this._head = undefined;
            this._tail = undefined;
            this._size = 0;
        }
        LinkedMap.prototype.clear = function () {
            this._map.clear();
            this._head = undefined;
            this._tail = undefined;
            this._size = 0;
        };
        LinkedMap.prototype.isEmpty = function () {
            return !this._head && !this._tail;
        };
        Object.defineProperty(LinkedMap.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: true,
            configurable: true
        });
        LinkedMap.prototype.has = function (key) {
            return this._map.has(key);
        };
        LinkedMap.prototype.get = function (key, touch) {
            if (touch === void 0) { touch = 0 /* None */; }
            var item = this._map.get(key);
            if (!item) {
                return undefined;
            }
            if (touch !== 0 /* None */) {
                this.touch(item, touch);
            }
            return item.value;
        };
        LinkedMap.prototype.set = function (key, value, touch) {
            if (touch === void 0) { touch = 0 /* None */; }
            var item = this._map.get(key);
            if (item) {
                item.value = value;
                if (touch !== 0 /* None */) {
                    this.touch(item, touch);
                }
            }
            else {
                item = { key: key, value: value, next: undefined, previous: undefined };
                switch (touch) {
                    case 0 /* None */:
                        this.addItemLast(item);
                        break;
                    case 1 /* AsOld */:
                        this.addItemFirst(item);
                        break;
                    case 2 /* AsNew */:
                        this.addItemLast(item);
                        break;
                    default:
                        this.addItemLast(item);
                        break;
                }
                this._map.set(key, item);
                this._size++;
            }
        };
        LinkedMap.prototype.delete = function (key) {
            return !!this.remove(key);
        };
        LinkedMap.prototype.remove = function (key) {
            var item = this._map.get(key);
            if (!item) {
                return undefined;
            }
            this._map.delete(key);
            this.removeItem(item);
            this._size--;
            return item.value;
        };
        LinkedMap.prototype.shift = function () {
            if (!this._head && !this._tail) {
                return undefined;
            }
            if (!this._head || !this._tail) {
                throw new Error('Invalid list');
            }
            var item = this._head;
            this._map.delete(item.key);
            this.removeItem(item);
            this._size--;
            return item.value;
        };
        LinkedMap.prototype.forEach = function (callbackfn, thisArg) {
            var current = this._head;
            while (current) {
                if (thisArg) {
                    callbackfn.bind(thisArg)(current.value, current.key, this);
                }
                else {
                    callbackfn(current.value, current.key, this);
                }
                current = current.next;
            }
        };
        LinkedMap.prototype.values = function () {
            var result = [];
            var current = this._head;
            while (current) {
                result.push(current.value);
                current = current.next;
            }
            return result;
        };
        LinkedMap.prototype.keys = function () {
            var result = [];
            var current = this._head;
            while (current) {
                result.push(current.key);
                current = current.next;
            }
            return result;
        };
        /* VS Code / Monaco editor runs on es5 which has no Symbol.iterator
        public keys(): IterableIterator<K> {
            let current = this._head;
            let iterator: IterableIterator<K> = {
                [Symbol.iterator]() {
                    return iterator;
                },
                next():IteratorResult<K> {
                    if (current) {
                        let result = { value: current.key, done: false };
                        current = current.next;
                        return result;
                    } else {
                        return { value: undefined, done: true };
                    }
                }
            };
            return iterator;
        }
    
        public values(): IterableIterator<V> {
            let current = this._head;
            let iterator: IterableIterator<V> = {
                [Symbol.iterator]() {
                    return iterator;
                },
                next():IteratorResult<V> {
                    if (current) {
                        let result = { value: current.value, done: false };
                        current = current.next;
                        return result;
                    } else {
                        return { value: undefined, done: true };
                    }
                }
            };
            return iterator;
        }
        */
        LinkedMap.prototype.trimOld = function (newSize) {
            if (newSize >= this.size) {
                return;
            }
            if (newSize === 0) {
                this.clear();
                return;
            }
            var current = this._head;
            var currentSize = this.size;
            while (current && currentSize > newSize) {
                this._map.delete(current.key);
                current = current.next;
                currentSize--;
            }
            this._head = current;
            this._size = currentSize;
            if (current) {
                current.previous = void 0;
            }
        };
        LinkedMap.prototype.addItemFirst = function (item) {
            // First time Insert
            if (!this._head && !this._tail) {
                this._tail = item;
            }
            else if (!this._head) {
                throw new Error('Invalid list');
            }
            else {
                item.next = this._head;
                this._head.previous = item;
            }
            this._head = item;
        };
        LinkedMap.prototype.addItemLast = function (item) {
            // First time Insert
            if (!this._head && !this._tail) {
                this._head = item;
            }
            else if (!this._tail) {
                throw new Error('Invalid list');
            }
            else {
                item.previous = this._tail;
                this._tail.next = item;
            }
            this._tail = item;
        };
        LinkedMap.prototype.removeItem = function (item) {
            if (item === this._head && item === this._tail) {
                this._head = void 0;
                this._tail = void 0;
            }
            else if (item === this._head) {
                this._head = item.next;
            }
            else if (item === this._tail) {
                this._tail = item.previous;
            }
            else {
                var next = item.next;
                var previous = item.previous;
                if (!next || !previous) {
                    throw new Error('Invalid list');
                }
                next.previous = previous;
                previous.next = next;
            }
        };
        LinkedMap.prototype.touch = function (item, touch) {
            if (!this._head || !this._tail) {
                throw new Error('Invalid list');
            }
            if ((touch !== 1 /* AsOld */ && touch !== 2 /* AsNew */)) {
                return;
            }
            if (touch === 1 /* AsOld */) {
                if (item === this._head) {
                    return;
                }
                var next = item.next;
                var previous = item.previous;
                // Unlink the item
                if (item === this._tail) {
                    // previous must be defined since item was not head but is tail
                    // So there are more than on item in the map
                    previous.next = void 0;
                    this._tail = previous;
                }
                else {
                    // Both next and previous are not undefined since item was neither head nor tail.
                    next.previous = previous;
                    previous.next = next;
                }
                // Insert the node at head
                item.previous = void 0;
                item.next = this._head;
                this._head.previous = item;
                this._head = item;
            }
            else if (touch === 2 /* AsNew */) {
                if (item === this._tail) {
                    return;
                }
                var next = item.next;
                var previous = item.previous;
                // Unlink the item.
                if (item === this._head) {
                    // next must be defined since item was not tail but is head
                    // So there are more than on item in the map
                    next.previous = void 0;
                    this._head = next;
                }
                else {
                    // Both next and previous are not undefined since item was neither head nor tail.
                    next.previous = previous;
                    previous.next = next;
                }
                item.next = void 0;
                item.previous = this._tail;
                this._tail.next = item;
                this._tail = item;
            }
        };
        LinkedMap.prototype.toJSON = function () {
            var data = [];
            this.forEach(function (value, key) {
                data.push([key, value]);
            });
            return data;
        };
        LinkedMap.prototype.fromJSON = function (data) {
            this.clear();
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var _a = data_1[_i], key = _a[0], value = _a[1];
                this.set(key, value);
            }
        };
        return LinkedMap;
    }());
    exports.LinkedMap = LinkedMap;
    var LRUCache = /** @class */ (function (_super) {
        __extends(LRUCache, _super);
        function LRUCache(limit, ratio) {
            if (ratio === void 0) { ratio = 1; }
            var _this = _super.call(this) || this;
            _this._limit = limit;
            _this._ratio = Math.min(Math.max(0, ratio), 1);
            return _this;
        }
        Object.defineProperty(LRUCache.prototype, "limit", {
            get: function () {
                return this._limit;
            },
            set: function (limit) {
                this._limit = limit;
                this.checkTrim();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LRUCache.prototype, "ratio", {
            get: function () {
                return this._ratio;
            },
            set: function (ratio) {
                this._ratio = Math.min(Math.max(0, ratio), 1);
                this.checkTrim();
            },
            enumerable: true,
            configurable: true
        });
        LRUCache.prototype.get = function (key) {
            return _super.prototype.get.call(this, key, 2 /* AsNew */);
        };
        LRUCache.prototype.peek = function (key) {
            return _super.prototype.get.call(this, key, 0 /* None */);
        };
        LRUCache.prototype.set = function (key, value) {
            _super.prototype.set.call(this, key, value, 2 /* AsNew */);
            this.checkTrim();
        };
        LRUCache.prototype.checkTrim = function () {
            if (this.size > this._limit) {
                this.trimOld(Math.round(this._limit * this._ratio));
            }
        };
        return LRUCache;
    }(LinkedMap));
    exports.LRUCache = LRUCache;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=map.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(11), __webpack_require__(20), __webpack_require__(21), __webpack_require__(31), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, arrays, strings, paths, map_1, async_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getEmptyExpression() {
        return Object.create(null);
    }
    exports.getEmptyExpression = getEmptyExpression;
    var GLOBSTAR = '**';
    var GLOB_SPLIT = '/';
    var PATH_REGEX = '[/\\\\]'; // any slash or backslash
    var NO_PATH_REGEX = '[^/\\\\]'; // any non-slash and non-backslash
    var ALL_FORWARD_SLASHES = /\//g;
    function starsToRegExp(starCount) {
        switch (starCount) {
            case 0:
                return '';
            case 1:
                return NO_PATH_REGEX + "*?"; // 1 star matches any number of characters except path separator (/ and \) - non greedy (?)
            default:
                // Matches:  (Path Sep OR Path Val followed by Path Sep OR Path Sep followed by Path Val) 0-many times
                // Group is non capturing because we don't need to capture at all (?:...)
                // Overall we use non-greedy matching because it could be that we match too much
                return "(?:" + PATH_REGEX + "|" + NO_PATH_REGEX + "+" + PATH_REGEX + "|" + PATH_REGEX + NO_PATH_REGEX + "+)*?";
        }
    }
    function splitGlobAware(pattern, splitChar) {
        if (!pattern) {
            return [];
        }
        var segments = [];
        var inBraces = false;
        var inBrackets = false;
        var char;
        var curVal = '';
        for (var i = 0; i < pattern.length; i++) {
            char = pattern[i];
            switch (char) {
                case splitChar:
                    if (!inBraces && !inBrackets) {
                        segments.push(curVal);
                        curVal = '';
                        continue;
                    }
                    break;
                case '{':
                    inBraces = true;
                    break;
                case '}':
                    inBraces = false;
                    break;
                case '[':
                    inBrackets = true;
                    break;
                case ']':
                    inBrackets = false;
                    break;
            }
            curVal += char;
        }
        // Tail
        if (curVal) {
            segments.push(curVal);
        }
        return segments;
    }
    exports.splitGlobAware = splitGlobAware;
    function parseRegExp(pattern) {
        if (!pattern) {
            return '';
        }
        var regEx = '';
        // Split up into segments for each slash found
        var segments = splitGlobAware(pattern, GLOB_SPLIT);
        // Special case where we only have globstars
        if (segments.every(function (s) { return s === GLOBSTAR; })) {
            regEx = '.*';
        }
        // Build regex over segments
        else {
            var previousSegmentWasGlobStar_1 = false;
            segments.forEach(function (segment, index) {
                // Globstar is special
                if (segment === GLOBSTAR) {
                    // if we have more than one globstar after another, just ignore it
                    if (!previousSegmentWasGlobStar_1) {
                        regEx += starsToRegExp(2);
                        previousSegmentWasGlobStar_1 = true;
                    }
                    return;
                }
                // States
                var inBraces = false;
                var braceVal = '';
                var inBrackets = false;
                var bracketVal = '';
                var char;
                for (var i = 0; i < segment.length; i++) {
                    char = segment[i];
                    // Support brace expansion
                    if (char !== '}' && inBraces) {
                        braceVal += char;
                        continue;
                    }
                    // Support brackets
                    if (inBrackets && (char !== ']' || !bracketVal) /* ] is literally only allowed as first character in brackets to match it */) {
                        var res = void 0;
                        // range operator
                        if (char === '-') {
                            res = char;
                        }
                        // negation operator (only valid on first index in bracket)
                        else if ((char === '^' || char === '!') && !bracketVal) {
                            res = '^';
                        }
                        // glob split matching is not allowed within character ranges
                        // see http://man7.org/linux/man-pages/man7/glob.7.html
                        else if (char === GLOB_SPLIT) {
                            res = '';
                        }
                        // anything else gets escaped
                        else {
                            res = strings.escapeRegExpCharacters(char);
                        }
                        bracketVal += res;
                        continue;
                    }
                    switch (char) {
                        case '{':
                            inBraces = true;
                            continue;
                        case '[':
                            inBrackets = true;
                            continue;
                        case '}':
                            var choices = splitGlobAware(braceVal, ',');
                            // Converts {foo,bar} => [foo|bar]
                            var braceRegExp = "(?:" + choices.map(function (c) { return parseRegExp(c); }).join('|') + ")";
                            regEx += braceRegExp;
                            inBraces = false;
                            braceVal = '';
                            break;
                        case ']':
                            regEx += ('[' + bracketVal + ']');
                            inBrackets = false;
                            bracketVal = '';
                            break;
                        case '?':
                            regEx += NO_PATH_REGEX; // 1 ? matches any single character except path separator (/ and \)
                            continue;
                        case '*':
                            regEx += starsToRegExp(1);
                            continue;
                        default:
                            regEx += strings.escapeRegExpCharacters(char);
                    }
                }
                // Tail: Add the slash we had split on if there is more to come and the remaining pattern is not a globstar
                // For example if pattern: some/**/*.js we want the "/" after some to be included in the RegEx to prevent
                // a folder called "something" to match as well.
                // However, if pattern: some/**, we tolerate that we also match on "something" because our globstar behaviour
                // is to match 0-N segments.
                if (index < segments.length - 1 && (segments[index + 1] !== GLOBSTAR || index + 2 < segments.length)) {
                    regEx += PATH_REGEX;
                }
                // reset state
                previousSegmentWasGlobStar_1 = false;
            });
        }
        return regEx;
    }
    // regexes to check for trival glob patterns that just check for String#endsWith
    var T1 = /^\*\*\/\*\.[\w\.-]+$/; // **/*.something
    var T2 = /^\*\*\/([\w\.-]+)\/?$/; // **/something
    var T3 = /^{\*\*\/[\*\.]?[\w\.-]+\/?(,\*\*\/[\*\.]?[\w\.-]+\/?)*}$/; // {**/*.something,**/*.else} or {**/package.json,**/project.json}
    var T3_2 = /^{\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?(,\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?)*}$/; // Like T3, with optional trailing /**
    var T4 = /^\*\*((\/[\w\.-]+)+)\/?$/; // **/something/else
    var T5 = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/; // something/else
    var CACHE = new map_1.LRUCache(10000); // bounded to 10000 elements
    var FALSE = function () {
        return false;
    };
    var NULL = function () {
        return null;
    };
    function parsePattern(arg1, options) {
        if (!arg1) {
            return NULL;
        }
        // Handle IRelativePattern
        var pattern;
        if (typeof arg1 !== 'string') {
            pattern = arg1.pattern;
        }
        else {
            pattern = arg1;
        }
        // Whitespace trimming
        pattern = pattern.trim();
        // Check cache
        var patternKey = pattern + "_" + !!options.trimForExclusions;
        var parsedPattern = CACHE.get(patternKey);
        if (parsedPattern) {
            return wrapRelativePattern(parsedPattern, arg1);
        }
        // Check for Trivias
        var match;
        if (T1.test(pattern)) { // common pattern: **/*.txt just need endsWith check
            var base_1 = pattern.substr(4); // '**/*'.length === 4
            parsedPattern = function (path, basename) {
                return path && strings.endsWith(path, base_1) ? pattern : null;
            };
        }
        else if (match = T2.exec(trimForExclusions(pattern, options))) { // common pattern: **/some.txt just need basename check
            parsedPattern = trivia2(match[1], pattern);
        }
        else if ((options.trimForExclusions ? T3_2 : T3).test(pattern)) { // repetition of common patterns (see above) {**/*.txt,**/*.png}
            parsedPattern = trivia3(pattern, options);
        }
        else if (match = T4.exec(trimForExclusions(pattern, options))) { // common pattern: **/something/else just need endsWith check
            parsedPattern = trivia4and5(match[1].substr(1), pattern, true);
        }
        else if (match = T5.exec(trimForExclusions(pattern, options))) { // common pattern: something/else just need equals check
            parsedPattern = trivia4and5(match[1], pattern, false);
        }
        // Otherwise convert to pattern
        else {
            parsedPattern = toRegExp(pattern);
        }
        // Cache
        CACHE.set(patternKey, parsedPattern);
        return wrapRelativePattern(parsedPattern, arg1);
    }
    function wrapRelativePattern(parsedPattern, arg2) {
        if (typeof arg2 === 'string') {
            return parsedPattern;
        }
        return function (path, basename) {
            if (!paths.isEqualOrParent(path, arg2.base)) {
                return null;
            }
            return parsedPattern(arg2.pathToRelative(arg2.base, path), basename);
        };
    }
    function trimForExclusions(pattern, options) {
        return options.trimForExclusions && strings.endsWith(pattern, '/**') ? pattern.substr(0, pattern.length - 2) : pattern; // dropping **, tailing / is dropped later
    }
    // common pattern: **/some.txt just need basename check
    function trivia2(base, originalPattern) {
        var slashBase = "/" + base;
        var backslashBase = "\\" + base;
        var parsedPattern = function (path, basename) {
            if (!path) {
                return null;
            }
            if (basename) {
                return basename === base ? originalPattern : null;
            }
            return path === base || strings.endsWith(path, slashBase) || strings.endsWith(path, backslashBase) ? originalPattern : null;
        };
        var basenames = [base];
        parsedPattern.basenames = basenames;
        parsedPattern.patterns = [originalPattern];
        parsedPattern.allBasenames = basenames;
        return parsedPattern;
    }
    // repetition of common patterns (see above) {**/*.txt,**/*.png}
    function trivia3(pattern, options) {
        var parsedPatterns = aggregateBasenameMatches(pattern.slice(1, -1).split(',')
            .map(function (pattern) { return parsePattern(pattern, options); })
            .filter(function (pattern) { return pattern !== NULL; }), pattern);
        var n = parsedPatterns.length;
        if (!n) {
            return NULL;
        }
        if (n === 1) {
            return parsedPatterns[0];
        }
        var parsedPattern = function (path, basename) {
            for (var i = 0, n_1 = parsedPatterns.length; i < n_1; i++) {
                if (parsedPatterns[i](path, basename)) {
                    return pattern;
                }
            }
            return null;
        };
        var withBasenames = arrays.first(parsedPatterns, function (pattern) { return !!pattern.allBasenames; });
        if (withBasenames) {
            parsedPattern.allBasenames = withBasenames.allBasenames;
        }
        var allPaths = parsedPatterns.reduce(function (all, current) { return current.allPaths ? all.concat(current.allPaths) : all; }, []);
        if (allPaths.length) {
            parsedPattern.allPaths = allPaths;
        }
        return parsedPattern;
    }
    // common patterns: **/something/else just need endsWith check, something/else just needs and equals check
    function trivia4and5(path, pattern, matchPathEnds) {
        var nativePath = paths.nativeSep !== paths.sep ? path.replace(ALL_FORWARD_SLASHES, paths.nativeSep) : path;
        var nativePathEnd = paths.nativeSep + nativePath;
        var parsedPattern = matchPathEnds ? function (path, basename) {
            return path && (path === nativePath || strings.endsWith(path, nativePathEnd)) ? pattern : null;
        } : function (path, basename) {
            return path && path === nativePath ? pattern : null;
        };
        parsedPattern.allPaths = [(matchPathEnds ? '*/' : './') + path];
        return parsedPattern;
    }
    function toRegExp(pattern) {
        try {
            var regExp_1 = new RegExp("^" + parseRegExp(pattern) + "$");
            return function (path, basename) {
                regExp_1.lastIndex = 0; // reset RegExp to its initial state to reuse it!
                return path && regExp_1.test(path) ? pattern : null;
            };
        }
        catch (error) {
            return NULL;
        }
    }
    function match(arg1, path, hasSibling) {
        if (!arg1 || !path) {
            return false;
        }
        return parse(arg1)(path, undefined, hasSibling);
    }
    exports.match = match;
    function parse(arg1, options) {
        if (options === void 0) { options = {}; }
        if (!arg1) {
            return FALSE;
        }
        // Glob with String
        if (typeof arg1 === 'string' || isRelativePattern(arg1)) {
            var parsedPattern_1 = parsePattern(arg1, options);
            if (parsedPattern_1 === NULL) {
                return FALSE;
            }
            var resultPattern = function (path, basename) {
                return !!parsedPattern_1(path, basename);
            };
            if (parsedPattern_1.allBasenames) {
                resultPattern.allBasenames = parsedPattern_1.allBasenames;
            }
            if (parsedPattern_1.allPaths) {
                resultPattern.allPaths = parsedPattern_1.allPaths;
            }
            return resultPattern;
        }
        // Glob with Expression
        return parsedExpression(arg1, options);
    }
    exports.parse = parse;
    function hasSiblingPromiseFn(siblingsFn) {
        if (!siblingsFn) {
            return undefined;
        }
        var siblings;
        return function (name) {
            if (!siblings) {
                siblings = (siblingsFn() || Promise.resolve([]))
                    .then(function (list) { return list ? listToMap(list) : {}; });
            }
            return siblings.then(function (map) { return !!map[name]; });
        };
    }
    exports.hasSiblingPromiseFn = hasSiblingPromiseFn;
    function hasSiblingFn(siblingsFn) {
        if (!siblingsFn) {
            return undefined;
        }
        var siblings;
        return function (name) {
            if (!siblings) {
                var list = siblingsFn();
                siblings = list ? listToMap(list) : {};
            }
            return !!siblings[name];
        };
    }
    exports.hasSiblingFn = hasSiblingFn;
    function listToMap(list) {
        var map = {};
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var key = list_1[_i];
            map[key] = true;
        }
        return map;
    }
    function isRelativePattern(obj) {
        var rp = obj;
        return rp && typeof rp.base === 'string' && typeof rp.pattern === 'string' && typeof rp.pathToRelative === 'function';
    }
    exports.isRelativePattern = isRelativePattern;
    /**
     * Same as `parse`, but the ParsedExpression is guaranteed to return a Promise
     */
    function parseToAsync(expression, options) {
        var parsedExpression = parse(expression, options);
        return function (path, basename, hasSibling) {
            var result = parsedExpression(path, basename, hasSibling);
            return async_1.isThenable(result) ? result : Promise.resolve(result);
        };
    }
    exports.parseToAsync = parseToAsync;
    function getBasenameTerms(patternOrExpression) {
        return patternOrExpression.allBasenames || [];
    }
    exports.getBasenameTerms = getBasenameTerms;
    function getPathTerms(patternOrExpression) {
        return patternOrExpression.allPaths || [];
    }
    exports.getPathTerms = getPathTerms;
    function parsedExpression(expression, options) {
        var parsedPatterns = aggregateBasenameMatches(Object.getOwnPropertyNames(expression)
            .map(function (pattern) { return parseExpressionPattern(pattern, expression[pattern], options); })
            .filter(function (pattern) { return pattern !== NULL; }));
        var n = parsedPatterns.length;
        if (!n) {
            return NULL;
        }
        if (!parsedPatterns.some(function (parsedPattern) { return !!parsedPattern.requiresSiblings; })) {
            if (n === 1) {
                return parsedPatterns[0];
            }
            var resultExpression_1 = function (path, basename) {
                for (var i = 0, n_2 = parsedPatterns.length; i < n_2; i++) {
                    // Pattern matches path
                    var result = parsedPatterns[i](path, basename);
                    if (result) {
                        return result;
                    }
                }
                return null;
            };
            var withBasenames_1 = arrays.first(parsedPatterns, function (pattern) { return !!pattern.allBasenames; });
            if (withBasenames_1) {
                resultExpression_1.allBasenames = withBasenames_1.allBasenames;
            }
            var allPaths_1 = parsedPatterns.reduce(function (all, current) { return current.allPaths ? all.concat(current.allPaths) : all; }, []);
            if (allPaths_1.length) {
                resultExpression_1.allPaths = allPaths_1;
            }
            return resultExpression_1;
        }
        var resultExpression = function (path, basename, hasSibling) {
            var name = undefined;
            for (var i = 0, n_3 = parsedPatterns.length; i < n_3; i++) {
                // Pattern matches path
                var parsedPattern = parsedPatterns[i];
                if (parsedPattern.requiresSiblings && hasSibling) {
                    if (!basename) {
                        basename = paths.basename(path);
                    }
                    if (!name) {
                        name = basename.substr(0, basename.length - paths.extname(path).length);
                    }
                }
                var result = parsedPattern(path, basename, name, hasSibling);
                if (result) {
                    return result;
                }
            }
            return null;
        };
        var withBasenames = arrays.first(parsedPatterns, function (pattern) { return !!pattern.allBasenames; });
        if (withBasenames) {
            resultExpression.allBasenames = withBasenames.allBasenames;
        }
        var allPaths = parsedPatterns.reduce(function (all, current) { return current.allPaths ? all.concat(current.allPaths) : all; }, []);
        if (allPaths.length) {
            resultExpression.allPaths = allPaths;
        }
        return resultExpression;
    }
    function parseExpressionPattern(pattern, value, options) {
        if (value === false) {
            return NULL; // pattern is disabled
        }
        var parsedPattern = parsePattern(pattern, options);
        if (parsedPattern === NULL) {
            return NULL;
        }
        // Expression Pattern is <boolean>
        if (typeof value === 'boolean') {
            return parsedPattern;
        }
        // Expression Pattern is <SiblingClause>
        if (value) {
            var when_1 = value.when;
            if (typeof when_1 === 'string') {
                var result = function (path, basename, name, hasSibling) {
                    if (!hasSibling || !parsedPattern(path, basename)) {
                        return null;
                    }
                    var clausePattern = when_1.replace('$(basename)', name);
                    var matched = hasSibling(clausePattern);
                    return async_1.isThenable(matched) ?
                        matched.then(function (m) { return m ? pattern : null; }) :
                        matched ? pattern : null;
                };
                result.requiresSiblings = true;
                return result;
            }
        }
        // Expression is Anything
        return parsedPattern;
    }
    function aggregateBasenameMatches(parsedPatterns, result) {
        var basenamePatterns = parsedPatterns.filter(function (parsedPattern) { return !!parsedPattern.basenames; });
        if (basenamePatterns.length < 2) {
            return parsedPatterns;
        }
        var basenames = basenamePatterns.reduce(function (all, current) {
            var basenames = current.basenames;
            return basenames ? all.concat(basenames) : all;
        }, []);
        var patterns;
        if (result) {
            patterns = [];
            for (var i = 0, n = basenames.length; i < n; i++) {
                patterns.push(result);
            }
        }
        else {
            patterns = basenamePatterns.reduce(function (all, current) {
                var patterns = current.patterns;
                return patterns ? all.concat(patterns) : all;
            }, []);
        }
        var aggregate = function (path, basename) {
            if (!path) {
                return null;
            }
            if (!basename) {
                var i = void 0;
                for (i = path.length; i > 0; i--) {
                    var ch = path.charCodeAt(i - 1);
                    if (ch === 47 /* Slash */ || ch === 92 /* Backslash */) {
                        break;
                    }
                }
                basename = path.substr(i);
            }
            var index = basenames.indexOf(basename);
            return index !== -1 ? patterns[index] : null;
        };
        aggregate.basenames = basenames;
        aggregate.patterns = patterns;
        aggregate.allBasenames = basenames;
        var aggregatedPatterns = parsedPatterns.filter(function (parsedPattern) { return !parsedPattern.basenames; });
        aggregatedPatterns.push(aggregate);
        return aggregatedPatterns;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=glob.js.map

/***/ })
/******/ ]);