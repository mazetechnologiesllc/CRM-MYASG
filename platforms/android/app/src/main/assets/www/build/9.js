webpackJsonp([9],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWebLeadPageModule", function() { return ListWebLeadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_web_lead__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListWebLeadPageModule = /** @class */ (function () {
    function ListWebLeadPageModule() {
    }
    ListWebLeadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_web_lead__["a" /* ListWebLeadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_web_lead__["a" /* ListWebLeadPage */]),
            ],
        })
    ], ListWebLeadPageModule);
    return ListWebLeadPageModule;
}());

//# sourceMappingURL=list-web-lead.module.js.map

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

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListWebLeadPage; });
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

var ListWebLeadPage = /** @class */ (function () {
    function ListWebLeadPage(navCtrl, navParams, alertCtrl, toastCtrl, webLeadProvider, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.webLeadProvider = webLeadProvider;
        this.localStorageProvider = localStorageProvider;
        this.webLeads = [];
        this.errorMessage = '';
        this.loggedInUser = this.localStorageProvider.getLoggedInUser();
    }
    ListWebLeadPage.prototype.ngOnInit = function () {
        this.getWebLeads();
    };
    ListWebLeadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListWebLeadPage');
    };
    // Custom Methods
    ListWebLeadPage.prototype.getWebLeads = function () {
        var _this = this;
        this.webLeadProvider.getWebLeads(this.loggedInUser.id).subscribe(function (response) {
            if (response) {
                if (JSON.parse(response['_body'])['code'] == 404) {
                    _this.showLongToast(response._body);
                    //this.errorMessage = 'Not Authorized!';
                    return;
                }
                for (var _i = 0, _a = JSON.parse(response['_body']); _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this.webLeads.push({
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
                        companyDesc: item.company_disc,
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
                        expDate: item.exp_date,
                        userType: item.userType
                    });
                }
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
    ListWebLeadPage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ListWebLeadPage.prototype.showLongToast = function (response) {
        var toast = this.toastCtrl.create({
            message: response,
            duration: 3000,
        });
        toast.present();
    };
    ListWebLeadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list-web-lead',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/list-web-lead/list-web-lead.html"*/'<ion-content class="pageContent">\n  <div style="padding: 10px;">\n    <h1 style="color:#17A2B8;">All Web Leads</h1>\n\n    <div ion-text text-center *ngIf="!webLeads">\n      <h4>No Data Found.</h4>\n    </div>\n\n    <div ion-text text-center *ngIf="webLeads && webLeads.length == 0">\n      <ion-spinner name="circles"></ion-spinner>\n    </div>\n\n    <div *ngIf="webLeads && webLeads.length > 0">\n      <ion-list>\n\n        <ion-item text-wrap *ngFor="let webLead of webLeads; let i = index;">\n\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/user-avatar.png" />\n          </ion-avatar>\n\n          <h3>{{ webLead.suffix }} {{ webLead.firstName }} {{ webLead.middleName }} {{\n            webLead.lastName }}</h3>\n          <p> {{ webLead.email }}</p>\n\n          <button ion-button large clear item-end (click)="presentPopover($event)">\n            <ion-icon ios="ios-more" md="md-more"></ion-icon>\n          </button>\n\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/list-web-lead/list-web-lead.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["k" /* WebLeadProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], ListWebLeadPage);
    return ListWebLeadPage;
}());

//# sourceMappingURL=list-web-lead.js.map

/***/ })

});
//# sourceMappingURL=9.js.map