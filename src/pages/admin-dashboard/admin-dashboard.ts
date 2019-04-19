import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Models
import { AppUser } from '../../_models';

// Services
import { LocalStorageProvider , AuthenticationProvider} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-admin-dashboard',
  templateUrl: 'admin-dashboard.html',
})
export class AdminDashboardPage {

  pageTitle: string = '';
  loggedInUserName: string = '';

  loggedInUser: AppUser;
  userType: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthenticationProvider,
    public localStorageProvider: LocalStorageProvider
  ) {
    this.loggedInUser = this.localStorageProvider.getLoggedInUser();

  }

  ngOnInit() {

    if (this.loggedInUser) {
      this.userType = this.loggedInUser.userTypeId;

      if (this.userType == 1) {
        this.pageTitle = 'Super Admin Panel';
      } else if (this.userType == 2) {
        this.pageTitle = 'Admin Panel';
      } else if (this.userType == 3) {
        this.pageTitle = 'Manager Panel';
      } else if (this.userType == 4) {
        this.pageTitle = 'Affilate Panel';
      } else if (this.userType == 5) {
        this.pageTitle = 'Sales Panel';
      } else if (this.userType == 6) {
        this.pageTitle = 'Client Panel';
      } else if (this.userType == 7) {
        this.pageTitle = 'Company Panel';
      } else if (this.userType == 8) {
        this.pageTitle = 'Super Admin User Panel';
      } else if (this.userType == 9) {
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

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminDashboardPage');
  }

  // Custom Methods

  logout() {
    this.authProvider.logout();
    this.navCtrl.setRoot('LoginPage');
  }

}
