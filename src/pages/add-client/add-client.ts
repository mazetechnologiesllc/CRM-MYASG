import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUser } from '../../_models';

// Services
import { LocalStorageProvider } from '../../providers';

/**
 * Generated class for the AddClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-client',
  templateUrl: 'add-client.html',
})
export class AddClientPage  implements OnInit{
  affiliateType: any[] = [];
  managers: any[] = [];
  durations: any[] = [];

  loggedInUser: AppUser;

  constructor(public navCtrl: NavController, public navParams: NavParams, public localStorageProvider: LocalStorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClientPage');
  }

  ngOnInit() {

    this.loggedInUser = this.localStorageProvider.getLoggedInUser();

    this.affiliateType = [
      "Under Manager",
      "Individual Affiliate"
    ];

    this.managers = [
      "Manager 1",
      "Manager 2"
    ];

    this.durations = [
      "01 Month",
      "03 Month",
      "06 Month",
      "12 Month"
    ];

  }

   // Custom Methods

   addAffiliate() {
    return;
  }


}
