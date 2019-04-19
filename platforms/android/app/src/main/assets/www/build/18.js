webpackJsonp([18],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]),
            ],
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password.module.js.map

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

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
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


// Serevices

var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams, alertCtrl, loadingProvider, authProvider, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingProvider = loadingProvider;
        this.authProvider = authProvider;
        this.localStorageProvider = localStorageProvider;
        this.credentials = { currentPassword: '', newPassword: '', confirmPassword: '' };
        this.successMessage = '';
        this.errorMessage = '';
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
    };
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    // Custom Methods
    ChangePasswordPage.prototype.changePassword = function () {
        var _this = this;
        this.loadingProvider.showLoading();
        if (this.loggedInUser.password != this.credentials.currentPassword) {
            this.errorMessage = 'Password you have entered does not match your current password.';
            this.loadingProvider.hideLoading();
            return;
        }
        if (this.credentials.currentPassword == this.credentials.newPassword) {
            this.errorMessage = 'New Password should not be same as current password.';
            this.loadingProvider.hideLoading();
            return;
        }
        if (this.credentials.newPassword != this.credentials.confirmPassword) {
            this.errorMessage = 'New password does not match the confirm password.';
            this.loadingProvider.hideLoading();
            return;
        }
        this.authProvider.changePassword(this.loggedInUser.id, this.credentials.newPassword).subscribe(function (response) {
            if (response) {
                if (JSON.parse(response['_body'])['code'] == 400) {
                    _this.errorMessage = 'Bad Request!';
                    _this.loadingProvider.hideLoading();
                    return;
                }
                if (JSON.parse(response['_body'])['code'] == 200) {
                    _this.loggedInUser.password = _this.credentials.newPassword;
                    _this.localStorageProvider.setLoggedInUser(_this.loggedInUser);
                    _this.credentials = { currentPassword: '', newPassword: '', confirmPassword: '' };
                    _this.successMessage = 'Your password has been changed successfully!';
                    _this.loadingProvider.hideLoading();
                    return;
                }
            }
            else {
                _this.showError("Access Denied");
            }
        }, function (error) {
            //this.showError(error);
            console.log(error);
            _this.showError('Invalid Request.');
        });
    };
    ChangePasswordPage.prototype.showError = function (text) {
        this.loadingProvider.hideLoading();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/change-password/change-password.html"*/'<ion-content class="pageContent">\n\n  <ion-card>\n\n    <ion-item text-center>\n      <div style="color:#17A2B8; font-size: 30px;">\n        <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n      </div>\n      <h1 style="color:#17A2B8;">\n        Change Password\n      </h1>\n    </ion-item>\n\n    <form #loginForm="ngForm" (ngSubmit)="changePassword()" autocomplete="off">\n      <div *ngIf="errorMessage" class="errorMessage">{{errorMessage}}</div>\n      <div *ngIf="successMessage" class="successMessage">{{successMessage}}</div>\n\n      <ion-grid>\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Current Password</ion-label>\n            <ion-input type="password" name="currentPassword" required [(ngModel)]="credentials.currentPassword"></ion-input>\n          </ion-item>\n        </ion-row>\n        \n        <ion-row>\n          <ion-item>\n            <ion-label floating>New Password</ion-label>\n            <ion-input type="password" name="newPassword" required [(ngModel)]="credentials.newPassword"></ion-input>\n          </ion-item>\n        </ion-row>\n        \n        <ion-row>\n          <ion-item>\n            <ion-label floating>Confirm Password</ion-label>\n            <ion-input type="password" name="confirmPassword" required [(ngModel)]="credentials.confirmPassword"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row padding>\n          <button ion-button color="appPrimary" full type="submit" [disabled]="!loginForm.form.valid">Change</button>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=18.js.map