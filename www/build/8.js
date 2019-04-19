webpackJsonp([8],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

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

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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


// Servies

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authProvider, alertCtrl, localStorageProvider, loadingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.localStorageProvider = localStorageProvider;
        this.loadingProvider = loadingProvider;
        this.credentials = { username: '', password: '' };
        this.isLoggedIn = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
        if (this.isLoggedIn && this.loggedInUser) {
            this.navCtrl.setRoot('MenuPage');
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    // Custom Methods
    LoginPage.prototype.cancelLogin = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loadingProvider.showLoading();
        this.authProvider.login(this.credentials.username, this.credentials.password).subscribe(function (response) {
            if (response) {
                if (JSON.parse(response['_body'])['code'] == 404) {
                    _this.loadingProvider.hideLoading();
                    _this.errorMessage = 'Login failed! Invalid userName or password.';
                    return;
                }
                localStorage.setItem("isLoggedIn", JSON.stringify(true));
                _this.localStorageProvider.removeLoggedInUser();
                _this.localStorageProvider.setLoggedInUser({
                    id: JSON.parse(response['_body'])['id'],
                    adminId: JSON.parse(response['_body'])['admin_id'],
                    affiliateId: JSON.parse(response['_body'])['affiliate_id'],
                    companyId: JSON.parse(response['_body'])['company_id'],
                    companyName: JSON.parse(response['_body'])['company_name'],
                    companyDisc: JSON.parse(response['_body'])['company_disc'],
                    empId: JSON.parse(response['_body'])['empID'],
                    managerId: JSON.parse(response['_body'])['manager_id'],
                    salesId: JSON.parse(response['_body'])['sales_id'],
                    serviceId: JSON.parse(response['_body'])['service_id'],
                    userName: JSON.parse(response['_body'])['username'],
                    firstName: JSON.parse(response['_body'])['first_name'],
                    middleName: JSON.parse(response['_body'])['middle_name'],
                    lastName: JSON.parse(response['_body'])['last_name'],
                    suffix: JSON.parse(response['_body'])['suffix_name'],
                    title: JSON.parse(response['_body'])['title'],
                    dob: JSON.parse(response['_body'])['dob'],
                    userTypeId: JSON.parse(response['_body'])['usertype_id'],
                    gender: JSON.parse(response['_body'])['gneder'],
                    website: JSON.parse(response['_body'])['website'],
                    email: JSON.parse(response['_body'])['email'],
                    password: _this.credentials.password,
                    //password: JSON.parse(response['_body'])['password'],
                    contactNumber: JSON.parse(response['_body'])['contact'],
                    alternateNumber: JSON.parse(response['_body'])['alternate_number'],
                    fax: JSON.parse(response['_body'])['fax'],
                    address: JSON.parse(response['_body'])['address'],
                    city: JSON.parse(response['_body'])['city'],
                    state: JSON.parse(response['_body'])['state'],
                    country: JSON.parse(response['_body'])['country'],
                    pinCode: JSON.parse(response['_body'])['pincode'],
                    zip: JSON.parse(response['_body'])['zip'],
                    logo: JSON.parse(response['_body'])['logo'],
                    icon: JSON.parse(response['_body'])['icon'],
                    image: JSON.parse(response['_body'])['image'],
                    securityAmount: JSON.parse(response['_body'])['security_amount'],
                    amount: JSON.parse(response['_body'])['amount'],
                    finalAmount: JSON.parse(response['_body'])['final_amount'],
                    under: JSON.parse(response['_body'])['under'],
                    profile: JSON.parse(response['_body'])['profile'],
                    designationId: JSON.parse(response['_body'])['designation_id'],
                    leadAssigned: JSON.parse(response['_body'])['lead_assigned'],
                    leadStatus: JSON.parse(response['_body'])['lead_status'],
                    isApproved: JSON.parse(response['_body'])['approved'],
                    createdDate: JSON.parse(response['_body'])['created_on'],
                    createdBy: JSON.parse(response['_body'])['created_by'],
                    updatedDate: JSON.parse(response['_body'])['updated_on'],
                    updateBy: JSON.parse(response['_body'])['updated_by'],
                    lastLogin: JSON.parse(response['_body'])['last_login'],
                    isAgreedCCQ: JSON.parse(response['_body'])['agreementStatus'],
                    status: JSON.parse(response['_body'])['status']
                });
                window.location.reload(true);
                _this.navCtrl.setRoot('MenuPage');
            }
            else {
                _this.showError("Access Denied");
            }
        }, function (error) {
            //this.showError(error);
            console.log(error);
            _this.showError('Login failed.');
        });
        //this.navCtrl.setRoot('MenuPage');
    };
    LoginPage.prototype.showError = function (text) {
        this.loadingProvider.hideLoading();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/login/login.html"*/'<ion-content padding>\n  <img style="margin-top: 20px; margin-left: 30px; width: 80%;" src="../../assets/imgs/logo.png" />\n  <h1 style="color:#CCCCCC; text-align: center">Login Form</h1>\n\n  <ion-card>\n    <form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">\n      <div *ngIf="errorMessage" class="errorMessage">{{errorMessage}}</div>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          <span style="color:#CCCCCC;">Email</span>\n        </ion-label>\n        <ion-input type="text" name="username" required [(ngModel)]="credentials.username"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          <ion-icon ios="ios-unlock" md="md-unlock"></ion-icon>\n          <span style="color:#CCCCCC;">Password</span>\n        </ion-label>\n        <ion-input type="password" name="password" required [(ngModel)]="credentials.password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button color="appPrimary" full type="submit" [disabled]="!loginForm.form.valid">Login</button>\n      </ion-item>\n      <ion-item>\n        <button ion-button color="appWarning" full type="button" (click)="cancelLogin()">Cancel</button>\n      </ion-item>\n    </form>\n\n  </ion-card>\n\n  <p style="color:#ffffff; text-align: center">JOIN THE NETWORK</p>\n\n</ion-content>\n<ion-footer>\n  <p style="color:#CCCCCC; text-align: center">© 2012-2019 All rights reserved.</p>\n</ion-footer>\n'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* LoadingProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=8.js.map