import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Models
import { AppUser } from '../../_models';

// Services
import { LocalStorageProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-add-affiliate',
  templateUrl: 'add-affiliate.html',
})
export class AddAffiliatePage implements OnInit {

  affiliateType: any[] = [];
  managers: any[] = [];
  durations: any[] = [];

  loggedInUser: AppUser;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public localStorageProvider: LocalStorageProvider
    ) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAffiliatePage');
  }

  // Custom Methods

  addAffiliate() {
    return;
  }

}
