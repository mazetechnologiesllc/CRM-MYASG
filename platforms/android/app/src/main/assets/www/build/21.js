webpackJsonp([21],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffiliateDashboardPageModule", function() { return AffiliateDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__affiliate_dashboard__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AffiliateDashboardPageModule = /** @class */ (function () {
    function AffiliateDashboardPageModule() {
    }
    AffiliateDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__affiliate_dashboard__["a" /* AffiliateDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__affiliate_dashboard__["a" /* AffiliateDashboardPage */]),
            ],
        })
    ], AffiliateDashboardPageModule);
    return AffiliateDashboardPageModule;
}());

//# sourceMappingURL=affiliate-dashboard.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__affiliate_affiliate__ = __webpack_require__(203);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__affiliate_affiliate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_authentication__ = __webpack_require__(204);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_authentication__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_client__ = __webpack_require__(205);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__client_client__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lead_lead__ = __webpack_require__(206);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__lead_lead__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_loading__ = __webpack_require__(207);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__loading_loading__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local_storage_local_storage__ = __webpack_require__(104);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__local_storage_local_storage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manager_manager__ = __webpack_require__(208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__manager_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_service__ = __webpack_require__(209);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__service_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_state__ = __webpack_require__(210);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__state_state__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__web_lead_web_lead__ = __webpack_require__(211);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_9__web_lead_web_lead__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__prospects_prospects__ = __webpack_require__(212);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_10__prospects_prospects__["a"]; });











//# sourceMappingURL=index.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AffiliateDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var AffiliateDashboardPage = /** @class */ (function () {
    function AffiliateDashboardPage(navCtrl, navParams, authProvider, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.localStorageProvider = localStorageProvider;
        this.loggedInUserName = '';
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    AffiliateDashboardPage.prototype.ngOnInit = function () {
        if (this.loggedInUser) {
            if (this.loggedInUser.suffix) {
                this.loggedInUserName = this.loggedInUserName + this.loggedInUser.suffix + ' ';
            }
            if (this.loggedInUser.firstName) {
                this.loggedInUserName = this.loggedInUserName + this.loggedInUser.firstName + ' ';
            }
            if (this.loggedInUser.middleName) {
                this.loggedInUserName = this.loggedInUserName + this.loggedInUser.middleName + ' ';
            }
            if (this.loggedInUser.lastName) {
                this.loggedInUserName = this.loggedInUserName + ' ' + this.loggedInUser.lastName;
            }
        }
    };
    AffiliateDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AffiliateDashboardPage');
    };
    // Custom Methods
    AffiliateDashboardPage.prototype.viewLeadList = function () {
        this.navCtrl.setRoot('ListLeadPage');
    };
    AffiliateDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-affiliate-dashboard',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/affiliate-dashboard/affiliate-dashboard.html"*/'<ion-content class="pageContent">\n\n  <!-- <h1 style="color:#17A2B8; margin-left: 10px;">\n    <ion-icon ios="ios-home" md="md-home"></ion-icon>\n    Dashboard\n  </h1> -->\n\n  <ion-card style="color:#000000;">\n\n    <ion-item text-center>\n      <div style="font-size: 50px; padding: 5px;">\n        <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n      </div>\n      <h1>Affiliate</h1>\n      <h2 *ngIf="loggedInUser"><b>{{ loggedInUser.email }}</b></h2>\n    </ion-item>\n\n    <ion-item text-wrap style="background-color: #1CAF9A;">\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-8 style="text-align: center; font-size: 16px;">\n            <b>Name</b>\n          </ion-col>\n          <ion-col col-4 style="color: #051080; text-align: center; font-size: 16px;">\n            <b>Status</b>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-8 style="font-size: 12px; text-align: center;">\n            <span *ngIf=\'loggedInUser\'>{{ loggedInUserName | uppercase }}</span>\n          </ion-col>\n          <ion-col col-4 style="color: #051080; text-align: center; font-size: 12px;">\n            AFFILIATE\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </ion-card>\n\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col col-6>\n\n        <ion-card>\n          <ion-item style="background-color: #17A2B8; color: #ffffff;">\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col col-3>\n                  <div style="font-size: 20px; margin-top: 12px;">\n                    <ion-icon ios="ios-clipboard" md="md-clipboard"></ion-icon>\n                  </div>\n                </ion-col>\n                <ion-col col-9 (click)="viewLeadList()" style=" cursor: pointer;">\n                  <div style="font-size: 10px;">MY LEADS</div>\n                  <div style="font-size: 18px; padding: 5px, 0;">{{loggedInUser.leadAssigned}}</div>\n                  <div style="font-size: 10px;">Lead Generated till now</div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-card>\n\n      </ion-col>\n      <ion-col col-6>\n\n        <ion-card>\n          <ion-item style="background-color: #6F42C1; color: #ffffff;">\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col col-3>\n                  <div style="font-size: 20px; margin-top: 12px;">\n                    <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n                  </div>\n                </ion-col>\n                <ion-col col-9>\n                  <div style="font-size: 10px;">MESSAGE</div>\n                  <div style="font-size: 18px; padding: 5px, 0;">0</div>\n                  <div style="font-size: 10px;">In Inbox</div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n\n        <ion-card>\n          <ion-item style="background-color: #1CAF9A; color: #ffffff;">\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col col-3>\n                  <div style="font-size: 20px; margin-top: 12px;">\n                    <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n                  </div>\n                </ion-col>\n                <ion-col col-9>\n                  <div style="font-size: 10px;">CREDIT INFORMATION</div>\n                  <div style="font-size: 18px; padding: 5px, 0;">Click Here</div>\n                  <div style="font-size: 10px;">Information</div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-card>\n\n      </ion-col>\n      <ion-col col-6>\n\n        <ion-card>\n          <ion-item style="background-color: #0866C6; color: #ffffff;">\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col col-3>\n                  <div style="font-size: 22px; margin-top: 12px;">\n                    $\n                  </div>\n                </ion-col>\n                <ion-col col-9>\n                  <div style="font-size: 10px;">TOTAL EARN</div>\n                  <div style="font-size: 18px; padding: 5px, 0;">$ 0</div>\n                  <div style="font-size: 10px;">In my wallet</div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/affiliate-dashboard/affiliate-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], AffiliateDashboardPage);
    return AffiliateDashboardPage;
}());

//# sourceMappingURL=affiliate-dashboard.js.map

/***/ })

});
//# sourceMappingURL=21.js.map