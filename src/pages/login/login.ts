import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';

// Models
import { AppUser } from '../../_models/index';

// Servies
import { LoadingProvider, AuthenticationProvider, LocalStorageProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  credentials = { username: '', password: '' };
  isLoggedIn: boolean = false;
  loggedInUser: AppUser;
  errorMessage: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthenticationProvider,
    public alertCtrl: AlertController,
    public localStorageProvider: LocalStorageProvider,
    public loadingProvider: LoadingProvider
  ) {

  }

  ngOnInit() {
    this.isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    this.loggedInUser = this.localStorageProvider.getLoggedInUser();

    if (this.isLoggedIn && this.loggedInUser) {
      this.navCtrl.setRoot('MenuPage');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // Custom Methods

  cancelLogin() {
    this.navCtrl.setRoot('MenuPage');
  }
  
  login() {
    this.loadingProvider.showLoading();

    this.authProvider.login(this.credentials.username, this.credentials.password).subscribe(response => {
      if (response) {

        if (JSON.parse(response['_body'])['code'] == 404) {
          this.loadingProvider.hideLoading();
          this.errorMessage = 'Login failed! Invalid userName or password.';
          return;
        }

        localStorage.setItem("isLoggedIn", JSON.stringify(true));

        this.localStorageProvider.removeLoggedInUser();

        this.localStorageProvider.setLoggedInUser({
          id: JSON.parse(response['_body'])['id'],
          adminId: JSON.parse(response['_body'])['admin_id'],
          affiliateId: JSON.parse(response['_body'])['affiliate_id'],
          companyId: JSON.parse(response['_body'])['company_id'],
          companyName: JSON.parse(response['_body'])['company_name'],
          companyDisc: JSON.parse(response['_body'])['company_disc'],
          empId: JSON.parse(response['_body'])['empID'],
          managerId: JSON.parse(response['_body'])['manager_id'],
          salesId: JSON.parse(response['_body'])['sales_id'],
          serviceId: JSON.parse(response['_body'])['service_id'],
          userName: JSON.parse(response['_body'])['username'],
          firstName: JSON.parse(response['_body'])['first_name'],
          middleName: JSON.parse(response['_body'])['middle_name'],
          lastName: JSON.parse(response['_body'])['last_name'],
          suffix: JSON.parse(response['_body'])['suffix_name'],
          title: JSON.parse(response['_body'])['title'],
          dob: JSON.parse(response['_body'])['dob'],
          userTypeId: JSON.parse(response['_body'])['usertype_id'],
          gender: JSON.parse(response['_body'])['gneder'],
          website: JSON.parse(response['_body'])['website'],
          email: JSON.parse(response['_body'])['email'],
          password: this.credentials.password,
          //password: JSON.parse(response['_body'])['password'],
          contactNumber: JSON.parse(response['_body'])['contact'],
          alternateNumber: JSON.parse(response['_body'])['alternate_number'],
          fax: JSON.parse(response['_body'])['fax'],
          address: JSON.parse(response['_body'])['address'],
          city: JSON.parse(response['_body'])['city'],
          state: JSON.parse(response['_body'])['state'],
          country: JSON.parse(response['_body'])['country'],
          pinCode: JSON.parse(response['_body'])['pincode'],
          zip: JSON.parse(response['_body'])['zip'],
          logo: JSON.parse(response['_body'])['logo'],
          icon: JSON.parse(response['_body'])['icon'],
          image: JSON.parse(response['_body'])['image'],
          securityAmount: JSON.parse(response['_body'])['security_amount'],
          amount: JSON.parse(response['_body'])['amount'],
          finalAmount: JSON.parse(response['_body'])['final_amount'],
          under: JSON.parse(response['_body'])['under'],
          profile: JSON.parse(response['_body'])['profile'],
          designationId: JSON.parse(response['_body'])['designation_id'],
          leadAssigned: JSON.parse(response['_body'])['lead_assigned'],
          leadStatus: JSON.parse(response['_body'])['lead_status'],
          isApproved: JSON.parse(response['_body'])['approved'],
          createdDate: JSON.parse(response['_body'])['created_on'],
          createdBy: JSON.parse(response['_body'])['created_by'],
          updatedDate: JSON.parse(response['_body'])['updated_on'],
          updateBy: JSON.parse(response['_body'])['updated_by'],
          lastLogin: JSON.parse(response['_body'])['last_login'],
          isAgreedCCQ: JSON.parse(response['_body'])['agreementStatus'],
          status: JSON.parse(response['_body'])['status']
        });

        window.location.reload(true);
        this.navCtrl.setRoot('MenuPage');
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        //this.showError(error);
        console.log(error);
        this.showError('Login failed.');
      });

    //this.navCtrl.setRoot('MenuPage');
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

}
