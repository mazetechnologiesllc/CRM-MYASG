webpackJsonp([33],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalStorageProvider = /** @class */ (function () {
    function LocalStorageProvider(storage) {
        this.storage = storage;
    }
    // logged in User
    LocalStorageProvider.prototype.setLoggedInUser = function (user) {
        localStorage.setItem('loggedInUser', JSON.stringify({
            id: user.id,
            adminId: user.adminId,
            affiliateId: user.affiliateId,
            companyId: user.companyId,
            companyName: user.companyName,
            companyDisc: user.companyDisc,
            empId: user.empId,
            managerId: user.managerId,
            salesId: user.salesId,
            serviceId: user.serviceId,
            userName: user.userName,
            firstName: user.firstName,
            middleName: user.middleName,
            lastName: user.lastName,
            suffix: user.suffix,
            title: user.title,
            dob: user.dob,
            userTypeId: user.userTypeId,
            gender: user.gender,
            website: user.website,
            email: user.email,
            password: user.password,
            contactNumber: user.contactNumber,
            alternateNumber: user.alternateNumber,
            fax: user.fax,
            address: user.address,
            city: user.city,
            state: user.state,
            country: user.country,
            pinCode: user.pinCode,
            zip: user.zip,
            logo: user.logo,
            icon: user.icon,
            image: user.image,
            securityAmount: user.securityAmount,
            amount: user.amount,
            finalAmount: user.finalAmount,
            under: user.under,
            profile: user.profile,
            designationId: user.designationId,
            leadAssigned: user.leadAssigned,
            leadStatus: user.leadStatus,
            isApproved: user.isApproved,
            createdDate: user.createdDate,
            updatedDate: user.updatedDate,
            createdBy: user.createdBy,
            updateBy: user.updateBy,
            lastLogin: user.lastLogin,
            isAgreedCCQ: user.isAgreedCCQ,
            status: user.status
        }));
        //this.storage.set('loggedInUser', JSON.stringify({user}));
    };
    LocalStorageProvider.prototype.getLoggedInUser = function () {
        var loggedInUser;
        // this.storage.get('loggedInUser').then((user) => {
        //   console.log('Your age is', user);
        //   loggedInUser = user;
        // });
        loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        return loggedInUser;
    };
    LocalStorageProvider.prototype.removeLoggedInUser = function () {
        //this.storage.remove('loggedInUser');
        localStorage.removeItem('loggedInUser');
    };
    LocalStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], LocalStorageProvider);
    return LocalStorageProvider;
}());

//# sourceMappingURL=local-storage.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		293,
		32
	],
	"../pages/add-affiliate/add-affiliate.module": [
		294,
		23
	],
	"../pages/add-client-lead/add-client-lead.module": [
		295,
		31
	],
	"../pages/add-lead/add-lead.module": [
		296,
		2
	],
	"../pages/add-manager/add-manager.module": [
		297,
		30
	],
	"../pages/admin-dashboard/admin-dashboard.module": [
		298,
		22
	],
	"../pages/affiliate-dashboard/affiliate-dashboard.module": [
		299,
		21
	],
	"../pages/affiliate-home/affiliate-home.module": [
		300,
		29
	],
	"../pages/affiliate-profile/affiliate-profile.module": [
		301,
		20
	],
	"../pages/ccq/ccq.module": [
		302,
		19
	],
	"../pages/change-password/change-password.module": [
		303,
		18
	],
	"../pages/client-dashboard/client-dashboard.module": [
		304,
		17
	],
	"../pages/company-dashboard/company-dashboard.module": [
		305,
		16
	],
	"../pages/credit-lead/credit-lead.module": [
		306,
		28
	],
	"../pages/home/home.module": [
		307,
		15
	],
	"../pages/how-it-works/how-it-works.module": [
		308,
		27
	],
	"../pages/join-us/join-us.module": [
		309,
		1
	],
	"../pages/list-affiliate/list-affiliate.module": [
		310,
		14
	],
	"../pages/list-client/list-client.module": [
		311,
		13
	],
	"../pages/list-lead/list-lead.module": [
		312,
		12
	],
	"../pages/list-manager/list-manager.module": [
		313,
		11
	],
	"../pages/list-prospects/list-prospects.module": [
		314,
		10
	],
	"../pages/list-web-lead/list-web-lead.module": [
		315,
		9
	],
	"../pages/login/login.module": [
		316,
		8
	],
	"../pages/manager-dashboard/manager-dashboard.module": [
		317,
		0
	],
	"../pages/manager-home/manager-home.module": [
		318,
		26
	],
	"../pages/manager-profile/manager-profile.module": [
		319,
		7
	],
	"../pages/menu/menu.module": [
		320,
		3
	],
	"../pages/profile/profile.module": [
		322,
		6
	],
	"../pages/sales-dashboard/sales-dashboard.module": [
		321,
		5
	],
	"../pages/service-details/service-details.module": [
		323,
		25
	],
	"../pages/super-admin-dashboard/super-admin-dashboard.module": [
		324,
		4
	],
	"../pages/tabs/tabs.module": [
		325,
		24
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.baseApiUrl = 'http://myasg.biz/crm_jss/api_work';
        //public readonly baseApiUrl: string = 'http://myamenbizzapp.com/crm_jss/api_work';
        //public readonly baseImagesUrl = 'http://imperialoffice.info/crm_jss';
    }
    AppConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], AppConfig);
    return AppConfig;
}());

;
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AffiliateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AffiliateProvider = /** @class */ (function () {
    function AffiliateProvider(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
        console.log('Hello AffiliateProvider Provider');
    }
    AffiliateProvider.prototype.createAffiliate = function (affiliateModel) {
        var url = this._appConfig.baseApiUrl + '/affiliate.php?managerid=' + affiliateModel.managerId +
            '&selectType=' + affiliateModel.selectType + '&firstname=' + affiliateModel.firstName +
            '&lastname=' + affiliateModel.lastName + '&middlename=' + affiliateModel.middleName +
            '&suffix=' + affiliateModel.suffix + '&contact=' + affiliateModel.contactNumber +
            '&gender=' + affiliateModel.gender + '&email=' + affiliateModel.email +
            '&alt=' + affiliateModel.alternateNumber + '&country=' + affiliateModel.country +
            '&city=' + affiliateModel.city + '&address=' + affiliateModel.address +
            '&security_amt=' + affiliateModel.securityAmount + '&duration=' + affiliateModel.duration +
            '&state=' + affiliateModel.state + '&zip=' + affiliateModel.zip + '&fax=' + affiliateModel.fax +
            '&renewal_amount=' + affiliateModel.renewalAmount + '&start_date=' + affiliateModel.startDate +
            '&f_name=' + affiliateModel.paymentFirstName + '&m_name=' + affiliateModel.paymentMiddleName +
            '&l_name=' + affiliateModel.paymentLastName + '&suffixP=' + affiliateModel.paymentSuffix +
            '&emailP=' + affiliateModel.paymentEmail + '&countryP=' + affiliateModel.paymentCountry +
            '&add1=' + affiliateModel.paymentAddLine1 + '&zipP=' + affiliateModel.paymentZip +
            '&bank_name=' + affiliateModel.paymentBankName + '&holder_name=' + affiliateModel.paymentHolderName +
            '&card_num=' + affiliateModel.paymentCardNumber + '&contactP=' + affiliateModel.paymentContactNumber +
            '&cityP=' + affiliateModel.paymentCity + '&stateP=' + affiliateModel.paymentState +
            '&add2=' + affiliateModel.paymentAddLine2 + '&csc=' + affiliateModel.paymentCsc +
            '&account_no=' + affiliateModel.paymentAccountNumber + '&branch_code=' + affiliateModel.paymentBranchCode +
            '&dob=' + affiliateModel.dob + '&ssn=' + affiliateModel.ssn + '&routing=' + affiliateModel.routing +
            '&paymentMode=' + affiliateModel.paymentMode + '&cardMonth=' + affiliateModel.cardMonth +
            '&cardYear=' + affiliateModel.cardYear + '&card_holder_name=' + affiliateModel.cardHolderName +
            '&internal_notes=' + affiliateModel.internalNotes + '&user_id=' + affiliateModel.userId +
            '&mode=create';
        var options = null;
        return this._http.get(url, options);
    };
    AffiliateProvider.prototype.updateAffiliate = function (affiliateModel) {
        var url = this._appConfig.baseApiUrl + '/affiliate.php?managerid=' + affiliateModel.managerId +
            '&selectType=' + affiliateModel.selectType + '&firstname=' + affiliateModel.firstName +
            '&lastname=' + affiliateModel.lastName + '&middlename=' + affiliateModel.middleName +
            '&suffix=' + affiliateModel.suffix + '&contact=' + affiliateModel.contactNumber +
            '&gender=' + affiliateModel.gender + '&email=' + affiliateModel.email +
            '&alt=' + affiliateModel.alternateNumber + '&country=' + affiliateModel.country +
            '&city=' + affiliateModel.city + '&address=' + affiliateModel.address +
            '&security_amt=' + affiliateModel.securityAmount + '&duration=' + affiliateModel.duration +
            '&state=' + affiliateModel.state + '&zip=' + affiliateModel.zip + '&fax=' + affiliateModel.fax +
            '&renewal_amount=' + affiliateModel.renewalAmount + '&start_date=' + affiliateModel.startDate +
            '&f_name=' + affiliateModel.paymentFirstName + '&m_name=' + affiliateModel.paymentMiddleName +
            '&l_name=' + affiliateModel.paymentLastName + '&suffixP=' + affiliateModel.paymentSuffix +
            '&emailP=' + affiliateModel.paymentEmail + '&countryP=' + affiliateModel.paymentCountry +
            '&add1=' + affiliateModel.paymentAddLine1 + '&zipP=' + affiliateModel.paymentZip +
            '&bank_name=' + affiliateModel.paymentBankName + '&holder_name=' + affiliateModel.paymentHolderName +
            '&card_num=' + affiliateModel.paymentCardNumber + '&contactP=' + affiliateModel.paymentContactNumber +
            '&cityP=' + affiliateModel.paymentCity + '&stateP=' + affiliateModel.paymentState +
            '&add2=' + affiliateModel.paymentAddLine2 + '&csc=' + affiliateModel.paymentCsc +
            '&account_no=' + affiliateModel.paymentAccountNumber + '&branch_code=' + affiliateModel.paymentBranchCode +
            '&dob=' + affiliateModel.dob + '&ssn=' + affiliateModel.ssn + '&routing=' + affiliateModel.routing +
            '&paymentMode=' + affiliateModel.paymentMode + '&cardMonth=' + affiliateModel.cardMonth +
            '&cardYear=' + affiliateModel.cardYear + '&card_holder_name=' + affiliateModel.cardHolderName +
            '&internal_notes=' + affiliateModel.internalNotes + '&user_id=' + affiliateModel.userId +
            '&rowId=' + affiliateModel.id + '&mode=update';
        var options = null;
        return this._http.get(url, options);
    };
    AffiliateProvider.prototype.getAffiliates = function (userId) {
        // http://myasg.biz/crm_jss/api_work/affiliate.php?user_id=7&mode=listing
        var url = this._appConfig.baseApiUrl + '/affiliate.php?user_id=' + userId + '&mode=listing';
        var options = null;
        return this._http.get(url, options);
    };
    AffiliateProvider.prototype.getAffiliate = function (userId, affiliateId) {
        // http://myasg.biz/crm_jss/api_work/affiliate.php?user_id=162&affiliate_id=445&mode=view
        var url = this._appConfig.baseApiUrl + '/affiliate.php?user_id=' + userId + '&affiliate_id=' + affiliateId + '&mode=view';
        var options = null;
        return this._http.get(url, options);
    };
    AffiliateProvider.prototype.deleteAffiliate = function (userId, affiliateId) {
        // http://myasg.biz/crm_jss/api_work/affiliate.php?user_id=162&mode=delete&affiliate_id=415
        var url = this._appConfig.baseApiUrl + '/affiliate.php?user_id=' + userId + '&affiliate_id=' + affiliateId + '&mode=delete';
        var options = null;
        return this._http.get(url, options);
    };
    AffiliateProvider.prototype.changePassword = function (userId, affiliateId, password, newPassword) {
        // http://myasg.biz/crm_jss/api_work/affiliate.php?user_id=162&mode=change_password&affilaite_id=455&password=admin1&changepassword=admin
        var url = this._appConfig.baseApiUrl + '/manager.php?user_id=' + userId + '&affilaite_id=' + affiliateId + '&password=' + password + '&changepassword=' + newPassword + '&mode=change_password';
        var options = null;
        return this._http.get(url, options);
    };
    AffiliateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */]])
    ], AffiliateProvider);
    return AffiliateProvider;
}());

//# sourceMappingURL=affiliate.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_storage_local_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Http, Headers, RequestOptions } from '@angular/http';



var AuthenticationProvider = /** @class */ (function () {
    function AuthenticationProvider(_http, _appConfig, _localStorageProvider) {
        this._http = _http;
        this._appConfig = _appConfig;
        this._localStorageProvider = _localStorageProvider;
        console.log('Hello AuthenticationProvider Provider');
    }
    AuthenticationProvider.prototype.signUp = function (signUpModel, endpoint) {
        var url = this._appConfig.baseApiUrl + endpoint + '?usertype=' + signUpModel.userType
            + '&manager=' + signUpModel.manager
            + '&type=' + signUpModel.createType
            + '&company=' + signUpModel.companyId
            + '&services=' + signUpModel.services.toString()
            + '&c_name=' + signUpModel.companyName
            + '&f_name=' + signUpModel.firstName
            + '&m_name=' + signUpModel.middleName
            + '&l_name=' + signUpModel.lastName
            + '&suffix=' + signUpModel.suffix
            + '&gender=' + signUpModel.gender
            + '&date_birth=' + signUpModel.dateOfBirth
            + '&contact=' + signUpModel.contact
            + '&email=' + signUpModel.email
            + '&ssn_no=' + signUpModel.ssn
            + '&country=' + signUpModel.country
            + '&state=' + signUpModel.state
            + '&cities=' + signUpModel.city
            + '&zip=' + signUpModel.zip
            + '&add1=' + signUpModel.addLine1
            + '&add2=' + signUpModel.addLine2
            + '&int_note=' + signUpModel.internalNotes
            + '&pay_by=' + signUpModel.payBy
            + '&card_name=' + signUpModel.cardHolderName
            + '&card_no=' + signUpModel.cardNumber
            + '&card_month=' + signUpModel.cardExpMonth
            + '&card_year=' + signUpModel.cardExpYear
            + '&csc_code=' + signUpModel.cvv
            + '&s_amount=' + signUpModel.amount
            + '&country1=' + signUpModel.paymentCountry
            + '&state1=' + signUpModel.paymentState
            + '&citiesa1=' + signUpModel.paymentCity
            + '&adda1=' + signUpModel.paymentAddLine1
            + '&addb2=' + signUpModel.paymentAddLine2
            + '&azip=' + signUpModel.paymentZip
            + '&createdby=162'
            + 'user_id=162'
            + '&mode=create';
        return this._http.post(url, null);
    };
    AuthenticationProvider.prototype.login = function (username, password) {
        var url = this._appConfig.baseApiUrl + '/login.php?username=' + username + '&password=' + password;
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        var options = null;
        return this._http.get(url, options);
    };
    AuthenticationProvider.prototype.logout = function () {
        localStorage.removeItem("isLoggedIn");
        this._localStorageProvider.removeLoggedInUser();
    };
    AuthenticationProvider.prototype.changePassword = function (userId, password) {
        var url = this._appConfig.baseApiUrl + '/change_password.php?user_id=' + userId + '&password=' + password;
        var options = null;
        return this._http.get(url, options);
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_3__local_storage_local_storage__["a" /* LocalStorageProvider */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientProvider = /** @class */ (function () {
    function ClientProvider(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
        console.log('Hello ClientProvider Provider');
    }
    ClientProvider.prototype.getClients = function (userId) {
        // http://myasg.biz/crm_jss/api_work/client_rishabh.php?user_id=162&&mode=listing  
        var url = this._appConfig.baseApiUrl + '/client_rishabh.php?user_id=' + userId + '&mode=listing';
        var options = null;
        return this._http.get(url, options);
    };
    ClientProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */]])
    ], ClientProvider);
    return ClientProvider;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeadProvider = /** @class */ (function () {
    function LeadProvider(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
        console.log('Hello LeadProvider Provider');
    }
    LeadProvider.prototype.getLeadListByManager = function (managerId, companyId) {
        var url = this._appConfig.baseApiUrl + '/manager_leads_list.php?manager_id=' + managerId + '&company_id=' + companyId;
        var options = null;
        return this._http.get(url, options);
    };
    LeadProvider.prototype.getLeadListByAffiliate = function (affiliateId, companyId) {
        var url = this._appConfig.baseApiUrl + '/affiliates_leads_list.php?affiliate_id=' + affiliateId + '&company_id=' + companyId;
        var options = null;
        return this._http.get(url, options);
    };
    LeadProvider.prototype.createLeadByManager = function (model) {
        var url = this._appConfig.baseApiUrl + '/lead.php?' + this.objectToParameter(model);
        var options = null;
        return this._http.get(url, options);
    };
    LeadProvider.prototype.objectToParameter = function (objectVariable) {
        return Object.keys(objectVariable).map(function (key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(objectVariable[key]);
        }).join('&');
    };
    LeadProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */]])
    ], LeadProvider);
    return LeadProvider;
}());

//# sourceMappingURL=lead.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
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


var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        console.log('Hello LoadingProvider Provider');
    }
    LoadingProvider.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoadingProvider.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    LoadingProvider.prototype.hideAllLoading = function () {
        if (this.loading) {
            this.loading.dismissAll();
            this.loading = null;
        }
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Http, Headers, RequestOptions } from '@angular/http';


var ManagerProvider = /** @class */ (function () {
    function ManagerProvider(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
        console.log('Hello ManagerProvider Provider');
    }
    ManagerProvider.prototype.createManager = function (managerModel) {
        var url = this._appConfig.baseApiUrl + '/manager.php?firstname=' + managerModel.firstName +
            '&lastname=' + managerModel.lastName + '&middlename=' + managerModel.middleName +
            '&suffix=' + managerModel.suffix + '&contact=' + managerModel.contactNumber +
            '&gender=' + managerModel.gender + '&email=' + managerModel.email +
            '&alt=' + managerModel.alternateNumber + '&country=' + managerModel.country +
            '&city=' + managerModel.city + '&address=' + managerModel.address +
            '&security_amt=' + managerModel.securityAmount + '&duration=' + managerModel.duration +
            '&state=' + managerModel.state + '&zip=' + managerModel.zip + '&fax=' +
            '&renewal_amount=' + managerModel.renewalAmount + '&start_date=' + managerModel.startDate +
            '&f_name=' + managerModel.paymentFirstName + '&m_name=' + managerModel.paymentMiddleName +
            '&l_name=' + managerModel.paymentLastName + '&suffixP=' + managerModel.paymentSuffix +
            '&emailP=' + managerModel.paymentEmail + '&countryP=' + managerModel.paymentCountry +
            '&add1=' + managerModel.paymentAddLine1 + '&zipP=' + managerModel.paymentZip +
            '&bank_name=' + managerModel.paymentBankName + '&holder_name=' + managerModel.paymentHolderName +
            '&card_num=' + managerModel.paymentCardNumber + '&contactP=' + managerModel.paymentContactNumber +
            '&cityP=' + managerModel.paymentCity + '&stateP=' + managerModel.paymentState +
            '&add2=' + managerModel.paymentAddLine2 + '&csc=' + managerModel.paymentCsc +
            '&account_no=' + managerModel.paymentAccountNumber + '&branch_code=' + managerModel.paymentBranchCode +
            '&dob=' + managerModel.dob + '&ssn=' + managerModel.ssn + '&routing=' + managerModel.routing +
            '&paymentMode=' + managerModel.paymentMode + '&cardMonth=' + managerModel.cardMonth +
            '&cardYear=' + managerModel.cardYear + '&card_holder_name=' + managerModel.cardHolderName +
            '&internal_notes=' + managerModel.internalNotes + '&user_id=' + managerModel.userId +
            '&mode= create';
        var options = null;
        return this._http.get(url, options);
    };
    ManagerProvider.prototype.updateManager = function (managerModel) {
        var url = this._appConfig.baseApiUrl + '/manager.php?firstname=' + managerModel.firstName +
            '&lastname=' + managerModel.lastName + '&middlename=' + managerModel.middleName +
            '&suffix=' + managerModel.suffix + '&contact=' + managerModel.contactNumber +
            '&gender=' + managerModel.gender + '&email=' + managerModel.email +
            '&alt=' + managerModel.alternateNumber + '&country=' + managerModel.country +
            '&city=' + managerModel.city + '&address=' + managerModel.address +
            '&security_amt=' + managerModel.securityAmount + '&duration=' + managerModel.duration +
            '&state=' + managerModel.state + '&zip=' + managerModel.zip + '&fax=' + managerModel.fax +
            '&renewal_amount=' + managerModel.renewalAmount + '&start_date=' + managerModel.startDate +
            '&f_name=' + managerModel.paymentFirstName + '&m_name=' + managerModel.paymentMiddleName +
            '&l_name=' + managerModel.paymentLastName + '&suffixP=' + managerModel.paymentSuffix +
            '&emailP=' + managerModel.paymentEmail + '&countryP=' + managerModel.paymentCountry +
            '&add1=' + managerModel.paymentAddLine1 + '&zipP=' + managerModel.paymentZip +
            '&bank_name=' + managerModel.paymentBankName + '&holder_name=' + managerModel.paymentHolderName +
            '&card_num=' + managerModel.paymentCardNumber + '&contactP=' + managerModel.paymentContactNumber +
            '&cityP=' + managerModel.paymentCity + '&stateP=' + managerModel.paymentState +
            '&add2=' + managerModel.paymentAddLine2 + '&csc=' + managerModel.paymentCsc +
            '&account_no=' + managerModel.paymentAccountNumber + '&branch_code=' + managerModel.paymentBranchCode +
            '&dob=' + managerModel.dob + '&ssn=' + managerModel.ssn + '&routing=' + managerModel.routing +
            '&paymentMode=' + managerModel.paymentMode + '&cardMonth=' + managerModel.cardMonth +
            '&cardYear=' + managerModel.cardYear + '&card_holder_name=' + managerModel.cardHolderName +
            '&internal_notes=' + managerModel.internalNotes + '&user_id=' + managerModel.userId +
            '&rowId=' + managerModel.id + '&mode=update';
        var options = null;
        return this._http.get(url, options);
    };
    ManagerProvider.prototype.getManagersForDropDown = function () {
        // http://myasg.biz/crm_jss/api_work/get_manager.php?session_id=7
        var url = this._appConfig.baseApiUrl + '/get_manager.php?session_id=7';
        var options = null;
        return this._http.get(url, options);
    };
    ManagerProvider.prototype.getManagers = function (userId) {
        // http://myasg.biz/crm_jss/api_work/manager.php?user_id=162&mode=listing
        var url = this._appConfig.baseApiUrl + '/manager.php?user_id=' + userId + '&mode=listing';
        var options = null;
        return this._http.get(url, options);
    };
    ManagerProvider.prototype.getManager = function (userId, managerId) {
        var url = this._appConfig.baseApiUrl + '/manager.php?user_id=' + userId + '&manager_id=' + managerId + '&mode=view';
        var options = null;
        return this._http.get(url, options);
    };
    ManagerProvider.prototype.deleteManager = function (userId, managerId) {
        // http://myasg.biz/crm_jss/api_work/manager.php?user_id=162&mode=delete&manager_id=271
        var url = this._appConfig.baseApiUrl + '/manager.php?user_id=' + userId + '&manager_id=' + managerId + '&mode=delete';
        var options = null;
        return this._http.get(url, options);
    };
    ManagerProvider.prototype.changePassword = function (userId, managerId, password, newPassword) {
        // http://myasg.biz/crm_jss/api_work/manager.php?user_id=162&mode=change_password&manager_id=443&password=admin1&changepassword=admin
        var url = this._appConfig.baseApiUrl + '/manager.php?user_id=' + userId + '&manager_id=' + managerId + '&password=' + password + '&changepassword=' + newPassword + '&mode=change_password';
        var options = null;
        return this._http.get(url, options);
    };
    ManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */]])
    ], ManagerProvider);
    return ManagerProvider;
}());

//# sourceMappingURL=manager.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.getServicesForDropDown = function () {
        // http://myasg.biz/crm_jss/api_work/get_service.php?session_id=19
        var url = this._appConfig.baseApiUrl + '/get_service.php?session_id=19';
        var options = null;
        return this._http.get(url, options);
    };
    ServiceProvider.prototype.getServices = function () {
        // http://myasg.biz/crm_jss/api_work/get_service_forWeb.php
        var url = this._appConfig.baseApiUrl + '/get_service_forWeb.php';
        var options = null;
        return this._http.get(url, options);
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StateProvider = /** @class */ (function () {
    function StateProvider(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
        console.log('Hello StateProvider Provider');
    }
    StateProvider.prototype.getStates = function () {
        // http://myasg.biz/crm_jss/api_work/get_state.php
        var url = this._appConfig.baseApiUrl + '/get_state.php';
        var options = null;
        return this._http.get(url, options);
    };
    StateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */]])
    ], StateProvider);
    return StateProvider;
}());

//# sourceMappingURL=state.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebLeadProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebLeadProvider = /** @class */ (function () {
    function WebLeadProvider(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
        console.log('Hello WebLeadProvider Provider');
    }
    WebLeadProvider.prototype.getWebLeads = function (userId) {
        // http://myasg.biz/crm_jss/api_work/webuser.php?user_id=19&mode=listing
        var url = this._appConfig.baseApiUrl + '/webuser.php?user_id=' + userId + '&mode=listing';
        var options = null;
        return this._http.get(url, options);
    };
    WebLeadProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */]])
    ], WebLeadProvider);
    return WebLeadProvider;
}());

//# sourceMappingURL=web-lead.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProspectsProvider = /** @class */ (function () {
    function ProspectsProvider(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
        console.log('Hello ProspectsProvider Provider');
    }
    ProspectsProvider.prototype.getProspects = function (userId) {
        // http://myasg.biz/crm_jss/api_work/prospects.php?mode=listing&user_id=162
        var url = this._appConfig.baseApiUrl + '/prospects.php?user_id=' + userId + '&mode=listing';
        var options = null;
        return this._http.get(url, options);
    };
    ProspectsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */]])
    ], ProspectsProvider);
    return ProspectsProvider;
}());

//# sourceMappingURL=prospects.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_authentication_authentication__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_loading_loading__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_local_storage_local_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_affiliate_affiliate__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_lead_lead__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_config__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_manager_manager__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_brmasker_ionic_3__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_web_lead_web_lead__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_state_state__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_service_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_client_client__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_prospects_prospects__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-affiliate/add-affiliate.module#AddAffiliatePageModule', name: 'AddAffiliatePage', segment: 'add-affiliate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-client-lead/add-client-lead.module#AddClientLeadPageModule', name: 'AddClientLeadPage', segment: 'add-client-lead', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-lead/add-lead.module#AddLeadPageModule', name: 'AddLeadPage', segment: 'add-lead', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-manager/add-manager.module#AddManagerPageModule', name: 'AddManagerPage', segment: 'add-manager', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-dashboard/admin-dashboard.module#AdminDashboardPageModule', name: 'AdminDashboardPage', segment: 'admin-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/affiliate-dashboard/affiliate-dashboard.module#AffiliateDashboardPageModule', name: 'AffiliateDashboardPage', segment: 'affiliate-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/affiliate-home/affiliate-home.module#AffiliateHomePageModule', name: 'AffiliateHomePage', segment: 'affiliate-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/affiliate-profile/affiliate-profile.module#AffiliateProfilePageModule', name: 'AffiliateProfilePage', segment: 'affiliate-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ccq/ccq.module#CcqPageModule', name: 'CcqPage', segment: 'ccq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/client-dashboard/client-dashboard.module#ClientDashboardPageModule', name: 'ClientDashboardPage', segment: 'client-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/company-dashboard/company-dashboard.module#CompanyDashboardPageModule', name: 'CompanyDashboardPage', segment: 'company-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit-lead/credit-lead.module#CreditLeadPageModule', name: 'CreditLeadPage', segment: 'credit-lead', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/how-it-works/how-it-works.module#HowItWorksPageModule', name: 'HowItWorksPage', segment: 'how-it-works', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/join-us/join-us.module#JoinUsPageModule', name: 'JoinUsPage', segment: 'join-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-affiliate/list-affiliate.module#ListAffiliatePageModule', name: 'ListAffiliatePage', segment: 'list-affiliate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-client/list-client.module#ListClientPageModule', name: 'ListClientPage', segment: 'list-client', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-lead/list-lead.module#ListLeadPageModule', name: 'ListLeadPage', segment: 'list-lead', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-manager/list-manager.module#ListManagerPageModule', name: 'ListManagerPage', segment: 'list-manager', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-prospects/list-prospects.module#ListProspectsPageModule', name: 'ListProspectsPage', segment: 'list-prospects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-web-lead/list-web-lead.module#ListWebLeadPageModule', name: 'ListWebLeadPage', segment: 'list-web-lead', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manager-dashboard/manager-dashboard.module#ManagerDashboardPageModule', name: 'ManagerDashboardPage', segment: 'manager-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manager-home/manager-home.module#ManagerHomePageModule', name: 'ManagerHomePage', segment: 'manager-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manager-profile/manager-profile.module#ManagerProfilePageModule', name: 'ManagerProfilePage', segment: 'manager-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sales-dashboard/sales-dashboard.module#SalesDashboardPageModule', name: 'SalesDashboardPage', segment: 'sales-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-details/service-details.module#ServiceDetailsPageModule', name: 'ServiceDetailsPage', segment: 'service-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/super-admin-dashboard/super-admin-dashboard.module#SuperAdminDashboardPageModule', name: 'SuperAdminDashboardPage', segment: 'super-admin-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_authentication_authentication__["a" /* AuthenticationProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_loading_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_local_storage_local_storage__["a" /* LocalStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_13__providers_affiliate_affiliate__["a" /* AffiliateProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_lead_lead__["a" /* LeadProvider */],
                __WEBPACK_IMPORTED_MODULE_15__app_config__["a" /* AppConfig */],
                __WEBPACK_IMPORTED_MODULE_16__providers_manager_manager__["a" /* ManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_web_lead_web_lead__["a" /* WebLeadProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_state_state__["a" /* StateProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_client_client__["a" /* ClientProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_prospects_prospects__["a" /* ProspectsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'MenuPage';
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            if (_this.platform.is('android')) {
                _this.statusBar.styleLightContent();
            }
            _this.splashScreen.hide();
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/app/app.component.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/pizone/Desktop/Projects/Ionic Projects/CRM-MYASG-1 TEST/src/app/app.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map