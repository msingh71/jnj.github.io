(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/datacarousel/config-dialog/config-dialog.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datacarousel/config-dialog/config-dialog.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" id=\"cfCont\">\n  <div class=\"row cfg-header\">\n    <div class=\"col-sm-8\">\n      <img class=\"logo\" src=\"../../../assets/images/carousel-50.png\" alt=\"\"><span>Data Carousel Settings</span>\n    </div>\n    <div class=\"col-sm-1\"> <button color=\"primary\" class=\"cfg-button\" (click)='saveSettings()'>Save</button></div>\n    <div class=\"col-sm-1\"> <button color=\"warn\" class=\"cfg-button\" (click)='closeDialog()'>Close</button></div>\n  </div>\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        Workseet and Column\n      </mat-expansion-panel-header>\n      <div class=\"row\" style=\"padding-top: 10px;\">\n        <div class=\"col-lg-12\">\n          <div class=\"table\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <h5>Worksheets</h5>\n              </div>\n              <div class=\"col-sm-9\">\n                <select name=\"worksheet\" id=\"worksheet\" [(ngModel)]=\"selectedWorksheet\"\n                  (change)=\"worksheetDataSourceChange()\" class=\"form-control\">\n                  <option *ngFor=\"let ws of worksheets\" [ngValue]=\"ws\">{{ws}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <div class='table' id=\"col-list\">\n                  <div class=\"row cfg-table-header\">\n                    <div class=\"col-sm-1\">Select</div>\n                    <div class=\"col-sm-4\">Field Name</div>\n                    <div class=\"col-sm-6\">Title</div>\n                    <div class=\"col-sm-1\">Seq.</div>\n                  </div>\n                  <div class=\"row\" *ngFor=\"let column of columns\">\n                    <div class=\"col-sm-1\"><input type=\"checkbox\" [checked]=\"column.selected\"\n                        (change)=\"column.selected = !column.selected\" /></div>\n                    <div class=\"col-sm-4\">{{column.name}}</div>\n                    <div class=\"col-sm-6\"><input size=\"45\"\n                        style=\"border:  1px solid gray;background-color: rgb(170, 245, 241);\" type=\"text\"\n                        [(ngModel)]='column.caption'></div>\n                    <div class=\"col-sm-1\"><input type=\"number\"\n                        style=\"border:  1px solid gray;background-color: rgb(170, 245, 241);\" [(ngModel)]='column.seq'\n                        min=\"0\" max=\"{{columns.length-1}}\" step=\"1\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        Tiles\n      </mat-expansion-panel-header>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">Background Color</div>\n        <div class=\"col-sm-3\"><input [(ngModel)]='tiles.background'\n            style=\"border: 1px solid gray; background-color:beige;width: 10ch;\" /></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">Title Color</div>\n        <div class=\"col-sm-3\"><input [(ngModel)]='tiles.titleColor'\n            style=\"border:  1px solid gray; background-color:beige;width: 10ch;\" /></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">Content Color</div>\n        <div class=\"col-sm-3\"><input [(ngModel)]='tiles.valueColor'\n            style=\"border:  1px solid gray; background-color:beige;width: 10ch;\" /></div>\n      </div>\n      <div class=\"divTile\" style=\"flex: 0 0 48%; margin: 5px;\" [style.backgroundColor]=\"tiles.background\">\n        <div class=\"title\" [style.color]=\"tiles.titleColor\">\n          Title\n        </div>\n        <p class=\"content\"><span [style.color]=\"tiles.valueColor\">Content</span></p>\n      </div>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        Page\n      </mat-expansion-panel-header>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">Background Color</div>\n        <div class=\"col-sm-3\"><input [(ngModel)]='page.backgroundcolor'\n            style=\"border:  1px solid gray; background-color:beige\" /></div>\n        <div class=\"col-sm-3\">Background Image</div>\n        <div class=\"col-sm-3\"><select [(ngModel)]='page.backgroundimage'\n            style=\"border:  1px solid gray; background-color:beige\">\n            <option *ngFor=\"let i of bgimages\" [ngValue]=\"i.filename\">{{i.name}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\" style=\"font-weight: bold;\">Header</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">Text</div>\n        <div class=\"col-sm-8\"><input [(ngModel)]='page.header.text' style=\" border: 1px solid gray;\n            background-color:beige; width: 61ch;\" />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">Background Color</div>\n        <div class=\"col-sm-3\"><input [(ngModel)]='page.header.background'\n            style=\"border:  1px solid gray; background-color:beige\" />\n        </div>\n        <div class=\"col-sm-3\">Fore Color</div>\n        <div class=\"col-sm-3\"><input [(ngModel)]='page.header.color'\n            style=\"border:  1px solid gray; background-color:beige\" />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\" style=\"font-weight: bold;\">Footer</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">Text</div>\n        <div class=\"col-sm-8\"><input [(ngModel)]='page.footer.text' style=\"border:  1px solid gray; \n            background-color:beige; \n            width: 61ch;\" /></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">Background Color</div>\n        <div class=\"col-sm-3\"><input [(ngModel)]='page.footer.background'\n            style=\"border:  1px solid gray; background-color:beige\" />\n        </div>\n        <div class=\"col-sm-3\">Fore Color</div>\n        <div class=\"col-sm-3\"><input [(ngModel)]='page.footer.color'\n            style=\"border:  1px solid gray; background-color:beige\" />\n        </div>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/datacarousel/datacarousel.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datacarousel/datacarousel.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"getPageStyle()\">\n  <div class=\"header\" [style.backgroundColor]=\"page.header.background\" [style.color]=\"page.header.color\">\n    {{page.header.text}}</div>\n  <div *ngIf=\"data.length > 1\" class=\"c-control\">\n    <a href=\"#datacar\" role=\"button\" data-slide=\"prev\" class=\"control-but\">\n      <i style=\"font-size: 20px\" class=\"fas fa-arrow-alt-circle-left\"></i>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <span>{{i}}</span>\n    <a href=\"#datacar\" role=\"button\" data-slide=\"next\" class=\"control-but\">\n      <i style=\"font-size: 20px\" class=\"fas fa-arrow-alt-circle-right\"></i>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div id=\"datacar\" name=\"datacar\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\"\n    style=\"width: 100%;\">\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let d of data; let i = index\" class=\"carousel-item {{ (i == 0) ? 'active' : '' }}\">\n        <div style=\"display:flex; flex-wrap:wrap;\">\n          <div class=\"divTile\" *ngFor=\"let c of columns | orderBy:['seq']\" style=\"flex: 0 0 48%;\"\n            [style.backgroundColor]=\"tiles.background\">\n            <div class=\"title\" [style.color]=\"tiles.titleColor\">\n              {{c.caption}}\n            </div>\n            <p class=\"content\"><span *ngIf=\"d[c.colIndex].value!='%null%'\"\n                [style.color]=\"tiles.valueColor\">{{d[c.colIndex].value}}</span></p>\n          </div>\n        </div>\n        <div class=\"page-number\">{{i+1}} / {{data.length}}</div>\n      </div>\n    </div>\n    <!-- <ol class=\"carousel-indicators\" *ngIf=\"data.length < 7\">\n    <li data-target=\"#datacar\" *ngFor=\"let d of data; index as i\" [attr.data-slide-to]='i'\n      [ngClass]=\"{'active' : i == 0}\"></li>\n  </ol>\n  -->\n  </div>\n  <div class=\"footer\" [style.backgroundColor]=\"page.footer.background\" [style.color]=\"page.footer.color\">\n    {{page.footer.text}}</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>List of Tableau Extensions</h4>\n<ul class=\"list-group\">\n <li class=\"list-group-item\" *ngFor=\"let ext of Extns\">{{ext}}</li>\n</ul>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/OrderByPipe.ts":
/*!********************************!*\
  !*** ./src/app/OrderByPipe.ts ***!
  \********************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, orderField, orderType) {
        array.sort(function (a, b) {
            var ae = a[orderField];
            var be = b[orderField];
            if (ae == undefined && be == undefined)
                return 0;
            if (ae == undefined && be != undefined)
                return orderType ? 1 : -1;
            if (ae != undefined && be == undefined)
                return orderType ? -1 : 1;
            if (ae == be)
                return 0;
            return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
        });
        return array;
    };
    OrderByPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _datacarousel_datacarousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datacarousel/datacarousel.component */ "./src/app/datacarousel/datacarousel.component.ts");
/* harmony import */ var _datacarousel_config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datacarousel/config-dialog/config-dialog.component */ "./src/app/datacarousel/config-dialog/config-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _datacarousel_datacarousel_component__WEBPACK_IMPORTED_MODULE_2__["DatacarouselComponent"] },
    { path: 'datacarousel/config', component: _datacarousel_config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfigDialogComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'extensions';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/default.component */ "./src/app/default/default.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _OrderByPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OrderByPipe */ "./src/app/OrderByPipe.ts");
/* harmony import */ var _datacarousel_datacarousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datacarousel/datacarousel.component */ "./src/app/datacarousel/datacarousel.component.ts");
/* harmony import */ var _datacarousel_config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datacarousel/config-dialog/config-dialog.component */ "./src/app/datacarousel/config-dialog/config-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"], _OrderByPipe__WEBPACK_IMPORTED_MODULE_9__["OrderByPipe"], _datacarousel_datacarousel_component__WEBPACK_IMPORTED_MODULE_10__["DatacarouselComponent"], _datacarousel_config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfigDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/datacarousel/config-dialog/config-dialog.component.css":
/*!************************************************************************!*\
  !*** ./src/app/datacarousel/config-dialog/config-dialog.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo{\n  width: 30px;\n  padding-right: 5px;\n}\n.mat-accordion{\n  width: 100%;\n}\n.mat-expansion-panel-header{\n  color: #1e8dd6;\n  font-weight: bolder;\n  font-size: 15px;\n}\n.cfg-header{\n  color: #1e8dd6;\n  font-size: 25px;\n  border-bottom: #1e8dd6 4px solid;\n  padding: 10px 0px 5px 0px;\n}\n.cfg-sub-header{\n  color: #1e8dd6;\n  font-size: 12px;\n  font-weight: bold;\n  border-bottom: #1e8dd6 1px solid;\n  padding: 10px 0px 5px 0px;\n  margin-bottom: 5px;\n}\n.cfg-button{\n  width: 50px;\n  background-color:#1e8dd6;\n  color: white;\n  border-style: none;\n  font-size: 12px;\n}\n.cfg-table-header {\n  background-color: rgb(9, 43, 9);\n  color:white;\n  font-weight: bold;\n  height: 25px;\n}\n#col-list > .row {\n  border-bottom: 1px solid rgb(206, 206, 211);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YWNhcm91c2VsL2NvbmZpZy1kaWFsb2cvY29uZmlnLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLDJDQUEyQztBQUM3QyIsImZpbGUiOiJzcmMvYXBwL2RhdGFjYXJvdXNlbC9jb25maWctZGlhbG9nL2NvbmZpZy1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICB3aWR0aDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLm1hdC1hY2NvcmRpb257XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xuICBjb2xvcjogIzFlOGRkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmNmZy1oZWFkZXJ7XG4gIGNvbG9yOiAjMWU4ZGQ2O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGJvcmRlci1ib3R0b206ICMxZThkZDYgNHB4IHNvbGlkO1xuICBwYWRkaW5nOiAxMHB4IDBweCA1cHggMHB4O1xufVxuLmNmZy1zdWItaGVhZGVye1xuICBjb2xvcjogIzFlOGRkNjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLWJvdHRvbTogIzFlOGRkNiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDVweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jZmctYnV0dG9ue1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojMWU4ZGQ2O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNmZy10YWJsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgNDMsIDkpO1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuI2NvbC1saXN0ID4gLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjA2LCAyMDYsIDIxMSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/datacarousel/config-dialog/config-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/datacarousel/config-dialog/config-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfigDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDialogComponent", function() { return ConfigDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_model_ColumnsModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/ColumnsModel */ "./src/app/model/ColumnsModel.ts");
/* harmony import */ var _tab_ext_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tab-ext.service */ "./src/app/tab-ext.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ConfigDialogComponent = /** @class */ (function () {
    function ConfigDialogComponent(_tabservice, cd) {
        this._tabservice = _tabservice;
        this.cd = cd;
        this.worksheets = [];
        this.selectedWorksheet = "";
        this.columns = [];
        this.tiles = { titleColor: 'white', background: 'dodgerblue', valueColor: 'black' };
        this.page = {
            header: { text: '', background: '', color: '' },
            backgroundcolor: 'white',
            backgroundimage: '',
            footer: { text: '', background: '', color: '' }
        };
        this.bgimages = [];
        this.closeDialog = function () {
            tableau.extensions.ui.closeDialog();
        };
        this.loadColumns = function (cols) {
            var _this = this;
            var i = 0;
            cols.forEach(function (v) {
                var cm = new src_app_model_ColumnsModel__WEBPACK_IMPORTED_MODULE_1__["ColumnsModel"]();
                cm.caption = v.fieldName;
                cm.name = v.fieldName;
                cm.colIndex = i++;
                cm.seq = cm.colIndex;
                cm.size = 0.1;
                cm.dataType = v.dataType;
                _this.columns.push(cm);
            });
        };
        this.worksheetDataSourceChange = function () {
            var _this = this;
            _this.columns = [];
            var worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
            worksheets.find(function (sheet) {
                if (sheet.name === _this.selectedWorksheet) {
                    sheet.getSummaryDataAsync({ maxRows: 1 }).then(function (sumdata) {
                        _this.loadColumns(sumdata.columns);
                    });
                }
            });
        };
        this.buildDialog = function () {
            var _this = this;
            var dashboard = tableau.extensions.dashboardContent.dashboard;
            _this.worksheets = [];
            dashboard.worksheets.forEach(function (worksheet) {
                _this.worksheets.push(worksheet.name);
            });
            this.worksheetDataSourceChange();
        };
        this.saveSettings = function () {
            var columnList = this.columns.filter(function (d) { return d.selected; });
            tableau.extensions.settings.set('selectedWorksheet', this.selectedWorksheet);
            tableau.extensions.settings.set('columns', JSON.stringify(columnList));
            tableau.extensions.settings.set('tiles', JSON.stringify(this.tiles));
            tableau.extensions.settings.set('page', JSON.stringify(this.page));
            tableau.extensions.settings.saveAsync().then(function (currentSettings) {
                tableau.extensions.ui.closeDialog();
            });
        };
    }
    ConfigDialogComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this._tabservice.getJSON('../../../assets/data/bg.json').subscribe(function (imgs) { return _this_1.bgimages = imgs; });
    };
    ConfigDialogComponent.prototype.loadSettings = function () {
        this.selectedWorksheet = tableau.extensions.settings.get('selectedWorksheet');
        var tmpDb = tableau.extensions.settings.get('columns');
        if (tmpDb) {
            this.columns = JSON.parse(tmpDb);
        }
        tmpDb = tableau.extensions.settings.get('tiles');
        if (tmpDb) {
            this.tiles = JSON.parse(tmpDb);
        }
        tmpDb = tableau.extensions.settings.get('page');
        if (tmpDb) {
            this.page = JSON.parse(tmpDb);
        }
    };
    ConfigDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tableau.extensions.initializeDialogAsync().then(function (openPayload) {
            /* let dcSettings : any = tableau.extensions.settings.get('dc_settings');
            if (dcSettings) {
              _this.cd.detectChanges();
            } */
            _this.loadSettings();
            _this.buildDialog();
        });
    };
    ConfigDialogComponent.ctorParameters = function () { return [
        { type: _tab_ext_service__WEBPACK_IMPORTED_MODULE_2__["TabExtService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ConfigDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./config-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/datacarousel/config-dialog/config-dialog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./config-dialog.component.css */ "./src/app/datacarousel/config-dialog/config-dialog.component.css")).default]
        }),
        __metadata("design:paramtypes", [_tab_ext_service__WEBPACK_IMPORTED_MODULE_2__["TabExtService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ConfigDialogComponent);
    return ConfigDialogComponent;
}());



/***/ }),

/***/ "./src/app/datacarousel/datacarousel.component.css":
/*!*********************************************************!*\
  !*** ./src/app/datacarousel/datacarousel.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".c-control {\n    bottom: -30px;\n    text-align: center;\n    padding: 5px;\n}\n\n.control-but {\n    background-image: none;\n    color: rgb(3, 77, 126);\n    margin: 10px;\n}\n\n.carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 10px;\n    text-indent: 0;\n    cursor: pointer;\n    border: none;\n    border-radius: 50%;\n    background-color: #757588;\n    box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n\n.carousel-indicators .active {\n    background-color: #0bd415;\n}\n\n.carousel-indicators li:hover {\n    background-color: #d1550d;\n}\n\n.carousel-indicators ol {\n    width: 100%;\n    overflow: hidden;\n    overflow-x: auto;\n}\n\n.carousel-indicators {\n    position: fixed;\n    bottom: 0;\n    background-color: rgba(50, 115, 220, 0.3);\n}\n\n.divTile {\n    height: 90px;\n    min-width: 40%;\n    background-color: dodgerblue;\n    margin: .2em!important;\n    padding: .2em;\n    border-radius: 10px;\n}\n\n.divTile .title {\n    font-size: medium;\n    font-weight: bolder;\n    color: white;\n    padding: 2px;\n}\n\n.divTile .content {\n    font-size: medium;\n    padding: 2px;\n    word-break: break-all!important;\n    max-height: 50px;\n    overflow: auto;\n}\n\n.page-number {\n    width:100%;\n    text-align: center;\n    padding-top: 10px;\n    font-weight: bold;\n}\n\n.header {\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    min-height: 25px;\n    vertical-align: middle;\n}\n\n.footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YWNhcm91c2VsL2RhdGFjYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kYXRhY2Fyb3VzZWwvZGF0YWNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYy1jb250cm9sIHtcbiAgICBib3R0b206IC0zMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jb250cm9sLWJ1dCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBjb2xvcjogcmdiKDMsIDc3LCAxMjYpO1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTc1ODg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiZDQxNTtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTU1MGQ7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIG9sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDExNSwgMjIwLCAwLjMpO1xufVxuXG4uZGl2VGlsZSB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIG1pbi13aWR0aDogNDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG4gICAgbWFyZ2luOiAuMmVtIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAuMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5kaXZUaWxlIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnB4O1xufVxuXG4uZGl2VGlsZSAuY29udGVudCB7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgcGFkZGluZzogMnB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbCFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnBhZ2UtbnVtYmVyIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/datacarousel/datacarousel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/datacarousel/datacarousel.component.ts ***!
  \********************************************************/
/*! exports provided: DatacarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatacarouselComponent", function() { return DatacarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tab_ext_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tab-ext.service */ "./src/app/tab-ext.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DatacarouselComponent = /** @class */ (function () {
    function DatacarouselComponent(elRef, changeDetectorRef, _tabservice) {
        this.elRef = elRef;
        this.changeDetectorRef = changeDetectorRef;
        this._tabservice = _tabservice;
        this.unregisterHandlerFunctions = [];
        this.unregisterSettingsEventListener = null;
        this.data = [];
        this.selectedWorksheet = "";
        this.columns = [];
        this.tiles = { titleColor: 'white', background: 'dodgerblue', valueColor: 'black', footer: '' };
        this.page = {
            header: { text: '', background: '', color: '' },
            backgroundcolor: 'white',
            backgroundimage: '',
            footer: { text: '', background: '', color: '' }
        };
        this.filterChangedHandler = function (e) {
            this.loadData();
        };
        this.loadData = function () {
            var _this = this;
            var worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
            _this.data = [];
            _this.changeDetectorRef.detectChanges();
            if (_this.selectedWorksheet == "") {
                worksheets[0].getSummaryDataAsync().then(function (dt) {
                    if (_this.columns.length == 0) {
                        dt.columns.forEach(function (element) {
                            _this.columns.push({ "colIndex": element._index, "seq": element._index, "caption": element._fieldName });
                        });
                    }
                    _this.data = dt.data;
                    _this.changeDetectorRef.detectChanges();
                });
            }
            else
                worksheets.find(function (sheet) {
                    if (sheet.name === _this.selectedWorksheet) {
                        sheet.getSummaryDataAsync().then(function (dt) {
                            if (_this.columns.length == 0) {
                                dt.columns.forEach(function (element) {
                                    _this.columns.push(element._fieldName);
                                });
                            }
                            _this.data = dt.data;
                            _this.changeDetectorRef.detectChanges();
                        });
                    }
                });
        };
        this.configure = function (_s) {
            var _this = this;
            var popupUrl = window.location.origin + "/datacarousel/config";
            var input = '';
            tableau.extensions.ui.displayDialogAsync(popupUrl, input, { height: 500, width: 700 }).bind(_this).then(function (_closePayload) {
                _this.loadData();
            }).catch(function (error) {
                switch (error.errorCode) {
                    case tableau.ErrorCodes.DialogClosedByUser:
                        console.log('Dialog was closed by user');
                        break;
                    default:
                        console.error(error.message);
                }
            });
        };
    }
    DatacarouselComponent.prototype.getPageStyle = function () {
        return {
            'height': '100vh', 'backgroundImage': 'url(../../../assets/images/' + this.page.backgroundimage + ')',
            'backgroundSize': 'cover', 'backgroundRepeat': 'no-repeat', 'backgroundColor': this.page.backgroundcolor
        };
    };
    DatacarouselComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this._tabservice.getJSON('../../assets/data/config.json').subscribe(function (cfg) {
            _this_1.columns = cfg.columns;
            _this_1.tiles = cfg.tiles;
            _this_1.page = cfg.page;
            _this_1.selectedWorksheet = cfg.selectedWorksheet;
        });
    };
    DatacarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tableau.extensions.initializeAsync().then(function () {
            _this.unregisterHandlerFunctions.forEach(function (unregisterHandlerFunction) {
                unregisterHandlerFunction();
            });
            _this.unregisterSettingsEventListener = tableau.extensions.settings.addEventListener(tableau.TableauEventType.SettingsChanged, function (_settingsEvent) {
                _this.loadData();
            });
            var dashboard = tableau.extensions.dashboardContent.dashboard;
            dashboard.worksheets.forEach(function (worksheet) {
                var unregisterHandlerFunction = worksheet.addEventListener(tableau.TableauEventType.FilterChanged, function (filterEvent) {
                    _this.loadData();
                });
                _this.unregisterHandlerFunctions.push(unregisterHandlerFunction);
            });
            _this.loadData();
        }, function (err) {
            // Something went wrong in initialization.
            console.log('Error while Initializing: ' + err.toString());
        });
    };
    DatacarouselComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _tab_ext_service__WEBPACK_IMPORTED_MODULE_1__["TabExtService"] }
    ]; };
    DatacarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datacarousel',
            template: __importDefault(__webpack_require__(/*! raw-loader!./datacarousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/datacarousel/datacarousel.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./datacarousel.component.css */ "./src/app/datacarousel/datacarousel.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _tab_ext_service__WEBPACK_IMPORTED_MODULE_1__["TabExtService"]])
    ], DatacarouselComponent);
    return DatacarouselComponent;
}());



/***/ }),

/***/ "./src/app/default/default.component.css":
/*!***********************************************!*\
  !*** ./src/app/default/default.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/default/default.component.ts":
/*!**********************************************!*\
  !*** ./src/app/default/default.component.ts ***!
  \**********************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
        this.Extns = ['Export Toolbar'];
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent.ctorParameters = function () { return []; };
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default',
            template: __importDefault(__webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./default.component.css */ "./src/app/default/default.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/model/ColumnsModel.ts":
/*!***************************************!*\
  !*** ./src/app/model/ColumnsModel.ts ***!
  \***************************************/
/*! exports provided: ColumnsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsModel", function() { return ColumnsModel; });
var ColumnsModel = /** @class */ (function () {
    function ColumnsModel() {
        this.selected = true;
        this.asc = true;
    }
    return ColumnsModel;
}());



/***/ }),

/***/ "./src/app/tab-ext.service.ts":
/*!************************************!*\
  !*** ./src/app/tab-ext.service.ts ***!
  \************************************/
/*! exports provided: TabExtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabExtService", function() { return TabExtService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabExtService = /** @class */ (function () {
    function TabExtService(_http) {
        this._http = _http;
        this.regServ = [];
    }
    TabExtService.prototype.getJSON = function (_jsonURL) {
        return this._http.get(_jsonURL);
    };
    TabExtService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TabExtService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TabExtService);
    return TabExtService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sankarveeraiyan/Desktop/extensions/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map