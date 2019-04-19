import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

//  Models
import { AppUser, ListProspectsModel } from '../../_models';

// Services
import { LocalStorageProvider, ProspectsProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-prospects',
  templateUrl: 'list-prospects.html',
})
export class ListProspectsPage implements OnInit {

  loggedInUser: AppUser;
  prospects: ListProspectsModel[] = [];
  errorMessage: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public prospectsProvider: ProspectsProvider,
    public localStorageProvider: LocalStorageProvider
  ) {
    this.loggedInUser = this.localStorageProvider.getLoggedInUser();
  }

  ngOnInit() {
    this.getrospects();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProspectsPage');
  }

    // Custom Methods

    getrospects() {
      this.prospectsProvider.getProspects(this.loggedInUser.id).subscribe(response => {
        if (response) {
          if (JSON.parse(response['_body'])['code'] == 404) {
            this.showLongToast((response as any)._body)
            //this.errorMessage = 'Not Authorized!';
            return;
          }
  
          for (let item of JSON.parse(response['_body'])) {
            this.prospects.push({
              id: item.id,
              firstName: item.first_name,
              middleName: item.middle_name,
              lastName: item.last_name,
              suffix: item.suffix_name,
              userTypeId: item.usertype_id,
              email: item.email,
              contactNumber: item.contact,
              city: item.city,
              state: item.state,
              sequirityAmount: item.security_amount,
              country: item.country,
              clientMatured: item.client_matured,
              createdBy: item.created_by,
              status: item.status,
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
