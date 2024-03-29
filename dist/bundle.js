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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/companionGenerator.ts":
/*!***********************************!*\
  !*** ./src/companionGenerator.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar characters_1 = __webpack_require__(/*! ./data/characters */ \"./src/data/characters.ts\");\r\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\r\nvar CompanionGenerator = /** @class */ (function () {\r\n    function CompanionGenerator() {\r\n    }\r\n    CompanionGenerator.prototype.newCompanion = function () {\r\n        var chance = Math.random() * 100;\r\n        var newCompanion;\r\n        if (chance <= settings_1.GAMESETTINGS.dropChance.Legendary) {\r\n            // GENERATE LEGENDARY\r\n            newCompanion = this.generateStats(characters_1.COMPANIONS_LIST.Legendary, \"legendary\");\r\n        }\r\n        else if (chance > settings_1.GAMESETTINGS.dropChance.Legendary && chance <= settings_1.GAMESETTINGS.dropChance.Rare) {\r\n            // GENERATE RARE\r\n            newCompanion = this.generateStats(characters_1.COMPANIONS_LIST.Rare, \"rare\");\r\n        }\r\n        else {\r\n            // GENERATE COMMON\r\n            newCompanion = this.generateStats(characters_1.COMPANIONS_LIST.Common, \"common\");\r\n        }\r\n        return newCompanion;\r\n    };\r\n    // Converting To Interface\r\n    CompanionGenerator.prototype.companionAdapter = function (name, image, damage, speed, stage, rarity) {\r\n        return {\r\n            name: name,\r\n            image: image,\r\n            damage: damage,\r\n            speed: speed,\r\n            stage: stage,\r\n            rarity: rarity\r\n        };\r\n    };\r\n    CompanionGenerator.prototype.generateStats = function (type, rarity) {\r\n        var companion = type[Math.floor(Math.random() * type.length)];\r\n        var damage = Math.floor(Math.random() * companion.damage.max) + companion.damage.min;\r\n        var speed = Math.floor(Math.random() * companion.speed.max) + companion.speed.min;\r\n        return this.companionAdapter(companion.name, settings_1.GAMESETTINGS.assetRoot + companion.image + settings_1.GAMESETTINGS.imageExtension, damage, speed, 1, rarity);\r\n    };\r\n    return CompanionGenerator;\r\n}());\r\nexports.default = CompanionGenerator;\r\n\n\n//# sourceURL=webpack:///./src/companionGenerator.ts?");

/***/ }),

/***/ "./src/companionSummon.ts":
/*!********************************!*\
  !*** ./src/companionSummon.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar companionGenerator_1 = __webpack_require__(/*! ./companionGenerator */ \"./src/companionGenerator.ts\");\r\nvar CompanionSummonManager = /** @class */ (function () {\r\n    function CompanionSummonManager() {\r\n        var _this = this;\r\n        this.summonContainer = document.getElementById(\"purchase-companion\");\r\n        this.summonButton = document.getElementById(\"summon\");\r\n        this.summonFinishedContainer = document.getElementById(\"show-companion\");\r\n        this.companionGenerator = new companionGenerator_1.default();\r\n        this.summonButton.onclick = function () {\r\n            _this.summonPressed();\r\n        };\r\n    }\r\n    CompanionSummonManager.prototype.summonPressed = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var companionGeneratorInProgress, generatedCompanion, animateButton, animateSummon;\r\n            var _this = this;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        if (companionGeneratorInProgress)\r\n                            return [2 /*return*/];\r\n                        companionGeneratorInProgress = true;\r\n                        generatedCompanion = this.companionGenerator.newCompanion();\r\n                        animateButton = new Promise(function (res) {\r\n                            var buttonAnimationFinished = function () {\r\n                                _this.summonButton.removeEventListener(\"animationend\", buttonAnimationFinished);\r\n                                res();\r\n                            };\r\n                            _this.summonButton.addEventListener(\"animationend\", buttonAnimationFinished);\r\n                            _this.summonButton.classList.add(\"button-clicked\");\r\n                        });\r\n                        animateSummon = new Promise(function (res) {\r\n                            var FADEINTIME = 600;\r\n                            var fadeIn = new Promise(function (resolveFadeIn) {\r\n                                setTimeout(function () {\r\n                                    _this.summonFinishedContainer.style.opacity = \"1\";\r\n                                    resolveFadeIn();\r\n                                }, FADEINTIME);\r\n                            });\r\n                            fadeIn.then(function () {\r\n                                setTimeout(function () {\r\n                                    res();\r\n                                }, 5000);\r\n                            });\r\n                        });\r\n                        return [4 /*yield*/, animateButton];\r\n                    case 1:\r\n                        _a.sent();\r\n                        this.summonContainer.style.display = \"none\";\r\n                        this.summonFinishedContainer.style.display = \"block\";\r\n                        return [4 /*yield*/, animateSummon];\r\n                    case 2:\r\n                        _a.sent();\r\n                        companionGeneratorInProgress = false;\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return CompanionSummonManager;\r\n}());\r\nexports.default = CompanionSummonManager;\r\n\n\n//# sourceURL=webpack:///./src/companionSummon.ts?");

/***/ }),

/***/ "./src/components/damageLabel.ts":
/*!***************************************!*\
  !*** ./src/components/damageLabel.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar damageLabelManager = /** @class */ (function () {\r\n    function damageLabelManager(parent) {\r\n        this.parent = parent;\r\n    }\r\n    damageLabelManager.prototype.recieveAttack = function (damage) {\r\n        var _this = this;\r\n        var dmgLbl = new damageLabel(damage);\r\n        this.parent.appendChild(dmgLbl.domCreator(dmgLbl.dmg));\r\n        setTimeout(function () {\r\n            dmgLbl.destroyCallback(_this.parent);\r\n        }, dmgLbl.lifeSpan);\r\n    };\r\n    return damageLabelManager;\r\n}());\r\nvar damageLabel = /** @class */ (function () {\r\n    function damageLabel(dmg, lifeSpan) {\r\n        if (lifeSpan === void 0) { lifeSpan = 400; }\r\n        this.lifeSpan = lifeSpan;\r\n        this.dmg = dmg;\r\n    }\r\n    damageLabel.prototype.destroyCallback = function (parent) {\r\n        parent.removeChild(this.dom);\r\n    };\r\n    damageLabel.prototype.domCreator = function (damage) {\r\n        var label = document.createElement(\"span\");\r\n        label.classList.add(\"damageLabel\");\r\n        label.innerText = \"-\" + damage.toString();\r\n        label.style.animation = \"labelFloat\";\r\n        label.style.animationDuration = this.lifeSpan + \"ms\";\r\n        var coords = {\r\n            x: Math.random() * 100,\r\n            y: Math.random() * 100\r\n        };\r\n        label.style.top = coords.y.toFixed(0) + \"%\";\r\n        label.style.left = coords.x.toFixed(0) + \"%\";\r\n        this.dom = label;\r\n        return label;\r\n    };\r\n    return damageLabel;\r\n}());\r\nexports.default = damageLabelManager;\r\n\n\n//# sourceURL=webpack:///./src/components/damageLabel.ts?");

/***/ }),

/***/ "./src/components/draw.ts":
/*!********************************!*\
  !*** ./src/components/draw.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Draw = /** @class */ (function () {\r\n    function Draw(drawDOMElement, title) {\r\n        if (title === void 0) { title = \"Default Draw\"; }\r\n        var _this = this;\r\n        this.opened = false;\r\n        this.toggle = function () {\r\n            if (_this.opened) {\r\n                _this.close();\r\n            }\r\n            else {\r\n                _this.open();\r\n            }\r\n        };\r\n        this.open = function () {\r\n            _this.opened = true;\r\n            _this.setTranslate(\"0%\");\r\n        };\r\n        this.close = function () {\r\n            _this.opened = false;\r\n            _this.setTranslate(\"-100%\");\r\n        };\r\n        this.title = title;\r\n        this.content = drawDOMElement;\r\n        this.createTab();\r\n    }\r\n    Draw.prototype.createTab = function () {\r\n        var _this = this;\r\n        // DOM Creation\r\n        var tabElement = document.createElement(\"div\");\r\n        tabElement.classList.add(\"tab\");\r\n        tabElement.innerHTML = \"<span>\" + this.title + \"</span>\";\r\n        // Event Listeners\r\n        tabElement.onmousedown = function (MouseDownEvent) {\r\n            var boxWidth = _this.content.getBoundingClientRect().width;\r\n            var difference = function (a, b) { return Math.abs(a - b); };\r\n            var toMouse = function (MouseMoveEvent) {\r\n                _this.content.style.transition = \"unset\";\r\n                var pos = MouseMoveEvent.x - MouseDownEvent.offsetX;\r\n                if (pos > boxWidth)\r\n                    return;\r\n                if (MouseMoveEvent.x - MouseDownEvent.offsetX < -1)\r\n                    return;\r\n                _this.setTranslate((pos - boxWidth) + \"px\");\r\n            };\r\n            var mouseUp = function (MouseUpEvent) {\r\n                _this.content.style.transition = \"transform 0.5s\";\r\n                if (difference(MouseUpEvent.x, MouseDownEvent.x) < 5) {\r\n                    _this.toggle();\r\n                }\r\n                else {\r\n                    if (MouseUpEvent.x > boxWidth / (_this.opened ? 1.25 : 4)) {\r\n                        _this.open();\r\n                    }\r\n                    else {\r\n                        _this.close();\r\n                    }\r\n                }\r\n                document.removeEventListener(\"mousemove\", toMouse);\r\n                document.removeEventListener(\"mouseup\", mouseUp);\r\n            };\r\n            document.addEventListener(\"mousemove\", toMouse);\r\n            document.addEventListener(\"mouseup\", mouseUp);\r\n        };\r\n        // Assignment\r\n        this.tab = tabElement;\r\n        this.content.appendChild(this.tab);\r\n    };\r\n    Draw.prototype.setTranslate = function (transformAmount) {\r\n        this.content.style.transform = \"translateX(\" + transformAmount + \")\";\r\n    };\r\n    return Draw;\r\n}());\r\nexports.default = Draw;\r\n\n\n//# sourceURL=webpack:///./src/components/draw.ts?");

/***/ }),

/***/ "./src/components/dropzone.ts":
/*!************************************!*\
  !*** ./src/components/dropzone.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/index.ts\");\r\nvar domMap_1 = __webpack_require__(/*! ../includes/domMap */ \"./src/includes/domMap.ts\");\r\nvar companionGenerator_1 = __webpack_require__(/*! ../companionGenerator */ \"./src/companionGenerator.ts\");\r\nvar Dropzone = /** @class */ (function () {\r\n    function Dropzone(element) {\r\n        var _this = this;\r\n        this.mouseOver = function () {\r\n            if (index_1.default.userDragManager.isHolding() && !_this.held) {\r\n                index_1.default.userDragManager.setDropzone(_this);\r\n                _this.dom.classList.add(\"dashed-border-highlighted\");\r\n            }\r\n        };\r\n        this.mouseOut = function () {\r\n            index_1.default.userDragManager.removeDropzone();\r\n            _this.dom.classList.remove(\"dashed-border-highlighted\");\r\n        };\r\n        this.remove = function () {\r\n            if (_this.held) {\r\n                index_1.default.userDragManager.pickup(_this.held, _this);\r\n                _this.dom.classList.remove(\"fighter-slot-\" + _this.held.rarity);\r\n                _this.held = undefined;\r\n                _this.img.val = \"assets/images/playerbg.png\";\r\n                _this.dom.removeEventListener(\"mousedown\", _this.remove);\r\n            }\r\n        };\r\n        this.dom = element;\r\n        this.img = new domMap_1.default(element.querySelector(\"img\"), \"../images/playerbg.png\", \"src\");\r\n        this.dom.addEventListener(\"mouseover\", this.mouseOver);\r\n        this.dom.addEventListener(\"mouseout\", this.mouseOut);\r\n        // test\r\n        var cg = new companionGenerator_1.default();\r\n        this.recieve(cg.newCompanion());\r\n    }\r\n    Dropzone.prototype.recieve = function (companion) {\r\n        if (!this.held && companion) {\r\n            this.held = companion;\r\n            this.img.val = companion.image;\r\n            this.dom.addEventListener(\"mousedown\", this.remove);\r\n            this.dom.classList.add(\"fighter-slot-\" + this.held.rarity);\r\n        }\r\n    };\r\n    return Dropzone;\r\n}());\r\nexports.Dropzone = Dropzone;\r\nvar DropPool = /** @class */ (function () {\r\n    function DropPool() {\r\n        var _this = this;\r\n        this.held = [];\r\n        this.dom = document.getElementById(\"companion-pool\");\r\n        this.mouseOver = function () {\r\n            if (index_1.default.userDragManager.isHolding()) {\r\n                index_1.default.userDragManager.setDropzone(_this);\r\n                _this.dom.classList.add(\"dashed-border-highlighted\");\r\n            }\r\n        };\r\n        this.mouseOut = function () {\r\n            index_1.default.userDragManager.removeDropzone();\r\n            _this.dom.classList.remove(\"dashed-border-highlighted\");\r\n        };\r\n        this.dom.addEventListener(\"mouseover\", this.mouseOver);\r\n        this.dom.addEventListener(\"mouseout\", this.mouseOut);\r\n    }\r\n    DropPool.prototype.recieve = function (companion) {\r\n        this.held.push(new DropPoolItem(companion, this, this.held.length));\r\n        this.mouseOut();\r\n        this.update();\r\n    };\r\n    DropPool.prototype.remove = function (id) {\r\n        this.held[id] = null;\r\n        this.held = this.held.filter(function (obj) { return obj; });\r\n        this.update();\r\n    };\r\n    DropPool.prototype.update = function () {\r\n        var _this = this;\r\n        this.dom.innerHTML = null;\r\n        this.held.forEach(function (e, i) {\r\n            e.setID(i);\r\n            _this.dom.appendChild(e.dom);\r\n        });\r\n    };\r\n    return DropPool;\r\n}());\r\nexports.DropPool = DropPool;\r\nvar DropPoolItem = /** @class */ (function () {\r\n    function DropPoolItem(held, droppool, id) {\r\n        var _this = this;\r\n        this.setID = function (id) {\r\n            _this.id = id;\r\n        };\r\n        this.mouseOver = function () {\r\n            _this.dom.classList.add(\"companion-background-hovered\");\r\n        };\r\n        this.mouseOut = function () {\r\n            _this.dom.classList.remove(\"companion-background-hovered\");\r\n        };\r\n        this.remove = function () {\r\n            if (_this.held) {\r\n                index_1.default.userDragManager.pickup(_this.held, _this.droppool);\r\n                _this.droppool.remove(_this.id);\r\n            }\r\n        };\r\n        this.held = held;\r\n        this.droppool = droppool;\r\n        this.id = id;\r\n        this.generateDOM();\r\n        this.dom.addEventListener(\"mouseover\", this.mouseOver);\r\n        this.dom.addEventListener(\"mouseout\", this.mouseOut);\r\n        this.dom.addEventListener(\"mousedown\", this.remove);\r\n    }\r\n    DropPoolItem.prototype.generateDOM = function () {\r\n        var container, img;\r\n        container = document.createElement(\"div\");\r\n        container.classList.add(\"companion-pool-item\");\r\n        container.classList.add(\"fighter-slot-\" + this.held.rarity);\r\n        img = document.createElement(\"img\");\r\n        img.src = this.held.image;\r\n        img.draggable = false;\r\n        container.appendChild(img);\r\n        this.dom = container;\r\n    };\r\n    return DropPoolItem;\r\n}());\r\n\n\n//# sourceURL=webpack:///./src/components/dropzone.ts?");

/***/ }),

/***/ "./src/data/characters.ts":
/*!********************************!*\
  !*** ./src/data/characters.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.COMPANIONS_LIST = {\r\n    \"Legendary\": [\r\n        {\r\n            name: \"asuna\",\r\n            image: \"asuna\",\r\n            damage: {\r\n                min: 100,\r\n                max: 150\r\n            },\r\n            speed: {\r\n                min: 100,\r\n                max: 160\r\n            },\r\n            maxStage: 10\r\n        }\r\n    ],\r\n    \"Rare\": [\r\n        {\r\n            name: \"asuna\",\r\n            image: \"asuna\",\r\n            damage: {\r\n                min: 30,\r\n                max: 50\r\n            },\r\n            speed: {\r\n                min: 500,\r\n                max: 800\r\n            },\r\n            maxStage: 5\r\n        }\r\n    ],\r\n    \"Common\": [\r\n        {\r\n            name: \"asuna\",\r\n            image: \"asuna\",\r\n            damage: {\r\n                min: 10,\r\n                max: 30\r\n            },\r\n            speed: {\r\n                min: 1000,\r\n                max: 1400\r\n            },\r\n            maxStage: 3\r\n        },\r\n        {\r\n            name: \"sans\",\r\n            image: \"placeholder\",\r\n            damage: {\r\n                min: 10,\r\n                max: 30\r\n            },\r\n            speed: {\r\n                min: 1000,\r\n                max: 1400\r\n            },\r\n            maxStage: 3\r\n        },\r\n        {\r\n            name: \"owo\",\r\n            image: \"placeholder2\",\r\n            damage: {\r\n                min: 10,\r\n                max: 30\r\n            },\r\n            speed: {\r\n                min: 1000,\r\n                max: 1400\r\n            },\r\n            maxStage: 3\r\n        }\r\n    ],\r\n};\r\n\n\n//# sourceURL=webpack:///./src/data/characters.ts?");

/***/ }),

/***/ "./src/enemy.ts":
/*!**********************!*\
  !*** ./src/enemy.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar entity_1 = __webpack_require__(/*! ./entity */ \"./src/entity.ts\");\r\nvar damageLabel_1 = __webpack_require__(/*! ./components/damageLabel */ \"./src/components/damageLabel.ts\");\r\nvar domMap_1 = __webpack_require__(/*! ./includes/domMap */ \"./src/includes/domMap.ts\");\r\nvar Enemy = /** @class */ (function (_super) {\r\n    __extends(Enemy, _super);\r\n    function Enemy(stats) {\r\n        var _this = _super.call(this) || this;\r\n        _this.statistics = stats;\r\n        _this.healthBar = new domMap_1.default(document.getElementById(\"enemyHPBar\"), \"100%\", \"style\", \"width\");\r\n        _this.HPDisplay = new domMap_1.default(document.getElementById(\"enemyHP\"), _this.hp, \"innerHTML\");\r\n        _this.damageLabelManager = new damageLabel_1.default(document.getElementById(\"damage-taking-box\"));\r\n        _this.updateHPDisplay();\r\n        return _this;\r\n    }\r\n    Enemy.prototype.takeDamageCallbacks = function (dmg) {\r\n        this.damageLabelManager.recieveAttack(dmg);\r\n    };\r\n    Enemy.prototype.updateHealthBar = function () {\r\n        this.healthBar.val = this.statistics.health / this.statistics.max_health * 100 + \"%\";\r\n    };\r\n    return Enemy;\r\n}(entity_1.default));\r\nexports.default = Enemy;\r\n\n\n//# sourceURL=webpack:///./src/enemy.ts?");

/***/ }),

/***/ "./src/entity.ts":
/*!***********************!*\
  !*** ./src/entity.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\r\nvar Entity = /** @class */ (function () {\r\n    function Entity() {\r\n    }\r\n    Object.defineProperty(Entity.prototype, \"hp\", {\r\n        get: function () {\r\n            return this.statistics.health;\r\n        },\r\n        set: function (val) {\r\n            var prevHealth = this.hp;\r\n            this.statistics.health = val;\r\n            if (val < prevHealth) {\r\n                // Recieved Attack\r\n                var diff = prevHealth - val;\r\n                this.takeDamageCallbacks(diff);\r\n            }\r\n            if (val <= 0) {\r\n                index_1.default.nextarea();\r\n            }\r\n            else {\r\n                this.updateHPDisplay();\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Entity.prototype.updateHPDisplay = function () {\r\n        this.HPDisplay.val = this.hp;\r\n        this.updateHealthBar();\r\n    };\r\n    Entity.prototype.giveAttack = function (event) {\r\n        this.foe.hp = this.foe.hp - event.damage;\r\n    };\r\n    Entity.prototype.setFoeContext = function (enemy) {\r\n        this.foe = enemy;\r\n    };\r\n    Entity.prototype.takeDamageCallbacks = function (dmg) { };\r\n    Entity.prototype.updateHealthBar = function () { };\r\n    return Entity;\r\n}());\r\nexports.default = Entity;\r\n\n\n//# sourceURL=webpack:///./src/entity.ts?");

/***/ }),

/***/ "./src/includes/clickListener.ts":
/*!***************************************!*\
  !*** ./src/includes/clickListener.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ClickListener = /** @class */ (function () {\r\n    function ClickListener(target, callback) {\r\n        this.target = target;\r\n        this.callback = callback;\r\n        this.target = target;\r\n        this.callback = callback;\r\n        this.enableListener();\r\n    }\r\n    ClickListener.prototype.enableListener = function () {\r\n        this.target.onclick = this.callback;\r\n    };\r\n    ClickListener.prototype.disableListener = function () {\r\n        this.target.onclick = null;\r\n    };\r\n    return ClickListener;\r\n}());\r\nexports.default = ClickListener;\r\n\n\n//# sourceURL=webpack:///./src/includes/clickListener.ts?");

/***/ }),

/***/ "./src/includes/domMap.ts":
/*!********************************!*\
  !*** ./src/includes/domMap.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar MappedDOM = /** @class */ (function () {\r\n    function MappedDOM(domElement, value, attribute, attributeDeep) {\r\n        this.domElement = domElement;\r\n        this.value = value;\r\n        this.attribute = attribute;\r\n        this.attributeDeep = attributeDeep;\r\n    }\r\n    Object.defineProperty(MappedDOM.prototype, \"dom\", {\r\n        get: function () {\r\n            return this.domElement;\r\n        },\r\n        set: function (val) {\r\n            this.domElement = val;\r\n            this.updateDOMElement();\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(MappedDOM.prototype, \"val\", {\r\n        set: function (val) {\r\n            this.value = val;\r\n            this.updateDOMElement();\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(MappedDOM.prototype, \"attrib\", {\r\n        set: function (val) {\r\n            this.attribute = val;\r\n            this.updateDOMElement();\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    MappedDOM.prototype.updateDOMElement = function () {\r\n        if (this.attributeDeep) {\r\n            this.domElement[this.attribute][this.attributeDeep] = this.value;\r\n        }\r\n        else {\r\n            this.domElement[this.attribute] = this.value;\r\n        }\r\n    };\r\n    return MappedDOM;\r\n}());\r\nexports.default = MappedDOM;\r\n\n\n//# sourceURL=webpack:///./src/includes/domMap.ts?");

/***/ }),

/***/ "./src/includes/userDragManager.ts":
/*!*****************************************!*\
  !*** ./src/includes/userDragManager.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar domMap_1 = __webpack_require__(/*! ./domMap */ \"./src/includes/domMap.ts\");\r\nvar dropzone_1 = __webpack_require__(/*! ../components/dropzone */ \"./src/components/dropzone.ts\");\r\nvar userDraggableManager = /** @class */ (function () {\r\n    function userDraggableManager() {\r\n        var _this = this;\r\n        this.holding = false;\r\n        this.slots = new Array(4);\r\n        this.moveToMouse = function (e) {\r\n            _this.container.dom.style.top = e.y + \"px\";\r\n            _this.container.dom.style.left = e.x + \"px\";\r\n        };\r\n        this.image = new domMap_1.default(document.getElementById(\"mouse-follow-image\"), \"\", \"src\");\r\n        this.container = new domMap_1.default(document.getElementById(\"mouse-follow\"), \"block\", \"style\", \"display\");\r\n        document.addEventListener(\"mousemove\", this.moveToMouse);\r\n        document.addEventListener(\"mouseup\", function () {\r\n            if (_this.targetedDropzone && _this.held) {\r\n                _this.targetedDropzone.recieve(_this.drop());\r\n                return;\r\n            }\r\n            if (_this.revert && _this.held) {\r\n                _this.revert.recieve(_this.drop());\r\n                return;\r\n            }\r\n        });\r\n        this.createDropAreas();\r\n        // this.pickup({\r\n        //     damage: 100,\r\n        //     frequency: 100,\r\n        //     image: \"assets/images/placeholder.png\",\r\n        //     stage: 1\r\n        // }, this.slots[0]);\r\n    }\r\n    Object.defineProperty(userDraggableManager.prototype, \"heldCompanion\", {\r\n        set: function (val) {\r\n            this.held = val;\r\n            if (val) {\r\n                this.holding = true;\r\n                this.container.val = \"block\";\r\n                this.image.val = val.image;\r\n            }\r\n            else {\r\n                this.holding = false;\r\n                this.container.val = \"none\";\r\n                this.image.val = \"\";\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    userDraggableManager.prototype.createDropAreas = function () {\r\n        for (var slot = 0; slot < this.slots.length; slot++) {\r\n            this.slots[slot] = new dropzone_1.Dropzone(document.getElementById(\"slot-\" + (slot + 1)));\r\n        }\r\n    };\r\n    userDraggableManager.prototype.setDropzone = function (dropzone) {\r\n        this.targetedDropzone = dropzone;\r\n    };\r\n    userDraggableManager.prototype.removeDropzone = function () {\r\n        this.targetedDropzone = undefined;\r\n    };\r\n    userDraggableManager.prototype.pickup = function (companion, revertArea) {\r\n        this.heldCompanion = companion;\r\n        this.holding = true;\r\n        this.revert = revertArea;\r\n    };\r\n    userDraggableManager.prototype.drop = function () {\r\n        var companionToDrop = this.held;\r\n        this.heldCompanion = null;\r\n        return companionToDrop;\r\n    };\r\n    userDraggableManager.prototype.isHolding = function () {\r\n        if (this.holding) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    };\r\n    return userDraggableManager;\r\n}());\r\nexports.default = userDraggableManager;\r\n\n\n//# sourceURL=webpack:///./src/includes/userDragManager.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar player_1 = __webpack_require__(/*! ./player */ \"./src/player.ts\");\r\nvar enemy_1 = __webpack_require__(/*! ./enemy */ \"./src/enemy.ts\");\r\nvar statsGenerator_1 = __webpack_require__(/*! ./statsGenerator */ \"./src/statsGenerator.ts\");\r\nvar userDragManager_1 = __webpack_require__(/*! ./includes/userDragManager */ \"./src/includes/userDragManager.ts\");\r\nvar dropzone_1 = __webpack_require__(/*! ./components/dropzone */ \"./src/components/dropzone.ts\");\r\nvar draw_1 = __webpack_require__(/*! ./components/draw */ \"./src/components/draw.ts\");\r\nvar companionSummon_1 = __webpack_require__(/*! ./companionSummon */ \"./src/companionSummon.ts\");\r\n// INFO:\r\n/*\r\n    Firstly, wagwan\r\n\r\n    How the game works:\r\n        - Users attack enemies.\r\n        - Users stats effect damage, stats include:\r\n            - Luck\r\n            - Strength\r\n            - ...\r\n        - After an enemy dies another is created, each enemy is called an \"area\".\r\n        - Every 20 enemies there is a floor boss, after killing it the floor is increased.\r\n*/\r\nvar Game = /** @class */ (function () {\r\n    function Game() {\r\n        var _this = this;\r\n        this.gold = 0;\r\n        this.area = 1;\r\n        this.areaTotal = 1;\r\n        this.floor = 1;\r\n        this.addGold = function () { return _this.gold += statsGenerator_1.StatsGen.generateGold(_this.areaTotal); };\r\n        this.nextarea = function () {\r\n            _this.addGold();\r\n            if (_this.area % 20 == 0) {\r\n                _this.generateEnemy(true);\r\n                _this.floor++;\r\n                _this.area = 1;\r\n            }\r\n            else {\r\n                _this.generateEnemy(false);\r\n                _this.area++;\r\n                _this.areaTotal++;\r\n            }\r\n        };\r\n        this.player = new player_1.default();\r\n        this.generateEnemy();\r\n        this.dropPool = new dropzone_1.DropPool();\r\n        this.userDragManager = new userDragManager_1.default();\r\n        new companionSummon_1.default();\r\n        new draw_1.default(document.getElementById(\"summon-draw\"), \"summon\");\r\n    }\r\n    Game.prototype.generateEnemy = function (boss) {\r\n        if (boss === void 0) { boss = false; }\r\n        if (boss) {\r\n            this.currentEnemy = new enemy_1.default(statsGenerator_1.StatsGen.generateBossStats(this.floor, this.area));\r\n        }\r\n        else {\r\n            this.currentEnemy = new enemy_1.default(statsGenerator_1.StatsGen.generateEnemyStats(this.areaTotal));\r\n        }\r\n        this.player.setFoeContext(this.currentEnemy);\r\n        this.currentEnemy.setFoeContext(this.player);\r\n    };\r\n    return Game;\r\n}());\r\nvar GAME = new Game();\r\nexports.default = GAME;\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar entity_1 = __webpack_require__(/*! ./entity */ \"./src/entity.ts\");\r\nvar clickListener_1 = __webpack_require__(/*! ./includes/clickListener */ \"./src/includes/clickListener.ts\");\r\nvar attackButton = document.getElementById(\"click\");\r\nvar Player = /** @class */ (function (_super) {\r\n    __extends(Player, _super);\r\n    function Player() {\r\n        var _this = _super.call(this) || this;\r\n        _this.level = 1;\r\n        //Defaults\r\n        _this.statistics = {\r\n            max_health: 100,\r\n            health: 100,\r\n            base_damage: 3,\r\n            exp: 0,\r\n            exp_to_next: 20,\r\n        };\r\n        new clickListener_1.default(attackButton, function () {\r\n            _this.giveAttack({\r\n                damage: _this.statistics.base_damage\r\n            });\r\n        });\r\n        return _this;\r\n    }\r\n    return Player;\r\n}(entity_1.default));\r\nexports.default = Player;\r\n\n\n//# sourceURL=webpack:///./src/player.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.settings = {\r\n    damageVariance: 0.2\r\n};\r\nexports.GAMESETTINGS = {\r\n    assetRoot: \"assets/images/\",\r\n    imageExtension: \".png\",\r\n    dropChance: {\r\n        Legendary: 10,\r\n        Rare: 25,\r\n        Common: 65\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/settings.ts?");

/***/ }),

/***/ "./src/statsGenerator.ts":
/*!*******************************!*\
  !*** ./src/statsGenerator.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar StatsGenerator = /** @class */ (function () {\r\n    function StatsGenerator() {\r\n    }\r\n    StatsGenerator.prototype.generateEnemyStats = function (area) {\r\n        var stats;\r\n        var max_health = Math.ceil((4 + ((area * 100) / 80 * 10) / 2) / 10) * 10;\r\n        var health = max_health;\r\n        stats = {\r\n            max_health: max_health,\r\n            health: health\r\n        };\r\n        return stats;\r\n    };\r\n    ;\r\n    StatsGenerator.prototype.generateBossStats = function (floor, area) {\r\n        var stats;\r\n        var baseFloorHealth = floor * 100;\r\n        var max_health = baseFloorHealth + (area * 100) / 80;\r\n        var health = max_health;\r\n        stats = {\r\n            max_health: max_health,\r\n            health: health\r\n        };\r\n        return stats;\r\n    };\r\n    ;\r\n    StatsGenerator.prototype.generateGold = function (area) {\r\n        var gold;\r\n        gold = area * 10;\r\n        return gold;\r\n    };\r\n    ;\r\n    return StatsGenerator;\r\n}());\r\nexports.StatsGen = new StatsGenerator();\r\n\n\n//# sourceURL=webpack:///./src/statsGenerator.ts?");

/***/ })

/******/ });