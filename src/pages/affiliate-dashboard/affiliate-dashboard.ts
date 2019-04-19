import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Models
import { AppUser } from '../../_models';

// Services
import { LocalStorageProvider, AuthenticationProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-affiliate-dashboard',
  templateUrl: 'affiliate-dashboard.html',
})
export class AffiliateDashboardPage implements OnInit {

  loggedInUser: AppUser;
  loggedInUserName: string = '';

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

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AffiliateDashboardPage');
  }

  // Custom Methods

  viewLeadList() {
    this.navCtrl.setRoot('ListLeadPage');
  }

}
