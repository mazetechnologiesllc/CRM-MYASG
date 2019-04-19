import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Models
import { AppUser } from '../../_models';

// Services
import { AuthenticationProvider, LocalStorageProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-super-admin-dashboard',
  templateUrl: 'super-admin-dashboard.html',
})
export class SuperAdminDashboardPage implements OnInit {

  loggedInUser: AppUser;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthenticationProvider,
    public localStorageProvider: LocalStorageProvider
  ) {
    this.loggedInUser = this.localStorageProvider.getLoggedInUser();
  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuperAdminDashboardPage');
  }

  // Custom Methods

}
