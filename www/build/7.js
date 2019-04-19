webpackJsonp([7],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerProfilePageModule", function() { return ManagerProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_profile__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ManagerProfilePageModule = /** @class */ (function () {
    function ManagerProfilePageModule() {
    }
    ManagerProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__manager_profile__["a" /* ManagerProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manager_profile__["a" /* ManagerProfilePage */]),
            ],
        })
    ], ManagerProfilePageModule);
    return ManagerProfilePageModule;
}());

//# sourceMappingURL=manager-profile.module.js.map

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

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(327);
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

var ManagerProfilePage = /** @class */ (function () {
    function ManagerProfilePage(navCtrl, navParams, authProvider, localStorageProvider, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.localStorageProvider = localStorageProvider;
        this.camera = camera;
        this.imageURL = '';
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    ManagerProfilePage.prototype.ngOnInit = function () {
    };
    ManagerProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManagerProfilePage');
    };
    // Custom Methods
    ManagerProfilePage.prototype.updateProfile = function () {
        return;
    };
    ManagerProfilePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 500,
            quality: 100,
            allowEdit: true,
            correctOrientation: false,
            saveToPhotoAlbum: true,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURL = "data:image/jpeg;base64," + imageData;
            var cameraImageSelector = document.getElementById('camera-image');
            cameraImageSelector.setAttribute('src', _this.imageURL);
        }, function (err) {
            console.log(err);
        });
    };
    ManagerProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-manager-profile',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/manager-profile/manager-profile.html"*/'<ion-content class="pageContent">\n\n  <ion-card>\n    <ion-item no-lines text-center>\n      <div style="color:#17A2B8; font-size: 30px;">\n        <ion-icon ios="ios-create" md="md-create"></ion-icon>\n      </div>\n      <h1 style="color:#17A2B8;">\n        Update Profile\n      </h1>\n    </ion-item>\n\n    <form #managerProfileForm="ngForm" (ngSubmit)="updateProfile()" autocomplete="off">\n      <div *ngIf="errorMessage" class="errorMessage">{{errorMessage}}</div>\n      <div *ngIf="successMessage" class="successMessage">{{successMessage}}</div>\n\n      <ion-list *ngIf="!loggedInUser">\n        <div class="successMessage">Loading....</div>\n      </ion-list>\n\n      <ion-list *ngIf="loggedInUser">\n        <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type="text" name="userName" value="{{loggedInUser.userName}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>First Name</ion-label>\n          <ion-input type="text" name="firstName" value="{{loggedInUser.firstName}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Middle Name</ion-label>\n          <ion-input type="text" name="middleName" value="{{loggedInUser.middleName}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Last Name</ion-label>\n          <ion-input type="text" name="lastName" value="{{loggedInUser.lastName}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Suffix</ion-label>\n          <ion-input type="text" name="suffix" value="{{loggedInUser.suffix}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="text" name="email" value="{{loggedInUser.email}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Gender</ion-label>\n          <ion-input type="text" name="gender" value="{{loggedInUser.gender}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Phone No</ion-label>\n          <ion-input type="text" name="contactNumber" value="{{loggedInUser.contactNumber}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Address</ion-label>\n          <ion-input type="text" name="address" value="{{loggedInUser.address}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>City</ion-label>\n          <ion-input type="text" name="city" value="{{loggedInUser.city}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>State</ion-label>\n          <ion-input type="text" name="state" value="{{loggedInUser.state}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Zip</ion-label>\n          <ion-input type="text" name="zip" value="{{loggedInUser.zip}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Fax</ion-label>\n          <ion-input type="text" name="fax" value="{{loggedInUser.fax}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <img id="camera-image" />\n        </ion-item>\n\n        <ion-item>\n          <button ion-button color="appSecondary" full (click)="takePhoto()">Take Photo</button>\n          <button ion-button color="appPrimary" full type="submit">Update</button>\n        </ion-item>\n\n      </ion-list>\n\n    </form>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/manager-profile/manager-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["f" /* LocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], ManagerProfilePage);
    return ManagerProfilePage;
}());

//# sourceMappingURL=manager-profile.js.map

/***/ })

});
//# sourceMappingURL=7.js.map