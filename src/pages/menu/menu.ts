import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Nav, Events } from 'ionic-angular';

// Models
import { AppUser } from '../../_models';

// Services
import { LocalStorageProvider, AuthenticationProvider } from '../../providers';

// Pages
import { HomePage } from '../home/home';
import { CcqPage } from '../ccq/ccq';
import { SuperAdminDashboardPage } from '../super-admin-dashboard/super-admin-dashboard';
import { AdminDashboardPage } from '../admin-dashboard/admin-dashboard';
import { SalesDashboardPage } from '../sales-dashboard/sales-dashboard';
import { ClientDashboardPage } from '../client-dashboard/client-dashboard';
import { CompanyDashboardPage } from '../company-dashboard/company-dashboard';
import { ChangePasswordPage } from '../change-password/change-password';
import { ListAffiliatePage } from '../list-affiliate/list-affiliate';
import { AddAffiliatePage } from '../add-affiliate/add-affiliate';

const managerMenu = require('./json/manager.menu.json');
const affiliateMenu = require('./json/affiliate.menu.json');

export interface PageInterface {
  title: string;
  pageName: string;
  component?: any;
  index?: number;
  icon: string;
  color: any;
  iconColor: any;
  subMenu?: PageInterface[];
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit {

  isLoggedIn: boolean = false;
  loggedInUser: AppUser;
  userType: number;
  loggedInUserRole: string = '';
  loggedInUserName: string = '';

  shownSubMenu: any;
  menuUpDown: string = 'arrow-dropdown';

  // Basic root for our content view
  rootPage = 'HomePage';
  pages: PageInterface[] = [];

  @ViewChild(Nav) nav: Nav;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public events:Events,
    public authProvider: AuthenticationProvider,
    public localStorageProvider: LocalStorageProvider
  ) {
  }

  ngOnInit() {
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
          { title: 'Dashboard', pageName: 'SuperAdminDashboardPage', component: SuperAdminDashboardPage, icon: 'speedometer', color: 'appPrimary', iconColor: 'appDashboardIcon' },
          {
            title: 'Settings', pageName: '', component: null, icon: 'settings', color: 'appDark', iconColor: 'appSettingIcon', subMenu: [
              { title: 'Profile Settings', pageName: 'HomePage', component: HomePage, icon: 'remove', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'User Log', pageName: 'HomePage', component: HomePage, icon: 'remove', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'Menus', pageName: 'HomePage', component: HomePage, icon: 'remove', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'User Type', pageName: 'HomePage', component: HomePage, icon: 'remove', color: 'appDark', iconColor: 'appPrimary' }
            ]
          },
          {
            title: 'Company', pageName: '', component: null, icon: 'boat', color: 'appDark', iconColor: 'appCompanyIcon', subMenu: [
              { title: 'Companys', pageName: 'HomePage', component: HomePage, icon: 'eye', color: 'appDark', iconColor: 'primary' }
            ]
          },
          { title: 'Users List', pageName: 'HomePage', component: HomePage, icon: 'contacts', color: 'appDark', iconColor: 'appUsersIcon' }
        ];

      } else if (this.userType == 2) {

        this.loggedInUserRole = 'Admin';
        this.rootPage = 'AdminDashboardPage';
        this.pages = [
          { title: 'Dashboard', pageName: 'AdminDashboardPage', component: AdminDashboardPage, icon: 'speedometer', color: 'appPrimary', iconColor: 'appDashboardIcon' },
          {
            title: 'My Services', pageName: '', component: null, icon: 'cog', color: 'appDark', iconColor: 'appPrimary', subMenu: [
              { title: 'Show all Services', pageName: 'HomePage', component: HomePage, icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'Add Service', pageName: 'HomePage', component: HomePage, icon: 'add', color: 'appDark', iconColor: 'appSuccess' }
            ]
          },
          {
            title: 'My Affiliates', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appAffiliateIcon', subMenu: [
              { title: 'Show all Affiliates', pageName: 'ListAffiliatePage', component: ListAffiliatePage, icon: 'eye', color: 'appDark', iconColor: 'danger' },
              { title: 'Add Affiliate', pageName: 'AddAffiliatePage', component: AddAffiliatePage, icon: 'person-add', color: 'appDark', iconColor: 'appSuccess' }
            ]
          },
          {
            title: 'My Manager', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appManagerIcon', subMenu: [
              { title: 'Show all Manager', pageName: 'HomePage', component: HomePage, icon: 'eye', color: 'appDark', iconColor: 'danger' },
              { title: 'Add Manager', pageName: 'HomePage', component: HomePage, icon: 'person-add', color: 'appDark', iconColor: 'appSuccess' }
            ]
          },
          {
            title: 'My Sales Person', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appUsersIcon', subMenu: [
              { title: 'Show Sales Person', pageName: 'HomePage', component: HomePage, icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'Add Sales Person', pageName: 'HomePage', component: HomePage, icon: 'person-add', color: 'appDark', iconColor: 'appSuccess' }
            ]
          },
          {
            title: 'My Client Leads', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appUsersIcon', subMenu: [
              { title: 'Show Client Leads', pageName: 'HomePage', component: HomePage, icon: 'eye', color: 'appDark', iconColor: 'danger' },
              { title: 'Add Client Leads', pageName: 'HomePage', component: HomePage, icon: 'add', color: 'appDark', iconColor: 'appSuccess' },
              { title: 'Assign Client Leads', pageName: 'HomePage', component: HomePage, icon: 'pin', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'Assigned Leads', pageName: 'HomePage', component: HomePage, icon: 'pin', color: 'appDark', iconColor: 'danger' },
              { title: 'Credit Leads', pageName: 'HomePage', component: HomePage, icon: 'egg', color: 'appDark', iconColor: 'appPrimary' }
            ]
          },
          { title: 'Credit Summary', pageName: 'HomePage', component: HomePage, icon: 'card', color: 'appDark', iconColor: 'appPrimary' },
          {
            title: 'Profile', pageName: '', component: null, icon: 'person', color: 'appDark', iconColor: 'appPrimary', subMenu: [
              { title: 'Edit Profile', pageName: 'HomePage', component: HomePage, icon: 'remove', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'Change Password', pageName: 'ChangePasswordPage', component: ChangePasswordPage, icon: 'remove', color: 'appDark', iconColor: 'appWarning' }
            ]
          },
          { title: 'User Log', pageName: 'HomePage', component: HomePage, icon: 'flask', color: 'appDark', iconColor: 'appPrimary' }
        ];

      } else if (this.userType == 3) {

        this.loggedInUserRole = 'Manager';
        this.rootPage = 'ManagerHomePage';
        this.pages = managerMenu;

      } else if (this.userType == 4) {

        this.loggedInUserRole = 'Affiliate';
        this.rootPage = 'AffiliateHomePage';
        this.pages = affiliateMenu;

      } else if (this.userType == 5) {

        this.loggedInUserRole = 'Sales';
        this.rootPage = 'SalesDashboardPage';
        this.pages = [
          { title: 'Dashboard', pageName: 'SalesDashboardPage', component: SalesDashboardPage, icon: 'speedometer', color: 'appPrimary', iconColor: 'appDashboardIcon' },
          { title: 'Settings', pageName: 'CcqPage', component: CcqPage, icon: 'settings', color: 'appDark', iconColor: 'appSettingIcon' },
          { title: 'Change Password', pageName: 'ChangePasswordPage', component: ChangePasswordPage, icon: 'lock', color: 'appDark', iconColor: 'appWarning' }
        ];

      } else if (this.userType == 6) {

        this.loggedInUserRole = 'Client';
        this.rootPage = 'ClientDashboardPage';
        this.pages = [
          { title: 'Dashboard', pageName: 'ClientDashboardPage', component: ClientDashboardPage, icon: 'speedometer', color: 'appPrimary', iconColor: 'appDashboardIcon' },
          { title: 'Settings', pageName: 'CcqPage', component: CcqPage, icon: 'settings', color: 'appDark', iconColor: 'appSettingIcon' },
          { title: 'Change Password', pageName: 'ChangePasswordPage', component: ChangePasswordPage, icon: 'lock', color: 'appDark', iconColor: 'appWarning' }
        ];

      } else if (this.userType == 7) {

        this.loggedInUserRole = 'Company';
        this.rootPage = 'CompanyDashboardPage';
        this.pages = [
          { title: 'Dashboard', pageName: 'CompanyDashboardPage', component: CompanyDashboardPage, icon: 'speedometer', color: 'appPrimary', iconColor: 'appDashboardIcon' },
          {
            title: 'My Admin', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appAdminIcon', subMenu: [
              { title: 'Show all Admin', pageName: 'HomePage', component: HomePage, icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'Add Admin', pageName: 'HomePage', component: HomePage, icon: 'person-add', color: 'appDark', iconColor: 'appSuccess' }
            ]
          },
          {
            title: 'My Services', pageName: '', component: null, icon: 'cog', color: 'appDark', iconColor: 'appPrimary', subMenu: [
              { title: 'Show all Services', pageName: 'HomePage', component: HomePage, icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'Add Service', pageName: 'HomePage', component: HomePage, icon: 'add', color: 'appDark', iconColor: 'appSuccess' }
            ]
          },
          {
            title: 'My Affiliates', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appAffiliateIcon', subMenu: [
              { title: 'Show all Affiliates', pageName: 'ListAffiliatePage', component: ListAffiliatePage, icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'Add Affiliate', pageName: 'AddAffiliatePage', component: AddAffiliatePage, icon: 'add', color: 'appDark', iconColor: 'appSuccess' }
            ]
          },
          {
            title: 'My Manager', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appManagerIcon', subMenu: [
              { title: 'Show all Manager', pageName: 'HomePage', component: HomePage, icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'Add Manager', pageName: 'HomePage', component: HomePage, icon: 'person-add', color: 'appDark', iconColor: 'appSuccess' }
            ]
          },
          {
            title: 'My Sales Person', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appHomeIcon', subMenu: [
              { title: 'Show Sales Person', pageName: 'HomePage', component: HomePage, icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'Add Sales Person', pageName: 'HomePage', component: HomePage, icon: 'person-add', color: 'appDark', iconColor: 'appSuccess' }
            ]
          },
          {
            title: 'My Client Leads', pageName: '', component: null, icon: 'people', color: 'appDark', iconColor: 'appUsersIcon', subMenu: [
              { title: 'Show Client Leads', pageName: 'HomePage', component: HomePage, icon: 'eye', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'Add Client Leads', pageName: 'HomePage', component: HomePage, icon: 'add', color: 'appDark', iconColor: 'appSuccess' },
              { title: 'Assign Client Leads', pageName: 'HomePage', component: HomePage, icon: 'pin', color: 'appDark', iconColor: 'danger' },
              { title: 'Assigned Leads', pageName: 'HomePage', component: HomePage, icon: 'pin', color: 'appDark', iconColor: 'appPrimary' },
              { title: 'Credit Leads', pageName: 'HomePage', component: HomePage, icon: 'egg', color: 'appDark', iconColor: 'primary' }
            ]
          },
          { title: 'Renewal Amount', pageName: 'HomePage', component: HomePage, icon: 'cash', color: 'appDark', iconColor: 'appPrimary' },
          { title: 'Credit Summary', pageName: 'HomePage', component: HomePage, icon: 'card', color: 'appDark', iconColor: 'danger' },
          { title: 'My Schedules', pageName: 'HomePage', component: HomePage, icon: 'card', color: 'appDark', iconColor: 'success' },
          { title: 'Agreements', pageName: 'HomePage', component: HomePage, icon: 'card', color: 'appDark', iconColor: 'appPrimary' },
          { title: 'Eamil Sended Info', pageName: 'HomePage', component: HomePage, icon: 'card', color: 'appDark', iconColor: 'primary' },
          { title: 'Eamil Sended Info', pageName: 'HomePage', component: HomePage, icon: 'card', color: 'appDark', iconColor: 'appPrimary' },
          { title: 'Change Password', pageName: 'ChangePasswordPage', component: ChangePasswordPage, icon: 'lock', color: 'appDark', iconColor: 'appWarning' }
        ];

      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    this.events.subscribe('openPage',(page)=>{
      console.log(this.pages)
        this.openPage(page, page.title)
    })
  }

  // Custom Methods

  logout() {
    localStorage.removeItem("isLoggedIn");
    //this.authProvider.logout();
    this.ngOnInit();
    //window.location.reload(true);
    // this.navCtrl.setRoot('MenuPage');
  }

  signIn() {
    this.navCtrl.setRoot('LoginPage');
  }

  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  openMenu(page: string) {
    this.nav.push(page);
  }

  openPage(page: PageInterface, title: string) {

    this.nav.push(page.pageName);

    for (let p of this.pages) {

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
  }

  toggleSubMenu(menuGroup) {
    this.toggleArrowIcon();

    if (this.isMenuGroupShown(menuGroup)) {
      this.shownSubMenu = null;
    } else {
      this.shownSubMenu = menuGroup;
    }
  }

  isMenuGroupShown(menuGroup) {
    return this.shownSubMenu === menuGroup;
  }

  toggleArrowIcon() {
    if (this.menuUpDown == 'arrow-dropdown') {
      this.menuUpDown = 'arrow-dropup';
    } else {
      this.menuUpDown = 'arrow-dropdown';
    }
  }

}
