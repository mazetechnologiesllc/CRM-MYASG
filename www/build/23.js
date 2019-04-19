webpackJsonp([23],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAffiliatePageModule", function() { return AddAffiliatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_affiliate__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddAffiliatePageModule = /** @class */ (function () {
    function AddAffiliatePageModule() {
    }
    AddAffiliatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_affiliate__["a" /* AddAffiliatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_affiliate__["a" /* AddAffiliatePage */]),
            ],
        })
    ], AddAffiliatePageModule);
    return AddAffiliatePageModule;
}());

//# sourceMappingURL=add-affiliate.module.js.map

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

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAffiliatePage; });
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

var AddAffiliatePage = /** @class */ (function () {
    function AddAffiliatePage(navCtrl, navParams, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localStorageProvider = localStorageProvider;
        this.affiliateType = [];
        this.managers = [];
        this.durations = [];
    }
    AddAffiliatePage.prototype.ngOnInit = function () {
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
        this.affiliateType = [
            "Under Manager",
            "Individual Affiliate"
        ];
        this.managers = [
            "Manager 1",
            "Manager 2"
        ];
        this.durations = [
            "01 Month",
            "03 Month",
            "06 Month",
            "12 Month"
        ];
    };
    AddAffiliatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddAffiliatePage');
    };
    // Custom Methods
    AddAffiliatePage.prototype.addAffiliate = function () {
        return;
    };
    AddAffiliatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-affiliate',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/add-affiliate/add-affiliate.html"*/'<ion-content class="pageContent">\n\n  <ion-card>\n    <ion-item no-lines text-center>\n      <div style="color:#17A2B8; font-size: 30px;">\n        <ion-icon ios="ios-person-add" md="md-person-add"></ion-icon>\n      </div>\n      <h1 style="color:#17A2B8;">\n        Create Affiliate\n      </h1>\n    </ion-item>\n\n    <form #loginForm="ngForm" (ngSubmit)="addAffiliate()" autocomplete="off">\n      <div *ngIf="errorMessage" class="errorMessage">{{errorMessage}}</div>\n      <div *ngIf="successMessage" class="successMessage">{{successMessage}}</div>\n\n      <ion-grid *ngIf="loggedInUser">\n\n        <ion-row *ngIf="loggedInUser.userTypeId == 7">\n          <ion-item>\n            <ion-label floating>Select Type*</ion-label>\n            <ion-select>\n              <ion-option *ngFor="let aType of affiliateType" name="affiliateType">{{aType}}</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n\n        <ion-row *ngIf="loggedInUser.userTypeId == 7">\n          <ion-item>\n            <ion-label floating>Manager*</ion-label>\n            <ion-select>\n              <ion-option *ngFor="let manager of managers" name="affiliateType">{{manager}}</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Email Id*</ion-label>\n            <ion-input type="text" name="email" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>User Name*</ion-label>\n            <ion-input type="text" name="userName" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Security Amount*</ion-label>\n            <ion-input type="text" name="securityAmount" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Renewal Amount (per month)*</ion-label>\n            <ion-input type="text" name="renewalAmount" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n            <ion-item>\n              <ion-label floating>Duration*</ion-label>\n              <ion-select>\n                <ion-option *ngFor="let duration of durations" name="affiliateType">{{duration}}</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Start Date*</ion-label>\n            <ion-input type="date" name="startDate" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row padding>\n          <button ion-button color="appPrimary" full type="submit">Submit</button>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/add-affiliate/add-affiliate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], AddAffiliatePage);
    return AddAffiliatePage;
}());

//# sourceMappingURL=add-affiliate.js.map

/***/ })

});
//# sourceMappingURL=23.js.map