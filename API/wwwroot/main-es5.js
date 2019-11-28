(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--Navigation Bar-->\n<app-nav-component></app-nav-component>\n<!--/Navigation Bar-->\n\n<!--Routing-->\n<router-outlet></router-outlet>\n<!--/Routing-->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carousel-component/carousel-component.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/carousel-component/carousel-component.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--Carousel Wrapper-->\n<div id=\"carousel-example-2\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n    <!--Indicators-->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carousel-example-2\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carousel-example-2\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carousel-example-2\" data-slide-to=\"2\"></li>\n    </ol>\n    <!--/.Indicators-->\n    <!--Slides-->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item active\">\n        <div class=\"view\">\n          <img class=\"d-block w-100 carouselSize\" src=\"./../../../assets/carousel1.jpg\"\n            alt=\"First slide\">\n          <div class=\"mask rgba-black-slight\"></div>\n        </div>\n        <div class=\"carousel-caption carouselText\">\n          <h3 class=\"h3-responsive\">New Contact-List platform!</h3>\n          <p>Get in touch easily!</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <!--Mask color-->\n        <div class=\"view\">\n          <img class=\"d-block w-100 carouselSize\" src=\"./../../../assets/carousel2.png\"\n            alt=\"Second slide\">\n          <div class=\"mask rgba-black-slight\"></div>\n        </div>\n        <div class=\"carousel-caption carouselText\">\n          <h3 class=\"h3-responsive\">API REST</h3>\n          <p>Fast and simple!</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <!--Mask color-->\n        <div class=\"view\">\n          <img class=\"d-block w-100 carouselSize\" src=\"./../../../assets/carousel3.jpg\"\n            alt=\"Third slide\">\n          <div class=\"mask rgba-black-slight\"></div>\n        </div>\n        <div class=\"carousel-caption carouselText\">\n          <h3 class=\"h3-responsive\">Brings people closer</h3>\n          <p>Keep in touch in seconds!</p>\n        </div>\n      </div>\n    </div>\n    <!--/.Slides-->\n    <!--Controls-->\n    <a class=\"carousel-control-prev\" href=\"#carousel-example-2\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carousel-example-2\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n    <!--/.Controls-->\n  </div>\n  <!--/.Carousel Wrapper-->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-component/contact-component.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-component/contact-component.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Material form contact -->\n<div class=\"jumbotron\">\n<div class=\"card\">\n\n    <h5 class=\"card-header heavy-rain-gradient dark-text text-center py-4\">\n        <strong>New Contact</strong>\n    </h5>\n\n    <!--Card content-->\n    <div class=\"card-body px-lg-5 pt-0\">\n\n        <!-- Form -->\n        <form name=\"ngModel\"  class=\"text-center\" style=\"color: #757575;\" action=\"#!\">\n\n        <!-- PImage -->\n        <div class=\"md-form mt-3\">\n            <img class=\"profileImage\"  src=\"{{contact.profileImage}}\" alt=\"\">\n            <input name=\"imageInp\" [(ngModel)]=\"contact.profileImage\" type=\"text\" id=\"materialContactFormImage\" class=\"form-control\">\n            <label for=\"materialContactFormImage\">Image URL</label>\n        </div>\n\n            <!-- Name -->\n            <div class=\"md-form mt-3\">\n                <input name=\"nameInp\" [(ngModel)]=\"contact.name\" type=\"text\" id=\"materialContactFormName\" class=\"form-control\">\n                <label for=\"materialContactFormName\">Full Name</label>\n            </div>\n\n            <!-- Date -->\n            <div class=\"md-form\">\n                <input name=\"dateInp\" [(ngModel)]=\"contact.birthDate\" type=\"date\" id=\"materialContactFormDate\" class=\"form-control\">\n            </div>\n\n            <!-- Company -->\n            <div class=\"md-form\">\n                <input name=\"compInp\" [(ngModel)]=\"contact.company\" type=\"text\" id=\"materialContactFormCompany\" class=\"form-control\">\n                <label for=\"materialContactFormName\">Company</label>\n            </div>\n\n             <!-- Phone Number -->\n             <div class=\"md-form\">\n                <input name=\"phonenumberInp\" [(ngModel)]=\"contact.phoneNumber\" type=\"text\" id=\"materialContactFormNumber\" class=\"form-control\">\n                <label for=\"materialContactFormNumber\">Phone Number</label>\n            </div>\n\n            <!-- E-mail -->\n            <div class=\"md-form\">\n                <input name=\"emailInp\" [(ngModel)]=\"contact.email\" type=\"email\" id=\"materialContactFormEmail\" class=\"form-control\">\n                <label for=\"materialContactFormEmail\">E-mail</label>\n            </div>\n\n            <!-- Street -->\n            <div class=\"md-form\">\n                <input name=\"streetInp\" [(ngModel)]=\"contact.street\" type=\"text\" id=\"materialContactFormStreet\" class=\"form-control\">\n                <label for=\"materialContactFormStreet\">Street</label>\n            </div>\n\n            <!-- City -->\n            <div class=\"md-form\">\n                <input name=\"cityInp\" [(ngModel)]=\"contact.city\" type=\"text\" id=\"materialContactFormCity\" class=\"form-control\">\n                <label for=\"materialContactFormCity\">City</label>\n            </div>\n\n            <!-- State -->\n            <div class=\"md-form\">\n                <input name=\"stateInp\"  [(ngModel)]=\"contact.state\" type=\"text\" id=\"materialContactFormState\" class=\"form-control\">\n                <label for=\"materialContactFormState\">State</label>\n            </div>\n\n            <!-- Send button -->\n            <button (click)=\"postContact()\" class=\"btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect\" type=\"submit\">Create!</button>\n            <button (click)=\"reload()\" class=\"btn btn-outline-danger btn-rounded btn-block z-depth-0 my-4 waves-effect\" type=\"submit\">Cancel</button>\n\n        </form>\n        <!-- Form -->\n\n    </div>\n\n</div>\n</div>\n<!-- Material form contact -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-component/home-component.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-component/home-component.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-carousel-component></app-carousel-component>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-component/nav-component.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-component/nav-component.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm bg-light navbar-light\">\n    <img class=\"logoLayout\" src=\"./../../../assets/solsticelogo_color.svg\" alt=\"\">\n  <ul class=\"navbar-nav\">  \n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"contactList\">Contact List</a>\n    </li>\n  </ul>\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-component/table-component.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-component/table-component.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"tableShow && !addShow\">\n<div class=\"jumbotron\">\n    <button (click)=\"switchTableAndAdd()\" type=\"button\" class=\"btn btn-primary\">Add</button>\n<table id=\"contactsTable\" class=\"table table-striped table-bordered table-sm\" cellspacing=\"0\" width=\"60%\">\n    <thead>\n      <tr>\n        <th></th>\n        <th class=\"th-sm\">Full Name</th>\n        <th class=\"th-sm\">Birth Date</th>\n        <th class=\"th-sm\">Company</th>\n        <th class=\"th-sm\">Phone Number</th>\n        <th class=\"th-sm\">Email</th>\n        <th class=\"th-sm\">Address</th>\n        <th class=\"th-sm\">State</th>\n        <th class=\"th-sm\"></th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let item of contacts\">\n      <tr>\n        <td><img class=\"profileImage\" src=\"{{item.profileImage}}\" alt=\"\"></td>\n        <td>{{item.name}}</td>\n        <td>{{item.birthDate | date}}</td>\n        <td>{{item.company}}</td>\n        <td>{{item.phoneNumber}} - {{item.phoneType}}</td>\n        <td>{{item.email}}</td>\n        <td>{{item.street}} , {{item.city}}</td>\n        <td>{{item.state}}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-info\">Update</button>\n          &nbsp;\n          <button (click)=\"deleteContact(item)\" type=\"button\" class=\"btn btn-danger\">Delete</button>\n        </td>\n      </tr>  \n    </tbody>\n  </table>\n</div>\n</div>\n\n<!--POST-ADD-->\n<div *ngIf=\"addShow && !tableShow\">\n    <app-contact-component ></app-contact-component>\n</div>\n\n<!--/POST-ADD-->");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app-routing/app-routing.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app-routing/app-routing.module.ts ***!
          \***********************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_components_home_component_home_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/home-component/home-component.component */ "./src/app/components/home-component/home-component.component.ts");
            /* harmony import */ var src_app_components_table_component_table_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/table-component/table-component.component */ "./src/app/components/table-component/table-component.component.ts");
            var routes = [
                { path: '', component: src_app_components_home_component_home_component_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponentComponent"] },
                { path: 'contactList', component: src_app_components_table_component_table_component_component__WEBPACK_IMPORTED_MODULE_4__["TableComponentComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                    ],
                    exports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                    ],
                    declarations: []
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'FrontAngular';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app-routing/app-routing.module */ "./src/app-routing/app-routing.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _app_components_nav_component_nav_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../app/components/nav-component/nav-component.component */ "./src/app/components/nav-component/nav-component.component.ts");
            /* harmony import */ var _app_components_carousel_component_carousel_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../app/components/carousel-component/carousel-component.component */ "./src/app/components/carousel-component/carousel-component.component.ts");
            /* harmony import */ var _components_contact_component_contact_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contact-component/contact-component.component */ "./src/app/components/contact-component/contact-component.component.ts");
            /* harmony import */ var _components_home_component_home_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-component/home-component.component */ "./src/app/components/home-component/home-component.component.ts");
            /* harmony import */ var _components_table_component_table_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/table-component/table-component.component */ "./src/app/components/table-component/table-component.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            //Components
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _app_components_nav_component_nav_component_component__WEBPACK_IMPORTED_MODULE_6__["NavComponentComponent"],
                        _app_components_carousel_component_carousel_component_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponentComponent"],
                        _components_home_component_home_component_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponentComponent"],
                        _components_contact_component_contact_component_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponentComponent"],
                        _components_table_component_table_component_component__WEBPACK_IMPORTED_MODULE_10__["TableComponentComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        src_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                    ],
                    providers: [],
                    bootstrap: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
                    ]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/carousel-component/carousel-component.component.css": 
        /*!********************************************************************************!*\
          !*** ./src/app/components/carousel-component/carousel-component.component.css ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2Fyb3VzZWwtY29tcG9uZW50L2Nhcm91c2VsLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/carousel-component/carousel-component.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/components/carousel-component/carousel-component.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: CarouselComponentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponentComponent", function () { return CarouselComponentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CarouselComponentComponent = /** @class */ (function () {
                function CarouselComponentComponent() {
                }
                CarouselComponentComponent.prototype.ngOnInit = function () {
                };
                return CarouselComponentComponent;
            }());
            CarouselComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-carousel-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carousel-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carousel-component/carousel-component.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carousel-component.component.css */ "./src/app/components/carousel-component/carousel-component.component.css")).default]
                })
            ], CarouselComponentComponent);
            /***/ 
        }),
        /***/ "./src/app/components/contact-component/contact-component.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/contact-component/contact-component.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1jb21wb25lbnQvY29udGFjdC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/contact-component/contact-component.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/contact-component/contact-component.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: ContactComponentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponentComponent", function () { return ContactComponentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ContactComponentComponent = /** @class */ (function () {
                function ContactComponentComponent(contactService, router) {
                    this.contactService = contactService;
                    this.router = router;
                    this.postCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.contact = {
                        name: null,
                        birthDate: null,
                        city: null,
                        company: null,
                        email: null,
                        phoneNumber: null,
                        phoneType: "personal",
                        profileImage: "https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png",
                        state: null,
                        street: null
                    };
                }
                ContactComponentComponent.prototype.ngOnInit = function () {
                };
                ContactComponentComponent.prototype.postContact = function () {
                    console.log(this.contact);
                    this.contactService.post(this.contact).subscribe(function (res) { return res; });
                    this.reload();
                };
                ContactComponentComponent.prototype.reload = function () {
                    var _this = this;
                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () { return _this.router.navigateByUrl('/contactList'); });
                };
                return ContactComponentComponent;
            }());
            ContactComponentComponent.ctorParameters = function () { return [
                { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ContactComponentComponent.prototype, "postCreated", void 0);
            ContactComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-component/contact-component.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-component.component.css */ "./src/app/components/contact-component/contact-component.component.css")).default]
                })
            ], ContactComponentComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home-component/home-component.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/home-component/home-component.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1jb21wb25lbnQvaG9tZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/home-component/home-component.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/home-component/home-component.component.ts ***!
          \***********************************************************************/
        /*! exports provided: HomeComponentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentComponent", function () { return HomeComponentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponentComponent = /** @class */ (function () {
                function HomeComponentComponent() {
                }
                HomeComponentComponent.prototype.ngOnInit = function () {
                };
                return HomeComponentComponent;
            }());
            HomeComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-component/home-component.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-component.component.css */ "./src/app/components/home-component/home-component.component.css")).default]
                })
            ], HomeComponentComponent);
            /***/ 
        }),
        /***/ "./src/app/components/nav-component/nav-component.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/nav-component/nav-component.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWNvbXBvbmVudC9uYXYtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/nav-component/nav-component.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/nav-component/nav-component.component.ts ***!
          \*********************************************************************/
        /*! exports provided: NavComponentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponentComponent", function () { return NavComponentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var NavComponentComponent = /** @class */ (function () {
                function NavComponentComponent(router) {
                    this.router = router;
                }
                NavComponentComponent.prototype.ngOnInit = function () {
                };
                return NavComponentComponent;
            }());
            NavComponentComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            NavComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-component/nav-component.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-component.component.css */ "./src/app/components/nav-component/nav-component.component.css")).default]
                })
            ], NavComponentComponent);
            /***/ 
        }),
        /***/ "./src/app/components/table-component/table-component.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/table-component/table-component.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUtY29tcG9uZW50L3RhYmxlLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/table-component/table-component.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/table-component/table-component.component.ts ***!
          \*************************************************************************/
        /*! exports provided: TableComponentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponentComponent", function () { return TableComponentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var TableComponentComponent = /** @class */ (function () {
                function TableComponentComponent(contactService, router) {
                    this.contactService = contactService;
                    this.router = router;
                }
                TableComponentComponent.prototype.ngOnInit = function () {
                    this.tableShow = true;
                    this.addShow = false;
                    this.getAllContacts();
                };
                TableComponentComponent.prototype.switchTableAndAdd = function () {
                    this.tableShow = false;
                    this.addShow = true;
                };
                TableComponentComponent.prototype.getAllContacts = function () {
                    var _this = this;
                    this.contactService.getAll().subscribe(function (res) {
                        _this.contacts = res;
                        console.log(_this.contacts);
                    });
                };
                TableComponentComponent.prototype.deleteContact = function (item) {
                    this.contactService.delete(item.id).subscribe(function (res) { return res; });
                    this.reload();
                };
                TableComponentComponent.prototype.reload = function () {
                    var _this = this;
                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () { return _this.router.navigateByUrl('/contactList'); });
                };
                return TableComponentComponent;
            }());
            TableComponentComponent.ctorParameters = function () { return [
                { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            TableComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-table-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-component/table-component.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-component.component.css */ "./src/app/components/table-component/table-component.component.css")).default]
                })
            ], TableComponentComponent);
            /***/ 
        }),
        /***/ "./src/app/services/api.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/services/api.service.ts ***!
          \*****************************************/
        /*! exports provided: ApiService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function () { return ApiService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ApiService = /** @class */ (function () {
                function ApiService(http) {
                    this.http = http;
                    this.baseURL = 'http://localhost:5000/api/';
                }
                ApiService.prototype.getAll = function (where) {
                    return this.http.get(this.baseURL + where);
                };
                ApiService.prototype.getContact = function (where, id) {
                    return this.http.get(this.baseURL + where + '/' + "getbyid" + '/' + id);
                };
                ApiService.prototype.postAll = function (where, form) {
                    return this.http.post(this.baseURL + where, form);
                };
                ApiService.prototype.put = function (where, id, form) {
                    return this.http.put(this.baseURL + where + '/' + id, form);
                };
                ApiService.prototype.delete = function (id) {
                    return this.http.delete(this.baseURL + id);
                };
                return ApiService;
            }());
            ApiService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ApiService);
            /***/ 
        }),
        /***/ "./src/app/services/contact.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/contact.service.ts ***!
          \*********************************************/
        /*! exports provided: ContactService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function () { return ContactService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
            var ContactService = /** @class */ (function () {
                function ContactService(api) {
                    this.api = api;
                    this.mainRoute = "contacts";
                }
                ContactService.prototype.get = function (id) {
                    return this.api.getContact(this.mainRoute, id);
                };
                ContactService.prototype.getAll = function () {
                    return this.api.getAll(this.mainRoute);
                };
                ContactService.prototype.post = function (form) {
                    return this.api.postAll(this.mainRoute, form);
                };
                ContactService.prototype.put = function (id, data) {
                    return this.api.put(this.mainRoute, id, data);
                };
                ContactService.prototype.delete = function (id) {
                    return this.api.delete(this.mainRoute + "/" + id);
                };
                return ContactService;
            }());
            ContactService.ctorParameters = function () { return [
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ContactService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\baldi\Documents\DEV_Workspace\Solstice\Solstice\FrontAngular\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map