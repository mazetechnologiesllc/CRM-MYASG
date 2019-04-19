import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-affiliate-home',
  templateUrl: 'affiliate-home.html',
})
export class AffiliateHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AffiliateHomePage');
  }

  openPage(name:string){
   // this.navCtrl.push(name);
    this.events.publish('openPage', name)
  }

}
