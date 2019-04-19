webpackJsonp([31],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientLeadPageModule", function() { return AddClientLeadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_client_lead__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddClientLeadPageModule = /** @class */ (function () {
    function AddClientLeadPageModule() {
    }
    AddClientLeadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_client_lead__["a" /* AddClientLeadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_client_lead__["a" /* AddClientLeadPage */]),
            ],
        })
    ], AddClientLeadPageModule);
    return AddClientLeadPageModule;
}());

//# sourceMappingURL=add-client-lead.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientLeadPage; });
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


var AddClientLeadPage = /** @class */ (function () {
    function AddClientLeadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicesType = [];
        this.servicesType = [
            "Credit Monitoring Services",
            "Hardware", "Software Solution",
            "Credit Monitoring",
            "Hardware Mantinance",
            "Software Mantinance",
            "IT Services"
        ];
    }
    AddClientLeadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddClientLeadPage');
    };
    AddClientLeadPage.prototype.addClientLead = function () {
        return;
    };
    AddClientLeadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-client-lead',template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/add-client-lead/add-client-lead.html"*/'<ion-content class="pageContent">\n\n  <ion-card>\n    <ion-item no-lines text-center>\n      <div style="color:#17A2B8; font-size: 30px;">\n        <ion-icon ios="ios-person-add" md="md-person-add"></ion-icon>\n      </div>\n      <h1 style="color:#17A2B8;">\n        New Client/Lead info\n      </h1>\n    </ion-item>\n\n    <form #loginForm="ngForm" (ngSubmit)="addClientLead()" autocomplete="off">\n      <div *ngIf="errorMessage" class="errorMessage">{{errorMessage}}</div>\n      <div *ngIf="successMessage" class="successMessage">{{successMessage}}</div>\n\n      <ion-grid>\n        <ion-row>\n          <ion-item>\n            <ion-label floating>First Name</ion-label>\n            <ion-input type="text" name="firstName" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Middle Name</ion-label>\n            <ion-input type="text" name="middleName" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Last Name</ion-label>\n            <ion-input type="text" name="lastName" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Suffix</ion-label>\n            <ion-input type="text" name="suffix" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="text" name="email" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Service</ion-label>\n            <ion-select>\n              <ion-option *ngFor="let sType of servicesType" name="service">{{sType}}</ion-option>\n\n            </ion-select>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Ammount</ion-label>\n            <ion-input type="number" name="ammount" value=""></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Contact</ion-label>\n            <ion-input type="number" name="contact" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>DOB</ion-label>\n            <ion-input type="date" name="dob" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>City</ion-label>\n            <ion-input type="text" name="city" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>State</ion-label>\n            <ion-input type="text" name="state" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Country</ion-label>\n            <ion-input type="text" name="country" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Zip</ion-label>\n            <ion-input type="text" name="zip" value=""></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-label floating>Address</ion-label>\n            <ion-textarea name="address" value=""></ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-row padding>\n          <button ion-button color="appPrimary" full type="submit">Update</button>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/pages/add-client-lead/add-client-lead.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddClientLeadPage);
    return AddClientLeadPage;
}());

//# sourceMappingURL=add-client-lead.js.map

/***/ })

});
//# sourceMappingURL=31.js.map