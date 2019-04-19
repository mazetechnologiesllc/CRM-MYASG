webpackJsonp([12],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLeadPageModule", function() { return ListLeadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_lead__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListLeadPageModule = /** @class */ (function () {
    function ListLeadPageModule() {
    }
    ListLeadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_lead__["a" /* ListLeadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_lead__["a" /* ListLeadPage */]),
            ],
        })
    ], ListLeadPageModule);
    return ListLeadPageModule;
}());

//# sourceMappingURL=list-lead.module.js.map

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

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListLeadPage; });
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

var ListLeadPage = /** @class */ (function () {
    function ListLeadPage(navCtrl, navParams, popoverCtrl, alertCtrl, loadingProvider, leadProvider, localStorageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingProvider = loadingProvider;
        this.leadProvider = leadProvider;
        this.localStorageProvider = localStorageProvider;
        this.leadList = [];
        this.errorMessage = '';
    }
    ListLeadPage.prototype.ngOnInit = function () {
        this.userType = this.localStorageProvider.getLoggedInUser().userTypeId;
        this.companyId = 952;
        this.managerId = 954;
        this.affiliateId = 962;
        this.getLeadList();
    };
    ListLeadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListLeadPage');
    };
    ListLeadPage.prototype.getLeadList = function () {
        var _this = this;
        this.loadingProvider.showLoading();
        if (this.userType == 3) {
            this.leadProvider.getLeadListByManager(this.managerId, this.companyId).subscribe(function (response) {
                if (response) {
                    if (JSON.parse(response['_body'])['code'] == 404) {
                        _this.loadingProvider.hideLoading();
                        _this.errorMessage = 'Not Authorized!';
                        return;
                    }
                    for (var _i = 0, _a = JSON.parse(response['_body']); _i < _a.length; _i++) {
                        var item = _a[_i];
                        _this.leadList.push({
                            id: item.id,
                            userTypeId: item.usertype_id,
                            empId: item.empID,
                            suffix: item.suffix_name,
                            firstName: item.first_name,
                            middleName: item.middle_name,
                            lastName: item.last_name,
                            email: item.email,
                            contactNumber: item.contact,
                            city: item.city,
                            state: item.state,
                            country: item.country,
                            leadAssigned: item.lead_assigned,
                            createdBy: item.created_by,
                            leadStage: item.leadStage,
                            serviceName: item.ServiceName,
                            status: item.status
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
                _this.showError('Error.');
            });
        }
        if (this.userType == 4) {
            this.leadProvider.getLeadListByAffiliate(this.affiliateId, this.companyId).subscribe(function (response) {
                if (response) {
                    if (JSON.parse(response['_body'])['code'] == 404) {
                        _this.loadingProvider.hideLoading();
                        _this.errorMessage = 'Not Authorized!';
                        return;
                    }
                    for (var _i = 0, _a = JSON.parse(response['_body']); _i < _a.length; _i++) {
                        var item = _a[_i];
                        _this.leadList.push({
                            id: item.id,
                            userTypeId: item.usertype_id,
                            empId: item.empID,
                            suffix: item.suffix_name,
                            firstName: item.first_name,
                            middleName: item.middle_name,
                            lastName: item.last_name,
                            email: item.email,
                            contactNumber: item.contact,
                            city: item.city,
                            state: item.state,
                            country: item.country,
                            leadAssigned: item.lead_assigned,
                            createdBy: item.created_by,
                            leadStage: item.leadStage,
                            serviceName: item.ServiceName,
                            status: item.status
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
                _this.showError('Error.');
            });
        }
    };
    ListLeadPage.prototype.showError = function (text) {
        this.loadingProvider.hideLoading();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ListLeadPage.prototype.view = function (leadId) {
        return;
    };
    ListLeadPage.prototype.edit = function (leadId) {
        return;
    };
    ListLeadPage.prototype.delete = function (leadId) {
        return;
    };
    ListLeadPage.prototype.presentPopover = function (myEvent) {
        // let popover = this.popoverCtrl.create(PopoverPage);
        // popover.present({
        //   ev: myEvent
        // });
        return;
    };
    ListLeadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list-lead',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/list-lead/list-lead.html"*/'<ion-content class="pageContent">\n  <div style="padding: 10px;">\n    <h1 style="color:#17A2B8;">Leads</h1>\n\n    <div *ngIf="leadList && leadList.length > 0">\n      <ion-list>\n\n        <ion-item text-wrap *ngFor="let lead of leadList; let i = index;">\n\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/user-avatar.png" />\n          </ion-avatar>\n\n          <h3>{{ lead.suffix }} {{ lead.firstName }} {{ lead.middleName }} {{ lead.lastName }}</h3>\n          <p> {{ lead.email }} {{ lead.city }}</p>\n\n          <button ion-button large clear item-end (click)="presentPopover($event)">\n            <ion-icon ios="ios-more" md="md-more"></ion-icon>\n          </button>\n\n        </ion-item>\n\n        <!-- <ion-item-sliding *ngFor="let lead of leadList; let i = index;">\n\n          <ion-item text-wrap>\n            <h3>{{ i+1 }}. {{ lead.suffix }} {{ lead.firstName }} {{ lead.middleName }} {{ lead.lastName }}</h3>\n            <p> {{ lead.email }} {{ lead.city }}</p>\n          </ion-item>\n\n          <ion-item-options>\n            <button ion-button icon-only (click)="view(lead.id)" light>\n              <ion-icon ios="ios-eye" md="md-eye"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="edit(lead.id)" light>\n              <ion-icon ios="ios-create" md="md-create"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="delete(lead.id)" danger>\n              <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n            </button>\n          </ion-item-options>\n\n        </ion-item-sliding> -->\n\n      </ion-list>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/list-lead/list-lead.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* LeadProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LocalStorageProvider */]])
    ], ListLeadPage);
    return ListLeadPage;
}());

//# sourceMappingURL=list-lead.js.map

/***/ })

});
//# sourceMappingURL=12.js.map