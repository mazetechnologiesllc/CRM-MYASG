import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Models
import { AppUser } from '../../_models';

// Services
import { AuthenticationProvider, LocalStorageProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-client-dashboard',
  templateUrl: 'client-dashboard.html',
})
export class ClientDashboardPage {

  loggedInUser: AppUser;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthenticationProvider,
    public localStorageProvider: LocalStorageProvider
  ) {
    this.loggedInUser = this.localStorageProvider.getLoggedInUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDashboardPage');
  }

  // Custom Methods

}
