import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-manager-home',
  templateUrl: 'manager-home.html',
})
export class ManagerHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerHomePage');
  }

  openPage(name:string){
    // this.navCtrl.push(name);
     this.events.publish('openPage', name)
   }
 

}
