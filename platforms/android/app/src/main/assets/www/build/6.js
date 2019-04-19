webpackJsonp([6],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(560);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

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

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(327);
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

var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, formBuilder, authProvider, localStorageProvider, loadingProvider, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.localStorageProvider = localStorageProvider;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.imageURL = '';
        this.edit = false;
        this.submitted = false;
        this.errorMessage = '';
        this.showFab = true;
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.profileForm = this.formBuilder.group({
            userName: [this.loggedInUser.userName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            suffix: [this.loggedInUser.suffix, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            firstName: [this.loggedInUser.firstName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            middleName: [this.loggedInUser.middleName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastName: [this.loggedInUser.lastName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: [this.loggedInUser.email, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            gender: [this.loggedInUser.gender, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contactNumber: [this.loggedInUser.contactNumber, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            address: [this.loggedInUser.address, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            city: [this.loggedInUser.city, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            state: [this.loggedInUser.state, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            zip: [this.loggedInUser.zip, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            fax: [this.loggedInUser.fax]
            //photo: ['']
        });
        //this.disableProfileForm();
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    // Custom Methods
    ProfilePage.prototype.scrollStart = function (event) {
        this.showFab = false;
    };
    ProfilePage.prototype.scrollStop = function (event) {
        this.showFab = true;
    };
    ProfilePage.prototype.takePhoto = function () {
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
    ProfilePage.prototype.reset = function () {
        this.submitted = false;
        this.profileForm.reset();
    };
    // enableProfileForm() {
    //   this.profileForm.controls.userName.disable();
    //   this.profileForm.controls.suffix.enable();
    //   this.profileForm.controls.firstName.enable();
    //   this.profileForm.controls.middleName.enable();
    //   this.profileForm.controls.lastName.enable();
    //   this.profileForm.controls.email.enable();
    //   this.profileForm.controls.gender.enable();
    //   this.profileForm.controls.contactNumber.enable();
    //   this.profileForm.controls.address.enable();
    //   this.profileForm.controls.city.enable();
    //   this.profileForm.controls.state.enable();
    //   this.profileForm.controls.zip.enable();
    //   this.profileForm.controls.fax.enable();
    // }
    // disableProfileForm() {
    //   this.profileForm.controls.userName.disable();
    //   this.profileForm.controls.suffix.disable();
    //   this.profileForm.controls.firstName.disable();
    //   this.profileForm.controls.middleName.disable();
    //   this.profileForm.controls.lastName.disable();
    //   this.profileForm.controls.email.disable();
    //   this.profileForm.controls.gender.disable();
    //   this.profileForm.controls.contactNumber.disable();
    //   this.profileForm.controls.address.disable();
    //   this.profileForm.controls.city.disable();
    //   this.profileForm.controls.state.disable();
    //   this.profileForm.controls.zip.disable();
    //   this.profileForm.controls.fax.disable();
    // }
    ProfilePage.prototype.editProfile = function () {
        this.loadingProvider.showLoading();
        this.edit = true;
        //this.enableProfileForm();
        this.loadingProvider.hideLoading();
    };
    ProfilePage.prototype.updateProfile = function () {
        this.loadingProvider.showLoading();
        this.errorMessage = '';
        this.submitted = true;
        if (this.profileForm.invalid) {
            this.loadingProvider.hideLoading();
            return;
        }
        this.loggedInUser.userName = this.profileForm.get('userName').value;
        this.loggedInUser.firstName = this.profileForm.get('firstName').value;
        this.edit = false;
        this.loadingProvider.hideLoading();
        return;
        // var result = this.userService
        //   .register(this.user)
        //   .subscribe(
        //     data => {
        //       // set success message and pass true paramater to persist the message after redirecting to the login page
        //       this.alertService.success('Registration successful', true);
        //       this.router.navigate(['/login']);
        //       this.reset();
        //     },
        //     error => {
        //       this.loading = false;
        //       let errorBody = JSON.parse(error['_body']);
        //       let modelState = errorBody['modelState'];
        //       for(let key in modelState) {
        //         this.errorMessage = modelState[key];
        //       }
        //       if(this.errorMessage != '') {
        //         alert(this.errorMessage);
        //       }
        //       else {
        //         alert("There is some problem in registraion, please try again or contact us.");
        //       }
        //       this.alertService.error(error._body);          
        //     }
        //   );
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/profile/profile.html"*/'<ion-content (ionScrollStart)="scrollStart($event)" (ionScrollEnd)="scrollStart($event)">\n\n  <!-- <ion-item no-lines text-center>\n    <div style="color:#17A2B8; font-size: 30px;">\n      <ion-icon ios="ios-create" md="ios-create"></ion-icon>\n    </div>\n    <h1 style="color:#17A2B8;">\n      Update Profile\n    </h1>\n  </ion-item> -->\n\n  <form name="profileForm" [formGroup]="profileForm" (ngSubmit)="updateProfile()">\n    <div *ngIf="errorMessage" class="errorMessage">{{errorMessage}}</div>\n    <div *ngIf="successMessage" class="successMessage">{{successMessage}}</div>\n\n    <ion-list *ngIf="!loggedInUser">\n      <div class="successMessage">Loading....</div>\n    </ion-list>\n\n    <ion-list *ngIf="loggedInUser">\n\n      <ion-item no-lines text-center>\n        <img style="width: 50%; height: 50%; border-radius: 100%;" id="camera-image" src="../../assets/imgs/user-avatar.png" />\n        <button ion-button class="button-overlay" *ngIf="edit" (click)="takePhoto()">Take Photo</button>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon color="success" ios="ios-person" md="md-person"></ion-icon>\n          Username\n        </ion-label>\n        <ion-input type="text" formControlName="userName" value="{{loggedInUser.userName}}" [disabled]="true"\n          [class.invalid]="!profileForm.controls.userName.valid && (profileForm.controls.userName.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon color="success" ios="ios-person" md="md-person"></ion-icon>\n          First Name\n        </ion-label>\n        <ion-input type="text" formControlName="firstName" value="{{loggedInUser.firstName}}" [disabled]="!edit"\n          [class.invalid]="!profileForm.controls.firstName.valid && (profileForm.controls.firstName.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon color="success" ios="ios-person" md="md-person"></ion-icon>\n          Middle Name\n        </ion-label>\n        <ion-input type="text" formControlName="middleName" value="{{loggedInUser.middleName}}" [disabled]="!edit"\n          [class.invalid]="!profileForm.controls.middleName.valid && (profileForm.controls.middleName.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon color="success" ios="ios-person" md="md-person"></ion-icon>\n          Last Name\n        </ion-label>\n        <ion-input type="text" formControlName="lastName" value="{{loggedInUser.lastName}}" [disabled]="!edit"\n          [class.invalid]="!profileForm.controls.lastName.valid && (profileForm.controls.lastName.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon ios="ios-leaf" md="md-leaf"></ion-icon>\n          Suffix\n        </ion-label>\n        <ion-input type="text" formControlName="suffix" value="{{loggedInUser.suffix}}" [disabled]="!edit"\n          [class.invalid]="!profileForm.controls.suffix.valid && (profileForm.controls.suffix.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon ios="ios-at" md="md-at"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="text" formControlName="email" value="{{loggedInUser.email}}" [disabled]="!edit"\n          [class.invalid]="!profileForm.controls.email.valid && (profileForm.controls.email.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon ios="ios-man" md="md-man"></ion-icon>\n          Gender\n        </ion-label>\n        <ion-input type="text" formControlName="gender" value="{{loggedInUser.gender}}" [disabled]="!edit"\n          [class.invalid]="!profileForm.controls.gender.valid && (profileForm.controls.gender.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon ios="ios-phone-portrait" md="md-phone-portrait"></ion-icon>\n          Phone No\n        </ion-label>\n        <ion-input type="text" formControlName="contactNumber" value="{{loggedInUser.contactNumber}}" [disabled]="!edit"\n          [class.invalid]="!profileForm.controls.contactNumber.valid && (profileForm.controls.contactNumber.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n          Address\n        </ion-label>\n        <ion-input type="text" formControlName="address" value="{{loggedInUser.address}}" [disabled]="!edit"\n          [class.invalid]="!profileForm.controls.address.valid && (profileForm.controls.address.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon ios="ios-navigate" md="md-navigate"></ion-icon>\n          City\n        </ion-label>\n        <ion-input type="text" formControlName="city" value="{{loggedInUser.city}}" [disabled]="!edit" [class.invalid]="!profileForm.controls.city.valid && (profileForm.controls.city.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon ios="ios-compass" md="md-compass"></ion-icon>\n          State\n        </ion-label>\n        <ion-input type="text" formControlName="state" value="{{loggedInUser.state}}" [disabled]="!edit"\n          [class.invalid]="!profileForm.controls.state.valid && (profileForm.controls.state.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon ios="ios-code-working" md="md-code-working"></ion-icon>\n          Zip\n        </ion-label>\n        <ion-input type="text" formControlName="zip" value="{{loggedInUser.zip}}" [disabled]="!edit" [class.invalid]="!profileForm.controls.zip.valid && (profileForm.controls.zip.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon ios="ios-photos" md="md-photos"></ion-icon>\n          Fax\n        </ion-label>\n        <ion-input type="text" formControlName="fax" value="{{loggedInUser.fax}}" [disabled]="!edit || showFab" [class.invalid]="!profileForm.controls.fax.valid && (profileForm.controls.fax.dirty || submitted)"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines>\n        <button ion-button full *ngIf="edit" color="appPrimary" type="submit">Update</button>\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n\n  <ion-fab bottom right (click)="editProfile()" *ngIf="!edit">\n    <button ion-fab mini>\n      <ion-icon ios="ios-create" md="md-create"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["b" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["f" /* LocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["e" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=6.js.map