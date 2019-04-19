webpackJsonp([26],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerHomePageModule", function() { return ManagerHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_home__ = __webpack_require__(555);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ManagerHomePageModule = /** @class */ (function () {
    function ManagerHomePageModule() {
    }
    ManagerHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__manager_home__["a" /* ManagerHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manager_home__["a" /* ManagerHomePage */]),
            ],
        })
    ], ManagerHomePageModule);
    return ManagerHomePageModule;
}());

//# sourceMappingURL=manager-home.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagerHomePage = /** @class */ (function () {
    function ManagerHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ManagerHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManagerHomePage');
    };
    ManagerHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-manager-home',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/manager-home/manager-home.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>manager-home</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content class="pageContent">\n  <br />\n  <br />\n  <br />\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 text-center>\n        <button ion-button class="circular-button" color="primary">\n          <ion-icon ios="ios-podium" md="md-podium"></ion-icon>\n        </button>\n        <h6 ion-text>Dashboard</h6>\n      </ion-col>\n\n      <ion-col col-4 text-center>\n        <button ion-button class="circular-button" color="primary">\n          <i class="fa fa-list" aria-hidden="true"></i>\n        </button>\n        <h6 ion-text>Leads</h6>\n      </ion-col>\n\n      <ion-col col-4 text-center>\n        <button ion-button class="circular-button" color="primary">\n          <i class="fa fa-area-chart" aria-hidden="true"></i>\n        </button>\n        <h6 ion-text>Reports</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-4 text-center>\n        <button ion-button class="circular-button" color="primary">\n          <i class="fa fa-calendar" aria-hidden="true"></i>\n        </button>\n        <h6 ion-text>Calender</h6>\n      </ion-col>\n\n      <ion-col col-4 text-center>\n        <button ion-button class="circular-button" color="primary">\n          <i class="fa fa-users" aria-hidden="true"></i>\n        </button>\n        <h6 ion-text>My Team</h6>\n      </ion-col>\n\n      <ion-col col-4 text-center>\n        <button ion-button class="circular-button" color="primary">\n          <i class="fa fa-briefcase" aria-hidden="true"></i>\n        </button>\n        <h6 ion-text>My Sales</h6>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/manager-home/manager-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ManagerHomePage);
    return ManagerHomePage;
}());

//# sourceMappingURL=manager-home.js.map

/***/ })

});
//# sourceMappingURL=26.js.map