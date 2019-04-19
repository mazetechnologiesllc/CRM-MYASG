import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-client-lead',
  templateUrl: 'add-client-lead.html',
})
export class AddClientLeadPage {
  servicesType: any[] = [];



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.servicesType = [
      "Credit Monitoring Services",
      "Hardware", "Software Solution",
      "Credit Monitoring",
      "Hardware Mantinance",
      "Software Mantinance",
      "IT Services"
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClientLeadPage');
  }
  addClientLead() {
    return;
  }

}
