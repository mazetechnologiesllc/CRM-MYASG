import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Models
import { AppUser } from '../../_models';

// Services
import { AuthenticationProvider, LocalStorageProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-sales-dashboard',
  templateUrl: 'sales-dashboard.html',
})
export class SalesDashboardPage {

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
    console.log('ionViewDidLoad SalesDashboardPage');
  }

  // Custom Methods

}
