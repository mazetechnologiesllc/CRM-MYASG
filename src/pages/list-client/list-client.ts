import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

// Models
import { AppUser, ListClientModel } from '../../_models';

// Services
import { ClientProvider, LocalStorageProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-client',
  templateUrl: 'list-client.html',
})
export class ListClientPage implements OnInit {

  loggedInUser: AppUser;
  clients: ListClientModel[] = [];
  errorMessage: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public clientProvider: ClientProvider,
    public localStorageProvider: LocalStorageProvider
  ) {
    this.loggedInUser = this.localStorageProvider.getLoggedInUser();
  }

  ngOnInit() {
    this.getClients();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListClientPage');
  }

    // Custom Methods

    getClients() {
      this.clientProvider.getClients(this.loggedInUser.id).subscribe(response => {
        if (response) {
  
          if (JSON.parse(response['_body'])['code'] == 404) {
            this.showLongToast((response as any)._body)
            //this.errorMessage = 'Not Authorized!';
            return;
          }
  
          for (let item of JSON.parse(response['_body'])) {
            this.clients.push({
              id: item.id,
              firstName: item.first_name,
              middleName: item.middle_name,
              lastName: item.last_name,
              suffix: item.suffix_name,
              email: item.email,
              contactNumber: item.contact,
              city: item.city,
              state: item.state,
              finalAmount: item.final_amount,
              country: item.country,
              serviceName: item.ServiceName,
              leadAssigned: item.lead_assigned,
              leadStage: item.leadStage,
              leadStatus: item.lead_status,
              createdOn: item.created_on,
              createdBy: item.created_by
            });
          }  
        } else {
          this.showError("Access Denied");
        }
      },
        error => {
          //this.showError(error);
          console.log(error);
          this.showError('Login failed.');
        });
    }
  
    showError(text) {
      let alert = this.alertCtrl.create({
        title: 'Fail',
        subTitle: text,
        buttons: ['OK']
      });
      alert.present();
    }
  
    showLongToast(response: any) {
      let toast = this.toastCtrl.create({
        message: response,
        duration: 3000,
      });
      toast.present();
    }

}
