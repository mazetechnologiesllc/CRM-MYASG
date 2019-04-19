import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Models
import { AppUser } from '../../_models';

// Services
import { LocalStorageProvider, AuthenticationProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-ccq',
  templateUrl: 'ccq.html',
})
export class CcqPage implements OnInit {

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
    console.log('ionViewDidLoad CcqPage');
  }

  // Custom Methods

}
