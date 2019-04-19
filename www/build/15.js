webpackJsonp([15],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

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

/***/ })

});
//# sourceMappingURL=15.js.map