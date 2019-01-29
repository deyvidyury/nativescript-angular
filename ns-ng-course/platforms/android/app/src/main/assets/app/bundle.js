module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../node_modules/css-loader/index.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n*/\n\n.btn {\n  background: purple;\n  border-width: 1;\n  border-color: purple;\n  color: white;\n  width: 100%;\n  padding: 5 10;\n  border-radius: 30%;\n  margin: 5 0;\n}\n\n.form-control {\n  border-bottom-color: purple;\n  border-bottom-width: 1;\n  margin: 5;\n}", ""]);

// exports


/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <StackLayout>\n</StackLayout> -->\n<FlexboxLayout flexDirection=\"column\">\n  <ns-challenge-edit (input)=\"onChallengeInput($event)\"></ns-challenge-edit>\n  <ns-current-challenge [challenges]=\"activeChallenges\"></ns-current-challenge>\n</FlexboxLayout>\n<!-- <ns-stack></ns-stack> -->\n<!-- <ns-flexbox></ns-flexbox> -->\n<!-- <ns-grid></ns-grid> -->"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.activeChallenges = [];
    }
    AppComponent.prototype.onChallengeInput = function (challengeDescription) {
        this.activeChallenges.push(challengeDescription);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_stack_stack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/layouts/stack/stack.component.ts");
/* harmony import */ var _layouts_flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/layouts/flexbox/flexbox.component.ts");
/* harmony import */ var _layouts_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/layouts/grid/grid.component.ts");
/* harmony import */ var _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");




// Uncomment and add to NgModule imports if you need to use two-way binding





// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"], nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NativeScriptFormsModule"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_3__["CurrentChallengeComponent"],
                _layouts_stack_stack_component__WEBPACK_IMPORTED_MODULE_5__["StackComponent"],
                _layouts_flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_6__["FlexboxComponent"],
                _layouts_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"],
                _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_8__["ChallengeEdirComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.css":
/***/ (function(module, exports) {

module.exports = "TextField {\n  width: 66%;\n}\n\nButton {\n  width: 32%;\n}"

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout>\n  <TextField class=\"form-control\" [(ngModel)]=\"challengeDescription\" hint=\"Challenge title\"></TextField>\n  <Button class=\"btn\" (tap)=\"onSetChallenge()\" text=\"Add Challenge\"></Button>\n</FlexboxLayout>"

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeEdirComponent", function() { return ChallengeEdirComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var ChallengeEdirComponent = /** @class */ (function () {
    function ChallengeEdirComponent() {
        this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.challengeDescription = "";
    }
    ChallengeEdirComponent.prototype.onSetChallenge = function () {
        this.input.emit(this.challengeDescription);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChallengeEdirComponent.prototype, "input", void 0);
    ChallengeEdirComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-challenge-edit",
            template: __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.html"),
            styles: [__webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.css")]
        })
    ], ChallengeEdirComponent);
    return ChallengeEdirComponent;
}());



/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 26;\n  text-align: center;\n  color: purple;\n  font-weight: bold;\n  margin-top: 10\n}"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.html":
/***/ (function(module, exports) {

module.exports = "<ListView [items]=\"challenges\" (itemTap)=\"onItemTap($event)\" iosEstimatedRowHeight=\"65\">\n  <ng-template let-challenge=\"item\" let-i=\"index\">\n    <GridLayout rows=\"40,20\" columns=\"50,*\">\n      <Label [text]=\"i\" row=\"0\" col=\"0\" rowSpan=\"2\"></Label>\n      <Label [text]=\"challenge\" row=\"0\" col=\"1\"></Label>\n      <Label text=\"Item content\" row=\"1\" col=\"1\"></Label>\n    </GridLayout>\n  </ng-template>\n</ListView>"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentChallengeComponent", function() { return CurrentChallengeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent() {
        this.challenges = [];
    }
    CurrentChallengeComponent.prototype.onItemTap = function (args) { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CurrentChallengeComponent.prototype, "challenges", void 0);
    CurrentChallengeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-current-challenge",
            template: __webpack_require__("./app/challenges/current-challenge/current-challenge.component.html"),
            styles: [__webpack_require__("./app/challenges/current-challenge/current-challenge.component.css")]
        })
    ], CurrentChallengeComponent);
    return CurrentChallengeComponent;
}());



/***/ }),

/***/ "./app/layouts/flexbox/flexbox.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\nFlexboxLayout {\n  border-color: green;\n  border-width: 5;\n  height: 300;\n}\n\n#topFlexbox {\n  height: 33%;\n}\n\n#leftFlexbox {\n  width: 33%\n}\n\n#leftFlexbox #i1,\n#leftFlexbox #i2,\n#leftFlexbox #i3 {\n  margin: 0 20;\n}\n\n#rightFlexbox {\n  width: 66%;\n}\n\nLabel {\n  background-color: red;\n  width: 50;\n  height: 50;\n}\n\n#i1 {\n  background: red;\n}\n\n#i2 {\n  background: blue\n}\n\n#i3 {\n  background: orange;\n}"

/***/ }),

/***/ "./app/layouts/flexbox/flexbox.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n  <FlexboxLayout id=\"topFlexbox\" justifyContent=\"space-between\">\n    <Label id=\"i1\" text=\"Item 1\" alignSelf=\"flex-start\"></Label>\n    <Label id=\"i2\" text=\"Item 2\" alignSelf=\"flex-end\"></Label>\n    <Label id=\"i3\" text=\"Item 3\" alignSelf=\"flex-start\"></Label>\n  </FlexboxLayout>\n  <FlexboxLayout id=\"bottomFlexbox\">\n    <FlexboxLayout id=\"leftFlexbox\" flexDirection=\"column\" justifyContent=\"space-around\">\n      <Label id=\"i1\" text=\"Item 1\"></Label>\n      <Label id=\"i2\" text=\"Item 2\"></Label>\n      <Label id=\"i3\" text=\"Item 3\"></Label>\n    </FlexboxLayout>\n    <FlexboxLayout id=\"rightFlexbox\" flexDirection=\"column\" justifyContent=\"space-around\">\n      <Label id=\"i1\" text=\"Item 1\"></Label>\n      <Label id=\"i2\" text=\"Item 2\"></Label>\n    </FlexboxLayout>\n  </FlexboxLayout>\n</StackLayout>"

/***/ }),

/***/ "./app/layouts/flexbox/flexbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexboxComponent", function() { return FlexboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var orientation = __webpack_require__("../node_modules/nativescript-orientation/orientation.js");
var FlexboxComponent = /** @class */ (function () {
    function FlexboxComponent() {
    }
    FlexboxComponent.prototype.ngOnInit = function () {
        orientation.setOrientation("landscape");
    };
    FlexboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-flexbox",
            template: __webpack_require__("./app/layouts/flexbox/flexbox.component.html"),
            styles: [__webpack_require__("./app/layouts/flexbox/flexbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexboxComponent);
    return FlexboxComponent;
}());



/***/ }),

/***/ "./app/layouts/grid/grid.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\nLabel {\n  background: orange;\n  text-align: center;\n}"

/***/ }),

/***/ "./app/layouts/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"50,*,auto,auto,20,2*\" columns=\"200,*,auto,2*\">\n  <Label text=\"A\" row=\"0\" col=\"0\"></Label>\n  <Label text=\"B\" row=\"1\" col=\"1\"></Label>\n  <Label text=\"C\" row=\"2\" col=\"2\"></Label>\n  <Label text=\"D\" row=\"3\" col=\"3\"></Label>\n  <Label text=\"E\" row=\"5\" col=\"1\"></Label>\n</GridLayout>"

/***/ }),

/***/ "./app/layouts/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var orientation = __webpack_require__("../node_modules/nativescript-orientation/orientation.js");
var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
        orientation.setOrientation("landscape");
    };
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-grid",
            template: __webpack_require__("./app/layouts/grid/grid.component.html"),
            styles: [__webpack_require__("./app/layouts/grid/grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./app/layouts/stack/stack.component.css":
/***/ (function(module, exports) {

module.exports = "StackLayout {\n  border-color: green;\n  border-width: 5;\n  padding: 10;\n  height: 300;\n}\n\nLabel {\n  background-color: red;\n  width: 50;\n  height: 50;\n}\n\n#i1 {\n  background: red;\n}\n\n#i2 {\n  background: blue\n}\n\n#i3 {\n  background: orange;\n}"

/***/ }),

/***/ "./app/layouts/stack/stack.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n  <Label id=\"i1\" text=\"Item 1\" horizontalAlignment=\"right\"></Label>\n  <Label id=\"i2\" text=\"Item 2\" verticalAlignment=\"top\"></Label>\n  <Label id=\"i3\" text=\"Item 3\"></Label>\n</StackLayout>"

/***/ }),

/***/ "./app/layouts/stack/stack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackComponent", function() { return StackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var StackComponent = /** @class */ (function () {
    function StackComponent() {
    }
    StackComponent.prototype.ngOnInit = function () {
    };
    StackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-stack',
            template: __webpack_require__("./app/layouts/stack/stack.component.html"),
            styles: [__webpack_require__("./app/layouts/stack/stack.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StackComponent);
    return StackComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
/* harmony import */ var nativescript_insomnia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-insomnia/insomnia.js");
/* harmony import */ var nativescript_insomnia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_insomnia__WEBPACK_IMPORTED_MODULE_2__);

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        // this import should be first in order to load some required settings (like globals and reflect-metadata)



var options = {};
if (false) { var hmrUpdate_1; }
Object(nativescript_insomnia__WEBPACK_IMPORTED_MODULE_2__["keepAwake"])().then(function () {
    console.log("Insomnia is active");
});
Object(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"])(options).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc"}};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLyRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9sYXlvdXRzL2ZsZXhib3gvZmxleGJveC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9sYXlvdXRzL2ZsZXhib3gvZmxleGJveC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9mbGV4Ym94L2ZsZXhib3guY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9sYXlvdXRzL2dyaWQvZ3JpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9sYXlvdXRzL2dyaWQvZ3JpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9ncmlkL2dyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9sYXlvdXRzL3N0YWNrL3N0YWNrLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvc3RhY2svc3RhY2suY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvc3RhY2svc3RhY2suY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUNBLFFBQVEsK0RBQVM7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQywwQ0FBd0I7QUFDdEQscUJBQXFCLG1CQUFPLENBQUMseUNBQXVCO0FBQ3BELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjFCLHVDQUF1QyxtQkFBTyxDQUFDLDZEQUE4QjtBQUM3RTtBQUNBLFlBQVksbUJBQU8sQ0FBQyxvREFBMkI7QUFDL0MsbUJBQU8sQ0FBQyx1REFBb0M7QUFDNUM7OztBQUdBLFlBQVksbUJBQU8sQ0FBQywwRUFBdUQ7O0FBRTNFLFFBQVEsbUJBQU8sQ0FBQyx5REFBc0M7QUFDdEQ7QUFDNEU7QUFDL0I7QUFDSztBQUNsRDtBQUNBLElBQUksS0FBYSxFQUFFLG9CQVlsQjtBQUNELHVFQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0QsaUdBQTJCLDBCQUEwQix5REFBUyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYnVuZGxlXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSBnbG9iYWxbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBnbG9iYWxbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9tYWluLnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02IW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSwgXCJcIik7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcblxcbi8qXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIEZvciBhIGZ1bGwgbGlzdCBvZiBjbGFzcyBuYW1lcyBpbiB0aGUgdGhlbWVcXG5yZWZlciB0byBodHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3RoZW1lLlxcbiovXFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kOiBwdXJwbGU7XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBib3JkZXItY29sb3I6IHB1cnBsZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNSAxMDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gIG1hcmdpbjogNSAwO1xcbn1cXG5cXG4uZm9ybS1jb250cm9sIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHB1cnBsZTtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDE7XFxuICBtYXJnaW46IDU7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxTdGFja0xheW91dD5cXG48L1N0YWNrTGF5b3V0PiAtLT5cXG48RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiPlxcbiAgPG5zLWNoYWxsZW5nZS1lZGl0IChpbnB1dCk9XFxcIm9uQ2hhbGxlbmdlSW5wdXQoJGV2ZW50KVxcXCI+PC9ucy1jaGFsbGVuZ2UtZWRpdD5cXG4gIDxucy1jdXJyZW50LWNoYWxsZW5nZSBbY2hhbGxlbmdlc109XFxcImFjdGl2ZUNoYWxsZW5nZXNcXFwiPjwvbnMtY3VycmVudC1jaGFsbGVuZ2U+XFxuPC9GbGV4Ym94TGF5b3V0PlxcbjwhLS0gPG5zLXN0YWNrPjwvbnMtc3RhY2s+IC0tPlxcbjwhLS0gPG5zLWZsZXhib3g+PC9ucy1mbGV4Ym94PiAtLT5cXG48IS0tIDxucy1ncmlkPjwvbnMtZ3JpZD4gLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xudmFyIEFwcENvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcHBDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQ2hhbGxlbmdlcyA9IFtdO1xuICAgIH1cbiAgICBBcHBDb21wb25lbnQucHJvdG90eXBlLm9uQ2hhbGxlbmdlSW5wdXQgPSBmdW5jdGlvbiAoY2hhbGxlbmdlRGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVDaGFsbGVuZ2VzLnB1c2goY2hhbGxlbmdlRGVzY3JpcHRpb24pO1xuICAgIH07XG4gICAgQXBwQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgICAgIENvbXBvbmVudCh7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIilcbiAgICAgICAgfSlcbiAgICBdLCBBcHBDb21wb25lbnQpO1xuICAgIHJldHVybiBBcHBDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgQXBwQ29tcG9uZW50IH07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50XCI7XG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdGFja0NvbXBvbmVudCB9IGZyb20gXCIuL2xheW91dHMvc3RhY2svc3RhY2suY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGbGV4Ym94Q29tcG9uZW50IH0gZnJvbSBcIi4vbGF5b3V0cy9mbGV4Ym94L2ZsZXhib3guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4vbGF5b3V0cy9ncmlkL2dyaWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGFsbGVuZ2VFZGlyQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnRcIjtcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbnZhciBBcHBNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICBQYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4gICAgKi9cbiAgICBmdW5jdGlvbiBBcHBNb2R1bGUoKSB7XG4gICAgfVxuICAgIEFwcE1vZHVsZSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBOZ01vZHVsZSh7XG4gICAgICAgICAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgICAgICAgICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVdLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgICAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgU3RhY2tDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgRmxleGJveENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBHcmlkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIENoYWxsZW5nZUVkaXJDb21wb25lbnRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtdLFxuICAgICAgICAgICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG4gICAgICAgIH0pXG4gICAgICAgIC8qXG4gICAgICAgIFBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiAgICAgICAgKi9cbiAgICBdLCBBcHBNb2R1bGUpO1xuICAgIHJldHVybiBBcHBNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgQXBwTW9kdWxlIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiVGV4dEZpZWxkIHtcXG4gIHdpZHRoOiA2NiU7XFxufVxcblxcbkJ1dHRvbiB7XFxuICB3aWR0aDogMzIlO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8RmxleGJveExheW91dD5cXG4gIDxUZXh0RmllbGQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcImNoYWxsZW5nZURlc2NyaXB0aW9uXFxcIiBoaW50PVxcXCJDaGFsbGVuZ2UgdGl0bGVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiAodGFwKT1cXFwib25TZXRDaGFsbGVuZ2UoKVxcXCIgdGV4dD1cXFwiQWRkIENoYWxsZW5nZVxcXCI+PC9CdXR0b24+XFxuPC9GbGV4Ym94TGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG52YXIgQ2hhbGxlbmdlRWRpckNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGFsbGVuZ2VFZGlyQ29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLmlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLmNoYWxsZW5nZURlc2NyaXB0aW9uID0gXCJcIjtcbiAgICB9XG4gICAgQ2hhbGxlbmdlRWRpckNvbXBvbmVudC5wcm90b3R5cGUub25TZXRDaGFsbGVuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuZW1pdCh0aGlzLmNoYWxsZW5nZURlc2NyaXB0aW9uKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBPdXRwdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBDaGFsbGVuZ2VFZGlyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpbnB1dFwiLCB2b2lkIDApO1xuICAgIENoYWxsZW5nZUVkaXJDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgQ29tcG9uZW50KHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIm5zLWNoYWxsZW5nZS1lZGl0XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50Lmh0bWxcIiksXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKFwiLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuY3NzXCIpXVxuICAgICAgICB9KVxuICAgIF0sIENoYWxsZW5nZUVkaXJDb21wb25lbnQpO1xuICAgIHJldHVybiBDaGFsbGVuZ2VFZGlyQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydCB7IENoYWxsZW5nZUVkaXJDb21wb25lbnQgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIudGl0bGUge1xcbiAgZm9udC1zaXplOiAyNjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBwdXJwbGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDEwXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxMaXN0VmlldyBbaXRlbXNdPVxcXCJjaGFsbGVuZ2VzXFxcIiAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIiBpb3NFc3RpbWF0ZWRSb3dIZWlnaHQ9XFxcIjY1XFxcIj5cXG4gIDxuZy10ZW1wbGF0ZSBsZXQtY2hhbGxlbmdlPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCI0MCwyMFxcXCIgY29sdW1ucz1cXFwiNTAsKlxcXCI+XFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHJvd1NwYW49XFxcIjJcXFwiPjwvTGFiZWw+XFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiY2hhbGxlbmdlXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCI+PC9MYWJlbD5cXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiSXRlbSBjb250ZW50XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCI+PC9MYWJlbD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9uZy10ZW1wbGF0ZT5cXG48L0xpc3RWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG52YXIgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLmNoYWxsZW5nZXMgPSBbXTtcbiAgICB9XG4gICAgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudC5wcm90b3R5cGUub25JdGVtVGFwID0gZnVuY3Rpb24gKGFyZ3MpIHsgfTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KVxuICAgIF0sIEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQucHJvdG90eXBlLCBcImNoYWxsZW5nZXNcIiwgdm9pZCAwKTtcbiAgICBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgICAgIENvbXBvbmVudCh7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJucy1jdXJyZW50LWNoYWxsZW5nZVwiLFxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sXCIpLFxuICAgICAgICAgICAgc3R5bGVzOiBbcmVxdWlyZShcIi4vY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmNzc1wiKV1cbiAgICAgICAgfSlcbiAgICBdLCBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50KTtcbiAgICByZXR1cm4gQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuRmxleGJveExheW91dCB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyLXdpZHRoOiA1O1xcbiAgaGVpZ2h0OiAzMDA7XFxufVxcblxcbiN0b3BGbGV4Ym94IHtcXG4gIGhlaWdodDogMzMlO1xcbn1cXG5cXG4jbGVmdEZsZXhib3gge1xcbiAgd2lkdGg6IDMzJVxcbn1cXG5cXG4jbGVmdEZsZXhib3ggI2kxLFxcbiNsZWZ0RmxleGJveCAjaTIsXFxuI2xlZnRGbGV4Ym94ICNpMyB7XFxuICBtYXJnaW46IDAgMjA7XFxufVxcblxcbiNyaWdodEZsZXhib3gge1xcbiAgd2lkdGg6IDY2JTtcXG59XFxuXFxuTGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgd2lkdGg6IDUwO1xcbiAgaGVpZ2h0OiA1MDtcXG59XFxuXFxuI2kxIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuI2kyIHtcXG4gIGJhY2tncm91bmQ6IGJsdWVcXG59XFxuXFxuI2kzIHtcXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcbiAgPEZsZXhib3hMYXlvdXQgaWQ9XFxcInRvcEZsZXhib3hcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIj5cXG4gICAgPExhYmVsIGlkPVxcXCJpMVxcXCIgdGV4dD1cXFwiSXRlbSAxXFxcIiBhbGlnblNlbGY9XFxcImZsZXgtc3RhcnRcXFwiPjwvTGFiZWw+XFxuICAgIDxMYWJlbCBpZD1cXFwiaTJcXFwiIHRleHQ9XFxcIkl0ZW0gMlxcXCIgYWxpZ25TZWxmPVxcXCJmbGV4LWVuZFxcXCI+PC9MYWJlbD5cXG4gICAgPExhYmVsIGlkPVxcXCJpM1xcXCIgdGV4dD1cXFwiSXRlbSAzXFxcIiBhbGlnblNlbGY9XFxcImZsZXgtc3RhcnRcXFwiPjwvTGFiZWw+XFxuICA8L0ZsZXhib3hMYXlvdXQ+XFxuICA8RmxleGJveExheW91dCBpZD1cXFwiYm90dG9tRmxleGJveFxcXCI+XFxuICAgIDxGbGV4Ym94TGF5b3V0IGlkPVxcXCJsZWZ0RmxleGJveFxcXCIgZmxleERpcmVjdGlvbj1cXFwiY29sdW1uXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIj5cXG4gICAgICA8TGFiZWwgaWQ9XFxcImkxXFxcIiB0ZXh0PVxcXCJJdGVtIDFcXFwiPjwvTGFiZWw+XFxuICAgICAgPExhYmVsIGlkPVxcXCJpMlxcXCIgdGV4dD1cXFwiSXRlbSAyXFxcIj48L0xhYmVsPlxcbiAgICAgIDxMYWJlbCBpZD1cXFwiaTNcXFwiIHRleHQ9XFxcIkl0ZW0gM1xcXCI+PC9MYWJlbD5cXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICA8RmxleGJveExheW91dCBpZD1cXFwicmlnaHRGbGV4Ym94XFxcIiBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiPlxcbiAgICAgIDxMYWJlbCBpZD1cXFwiaTFcXFwiIHRleHQ9XFxcIkl0ZW0gMVxcXCI+PC9MYWJlbD5cXG4gICAgICA8TGFiZWwgaWQ9XFxcImkyXFxcIiB0ZXh0PVxcXCJJdGVtIDJcXFwiPjwvTGFiZWw+XFxuICAgIDwvRmxleGJveExheW91dD5cXG4gIDwvRmxleGJveExheW91dD5cXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbnZhciBvcmllbnRhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb3JpZW50YXRpb25cIik7XG52YXIgRmxleGJveENvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGbGV4Ym94Q29tcG9uZW50KCkge1xuICAgIH1cbiAgICBGbGV4Ym94Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3JpZW50YXRpb24uc2V0T3JpZW50YXRpb24oXCJsYW5kc2NhcGVcIik7XG4gICAgfTtcbiAgICBGbGV4Ym94Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgICAgIENvbXBvbmVudCh7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJucy1mbGV4Ym94XCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vZmxleGJveC5jb21wb25lbnQuaHRtbFwiKSxcbiAgICAgICAgICAgIHN0eWxlczogW3JlcXVpcmUoXCIuL2ZsZXhib3guY29tcG9uZW50LmNzc1wiKV1cbiAgICAgICAgfSksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbiAgICBdLCBGbGV4Ym94Q29tcG9uZW50KTtcbiAgICByZXR1cm4gRmxleGJveENvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBGbGV4Ym94Q29tcG9uZW50IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuTGFiZWwge1xcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCI1MCwqLGF1dG8sYXV0bywyMCwyKlxcXCIgY29sdW1ucz1cXFwiMjAwLCosYXV0bywyKlxcXCI+XFxuICA8TGFiZWwgdGV4dD1cXFwiQVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiQlxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiQ1xcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjJcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiRFxcXCIgcm93PVxcXCIzXFxcIiBjb2w9XFxcIjNcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgdGV4dD1cXFwiRVxcXCIgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbnZhciBvcmllbnRhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb3JpZW50YXRpb25cIik7XG52YXIgR3JpZENvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHcmlkQ29tcG9uZW50KCkge1xuICAgIH1cbiAgICBHcmlkQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3JpZW50YXRpb24uc2V0T3JpZW50YXRpb24oXCJsYW5kc2NhcGVcIik7XG4gICAgfTtcbiAgICBHcmlkQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgICAgIENvbXBvbmVudCh7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJucy1ncmlkXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vZ3JpZC5jb21wb25lbnQuaHRtbFwiKSxcbiAgICAgICAgICAgIHN0eWxlczogW3JlcXVpcmUoXCIuL2dyaWQuY29tcG9uZW50LmNzc1wiKV1cbiAgICAgICAgfSksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbiAgICBdLCBHcmlkQ29tcG9uZW50KTtcbiAgICByZXR1cm4gR3JpZENvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBHcmlkQ29tcG9uZW50IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiU3RhY2tMYXlvdXQge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlci13aWR0aDogNTtcXG4gIHBhZGRpbmc6IDEwO1xcbiAgaGVpZ2h0OiAzMDA7XFxufVxcblxcbkxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHdpZHRoOiA1MDtcXG4gIGhlaWdodDogNTA7XFxufVxcblxcbiNpMSB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbiNpMiB7XFxuICBiYWNrZ3JvdW5kOiBibHVlXFxufVxcblxcbiNpMyB7XFxuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXG4gIDxMYWJlbCBpZD1cXFwiaTFcXFwiIHRleHQ9XFxcIkl0ZW0gMVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgaWQ9XFxcImkyXFxcIiB0ZXh0PVxcXCJJdGVtIDJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiPjwvTGFiZWw+XFxuICA8TGFiZWwgaWQ9XFxcImkzXFxcIiB0ZXh0PVxcXCJJdGVtIDNcXFwiPjwvTGFiZWw+XFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xudmFyIFN0YWNrQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0YWNrQ29tcG9uZW50KCkge1xuICAgIH1cbiAgICBTdGFja0NvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBTdGFja0NvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBDb21wb25lbnQoe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICducy1zdGFjaycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vc3RhY2suY29tcG9uZW50Lmh0bWxcIiksXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKFwiLi9zdGFjay5jb21wb25lbnQuY3NzXCIpXVxuICAgICAgICB9KSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuICAgIF0sIFN0YWNrQ29tcG9uZW50KTtcbiAgICByZXR1cm4gU3RhY2tDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgU3RhY2tDb21wb25lbnQgfTtcbiIsIlxuICAgICAgICBsZXQgYXBwbGljYXRpb25DaGVja1BsYXRmb3JtID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbkNoZWNrUGxhdGZvcm0uYW5kcm9pZCAmJiAhZ2xvYmFsW1wiX19zbmFwc2hvdFwiXSkge1xuICAgICAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5yZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICAgICAgcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9sb2FkLWFwcGxpY2F0aW9uLWNzcy1hbmd1bGFyXCIpKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTtcbiAgICAgICAgLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAvYXBwLm1vZHVsZVwiO1xuaW1wb3J0IHsga2VlcEF3YWtlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbnNvbW5pYVwiO1xudmFyIG9wdGlvbnMgPSB7fTtcbmlmIChtb2R1bGVbXCJob3RcIl0pIHtcbiAgICB2YXIgaG1yVXBkYXRlXzEgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgb3B0aW9ucy5obXJPcHRpb25zID0ge1xuICAgICAgICBtb2R1bGVUeXBlRmFjdG9yeTogZnVuY3Rpb24gKCkgeyByZXR1cm4gQXBwTW9kdWxlOyB9LFxuICAgICAgICBsaXZlc3luY0NhbGxiYWNrOiBmdW5jdGlvbiAocGxhdGZvcm1SZWJvb3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSFJNOiBTeW5jLi4uXCIpO1xuICAgICAgICAgICAgaG1yVXBkYXRlXzEoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocGxhdGZvcm1SZWJvb3QsIDApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBobXJVcGRhdGVfMSgpO1xuICAgIG1vZHVsZVtcImhvdFwiXS5hY2NlcHQoW1wiLi9hcHAvYXBwLm1vZHVsZVwiXSk7XG59XG5rZWVwQXdha2UoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkluc29tbmlhIGlzIGFjdGl2ZVwiKTtcbn0pO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKG9wdGlvbnMpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG4gICAgXG4gICAgICAgIFxuICAgICJdLCJzb3VyY2VSb290IjoiIn0=