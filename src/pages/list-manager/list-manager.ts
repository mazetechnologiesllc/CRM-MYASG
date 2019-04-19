import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController, ToastController} from 'ionic-angular';

// Models
import { ListManagerModel, AppUser } from '../../_models/index';

// Services
import { LoadingProvider, LocalStorageProvider, ManagerProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-manager',
  templateUrl: 'list-manager.html',
})
export class ListManagerPage implements OnInit {

  loggedInUser: AppUser;
  managers: ListManagerModel[] = [];
  errorMessage: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public popoverCtrl: PopoverController,
    public loadingProvider: LoadingProvider,
    public managerProvider: ManagerProvider,
    public localStorageProvider: LocalStorageProvider
    ) {
      this.loggedInUser = this.localStorageProvider.getLoggedInUser();
  }

  ngOnInit() {
    this.getManagers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListManagerPage');
  }

  // Custom Methods

  getManagers() {
    this.loadingProvider.showLoading();

    this.managerProvider.getManagers(this.loggedInUser.id).subscribe(response => {
      if (response) {
        if (JSON.parse(response['_body'])['code'] == 404) {
          this.loadingProvider.hideLoading();
          this.showLongToast((response as any)._body)
          //this.errorMessage = 'Not Authorized!';
          return;
        }

        for (let item of JSON.parse(response['_body'])) {
          this.managers.push({
            id: item.id,
            staff: item.staff,
            userName: item.username,
            firstName: item.first_name,
            middleName: item.middle_name,
            lastName: item.last_name,
            suffix: item.suffix_name,
            userTypeId: item.usertype_id,
            gender: item.gender,
            website: item.website,
            email: item.email,
            password: item.password,
            contactNumber: item.contact,
            alternateNumber: item.alternate_number,
            dob: item.dob,
            fax: item.fax,
            addLine1: item.address,
            addLine2: item.address2,
            city: item.city,
            state: item.state,
            pinCode: item.pincode,
            logo: item.logo,
            title: item.title,
            sequirityAmount: item.security_amount,
            amount: item.amount,
            finalAmount: item.final_amount,
            zip: item.zip,
            country: item.country,
            image: item.image,
            under: item.under,
            companyName: item.company_name,
            companyDisc: item.company_disc,
            adminId: item.admin_id,
            superCompanyId: item.super_company_id,
            companyId: item.company_id,
            affiliateId: item.affiliate_id,
            managerId: item.manager_id,
            serviceId: item.service_id,
            salesId: item.sales_id,
            leadAssigned: item.lead_assigned,
            leadStatus: item.lead_status,
            empId: item.empID,
            userLink: item.user_link,
            internalNotes: item.internal_notes,
            ssn: item.ssn,
            approved: item.approved,
            clientMatured: item.client_matured,
            createdOn: item.created_on,
            updatedOn: item.updated_on,
            createdBy: item.created_by,
            updatedBy: item.update_by,
            lastLogin: item.last_login,
            agreementStatus: item.agreementStatus,
            agreementOn: item.agreement_on,
            registerVia: item.register_via,
            status: item.status,
            startDate: item.start_date,
            expDate: item.exp_date
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
        this.showError('Login failed.');
      });
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

  showLongToast(response: any) {
    let toast = this.toastCtrl.create({
      message: response,
      duration: 3000,
    });
    toast.present();
  }

}
