import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController } from 'ionic-angular';

// Models
import { Lead } from '../../_models/index';

// Services
import { LoadingProvider, LeadProvider, LocalStorageProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-lead',
  templateUrl: 'list-lead.html',
})
export class ListLeadPage implements OnInit {

  userType: number;

  leadList: Lead[] = [];
  companyId: number;
  managerId: number;
  affiliateId: number;

  errorMessage: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public loadingProvider: LoadingProvider,
    public leadProvider: LeadProvider,
    public localStorageProvider: LocalStorageProvider
  ) {

  }

  ngOnInit() {

    this.userType = this.localStorageProvider.getLoggedInUser().userTypeId;

    this.companyId = 952;
    this.managerId = 954;
    this.affiliateId = 962;

    this.getLeadList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListLeadPage');
  }

  getLeadList() {
    this.loadingProvider.showLoading();

    if (this.userType == 3) {

      this.leadProvider.getLeadListByManager(this.managerId, this.companyId).subscribe(response => {
        if (response) {

          if (JSON.parse(response['_body'])['code'] == 404) {
            this.loadingProvider.hideLoading();
            this.errorMessage = 'Not Authorized!';
            return;
          }

          for (let item of JSON.parse(response['_body'])) {
            this.leadList.push({
              id: item.id,
              userTypeId: item.usertype_id,
              empId: item.empID,
              suffix: item.suffix_name,
              firstName: item.first_name,
              middleName: item.middle_name,
              lastName: item.last_name,
              email: item.email,
              contactNumber: item.contact,
              city: item.city,
              state: item.state,
              country: item.country,
              leadAssigned: item.lead_assigned,
              createdBy: item.created_by,
              leadStage: item.leadStage,
              serviceName: item.ServiceName,
              status: item.status
            });
          }

          this.loadingProvider.hideLoading();

        } else {
          this.showError("Access Denied");
        }
      },
        error => {
          //this.showError(error);
          console.log(error);
          this.showError('Error.');
        });

    }

    if (this.userType == 4) {

      this.leadProvider.getLeadListByAffiliate(this.affiliateId, this.companyId).subscribe(response => {
        if (response) {

          if (JSON.parse(response['_body'])['code'] == 404) {
            this.loadingProvider.hideLoading();
            this.errorMessage = 'Not Authorized!';
            return;
          }

          for (let item of JSON.parse(response['_body'])) {
            this.leadList.push({
              id: item.id,
              userTypeId: item.usertype_id,
              empId: item.empID,
              suffix: item.suffix_name,
              firstName: item.first_name,
              middleName: item.middle_name,
              lastName: item.last_name,
              email: item.email,
              contactNumber: item.contact,
              city: item.city,
              state: item.state,
              country: item.country,
              leadAssigned: item.lead_assigned,
              createdBy: item.created_by,
              leadStage: item.leadStage,
              serviceName: item.ServiceName,
              status: item.status
            });
          }

          this.loadingProvider.hideLoading();

        } else {
          this.showError("Access Denied");
        }
      },
        error => {
          //this.showError(error);
          console.log(error);
          this.showError('Error.');
        });

    }
  }

  showError(text) {
    this.loadingProvider.hideLoading();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  view(leadId: number) {
    return;
  }

  edit(leadId: number) {
    return;
  }

  delete(leadId: number) {
    return;
  }

  presentPopover(myEvent) {
    // let popover = this.popoverCtrl.create(PopoverPage);
    // popover.present({
    //   ev: myEvent
    // });
    return;
  }

}