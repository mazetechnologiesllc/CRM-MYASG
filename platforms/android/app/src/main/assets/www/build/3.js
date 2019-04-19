webpackJsonp([3],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(557);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

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

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardPage; });
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

var AdminDashboardPage = /** @class */ (function () {
    function AdminDashboardPage(navCtrl, navParams, authProvider, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.localStorageProvider = localStorageProvider;
        this.pageTitle = '';
        this.loggedInUserName = '';
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    AdminDashboardPage.prototype.ngOnInit = function () {
        if (this.loggedInUser) {
            this.userType = this.loggedInUser.userTypeId;
            if (this.userType == 1) {
                this.pageTitle = 'Super Admin Panel';
            }
            else if (this.userType == 2) {
                this.pageTitle = 'Admin Panel';
            }
            else if (this.userType == 3) {
                this.pageTitle = 'Manager Panel';
            }
            else if (this.userType == 4) {
                this.pageTitle = 'Affilate Panel';
            }
            else if (this.userType == 5) {
                this.pageTitle = 'Sales Panel';
            }
            else if (this.userType == 6) {
                this.pageTitle = 'Client Panel';
            }
            else if (this.userType == 7) {
                this.pageTitle = 'Company Panel';
            }
            else if (this.userType == 8) {
                this.pageTitle = 'Super Admin User Panel';
            }
            else if (this.userType == 9) {
                this.pageTitle = 'Super Admin User 1 Panel';
            }
        }
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
    };
    AdminDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminDashboardPage');
    };
    // Custom Methods
    AdminDashboardPage.prototype.logout = function () {
        this.authProvider.logout();
        this.navCtrl.setRoot('LoginPage');
    };
    AdminDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-admin-dashboard',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/admin-dashboard/admin-dashboard.html"*/'<ion-content padding class="pageContent">\n  Admin Dashboard. <br /><br />Work in progress...\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/admin-dashboard/admin-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], AdminDashboardPage);
    return AdminDashboardPage;
}());

//# sourceMappingURL=admin-dashboard.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CcqPage; });
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

var CcqPage = /** @class */ (function () {
    function CcqPage(navCtrl, navParams, authProvider, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.localStorageProvider = localStorageProvider;
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    CcqPage.prototype.ngOnInit = function () {
    };
    CcqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CcqPage');
    };
    CcqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ccq',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/ccq/ccq.html"*/'<ion-content padding class="pageContent">\n  Work in progress...\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/ccq/ccq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], CcqPage);
    return CcqPage;
}());

//# sourceMappingURL=ccq.js.map

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

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDashboardPage; });
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

var ClientDashboardPage = /** @class */ (function () {
    function ClientDashboardPage(navCtrl, navParams, authProvider, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.localStorageProvider = localStorageProvider;
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    ClientDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientDashboardPage');
    };
    ClientDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-client-dashboard',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/client-dashboard/client-dashboard.html"*/'<ion-content padding class="pageContent">\n  Client Dashboard.<br /> <br />Comming Soon...\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/client-dashboard/client-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], ClientDashboardPage);
    return ClientDashboardPage;
}());

//# sourceMappingURL=client-dashboard.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDashboardPage; });
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

var CompanyDashboardPage = /** @class */ (function () {
    function CompanyDashboardPage(navCtrl, navParams, authProvider, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.localStorageProvider = localStorageProvider;
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    CompanyDashboardPage.prototype.ngOnInit = function () {
    };
    CompanyDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanyDashboardPage');
    };
    // Custom Methods
    CompanyDashboardPage.prototype.viewLeadList = function () {
        return;
    };
    CompanyDashboardPage.prototype.viewAffiliateList = function () {
        return;
    };
    CompanyDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-company-dashboard',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/company-dashboard/company-dashboard.html"*/'<ion-content class="pageContent">\n\n  <ion-card style="color:#000000;">\n\n    <ion-item text-center>\n      <div style="font-size: 50px; padding: 5px;">\n        <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n      </div>\n      <h1>Company</h1>\n      <h2 *ngIf="loggedInUser"><b>{{ loggedInUser.email }}</b></h2>\n    </ion-item>\n\n    <ion-item text-wrap style="background-color: #1CAF9A;">\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-8 style="font-size: 16px; text-align: center;">\n            <b>Name</b>\n          </ion-col>\n          <ion-col col-4 style="font-size: 16px; text-align: center; color: #051080;">\n            <b>Status</b>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-8 style="font-size: 12px; text-align: center;">\n            <span *ngIf=\'loggedInUser\'>{{ loggedInUserName | uppercase }}</span>\n          </ion-col>\n          <ion-col col-4 style="font-size: 12px; text-align: center; color: #051080;">\n            COMPANY\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </ion-card>\n\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col col-6>\n\n        <ion-card>\n          <ion-item style="background-color: #17A2B8; color: #ffffff;">\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col col-3>\n                  <div style="font-size: 20px; margin-top: 7px;">\n                    <ion-icon ios="ios-people" md="md-people"></ion-icon>\n                  </div>\n                </ion-col>\n                <ion-col col-9 (click)="viewLeadList()" style=" cursor: pointer;">\n                  <div style="font-size: 10px;">TODAY\'S VISITOR</div>\n                  <div style="font-size: 18px; padding: 5px, 0;">1, 975, 224</div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-card>\n\n      </ion-col>\n      <ion-col col-6>\n\n        <ion-card>\n          <ion-item style="background-color: #6F42C1; color: #ffffff;">\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col col-3>\n                  <div style="font-size: 20px; margin-top: 7px;">\n                    <ion-icon ios="ios-people" md="md-people"></ion-icon>\n                  </div>\n                </ion-col>\n                <ion-col col-9>\n                  <div style="font-size: 10px;">SALES PERSON</div>\n                  <div style="font-size: 18px; padding: 5px, 0;">0</div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n\n        <ion-card>\n          <ion-item style="background-color: #1CAF9A; color: #ffffff;">\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col col-3>\n                  <div style="font-size: 20px; margin-top: 7px;">\n                    <ion-icon ios="ios-people" md="md-people"></ion-icon>\n                  </div>\n                </ion-col>\n                <ion-col col-9 (click)="viewAffiliateList()" style=" cursor: pointer;">\n                  <div style="font-size: 10px;">% TOTAL CLIENT</div>\n                  <div style="font-size: 18px; padding: 5px, 0;">0</div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-card>\n\n      </ion-col>\n      <ion-col col-6>\n\n        <ion-card>\n          <ion-item style="background-color: #0866C6; color: #ffffff;">\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col col-3>\n                  <div style="font-size: 22px; margin-top: 7px;">\n                    <ion-icon ios="ios-people" md="md-people"></ion-icon>\n                  </div>\n                </ion-col>\n                <ion-col col-9>\n                  <div style="font-size: 10px;">MANAGER/AFFILIATE</div>\n                  <div style="font-size: 18px; padding: 5px, 0;">1/1</div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/company-dashboard/company-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], CompanyDashboardPage);
    return CompanyDashboardPage;
}());

//# sourceMappingURL=company-dashboard.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, authProvider, localStorageProvider, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.localStorageProvider = localStorageProvider;
        this.serviceProvider = serviceProvider;
        this.skipMsg = "Skip";
        this.state = 'x';
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    HomePage.prototype.ngOnInit = function () {
        this.cpses = [
            { title: 'Manifestation Education', desc: 'Financial life coaching, seminar and presentation training.', imgUrl: 'assets/imgs/h3.jpeg' },
            { title: 'Marketing Enterprise', desc: 'Small business enterprise MLM membership.', imgUrl: 'assets/imgs/h2.jpg' },
            { title: 'Monetary Empowerment', desc: 'Individual affiliate manager and affiliate agent MLM membership.', imgUrl: 'assets/imgs/h3.jpeg' },
            { title: 'Rapid 3 Consulting', desc: 'Financial and credit consulting.', imgUrl: 'assets/imgs/h2.jpg' },
            { title: 'Mendelson Burke Accounting LLC', desc: 'Taxes, accounting, bookkeeping, payroll processing.', imgUrl: 'assets/imgs/h3.jpeg' },
            { title: 'FON VON Auto', desc: 'Auto financing and leasing of new vehicles.', imgUrl: 'assets/imgs/h2.jpg' },
            { title: 'Carter Thomas', desc: 'Business development services; business plans, incorporation, and LLC formation, minority certification, sam registration. Strategic partnership planning.', imgUrl: 'assets/imgs/h3.jpeg' },
            { title: 'Maze Technologies', desc: 'Software development, website development, mobile application development, I.T infrastructure development, crypto-currency consulting.', imgUrl: 'assets/imgs/h2.jpg' },
            { title: 'Newtech Marketing Group', desc: 'Corporate branding, logos, brochures, flyers, business cards, mail, online, social media, television, and radio marketing campaigns for busines.', imgUrl: 'assets/imgs/h3.jpeg' },
            { title: 'American Monetary Capital Funding', desc: 'Loan consulting from 20k to 5 million.', imgUrl: 'assets/imgs/h2.jpg' },
            { title: 'New Fortune Realty', desc: 'Licensed realtor, real-estate purchases lease and rentals, real-estate investments, mortgage, hard money and short-sale consulting.', imgUrl: 'assets/imgs/h3.jpeg' }
        ];
        // this.services = [
        //   { name: 'Sales Manager', imgUrl: 'assets/imgs/h3.jpeg', price: '$1,995' },
        //   { name: 'Sales Affiliate Recruitment', imgUrl: 'assets/imgs/h2.jpg', price: '$139' },
        //   { name: 'Silver Package (3 months)', imgUrl: 'assets/imgs/h3.jpeg', price: '$1,995' },
        //   { name: 'Gold Package (6 months)', imgUrl: 'assets/imgs/h2.jpg', price: '$2,995' },
        //   { name: 'Platinum Package (12 months)', imgUrl: 'assets/imgs/h3.jpeg', price: '$5,995' },
        //   { name: 'Tradeline 1-10k (Authorized User)', imgUrl: 'assets/imgs/h2.jpg', price: '$900' },
        //   { name: 'Tradeline 10-20k (Authorized User)', imgUrl: 'assets/imgs/h3.jpeg', price: '$1,200' },
        //   { name: 'Tradeline 20-40k (Authorized User)', imgUrl: 'assets/imgs/h2.jpg', price: '$1,500' },
        //   { name: 'Funding Processing Fee', imgUrl: 'assets/imgs/h3.jpeg', price: '$497' },
        //   { name: 'Funding Business', imgUrl: 'assets/imgs/h2.jpg', price: '$200k (Avg Loan Amt)' },
        //   { name: 'Funding Personal', imgUrl: 'assets/imgs/h3.jpeg', price: '$70k (Avg Loan Amt)' },
        //   { name: 'W-2 and 1099 Taxes', imgUrl: 'assets/imgs/h2.jpg', price: '$375-$600' },
        //   { name: 'Tax Corporate', imgUrl: 'assets/imgs/h3.jpeg', price: '$750' },
        //   { name: 'Partner', imgUrl: 'assets/imgs/h2.jpg', price: '$375' },
        //   { name: 'Ammendments', imgUrl: 'assets/imgs/h3.jpeg', price: '$375' },
        //   { name: 'Tax Resolution', imgUrl: 'assets/imgs/h2.jpg', price: '15% of Liability' },
        //   { name: 'SEO, PPC and SEM', imgUrl: 'assets/imgs/h3.jpeg', price: '$1,500/Monthly' },
        //   { name: 'Corporate Branding', imgUrl: 'assets/imgs/h2.jpg', price: 'Starts at $6,000' },
        //   { name: 'Social Media Marketing', imgUrl: 'assets/imgs/h3.jpeg', price: '$1,500/Monthly' },
        //   { name: 'Visual Marketing (Video Commercials)', imgUrl: 'assets/imgs/h2.jpg', price: 'Starts at $3,000' },
        //   { name: 'Graphic Designing', imgUrl: 'assets/imgs/h3.jpeg', price: 'Starts at $600' },
        //   { name: 'Business Incorporation', imgUrl: 'assets/imgs/h2.jpg', price: '$600' },
        //   { name: 'S Corp', imgUrl: 'assets/imgs/h3.jpeg', price: '$600' },
        //   { name: 'C Corp', imgUrl: 'assets/imgs/h2.jpg', price: '$600' },
        //   { name: 'LLC', imgUrl: 'assets/imgs/h3.jpeg', price: '$600' },
        //   { name: 'Grant Writing', imgUrl: 'assets/imgs/h2.jpg', price: '$3,600' },
        //   { name: 'SAM Registration', imgUrl: 'assets/imgs/h3.jpeg', price: '$3,000' },
        //   { name: 'MBE & WMBE 8a Certifications', imgUrl: 'assets/imgs/h2.jpg', price: '$6,900' },
        //   { name: 'Business Plan Basic', imgUrl: 'assets/imgs/h3.jpeg', price: '$500' },
        //   { name: 'Business Plan Detailed', imgUrl: 'assets/imgs/h2.jpg', price: '$3,000' },
        //   { name: 'Business Plan 100 Pages', imgUrl: 'assets/imgs/h3.jpeg', price: '$6,000' },
        //   { name: 'Auto Lease or Finance', imgUrl: 'assets/imgs/h2.jpg', price: 'MSRP' }
        // ]
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.loadServices();
    };
    HomePage.prototype.loadServices = function () {
        var _this = this;
        this.serviceProvider.getServices().subscribe(function (data) {
            console.log(data);
            var services = JSON.parse(data['_body']);
            if (services.length > 0) {
                _this.popServices = services.map((function (e) { if (e.pop_service == 'Y')
                    return e; })).filter(function (e) { return e !== undefined; });
            }
            _this.allServices = services;
        }, function (error) {
        });
    };
    HomePage.prototype.openServiceDetail = function (service) {
        this.navCtrl.push('ServiceDetailsPage', service);
    };
    // Custom Methods
    HomePage.prototype.slideChanged = function () {
        if (this.slides.isEnd())
            this.skipMsg = "Alright, I got it";
    };
    HomePage.prototype.slideMoved = function () {
        if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
            this.state = 'rightSwipe';
        else
            this.state = 'leftSwipe';
    };
    HomePage.prototype.animationDone = function () {
        this.state = 'x';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/home/home.html"*/'<ion-content class="pageContent">\n  <h4 ion-text text-center color="appWarning">All Services</h4>\n  <p ion-text text-center>Companies Products and Services</p>\n\n  <ion-slides pager style="height: 90%;" (ionSlideDidChange)="slideChanged()" (ionSlideDrag)="slideMoved()">\n      <ion-slide>\n        <div class="diag">\n          <div class="service-icon" [@bounce]=\'state\' (@bounce.done)="animationDone()">\n            <i class="fa fa-book" aria-hidden="true"></i>\n          </div>\n          <!-- <ion-icon ios="ios-analytics" md="md-analytics" color="primary" [@bounce]=\'state\'\n            (@bounce.done)="animationDone()"></ion-icon> -->\n  \n        </div>\n        <div [@bounce]=\'state\'>\n          <h2>MANIFESTATION EDUCATION</h2>\n          <p>Financial life coaching, seminar and presentation training.</p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="diag">\n          <!-- <ion-icon ios="ios-trophy" md="md-trophy" color="primary" [@bounce]=\'state\'></ion-icon> -->\n          <div class="service-icon" [@bounce]=\'state\'>\n            <i class="fa fa-globe" aria-hidden="true"></i>\n          </div>\n        </div>\n        <div [@bounce]=\'state\'>\n          <h2>MARKETING ENTERPRISE</h2>\n          <p>Small business enterprise MLM membership.</p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="diag">\n          <!-- <ion-icon ios="ios-analytics" md="md-analytics" color="primary" [@bounce]=\'state\'></ion-icon> -->\n          <div class="service-icon" [@bounce]=\'state\'>\n            <i class="fa fa-user-plus" aria-hidden="true"></i>\n          </div>\n        </div>\n        <div [@bounce]=\'state\'>\n          <h2>MONETARY EMPOWERMENT</h2>\n          <p>Individual affiliate manager and affiliate agent MLM membership.</p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="diag">\n          <!-- <ion-icon ios="ios-chatboxes" md="md-chatboxes" color="primary" [@bounce]=\'state\'></ion-icon> -->\n          <div class="service-icon" [@bounce]=\'state\'>\n            <i class="fa fa-credit-card-alt" aria-hidden="true"></i>\n          </div>\n        </div>\n        <div [@bounce]=\'state\'>\n          <h3>RAPID 3 CONSULTING</h3>\n          <p>Financial and credit consulting.</p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="diag">\n          <!-- <ion-icon ios="ios-chatboxes" md="md-chatboxes" color="primary" [@bounce]=\'state\'></ion-icon> -->\n          <div class="service-icon" [@bounce]=\'state\'>\n            <i class="fa fa-money" aria-hidden="true"></i>\n          </div>\n        </div>\n        <div [@bounce]=\'state\'>\n          <h3>MENDELSON BURKE ACCOUNTING LLC</h3>\n          <p>Taxes, accounting, bookkeeping, payroll processing.</p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="diag">\n          <!-- <ion-icon ios="ios-chatboxes" md="md-chatboxes" color="primary" [@bounce]=\'state\'></ion-icon> -->\n          <div class="service-icon" [@bounce]=\'state\'>\n            <i class="fa fa-car" aria-hidden="true"></i>\n          </div>\n        </div>\n        <div [@bounce]=\'state\'>\n          <h3>FON VON AUTO</h3>\n          <p>Auto financing and leasing of new vehicles.</p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="diag">\n          <!-- <ion-icon ios="ios-chatboxes" md="md-chatboxes" color="primary" [@bounce]=\'state\'></ion-icon> -->\n          <div class="service-icon" [@bounce]=\'state\'>\n            <i class="fa fa-briefcase" aria-hidden="true"></i>\n          </div>\n        </div>\n        <div [@bounce]=\'state\'>\n          <h3>CARTER THOMAS</h3>\n          <p>Business development services; business plans, incorporation, and LLC formation, minority certification, sam\n            registration. Strategic partnership planning.</p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="diag">\n          <!-- <ion-icon ios="ios-chatboxes" md="md-chatboxes" color="primary" [@bounce]=\'state\'></ion-icon> -->\n          <div class="service-icon" [@bounce]=\'state\'>\n            <i class="fa fa-laptop" aria-hidden="true"></i>\n          </div>\n        </div>\n        <div [@bounce]=\'state\'>\n          <h3>MAZE TECHNOLOGIES</h3>\n          <p>Software development, website development, mobile application development, I.T infrastructure development,\n            crypto-currency consulting.</p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="diag">\n          <!-- <ion-icon ios="ios-chatboxes" md="md-chatboxes" color="primary" [@bounce]=\'state\'></ion-icon> -->\n          <div class="service-icon" [@bounce]=\'state\'>\n            <i class="fa fa-globe" aria-hidden="true"></i>\n          </div>\n        </div>\n        <div [@bounce]=\'state\'>\n          <h3>NEWTECH MARKETING GROUP</h3>\n          <p>Corporate branding, logos, brochures, flyers, business cards, mail, online, social media, television, and\n            radio marketing campaigns for busines.</p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="diag">\n          <!-- <ion-icon ios="ios-chatboxes" md="md-chatboxes" color="primary" [@bounce]=\'state\'></ion-icon> -->\n          <div class="service-icon" [@bounce]=\'state\'>\n            <i class="fa fa-university" aria-hidden="true"></i>\n          </div>\n        </div>\n        <div [@bounce]=\'state\'>\n          <h3>AMERICAN MONETARY CAPITAL FUNDING</h3>\n          <p>Loan consulting from 20k to 5 million.</p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="diag">\n            <!-- <div class="diag" style="background: url(\'assets/img/whitebg.svg\') no-repeat"> -->\n          <!-- <ion-icon ios="ios-chatboxes" md="md-chatboxes" color="primary" [@bounce]=\'state\'></ion-icon> -->\n          <div class="service-icon" [@bounce]=\'state\'>\n            <i class="fa fa-file-text-o" aria-hidden="true"></i>\n          </div>\n        </div>\n        <div [@bounce]=\'state\'>\n          <h3>NEW FORTUNE REALTY</h3>\n          <p>Licensed realtor, real-estate purchases lease and rentals, real-estate investments, mortgage, hard money and\n            short-sale consulting.</p>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  \n\n  <h4 ion-text text-center color="appWarning">Popular Services</h4>\n\n  <ion-slides style="height: 50%" slidesPerView="2.1" spaceBetween="-10">\n    <ion-slide *ngFor="let service of popServices">\n      <ion-card (click)="openServiceDetail(service)">\n        <img src="{{service?.service_icon ? \'http://myasg.biz/crm_jss/services/\'+service?.service_icon:\'\'}}" />\n        <ion-card-content style="height: 60px;">\n          {{service.service}}\n        </ion-card-content>\n        <ion-item text-wrap text-right style="height: 40px;" color="secondary">\n          From {{\'$\'+ (service.service_price!==null ? service.service_price:\'--\') }}\n        </ion-item>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <h4 ion-text text-center color="appWarning">All Services</h4>\n\n  <ion-slides style="height: 50%" slidesPerView="2.1" spaceBetween="-10">\n    <ion-slide *ngFor="let service of allServices">\n      <ion-card (click)="openServiceDetail(service)">\n          <img src="{{service?.service_icon ? \'http://myasg.biz/crm_jss/services/\'+service?.service_icon:\'\'}}" />\n        <ion-card-content style="height: 60px;">\n            {{service.service}}\n        </ion-card-content>\n        <ion-item text-wrap text-right style="height: 40px;" color="secondary">\n          From {{\'$\'+ (service.service_price!==null ? service.service_price:\'--\') }}\n        </ion-item>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n\n  <!-- <ion-card>\n    <ion-card-header>\n      <ion-card-title>MLM</ion-card-title>\n    </ion-card-header>\n\n    <ion-item>\n      <img src="assets/imgs/h3.jpeg" />\n    </ion-item>\n\n    <ion-card-content>\n      At A.M.E.N our multi-level marketing structure is designed to empower you financially by giving you the\n      opportunity to quickly generate a six-figure income selling the products and services of the businesses within\n      the\n      network. A generous and simplified compensation structure is designed to empower you by giving you the ability\n      to\n      make larger commission payouts in shorter time intervals. We accomplish this goal 1st by providing a non pyramid\n      pay structure that doesn’t cater to the top members. There are only two levels to the compensation, manager or\n      affiliate making it easy to understand how your money is actually being made. Our unilateral pay structure gives\n      you the opportunity to join at any level and bypass the grueling five years it usually takes to generate six and\n      seven figure incomes with other most other MLM companies. There is, for most products and services a 20%\n      commission payout to affiliate managers and a 10% commission payout to affiliate agents.\n    </ion-card-content>\n  </ion-card> -->\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/home/home.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* trigger */])('bounce', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({
                        transform: 'translateX(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* transition */])('* => rightSwipe', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({ transform: 'translateX(-65px)', offset: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({ transform: 'translateX(0)', offset: 1.0 })
                    ]))),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* transition */])('* => leftSwipe', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({ transform: 'translateX(65px)', offset: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({ transform: 'translateX(0)', offset: 1.0 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["i" /* ServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAffiliatePage; });
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

var ListAffiliatePage = /** @class */ (function () {
    function ListAffiliatePage(navCtrl, navParams, popoverCtrl, alertCtrl, loadingProvider, affiliateProvider, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingProvider = loadingProvider;
        this.affiliateProvider = affiliateProvider;
        this.localStorageProvider = localStorageProvider;
        this.affiliates = [];
        this.errorMessage = '';
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    ListAffiliatePage.prototype.ngOnInit = function () {
        this.getAffiliates();
    };
    ListAffiliatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListAffiliatePage');
    };
    ListAffiliatePage.prototype.getAffiliates = function () {
        var _this = this;
        this.loadingProvider.showLoading();
        this.affiliateProvider.getAffiliates(this.loggedInUser.id).subscribe(function (response) {
            if (response) {
                if (JSON.parse(response['_body'])['code'] == 404) {
                    _this.loadingProvider.hideLoading();
                    _this.errorMessage = 'Not Authorized!';
                    return;
                }
                for (var _i = 0, _a = JSON.parse(response['_body']); _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this.affiliates.push({
                        id: item.id,
                        staff: item.staff,
                        userName: item.username,
                        firstName: item.first_name,
                        middleName: item.middle_name,
                        lastName: item.last_name,
                        suffix: item.suffix_name,
                        userTypeId: item.usertype_id,
                        gender: item.gender,
                        website: item.website,
                        email: item.email,
                        password: item.password,
                        contactNumber: item.contact,
                        alternateNumber: item.alternate_number,
                        dob: item.dob,
                        fax: item.fax,
                        addLine1: item.address,
                        addLine2: item.address2,
                        city: item.city,
                        state: item.state,
                        pinCode: item.pincode,
                        logo: item.logo,
                        title: item.title,
                        sequirityAmount: item.security_amount,
                        amount: item.amount,
                        finalAmount: item.final_amount,
                        zip: item.zip,
                        country: item.country,
                        image: item.image,
                        under: item.under,
                        companyName: item.company_name,
                        companyDisc: item.company_disc,
                        adminId: item.admin_id,
                        superCompanyId: item.super_company_id,
                        companyId: item.company_id,
                        affiliateId: item.affiliate_id,
                        managerId: item.manager_id,
                        serviceId: item.service_id,
                        salesId: item.sales_id,
                        leadAssigned: item.lead_assigned,
                        leadStatus: item.lead_status,
                        empId: item.empID,
                        userLink: item.user_link,
                        internalNotes: item.internal_notes,
                        ssn: item.ssn,
                        approved: item.approved,
                        clientMatured: item.client_matured,
                        createdOn: item.created_on,
                        updatedOn: item.updated_on,
                        createdBy: item.created_by,
                        updatedBy: item.update_by,
                        lastLogin: item.last_login,
                        agreementStatus: item.agreementStatus,
                        agreementOn: item.agreement_on,
                        registerVia: item.register_via,
                        status: item.status,
                        startDate: item.start_date,
                        expDate: item.exp_date
                    });
                }
                _this.loadingProvider.hideLoading();
            }
            else {
                _this.showError("Access Denied");
            }
        }, function (error) {
            //this.showError(error);
            console.log(error);
            _this.showError('Login failed.');
        });
    };
    ListAffiliatePage.prototype.showError = function (text) {
        this.loadingProvider.hideLoading();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ListAffiliatePage.prototype.view = function (leadId) {
        return;
    };
    ListAffiliatePage.prototype.edit = function (leadId) {
        return;
    };
    ListAffiliatePage.prototype.delete = function (leadId) {
        return;
    };
    ListAffiliatePage.prototype.presentPopover = function (myEvent) {
        // let popover = this.popoverCtrl.create(PopoverPage);
        // popover.present({
        //   ev: myEvent
        // });
        return;
    };
    ListAffiliatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list-affiliate',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/list-affiliate/list-affiliate.html"*/'<ion-content class="pageContent">\n  <div style="padding: 10px;">\n    <h1 style="color:#17A2B8;">My Affiliates</h1>\n\n    <div ion-text text-center *ngIf="!affiliates">\n      <h4>No Data Found.</h4>\n    </div>\n\n    <div ion-text text-center *ngIf="affiliates && affiliates.length == 0">\n      <ion-spinner name="circles"></ion-spinner>\n    </div>\n\n    <div *ngIf="affiliates && affiliates.length > 0">\n      <ion-list>\n\n        <ion-item text-wrap *ngFor="let affiliate of affiliates; let i = index;">\n\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/user-avatar.png" />\n          </ion-avatar>\n\n          <h3>{{ affiliate.suffix }} {{ affiliate.firstName }} {{ affiliate.middleName }} {{\n            affiliate.lastName }}</h3>\n          <p> {{ affiliate.email }} {{ affiliate.city }}</p>\n\n          <button ion-button large clear item-end (click)="presentPopover($event)">\n            <ion-icon ios="ios-more" md="md-more"></ion-icon>\n          </button>\n\n        </ion-item>\n\n        <!-- <ion-item-sliding *ngFor="let affiliate of affiliateList; let i = index;">\n\n          <ion-item text-wrap>\n            <h3>{{ i+1 }}. {{ affiliate.suffix }} {{ affiliate.firstName }} {{ affiliate.middleName }} {{\n              affiliate.lastName }}</h3>\n            <p> {{ affiliate.email }} {{ affiliate.city }}</p>\n          </ion-item>\n\n          <ion-item-options>\n            <button ion-button icon-only (click)="view(lead.id)" light>\n              <ion-icon ios="ios-eye" md="md-eye"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="edit(lead.id)" light>\n              <ion-icon ios="ios-create" md="md-create"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="delete(lead.id)" danger>\n              <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n            </button>\n          </ion-item-options>\n\n        </ion-item-sliding> -->\n\n      </ion-list>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/list-affiliate/list-affiliate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AffiliateProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], ListAffiliatePage);
    return ListAffiliatePage;
}());

//# sourceMappingURL=list-affiliate.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperAdminDashboardPage; });
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

var SuperAdminDashboardPage = /** @class */ (function () {
    function SuperAdminDashboardPage(navCtrl, navParams, authProvider, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.localStorageProvider = localStorageProvider;
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    SuperAdminDashboardPage.prototype.ngOnInit = function () {
    };
    SuperAdminDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuperAdminDashboardPage');
    };
    SuperAdminDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-super-admin-dashboard',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/super-admin-dashboard/super-admin-dashboard.html"*/'<ion-content padding class="pageContent">\n  Super Admin Dashboard. <br /><br />Work in progress...\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/super-admin-dashboard/super-admin-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], SuperAdminDashboardPage);
    return SuperAdminDashboardPage;
}());

//# sourceMappingURL=super-admin-dashboard.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesDashboardPage; });
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

var SalesDashboardPage = /** @class */ (function () {
    function SalesDashboardPage(navCtrl, navParams, authProvider, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.localStorageProvider = localStorageProvider;
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    SalesDashboardPage.prototype.ngOnInit = function () {
    };
    SalesDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalesDashboardPage');
    };
    SalesDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sales-dashboard',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/sales-dashboard/sales-dashboard.html"*/'<ion-content padding class="pageContent">\n  Sales Dashboard. <br /><br />Work in progress...\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/sales-dashboard/sales-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], SalesDashboardPage);
    return SalesDashboardPage;
}());

//# sourceMappingURL=sales-dashboard.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ccq_ccq__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__super_admin_dashboard_super_admin_dashboard__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_dashboard_admin_dashboard__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sales_dashboard_sales_dashboard__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__client_dashboard_client_dashboard__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__company_dashboard_company_dashboard__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__change_password_change_password__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__list_affiliate_list_affiliate__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_affiliate_add_affiliate__ = __webpack_require__(337);
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

// Pages










var managerMenu = __webpack_require__(558);
var affiliateMenu = __webpack_require__(559);
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, alertCtrl, authProvider, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.localStorageProvider = localStorageProvider;
        this.isLoggedIn = false;
        this.loggedInUserRole = '';
        this.loggedInUserName = '';
        this.menuUpDown = 'arrow-dropdown';
        // Basic root for our content view
        this.rootPage = 'HomePage';
        this.pages = [];
    }
    MenuPage.prototype.ngOnInit = function () {
        this.isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
        this.rootPage = 'HomePage';
        this.pages = [];
        if (this.isLoggedIn && this.loggedInUser) {
            this.userType = this.loggedInUser.userTypeId;
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
            if (this.userType == 1) {
                this.loggedInUserRole = 'Super Admin';
                this.rootPage = 'SuperAdminDashboardPage';
                this.pages = [
                    { title: 'Dashboard', pageName: 'SuperAdminDashboardPage', component: __WEBPACK_IMPORTED_MODULE_5__super_admin_dashboard_super_admin_dashboard__["a" /* SuperAdminDashboardPage */], icon: 'speedometer', color: 'appPrimary', iconColor: 'appDashboardIcon' },
                    {
                        title: 'Settings', pageName: '', component: null, icon: 'settings', color: 'appDark', iconColor: 'appSettingIcon', subMenu: [
                            { title: 'Profile Settings', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'remove', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'User Log', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'remove', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'Menus', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'remove', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'User Type', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'remove', color: 'appDark', iconColor: 'appPrimary' }
                        ]
                    },
                    {
                        title: 'Company', pageName: '', component: null, icon: 'boat', color: 'appDark', iconColor: 'appCompanyIcon', subMenu: [
                            { title: 'Companys', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'eye', color: 'appDark', iconColor: 'primary' }
                        ]
                    },
                    { title: 'Users List', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'contacts', color: 'appDark', iconColor: 'appUsersIcon' }
                ];
            }
            else if (this.userType == 2) {
                this.loggedInUserRole = 'Admin';
                this.rootPage = 'AdminDashboardPage';
                this.pages = [
                    { title: 'Dashboard', pageName: 'AdminDashboardPage', component: __WEBPACK_IMPORTED_MODULE_6__admin_dashboard_admin_dashboard__["a" /* AdminDashboardPage */], icon: 'speedometer', color: 'appPrimary', iconColor: 'appDashboardIcon' },
                    {
                        title: 'My Services', pageName: '', component: null, icon: 'cog', color: 'appDark', iconColor: 'appPrimary', subMenu: [
                            { title: 'Show all Services', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'Add Service', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'add', color: 'appDark', iconColor: 'appSuccess' }
                        ]
                    },
                    {
                        title: 'My Affiliates', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appAffiliateIcon', subMenu: [
                            { title: 'Show all Affiliates', pageName: 'ListAffiliatePage', component: __WEBPACK_IMPORTED_MODULE_11__list_affiliate_list_affiliate__["a" /* ListAffiliatePage */], icon: 'eye', color: 'appDark', iconColor: 'danger' },
                            { title: 'Add Affiliate', pageName: 'AddAffiliatePage', component: __WEBPACK_IMPORTED_MODULE_12__add_affiliate_add_affiliate__["a" /* AddAffiliatePage */], icon: 'person-add', color: 'appDark', iconColor: 'appSuccess' }
                        ]
                    },
                    {
                        title: 'My Manager', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appManagerIcon', subMenu: [
                            { title: 'Show all Manager', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'eye', color: 'appDark', iconColor: 'danger' },
                            { title: 'Add Manager', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'person-add', color: 'appDark', iconColor: 'appSuccess' }
                        ]
                    },
                    {
                        title: 'My Sales Person', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appUsersIcon', subMenu: [
                            { title: 'Show Sales Person', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'Add Sales Person', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'person-add', color: 'appDark', iconColor: 'appSuccess' }
                        ]
                    },
                    {
                        title: 'My Client Leads', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appUsersIcon', subMenu: [
                            { title: 'Show Client Leads', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'eye', color: 'appDark', iconColor: 'danger' },
                            { title: 'Add Client Leads', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'add', color: 'appDark', iconColor: 'appSuccess' },
                            { title: 'Assign Client Leads', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'pin', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'Assigned Leads', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'pin', color: 'appDark', iconColor: 'danger' },
                            { title: 'Credit Leads', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'egg', color: 'appDark', iconColor: 'appPrimary' }
                        ]
                    },
                    { title: 'Credit Summary', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'card', color: 'appDark', iconColor: 'appPrimary' },
                    {
                        title: 'Profile', pageName: '', component: null, icon: 'person', color: 'appDark', iconColor: 'appPrimary', subMenu: [
                            { title: 'Edit Profile', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'remove', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'Change Password', pageName: 'ChangePasswordPage', component: __WEBPACK_IMPORTED_MODULE_10__change_password_change_password__["a" /* ChangePasswordPage */], icon: 'remove', color: 'appDark', iconColor: 'appWarning' }
                        ]
                    },
                    { title: 'User Log', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'flask', color: 'appDark', iconColor: 'appPrimary' }
                ];
            }
            else if (this.userType == 3) {
                this.loggedInUserRole = 'Manager';
                this.rootPage = 'ManagerHomePage';
                this.pages = managerMenu;
            }
            else if (this.userType == 4) {
                this.loggedInUserRole = 'Affiliate';
                this.rootPage = 'AffiliateHomePage';
                this.pages = affiliateMenu;
            }
            else if (this.userType == 5) {
                this.loggedInUserRole = 'Sales';
                this.rootPage = 'SalesDashboardPage';
                this.pages = [
                    { title: 'Dashboard', pageName: 'SalesDashboardPage', component: __WEBPACK_IMPORTED_MODULE_7__sales_dashboard_sales_dashboard__["a" /* SalesDashboardPage */], icon: 'speedometer', color: 'appPrimary', iconColor: 'appDashboardIcon' },
                    { title: 'Settings', pageName: 'CcqPage', component: __WEBPACK_IMPORTED_MODULE_4__ccq_ccq__["a" /* CcqPage */], icon: 'settings', color: 'appDark', iconColor: 'appSettingIcon' },
                    { title: 'Change Password', pageName: 'ChangePasswordPage', component: __WEBPACK_IMPORTED_MODULE_10__change_password_change_password__["a" /* ChangePasswordPage */], icon: 'lock', color: 'appDark', iconColor: 'appWarning' }
                ];
            }
            else if (this.userType == 6) {
                this.loggedInUserRole = 'Client';
                this.rootPage = 'ClientDashboardPage';
                this.pages = [
                    { title: 'Dashboard', pageName: 'ClientDashboardPage', component: __WEBPACK_IMPORTED_MODULE_8__client_dashboard_client_dashboard__["a" /* ClientDashboardPage */], icon: 'speedometer', color: 'appPrimary', iconColor: 'appDashboardIcon' },
                    { title: 'Settings', pageName: 'CcqPage', component: __WEBPACK_IMPORTED_MODULE_4__ccq_ccq__["a" /* CcqPage */], icon: 'settings', color: 'appDark', iconColor: 'appSettingIcon' },
                    { title: 'Change Password', pageName: 'ChangePasswordPage', component: __WEBPACK_IMPORTED_MODULE_10__change_password_change_password__["a" /* ChangePasswordPage */], icon: 'lock', color: 'appDark', iconColor: 'appWarning' }
                ];
            }
            else if (this.userType == 7) {
                this.loggedInUserRole = 'Company';
                this.rootPage = 'CompanyDashboardPage';
                this.pages = [
                    { title: 'Dashboard', pageName: 'CompanyDashboardPage', component: __WEBPACK_IMPORTED_MODULE_9__company_dashboard_company_dashboard__["a" /* CompanyDashboardPage */], icon: 'speedometer', color: 'appPrimary', iconColor: 'appDashboardIcon' },
                    {
                        title: 'My Admin', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appAdminIcon', subMenu: [
                            { title: 'Show all Admin', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'Add Admin', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'person-add', color: 'appDark', iconColor: 'appSuccess' }
                        ]
                    },
                    {
                        title: 'My Services', pageName: '', component: null, icon: 'cog', color: 'appDark', iconColor: 'appPrimary', subMenu: [
                            { title: 'Show all Services', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'Add Service', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'add', color: 'appDark', iconColor: 'appSuccess' }
                        ]
                    },
                    {
                        title: 'My Affiliates', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appAffiliateIcon', subMenu: [
                            { title: 'Show all Affiliates', pageName: 'ListAffiliatePage', component: __WEBPACK_IMPORTED_MODULE_11__list_affiliate_list_affiliate__["a" /* ListAffiliatePage */], icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'Add Affiliate', pageName: 'AddAffiliatePage', component: __WEBPACK_IMPORTED_MODULE_12__add_affiliate_add_affiliate__["a" /* AddAffiliatePage */], icon: 'add', color: 'appDark', iconColor: 'appSuccess' }
                        ]
                    },
                    {
                        title: 'My Manager', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appManagerIcon', subMenu: [
                            { title: 'Show all Manager', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'Add Manager', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'person-add', color: 'appDark', iconColor: 'appSuccess' }
                        ]
                    },
                    {
                        title: 'My Sales Person', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appHomeIcon', subMenu: [
                            { title: 'Show Sales Person', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'Add Sales Person', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'person-add', color: 'appDark', iconColor: 'appSuccess' }
                        ]
                    },
                    {
                        title: 'My Client Leads', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appUsersIcon', subMenu: [
                            { title: 'Show Client Leads', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'Add Client Leads', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'add', color: 'appDark', iconColor: 'appSuccess' },
                            { title: 'Assign Client Leads', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'pin', color: 'appDark', iconColor: 'danger' },
                            { title: 'Assigned Leads', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'pin', color: 'appDark', iconColor: 'appPrimary' },
                            { title: 'Credit Leads', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'egg', color: 'appDark', iconColor: 'primary' }
                        ]
                    },
                    { title: 'Renewal Amount', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'cash', color: 'appDark', iconColor: 'appPrimary' },
                    { title: 'Credit Summary', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'card', color: 'appDark', iconColor: 'danger' },
                    { title: 'My Schedules', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'card', color: 'appDark', iconColor: 'success' },
                    { title: 'Agreements', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'card', color: 'appDark', iconColor: 'appPrimary' },
                    { title: 'Eamil Sended Info', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'card', color: 'appDark', iconColor: 'primary' },
                    { title: 'Eamil Sended Info', pageName: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], icon: 'card', color: 'appDark', iconColor: 'appPrimary' },
                    { title: 'Change Password', pageName: 'ChangePasswordPage', component: __WEBPACK_IMPORTED_MODULE_10__change_password_change_password__["a" /* ChangePasswordPage */], icon: 'lock', color: 'appDark', iconColor: 'appWarning' }
                ];
            }
        }
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    // Custom Methods
    MenuPage.prototype.logout = function () {
        localStorage.removeItem("isLoggedIn");
        //this.authProvider.logout();
        this.ngOnInit();
        //window.location.reload(true);
        // this.navCtrl.setRoot('MenuPage');
    };
    MenuPage.prototype.signIn = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    MenuPage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    MenuPage.prototype.openMenu = function (page) {
        this.nav.push(page);
    };
    MenuPage.prototype.openPage = function (page, title) {
        this.nav.push(page.pageName);
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.title == page.title || p.title == title) {
                p.color = 'appPrimary';
            }
            else {
                p.color = 'appDark';
            }
        }
        this.shownSubMenu = null;
        // let params = {};
        // if (page.index) {
        //   params = { tabIndex: page.index };
        // }
        // if (this.nav.getActiveChildNavs().length && page.index != undefined && page.index != null) {
        //   this.nav.getActiveChildNavs()[0].select(page.index);
        // } else {
        //   this.nav.push(page.pageName, params);
        //   for (let p of this.pages) {
        //     if (p.title == page.title) {
        //       p.color = 'appPrimary';
        //     }
        //     else {
        //       p.color = 'light';
        //     }
        //   }
        // }
    };
    MenuPage.prototype.toggleSubMenu = function (menuGroup) {
        this.toggleArrowIcon();
        if (this.isMenuGroupShown(menuGroup)) {
            this.shownSubMenu = null;
        }
        else {
            this.shownSubMenu = menuGroup;
        }
    };
    MenuPage.prototype.isMenuGroupShown = function (menuGroup) {
        return this.shownSubMenu === menuGroup;
    };
    MenuPage.prototype.toggleArrowIcon = function () {
        if (this.menuUpDown == 'arrow-dropdown') {
            this.menuUpDown = 'arrow-dropup';
        }
        else {
            this.menuUpDown = 'arrow-dropdown';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/menu/menu.html"*/'<ion-header>\n\n  <ion-toolbar color="sideMenuHead">\n\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <span *ngIf="isLoggedIn" style="font-size: 16px;">{{ loggedInUserRole + \' Panel\' }}</span>\n      <span *ngIf="!isLoggedIn" style="font-size: 16px;">AMEN BizzApp</span>\n      <!-- <div ion-text *ngIf="loggedInUser" style="color:#17A2B8; font-size: 12px;">\n        {{ loggedInUserName }}\n      </div> -->\n    </ion-title>\n\n    <ion-buttons right *ngIf="isLoggedIn">\n      <!-- <button ion-button>\n        <ion-badge color="danger">9</ion-badge>\n        <span style="font-size: 20px;">\n          <ion-icon ios="ios-notifications" md="md-notifications"></ion-icon>\n        </span>\n\n      </button>\n\n      <button ion-button>\n        <span style="font-size: 20px;">\n          <ion-icon ios="ios-calendar" md="md-calendar"></ion-icon>\n        </span>\n      </button> -->\n\n      <button ion-button (click)="logout()">\n        <span style="font-size: 20px;">\n          <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n        </span>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons right *ngIf="!isLoggedIn">\n      <button ion-button (click)="signIn()">\n        <span style="font-size: 20px;">\n          <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n        </span>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar color="sideMenuHead">\n      <!-- <ion-title>\n        <img style="margin-left: 70px; height: 40px;" src="../../assets/imgs/menu-logo.png" />\n      </ion-title> -->\n\n      <div *ngIf="isLoggedIn" ion-text text-center padding color="light">\n        <div style="font-size: 50px;">\n          <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n        </div>\n        <span style="font-size: 12px;">{{ loggedInUserRole | uppercase }}</span>\n        <br /> <span ion-text text-wrap *ngIf="loggedInUser" style="font-size: 12px;">{{ loggedInUserName }}</span>\n        <br /> <span ion-text text-wrap *ngIf="loggedInUser" style="font-size: 12px;">{{ loggedInUser.email }}</span>\n      </div>\n\n      <div *ngIf="!isLoggedIn" ion-text text-center padding color="light">\n        <div style="font-size: 50px;">\n          <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n        </div>\n        <span style="font-size: 12px;">Hello! GUEST</span>\n        <br /> <span ion-text text-wrap style="font-size: 12px;">Welcome to AMEN BizzApp</span>\n      </div>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <br />\n    <ion-list no-lines>\n      <div *ngFor="let p of pages;let i=index;">\n        <ion-item no-margin menuClose class="menuButton" *ngIf="!p.subMenu" (click)="openPage(p, p.title)" style="font-size: 14px; margin-bottom: -15px; margin-top: -15px;">\n          <!-- <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n          <span style="font-size: 14px;">\n            <ion-icon item-start [name]="p.icon" [color]="p.iconColor"></ion-icon>\n          </span>\n          <span ion-text [color]="p.color">\n            {{p.title}}\n          </span>\n        </ion-item>\n        <div *ngIf="p.subMenu">\n          <ion-item no-margin class="menuButton" (click)="toggleSubMenu(i)" style="font-size: 14px; margin-bottom: -15px; margin-top: -15px;">\n            <span style="font-size: 14px;">\n              <ion-icon item-start [name]="p.icon" [color]="p.iconColor"></ion-icon>\n            </span>\n            <span ion-text [color]="p.color">\n              {{p.title}}\n            </span>\n            <ion-icon item-end ios="ios-arrow-dropdown" md="md-arrow-dropdown" [color]="p.iconColor"></ion-icon>\n          </ion-item>\n\n          <div *ngIf="isMenuGroupShown(i)" style="margin-left: 30px;">\n            <ion-item no-margin menuClose class="menuButton" style="font-size: 12px; margin-bottom: -20px; margin-top: -20px;"\n              *ngFor="let s of p.subMenu" (click)="openPage(s, p.title)">\n              <span style="font-size: 12px;">\n                <ion-icon item-start [name]="s.icon" [color]="s.iconColor"></ion-icon>\n              </span>\n              <span ion-text [color]="s.color">\n                {{s.title}}\n              </span>\n            </ion-item>\n          </div>\n        </div>\n      </div>\n\n      <ion-item *ngIf="isLoggedIn" no-margin menuClose class="menuButton" style="font-size: 14px; margin-bottom: -15px; margin-top: -15px;"\n        (click)="logout()">\n        <span style="font-size: 14px;">\n          <ion-icon item-start ios="ios-log-out" md="md-log-out" color="appLogoutIcon"></ion-icon>\n        </span>\n        <span ion-text color="appDark">Logout</span>\n      </ion-item>\n\n      <div *ngIf="!isLoggedIn">\n        <ion-item no-margin menuClose class="menuButton" style="font-size: 14px; margin-bottom: -15px; margin-top: -15px;"\n          (click)="signIn()">\n          <span style="font-size: 14px;">\n            <ion-icon item-start ios="ios-log-in" md="md-log-in" color="appLogoutIcon"></ion-icon>\n          </span>\n          <span ion-text color="appDark">Sign In</span>\n        </ion-item>\n        <ion-item no-margin menuClose class="menuButton" style="font-size: 14px; margin-bottom: -15px; margin-top: -15px;"\n          (click)="openMenu(\'HomePage\')">\n          <span style="font-size: 14px;">\n            <ion-icon item-start ios="ios-home" md="md-home" color="appWarning"></ion-icon>\n          </span>\n          <span ion-text color="appDark">Home</span>\n        </ion-item>\n        <ion-item no-margin menuClose class="menuButton" style="font-size: 14px; margin-bottom: -15px; margin-top: -15px;"\n          (click)="openMenu(\'AboutUsPage\')">\n          <span style="font-size: 14px;">\n            <ion-icon item-start ios="ios-information-circle" md="md-information-circle" color="appWarning"></ion-icon>\n          </span>\n          <span ion-text color="appDark">About Us</span>\n        </ion-item>\n        <ion-item no-margin menuClose class="menuButton" style="font-size: 14px; margin-bottom: -15px; margin-top: -15px;"\n          (click)="openMenu(\'HowItWorksPage\')">\n          <span style="font-size: 14px;">\n            <ion-icon item-start ios="ios-bulb" md="md-bulb" color="secondary"></ion-icon>\n          </span>\n          <span ion-text color="appDark">How it Works</span>\n        </ion-item>\n        <ion-item no-margin menuClose class="menuButton" style="font-size: 14px; margin-bottom: -15px; margin-top: -15px;"\n          (click)="openMenu(\'JoinUsPage\')">\n          <span style="font-size: 14px;">\n            <ion-icon item-start ios="ios-log-in" md="md-log-in" color="primary"></ion-icon>\n          </span>\n          <span ion-text color="appDark">Join the Network</span>\n        </ion-item>\n      </div>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n<!-- <ion-footer style="background-color: #E9ECEF; height: 10px; -webkit-box-shadow: none; box-shadow: none;">\n</ion-footer> -->'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = [{"title":"Home","pageName":"ManagerHomePage","component":"ManagerHomePage","icon":"home","color":"appPrimary","iconColor":"appDashboardIcon"},{"title":"Dashboard","pageName":"ManagerDashboardPage","component":"ManagerDashboardPage","icon":"speedometer","color":"appDark","iconColor":"appDashboardIcon"},{"title":"Profile","pageName":"","component":"","icon":"person","color":"appDark","iconColor":"appDashboardIcon","subMenu":[{"title":"Edit Profile","pageName":"ProfilePage","component":"ProfilePage","icon":"add","color":"appDark","iconColor":"appSuccess"},{"title":"Update Payment Info","pageName":"","component":"","icon":"create","color":"appDark","iconColor":"appSuccess"},{"title":"Change Password","pageName":"","component":"","icon":"key","color":"appDark","iconColor":"appSuccess"}]},{"title":"Web Leads","pageName":"","component":"","icon":"globe","color":"appDark","iconColor":"appDashboardIcon","subMenu":[{"title":"Show All Web Leads","pageName":"ListWebLeadPage","component":"ListWebLeadPage","icon":"list","color":"appDark","iconColor":"appSuccess"}]},{"title":"Manager","pageName":"","component":"","icon":"man","color":"appDark","iconColor":"appDashboardIcon","subMenu":[{"title":"Show All Manager","pageName":"ListManagerPage","component":"ListManagerPage","icon":"list","color":"appDark","iconColor":"appSuccess"},{"title":"Add Manager","pageName":"AddManagerPage","component":"AddManagerPage","icon":"person-add","color":"appDark","iconColor":"appSuccess"}]},{"title":"Affiliates","pageName":"","component":"","icon":"bicycle","color":"appDark","iconColor":"appDashboardIcon","subMenu":[{"title":"Show All Affiliates","pageName":"ListAffiliatePage","component":"ListAffiliatePage","icon":"list","color":"appDark","iconColor":"appSuccess"},{"title":"Add Affiliates","pageName":"AddAffiliatePage","component":"AddAffiliatePage","icon":"add","color":"appDark","iconColor":"appSuccess"}]},{"title":"Client","pageName":"","component":"","icon":"contact","color":"appDark","iconColor":"appDashboardIcon","subMenu":[{"title":"Show All Client","pageName":"ListClientPage","component":"ListClientPage","icon":"list","color":"appDark","iconColor":"appSuccess"}]},{"title":"Leads","pageName":"","component":"","icon":"trophy","color":"appDark","iconColor":"appDashboardIcon","subMenu":[{"title":"Show All Leads","pageName":"ListLeadPage","component":"ListLeadPage","icon":"list","color":"appDark","iconColor":"appSuccess"},{"title":"Add Lead","pageName":"AddLeadPage","component":"AddLeadPage","icon":"add","color":"appDark","iconColor":"appSuccess"},{"title":"Credit Lead","pageName":"CreditLeadPage","component":"CreditLeadPage","icon":"card","color":"appDark","iconColor":"appSuccess"}]},{"title":"Prospects","pageName":"","component":"","icon":"trending-up","color":"appDark","iconColor":"appDashboardIcon","subMenu":[{"title":"Show All Affiliate and Manager","pageName":"ListProspectsPage","component":"ListProspectsPage","icon":"contacts","color":"appDark","iconColor":"appSuccess"},{"title":"Show Leads","pageName":"","component":"","icon":"list","color":"appDark","iconColor":"appSuccess"}]},{"title":"Update Payment Info","pageName":"","component":"","icon":"cash","color":"appDark","iconColor":"appDashboardIcon"},{"title":"My Schedules","pageName":"","component":"","icon":"calendar","color":"appDark","iconColor":"appDashboardIcon"},{"title":"Emails","pageName":"","component":"","icon":"mail","color":"appDark","iconColor":"appDashboardIcon"},{"title":"Received Emails","pageName":"","component":"","icon":"archive","color":"appDark","iconColor":"appDashboardIcon"},{"title":"Marketing Materials","pageName":"","component":"","icon":"basket","color":"appDark","iconColor":"appDashboardIcon"},{"title":"User Logs","pageName":"","component":"","icon":"filing","color":"appDark","iconColor":"appDashboardIcon"}]

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = [{"title":"Home","pageName":"AffiliateHomePage","component":"AffiliateHomePage","icon":"home","color":"appPrimary","iconColor":"appDashboardIcon"},{"title":"Dashboard","pageName":"AffiliateDashboardPage","component":"AffiliateDashboardPage","icon":"speedometer","color":"appDark","iconColor":"appDashboardIcon"},{"title":"Profile","pageName":"","component":"","icon":"settings","color":"appDark","iconColor":"appPrimary","subMenu":[{"title":"Edit Profile","pageName":"ProfilePage","component":"ProfilePage","icon":"settings","color":"appDark","iconColor":"appSuccess"},{"title":"Update Payment Info","pageName":"HomePage","component":"HomePage","icon":"folder-open","color":"appDark","iconColor":"primary"},{"title":"Change Password","pageName":"ChangePasswordPage","component":"ChangePasswordPage","icon":"lock","color":"appDark","iconColor":"appWarning"}]},{"title":"Web Leads","pageName":"","component":"","icon":"globe","color":"appDark","iconColor":"appPrimary","subMenu":[{"title":"Show all Web Leads","pageName":"ListWebLeadPage","component":"ListWebLeadPage","icon":"list","color":"appDark","iconColor":"appSuccess"}]},{"title":"Manager","pageName":"","component":"","icon":"person","color":"appDark","iconColor":"appPrimary","subMenu":[{"title":"Show all Manager","pageName":"ListManagerPage","component":"ListManagerPage","icon":"people","color":"appDark","iconColor":"appSuccess"},{"title":"Add Manager","pageName":"AddManagerPage","component":"AddManagerPage","icon":"person-add","color":"appDark","iconColor":"primary"}]},{"title":"Affiliate","pageName":"","component":"","icon":"contact","color":"appDark","iconColor":"appPrimary","subMenu":[{"title":"Show all Affiliate","pageName":"ListAffiliatePage","component":"ListAffiliatePage","icon":"people","color":"appDark","iconColor":"appSuccess"},{"title":"Add Affiliate","pageName":"AddAffiliatePage","component":"AddAffiliatePage","icon":"person-add","color":"appDark","iconColor":"primary"}]},{"title":"Client","pageName":"","component":"","icon":"globe","color":"appDark","iconColor":"appPrimary","subMenu":[{"title":"Show all Client","pageName":"ListClientPage","component":"ListClientPage","icon":"list","color":"appDark","iconColor":"appSuccess"}]},{"title":"Leads","pageName":"","component":"","icon":"clipboard","color":"appDark","iconColor":"appUsersIcon","subMenu":[{"title":"Show all Leads","pageName":"ListLeadPage","component":"ListLeadPage","icon":"people","color":"appDark","iconColor":"appSuccess"},{"title":"Add Lead","pageName":"AddLeadPage","component":"AddLeadPage","icon":"person-add","color":"appDark","iconColor":"primary"},{"title":"Credit Lead","pageName":"HomePage","component":"HomePage","icon":"egg","color":"appDark","iconColor":"appPrimary"}]},{"title":"Prospects","pageName":"","component":"","icon":"trending-up","color":"appDark","iconColor":"appDashboardIcon","subMenu":[{"title":"Show All Affiliate and Manager","pageName":"ListProspectsPage","component":"ListProspectsPage","icon":"contacts","color":"appDark","iconColor":"appSuccess"},{"title":"Show Leads","pageName":"","component":"","icon":"list","color":"appDark","iconColor":"appSuccess"}]},{"title":"Update Payment Info","pageName":"","component":"","icon":"cash","color":"appDark","iconColor":"appDashboardIcon"},{"title":"My Schedules","pageName":"","component":"","icon":"calendar","color":"appDark","iconColor":"appDashboardIcon"},{"title":"Emails","pageName":"","component":"","icon":"mail","color":"appDark","iconColor":"appDashboardIcon"},{"title":"Received Emails","pageName":"","component":"","icon":"archive","color":"appDark","iconColor":"appDashboardIcon"},{"title":"Marketing Materials","pageName":"","component":"","icon":"basket","color":"appDark","iconColor":"appDashboardIcon"},{"title":"User Logs","pageName":"","component":"","icon":"filing","color":"appDark","iconColor":"appDashboardIcon"}]

/***/ })

});
//# sourceMappingURL=3.js.map