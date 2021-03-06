import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUser } from '../../_models';

// Services
import { LocalStorageProvider } from '../../providers';
/**
 * Generated class for the AddManagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-manager',
  templateUrl: 'add-manager.html',
})
export class AddManagerPage implements OnInit {
  affiliateType: any[] = [];
  managers: any[] = [];
  durations: any[] = [];

  loggedInUser: AppUser;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public localStorageProvider: LocalStorageProvider) {
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
    console.log('ionViewDidLoad AddManagerPage');
  }

  // Custom Methods

  addAffiliate() {
    return;
  }

}
