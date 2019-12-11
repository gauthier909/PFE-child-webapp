(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<body>\r\n  <router-outlet></router-outlet>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/channel/channel.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/channel/channel.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"channel\">\r\n    <!-- <p id=\"chat\" *ngFor=\"let msg of messages; index as i\">\r\n            <li>{{msg}}</li>    \r\n    </p> -->\r\n\r\n    <!-- <input #box type=\"text\" (keyup)=\"onChange(box.value)\">\r\n    <button (click)=\"sendMsg()\">Send msg</button> -->\r\n\r\n\r\n    <div class=\"container-sm\">\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-sm-auto\" style=\"border: 1px solid black;\">\r\n                PREMIERE COLONNE\r\n            </div>\r\n            <div class=\"col-sm\" style=\"border: 1px solid green;\">\r\n                MIDDLE COLONNE\r\n            </div>\r\n            <div class=\"col-sm-auto\" style=\"border: 1px solid blue;\">\r\n                TROISIEME C0LONNE\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/choix-categorie/choix-categorie.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choix-categorie/choix-categorie.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Choisi la catégorie dont tu voudrais parler ! :)</h2>\r\n<div class=\"listCat\">\r\n<ul *ngFor=\"let cat of categories;let i = index\" [attr.data-index]=\"i\">\r\n    <li><button class=\"btn btn-outline-dark btn-primary btn-block\" (click)=\"clickChoixCat(cat)\">{{cat}}</button></li>\r\n    <img [src]=\"cheminImages[i]\" (click)=\"clickChoixCat(cat) \" class=\"rounded-circle img-fluid\">\r\n</ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/choix-habitude/choix-habitude.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choix-habitude/choix-habitude.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<blockquote>\r\n<h2>Tu as choisi la catégorie {{choixCat}} !</h2>\r\n<footer class=\"blockquote-footer\"><h3>Quelles habitudes sont présentes dans ta vie quotidienne ?</h3></footer>\r\n</blockquote>\r\n<!--<ul *ngFor=\"let image of tabImagesCategorie\">\r\n<li>\r\n    <img [src]=\"image\">\r\n</li>\r\n</ul>-->\r\n<img [src]=\"tabImagesCategorie[indexImage] \"class=\"rounded-circle img-fluid\">\r\n<div class=\"reponse\">\r\n    <button class=\"btn btn-success align-content-center\" (click)=\"onOui()\">Oui</button>\r\n    <button class=\"btn btn-danger align-content-center\" (click)=\"onNon()\">Non</button>\r\n    <button class=\"btn btn-warning align-content-center\" (click)=\"onJeVoudrais()\">Je voudrais</button>\r\n</div>\r\n<!--<button routerLink=\"/partie\"> Jouer</button> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fin-partie/fin-partie.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fin-partie/fin-partie.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Félicitation tu as terminé la partie !</h2>\r\n<img src=\"../../assets/felicitation.jpg\" class=\"img-fluid\">\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lets-play/lets-play.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lets-play/lets-play.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<button routerLink=\"/choixCategorie\" class=\"btn-link\">\r\n  Viens jouer !\r\n</button>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partie/partie.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partie/partie.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Tu as choisi la catégorie : {{choixCat}} ! </h1>\r\n<!---- <div *ngFor=\"let filtre of ordreFiltre\" class=\"mainFrame\">\r\n    <h2>{{filtre}}</h2>\r\n<img [src]=\"images[index].nom\">\r\n<img src=\"/images/deplacements/bus.jpg\">\r\n<img class=\"logo\" [src]=\"(imgPath + imgFileName)\" />\r\n\r\n<div class=\"reponse\">\r\n    <button class=\"btn btn-primary\" (click)=\"onOui()\">Oui</button>\r\n    <button class=\"btn btn-primary\" (click)=\"onNon()\">Non</button>\r\n    <button class=\"btn btn-primary\" (click)=\"onJsp()\">Je ne sais pas</button>\r\n</div>\r\n</div>\r\n-->\r\n\r\n<div *ngIf=\"isOnAime\" class=\"align-items-lg-center\">\r\n  <small class=\"text-muted\"><h2>Est-ce que j'aime..</h2></small>\r\n    <img [src]=\"tabImageJeu[indexImage]\" class=\"rounded-circle img-fluid\">\r\n</div>\r\n<div *ngIf=\"isOnAide\" class=\"align-items-lg-center\">\r\n    <!-- <app-filtre-aide ></app-filtre-aide> -->\r\n  <small class=\"text-muted\"><h2>Est-ce que j'ai besoin d'aide..</h2></small>\r\n    <img [src]=\"tabImageJeu[indexImage]\" class=\"rounded-circle img-fluid\">\r\n\r\n</div>\r\n<div *ngIf=\"isOnContent\" class=\"align-items-lg-center\">\r\n  <small class=\"text-muted\"><h2>Est-ce que je suis content..</h2></small>\r\n    <img [src]=\"tabImageJeu[indexImage]\" class=\"rounded-circle img-fluid\">\r\n\r\n</div>\r\n\r\n<div class=\"reponse\" class=\"align-content-lg-center\">\r\n   <button class=\"btn btn-success rounded-circle\" (click)=\"onOui()\">Oui</button>\r\n    <button class=\"btn btn-danger rounded-circle\" (click)=\"onNon()\">Non</button>\r\n   <button class=\"btn btn-warning rounded-circle\" (click)=\"onJsp()\">Je ne sais pas</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lets_play_lets_play_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lets-play/lets-play.component */ "./src/app/lets-play/lets-play.component.ts");
/* harmony import */ var _partie_partie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partie/partie.component */ "./src/app/partie/partie.component.ts");
/* harmony import */ var _choix_categorie_choix_categorie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choix-categorie/choix-categorie.component */ "./src/app/choix-categorie/choix-categorie.component.ts");
/* harmony import */ var _choix_habitude_choix_habitude_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choix-habitude/choix-habitude.component */ "./src/app/choix-habitude/choix-habitude.component.ts");
/* harmony import */ var _fin_partie_fin_partie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fin-partie/fin-partie.component */ "./src/app/fin-partie/fin-partie.component.ts");








const routes = [
    { path: '', component: _lets_play_lets_play_component__WEBPACK_IMPORTED_MODULE_3__["LetsPlayComponent"] },
    { path: 'letsPlay', component: _lets_play_lets_play_component__WEBPACK_IMPORTED_MODULE_3__["LetsPlayComponent"] },
    { path: 'partie', component: _partie_partie_component__WEBPACK_IMPORTED_MODULE_4__["PartieComponent"] },
    { path: 'choixCategorie', component: _choix_categorie_choix_categorie_component__WEBPACK_IMPORTED_MODULE_5__["ChoixCategorieComponent"] },
    { path: 'choixHabitude', component: _choix_habitude_choix_habitude_component__WEBPACK_IMPORTED_MODULE_6__["ChoixHabitudeComponent"] },
    { path: 'finPartie', component: _fin_partie_fin_partie_component__WEBPACK_IMPORTED_MODULE_7__["FinPartieComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n\r\n  background-image: linear-gradient(to right top, #bdcad4, #95b4cf, #6f9dca, #4885c5, #176dbe);\r\n    color:seagreen;\r\n    margin: auto;\r\n    width: auto;\r\n    height: 2000px;\r\n    font-family: \"Comic Sans MS\";\r\n    text-align: center;\r\n}\r\n\r\na{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translateX(-50%) translateY(-50%);\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n}\r\n\r\nh1 {\r\n    font-size: 1.2em;\r\n    margin-bottom: 0;\r\n  }\r\n\r\nh2 {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n  }\r\n\r\na:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n  }\r\n\r\na.active {\r\n    color: #039be5;\r\n  }\r\n\r\n.arrondie2 {\r\n  border:2px solid black;\r\n  border-radius:7px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsNEZBQTRGO0lBQzFGLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBR1QsNENBQTRDO0lBQzVDLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztFQUNoQjs7QUFDQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7O0FBQ0E7SUFDRSxjQUFjO0VBQ2hCOztBQUNGO0VBQ0Usc0JBQXNCO0VBR3RCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI2JkY2FkNCwgIzk1YjRjZiwgIzZmOWRjYSwgIzQ4ODVjNSwgIzE3NmRiZSk7XHJcbiAgICBjb2xvcjpzZWFncmVlbjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyMDAwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMzliZTU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG4gIH1cclxuICBhLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzAzOWJlNTtcclxuICB9XHJcbi5hcnJvbmRpZTIge1xyXG4gIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOjdweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6N3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6N3B4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var src_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/socket.service */ "./src/services/socket.service.ts");




let AppComponent = class AppComponent {
    constructor(swUpdate, socketService) {
        this.swUpdate = swUpdate;
        this.socketService = socketService;
        this.title = 'front-enfant';
    }
    ngOnInit() {
        this.socketService.socketInit();
        this.reloadCache();
    }
    //update l'appli des qu'il y a un changment (pwa)
    reloadCache() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if (confirm("New version available! Update ?")) {
                    window.location.reload();
                }
            });
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"] },
    { type: src_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lets_play_lets_play_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lets-play/lets-play.component */ "./src/app/lets-play/lets-play.component.ts");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channel/channel.component.ts");
/* harmony import */ var _partie_partie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partie/partie.component */ "./src/app/partie/partie.component.ts");
/* harmony import */ var _choix_categorie_choix_categorie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./choix-categorie/choix-categorie.component */ "./src/app/choix-categorie/choix-categorie.component.ts");
/* harmony import */ var _choix_habitude_choix_habitude_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./choix-habitude/choix-habitude.component */ "./src/app/choix-habitude/choix-habitude.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _fin_partie_fin_partie_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fin-partie/fin-partie.component */ "./src/app/fin-partie/fin-partie.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _lets_play_lets_play_component__WEBPACK_IMPORTED_MODULE_6__["LetsPlayComponent"],
            _channel_channel_component__WEBPACK_IMPORTED_MODULE_7__["ChannelComponent"],
            _partie_partie_component__WEBPACK_IMPORTED_MODULE_8__["PartieComponent"],
            _choix_categorie_choix_categorie_component__WEBPACK_IMPORTED_MODULE_9__["ChoixCategorieComponent"],
            _choix_habitude_choix_habitude_component__WEBPACK_IMPORTED_MODULE_10__["ChoixHabitudeComponent"],
            _fin_partie_fin_partie_component__WEBPACK_IMPORTED_MODULE_13__["FinPartieComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/channel/channel.component.css":
/*!***********************************************!*\
  !*** ./src/app/channel/channel.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWwvY2hhbm5lbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/channel/channel.component.ts":
/*!**********************************************!*\
  !*** ./src/app/channel/channel.component.ts ***!
  \**********************************************/
/*! exports provided: ChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelComponent", function() { return ChannelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);



let ChannelComponent = class ChannelComponent {
    constructor() {
        this.messages = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"]('http://localhost:8081');
        this.socket.on('chat', (data) => {
            console.log("Sur le channel chat on a reçu :", data);
            this.messages.push(data.message);
        });
    }
    ngOnInit() {
    }
    sendMsg() {
        console.log('Send message :', this.textMsg);
        this.socket.emit('chat', {
            message: this.textMsg
        });
    }
    onChange(data) {
        console.log('Changed :', data);
        this.textMsg = data;
    }
};
ChannelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-channel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./channel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/channel/channel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./channel.component.css */ "./src/app/channel/channel.component.css")).default]
    })
], ChannelComponent);



/***/ }),

/***/ "./src/app/choix-categorie/choix-categorie.component.css":
/*!***************************************************************!*\
  !*** ./src/app/choix-categorie/choix-categorie.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    width: 200px;\r\n\theight: 200px;\r\n}\r\n\r\nul{\r\n      width: auto; \r\n      display: inline-block;\r\n      list-style-type: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvaXgtY2F0ZWdvcmllL2Nob2l4LWNhdGVnb3JpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtDQUNmLGFBQWE7QUFDZDs7QUFFQTtNQUNNLFdBQVc7TUFDWCxxQkFBcUI7TUFDckIscUJBQXFCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY2hvaXgtY2F0ZWdvcmllL2Nob2l4LWNhdGVnb3JpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG5cdGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbnVse1xyXG4gICAgICB3aWR0aDogYXV0bzsgXHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/choix-categorie/choix-categorie.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/choix-categorie/choix-categorie.component.ts ***!
  \**************************************************************/
/*! exports provided: ChoixCategorieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoixCategorieComponent", function() { return ChoixCategorieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_services_categorie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/categorie.service */ "./src/services/categorie.service.ts");





let ChoixCategorieComponent = class ChoixCategorieComponent {
    constructor(gameService, router, categorieService) {
        this.gameService = gameService;
        this.router = router;
        this.categorieService = categorieService;
        this.cheminImages = [''];
    }
    ngOnInit() {
        this.getCategories();
        //console.log(this.categories)
        this.getCheminImage();
        this.gameService.currentMessage.subscribe(choixCat => this.choixCat = choixCat);
    }
    clickChoixCat(value) {
        console.log(value);
        this.choixCat = value;
        this.gameService.updateChoix(this.choixCat);
        this.router.navigateByUrl('/choixHabitude');
    }
    getCategories() {
        this.categorieService.getCategories().subscribe(categories => {
            this.categories = categories;
            console.log(this.categories);
            this.categories.sort();
            this.categories.forEach(cat => {
                console.log('categorie:' + cat);
                // this.categorieService.getCheminImageByCategorie(cat).subscribe(chemin =>{
                this.categorieService.getCheminImageByCategorie(cat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).subscribe(chemin => {
                    let vraiChemin = '';
                    for (let i = 0; i < chemin.length; i++) {
                        vraiChemin += chemin[i];
                    }
                    console.log('vrai chemin:' + vraiChemin);
                    this.cheminImages.push(vraiChemin);
                    this.cheminImages.sort();
                    //console.log(this.cheminImages)
                });
                this.cheminImages.shift();
                console.log(this.cheminImages);
            });
        });
    }
    //retourne un tableau du chemin de la première image de chaque categorie
    getCheminImage() {
        //console.log(this.categories)
        /* this.categories.forEach(cat => {
           console.log(this.categorieService.getCheminImageByCategorie(cat));
       });*/
    }
};
ChoixCategorieComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_services_categorie_service__WEBPACK_IMPORTED_MODULE_4__["CategorieService"] }
];
ChoixCategorieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choix-categorie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./choix-categorie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/choix-categorie/choix-categorie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./choix-categorie.component.css */ "./src/app/choix-categorie/choix-categorie.component.css")).default]
    })
], ChoixCategorieComponent);



/***/ }),

/***/ "./src/app/choix-habitude/choix-habitude.component.css":
/*!*************************************************************!*\
  !*** ./src/app/choix-habitude/choix-habitude.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    width: 400px;\r\n\theight: 400px;\r\n}\r\nbutton{\r\n    margin: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvaXgtaGFiaXR1ZGUvY2hvaXgtaGFiaXR1ZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7Q0FDZixhQUFhO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jaG9peC1oYWJpdHVkZS9jaG9peC1oYWJpdHVkZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG5cdGhlaWdodDogNDAwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/choix-habitude/choix-habitude.component.ts":
/*!************************************************************!*\
  !*** ./src/app/choix-habitude/choix-habitude.component.ts ***!
  \************************************************************/
/*! exports provided: ChoixHabitudeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoixHabitudeComponent", function() { return ChoixHabitudeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ChoixHabitudeComponent = class ChoixHabitudeComponent {
    constructor(gameService, router) {
        this.gameService = gameService;
        this.router = router;
        this.indexImage = 0;
        this.tabImagesHabitudePresente = [];
    }
    ngOnInit() {
        this.indexImage = 0;
        this.gameService.currentMessage.subscribe(choixCat => this.choixCat = choixCat);
        this.gameService.getAllImagesByCategorie(this.choixCat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).subscribe(images => {
            this.tabImagesCategorie = images;
            console.log(this.tabImagesCategorie);
        });
    }
    onOui() {
        this.tabImagesHabitudePresente.push(this.tabImagesCategorie[this.indexImage]);
        this.indexImage++;
        if (this.indexImage >= this.tabImagesCategorie.length) {
            this.gameService.tabImageHabitude = this.tabImagesHabitudePresente;
            console.log("on passe à la partie");
            console.log(this.tabImagesHabitudePresente);
            this.router.navigateByUrl('/partie');
        }
    }
    onNon() {
        this.indexImage++;
        if (this.indexImage >= this.tabImagesCategorie.length) {
            this.gameService.tabImageHabitude = this.tabImagesHabitudePresente;
            //console.log(this.tabImagesHabitudePresente)
            //console.log(this.gameService.tabImageHabitude)
            console.log("on passe à la partie");
            this.router.navigateByUrl('/partie');
        }
    }
    onJeVoudrais() {
        this.indexImage++;
        if (this.indexImage >= this.tabImagesCategorie.length) {
            this.gameService.tabImageHabitude = this.tabImagesHabitudePresente;
            console.log(this.tabImagesHabitudePresente);
            console.log("on passe à la partie");
            this.router.navigateByUrl('/partie');
        }
    }
};
ChoixHabitudeComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ChoixHabitudeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choix-habitude',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./choix-habitude.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/choix-habitude/choix-habitude.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./choix-habitude.component.css */ "./src/app/choix-habitude/choix-habitude.component.css")).default]
    })
], ChoixHabitudeComponent);



/***/ }),

/***/ "./src/app/fin-partie/fin-partie.component.css":
/*!*****************************************************!*\
  !*** ./src/app/fin-partie/fin-partie.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translateX(-50%) translateY(-50%);\r\n    color: deeppink;\r\n  }\r\n  img{\r\n    width: 50%;\r\n    margin: 20px;\r\n    border:2px solid black;\r\n    border-radius:7px;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluLXBhcnRpZS9maW4tcGFydGllLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFHVCw0Q0FBNEM7SUFDNUMsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFHdEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvZmluLXBhcnRpZS9maW4tcGFydGllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjb2xvcjogZGVlcHBpbms7XHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOjdweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czo3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjdweDtcclxuICB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/fin-partie/fin-partie.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fin-partie/fin-partie.component.ts ***!
  \****************************************************/
/*! exports provided: FinPartieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinPartieComponent", function() { return FinPartieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinPartieComponent = class FinPartieComponent {
    constructor() { }
    ngOnInit() {
    }
};
FinPartieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fin-partie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fin-partie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fin-partie/fin-partie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fin-partie.component.css */ "./src/app/fin-partie/fin-partie.component.css")).default]
    })
], FinPartieComponent);



/***/ }),

/***/ "./src/app/lets-play/lets-play.component.css":
/*!***************************************************!*\
  !*** ./src/app/lets-play/lets-play.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nbutton {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translateX(-50%) translateY(-50%);\r\n    display:block;\r\n    height: 300px;\r\n    width: 300px;\r\n    border-radius: 50%;\r\n    background-color: aquamarine;\r\n    border: 1px solid blue;\r\n    font-family: \"Comic Sans MS\";\r\n    font-size: 250%;\r\n    color: #0d47a1;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV0cy1wbGF5L2xldHMtcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUdULDRDQUE0QztJQUM1QyxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sZXRzLXBsYXkvbGV0cy1wbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCI7XHJcbiAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgICBjb2xvcjogIzBkNDdhMTtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/lets-play/lets-play.component.ts":
/*!**************************************************!*\
  !*** ./src/app/lets-play/lets-play.component.ts ***!
  \**************************************************/
/*! exports provided: LetsPlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetsPlayComponent", function() { return LetsPlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/services/game.service.ts");



let LetsPlayComponent = class LetsPlayComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
};
LetsPlayComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
];
LetsPlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lets-play',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lets-play.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lets-play/lets-play.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lets-play.component.css */ "./src/app/lets-play/lets-play.component.css")).default]
    })
], LetsPlayComponent);



/***/ }),

/***/ "./src/app/partie/partie.component.css":
/*!*********************************************!*\
  !*** ./src/app/partie/partie.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button{\r\nmargin: 10px;\r\n}\r\n\r\n/*.mainFrame{\r\n    position: absolute;\r\n    height: 200px;\r\n    width: 400px;\r\n    margin: -100px 0 0 -200px;\r\n    top: 50%;\r\n    left: 50%;\r\n\r\n}*/\r\n\r\n.mainFrame{\r\n    margin: 20px;\r\n}\r\n\r\nimg{\r\n    width: 400px;\r\n\theight: 400px;\r\n  border:2px solid black;\r\n  border-radius:7px;\r\n}\r\n\r\nbody{\r\nbackground-image: linear-gradient(to right top, #ff7d0e, #fc9900, #f5b300, #eacd00, #dce528);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGllL3BhcnRpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsWUFBWTtBQUNaOztBQUVBOzs7Ozs7OztFQVFFOztBQUVGO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7Q0FDZixhQUFhO0VBQ1osc0JBQXNCO0VBR3RCLGlCQUFpQjtBQUNuQjs7QUFDQTtBQUNBLDRGQUE0RjtBQUM1RiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpZS9wYXJ0aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxubWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4vKi5tYWluRnJhbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAtMTAwcHggMCAwIC0yMDBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG5cclxufSovXHJcblxyXG4ubWFpbkZyYW1le1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcblx0aGVpZ2h0OiA0MDBweDtcclxuICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czo3cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjdweDtcclxuICBib3JkZXItcmFkaXVzOjdweDtcclxufVxyXG5ib2R5e1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjZmY3ZDBlLCAjZmM5OTAwLCAjZjViMzAwLCAjZWFjZDAwLCAjZGNlNTI4KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/partie/partie.component.ts":
/*!********************************************!*\
  !*** ./src/app/partie/partie.component.ts ***!
  \********************************************/
/*! exports provided: PartieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartieComponent", function() { return PartieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/socket.service */ "./src/services/socket.service.ts");





let PartieComponent = class PartieComponent {
    constructor(gameService, router, socket) {
        this.gameService = gameService;
        this.router = router;
        this.socket = socket;
        this.isOnAime = false; //Pour permettre l'affichage du bon filtre au bon moment
        this.isOnAide = false;
        this.isOnContent = false;
        this.ordreFiltre = []; //tableau contenant l'odre dans lequel les filtres apparaissent
        this.tabImageJeu = []; // le tableau contenant le chemin des tout les images qui sont une habitude dans sa vie
        this.indexImage = 0;
        this.indexFiltre = 0;
        //this.ordreFiltre = gameService.ordreFiltreDefault;
    }
    ngOnInit() {
        if (this.socket.message === undefined || this.socket.message.message[0] === undefined || this.socket.message.message.length <= 0) {
            console.log('socket vide, lancer le tableau par defaut');
            this.ordreFiltre = this.gameService.ordreFiltreDefault;
        }
        else {
            console.log('Tableau filtre reçu !');
            for (let i = 0; i < this.socket.message.message.length; i++) {
                console.log(this.socket.message.message[i].filtrePositif);
                this.ordreFiltre.push(this.socket.message.message[i].filtrePositif.trim());
            }
            console.log('tab:' + this.ordreFiltre);
        }
        this.gameService.currentMessage.subscribe(choixCat => this.choixCat = choixCat);
        this.tabImageJeu = this.gameService.tabImageHabitude;
        this.filtre = this.ordreFiltre[this.indexFiltre];
        this.switchFiltre();
    }
    onOui() {
        let nomCurrentImage = this.tabImageJeu[this.indexImage];
        let choix = {
            nomImage: nomCurrentImage,
            valeur: 0
        };
        this.insertFiltre("", this.ordreFiltre[this.indexFiltre], choix);
        if (this.indexImage + 1 >= this.tabImageJeu.length) {
            this.indexFiltre++;
            this.switchFiltre();
            if (this.indexFiltre >= this.ordreFiltre.length) {
                //fin partie
                console.log("fin partie");
                this.router.navigateByUrl('/finPartie');
            }
        }
        else {
            this.indexImage++;
        }
    }
    onNon() {
        let nomCurrentImage = this.tabImageJeu[this.indexImage];
        let choix = {
            nomImage: nomCurrentImage,
            valeur: 1
        };
        this.insertFiltre("", this.ordreFiltre[this.indexFiltre], choix);
        if (this.indexImage + 1 >= this.tabImageJeu.length) {
            this.indexFiltre++;
            this.switchFiltre();
            if (this.indexFiltre >= this.ordreFiltre.length) {
                //fin partie
                console.log("fin partie");
                this.router.navigateByUrl('/finPartie');
            }
        }
        else {
            this.indexImage++;
        }
    }
    onJsp() {
        let nomCurrentImage = this.tabImageJeu[this.indexImage];
        let choix = {
            nomImage: nomCurrentImage,
            valeur: 2
        };
        this.insertFiltre("", this.ordreFiltre[this.indexFiltre], choix);
        if (this.indexImage + 1 >= this.tabImageJeu.length) {
            this.switchFiltre();
            this.indexFiltre++;
            if (this.indexFiltre >= this.ordreFiltre.length) {
                //fin partie
                console.log("fin partie");
                this.router.navigateByUrl('/finPartie');
            }
        }
        else {
            this.indexImage++;
        }
    }
    insertFiltre(commentaire, nom, choix) {
        //console.log('insertion from component')
        this.gameService.insertFiltre({ commentaire, nom, choix }).subscribe(filtre => {
            console.log('insert filtre');
        });
    }
    switchFiltre() {
        //console.log(this.tabImageJeu[0])
        console.log('switch');
        this.indexImage = 0;
        console.log(this.tabImageJeu);
        if (this.ordreFiltre[this.indexFiltre] === 'J\'aime') {
            this.isOnAide = false;
            this.isOnContent = false;
            this.isOnAime = true;
        }
        if (this.ordreFiltre[this.indexFiltre] === 'Sans aide') {
            this.isOnAime = false;
            this.isOnContent = false;
            this.isOnAide = true;
        }
        if (this.ordreFiltre[this.indexFiltre] === 'Je suis content') {
            this.isOnAime = false;
            this.isOnAide = false;
            this.isOnContent = true;
        }
    }
};
PartieComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }
];
PartieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partie/partie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partie.component.css */ "./src/app/partie/partie.component.css")).default]
    })
], PartieComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/services/categorie.service.ts":
/*!*******************************************!*\
  !*** ./src/services/categorie.service.ts ***!
  \*******************************************/
/*! exports provided: CategorieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieService", function() { return CategorieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let CategorieService = class CategorieService {
    constructor(http) {
        this.http = http;
        this.categorieUrl = 'http://localhost:8080/categories'; // URL to web api
        this.cheminCategorieUrl = 'http://localhost:8080/categories/cheminImage';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    // Get all categorie 
    getCategories() {
        this.mesCategories = this.http.get(this.categorieUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('fetched categorie')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCategorie', [])));
        return this.mesCategories;
    }
    //retourne le premier chemin d'une categorie de la collection image
    getCheminImageByCategorie(categorie) {
        const url = `${this.cheminCategorieUrl}/${categorie}`;
        this.cheminImageCategorie = this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('fetched chemin categorie')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCheminCategorie', [])));
        return this.cheminImageCategorie;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
CategorieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategorieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategorieService);



/***/ }),

/***/ "./src/services/game.service.ts":
/*!**************************************!*\
  !*** ./src/services/game.service.ts ***!
  \**************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let GameService = class GameService {
    constructor(http) {
        this.http = http;
        this.partieUrl = 'http://localhost:8080/partie';
        this.filtreUrl = 'http://localhost:8080/partie/filtre';
        this.imageCategorieUrl = 'http://localhost:8080/partie/imagesCategorie';
        this.choixCat = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
        this.currentMessage = this.choixCat.asObservable();
        this.ordreFiltreDefault = ['J\'aime', 'Sans aide', 'Je suis content'];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    updateChoix(choixCat) {
        this.choixCat.next(choixCat);
    }
    insertFiltre(filtre) {
        //console.log('insert filtre from service')
        return this.http.post(this.filtreUrl, filtre, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((newFiltre) => console.log(`added filtre w/ id=${newFiltre._id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addFiltre')));
    }
    getAllImagesByCategorie(categorie) {
        const url = `${this.imageCategorieUrl}/${categorie}`;
        this.tabImageCategorie = this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('fetched chemin image categorie')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCheminImageCategorie', [])));
        return this.tabImageCategorie;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
GameService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GameService);



/***/ }),

/***/ "./src/services/socket.service.ts":
/*!****************************************!*\
  !*** ./src/services/socket.service.ts ***!
  \****************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);



const IO_ROUTE = "http://localhost:8081";
const IO_ROOM = "testRoom";
let SocketService = class SocketService {
    constructor() { }
    /**
     * L'initialisation de la connection + ajout des listeners
     */
    socketInit() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(IO_ROUTE);
        this.socket.emit("joinRoom", IO_ROOM);
        this.socket.on("message", (message) => {
            this.message = message;
            console.log("[SOCKET] Message recu : ", this.message);
        });
    }
    /**
     * Permet d'envoyer un message au front-end du professionnel via le backend
     * @param message Le message que l'on souhaite envoyer au front-end du professionnel
     */
    sendMessage(message) {
        this.socket.emit("message", ({ room: IO_ROOM, message: message }));
    }
};
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\a\child\pfe-webapp-child\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map