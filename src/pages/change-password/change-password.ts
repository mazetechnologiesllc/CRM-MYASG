import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

// Models
import { AppUser } from '../../_models';

// Serevices
import { LocalStorageProvider, LoadingProvider, AuthenticationProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage implements OnInit {

  credentials = { currentPassword: '', newPassword: '', confirmPassword: '' };

  loggedInUser: AppUser;

  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingProvider: LoadingProvider,
    public authProvider: AuthenticationProvider,
    public localStorageProvider: LocalStorageProvider
  ) {
    this.loggedInUser = this.localStorageProvider.getLoggedInUser();
  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  // Custom Methods

  changePassword() {

    this.loadingProvider.showLoading();

    if (this.loggedInUser.password != this.credentials.currentPassword) {
      this.errorMessage = 'Password you have entered does not match your current password.';
      this.loadingProvider.hideLoading();
      return;
    }
    if (this.credentials.currentPassword == this.credentials.newPassword) {
      this.errorMessage = 'New Password should not be same as current password.';
      this.loadingProvider.hideLoading();
      return;
    }
    if (this.credentials.newPassword != this.credentials.confirmPassword) {
      this.errorMessage = 'New password does not match the confirm password.';
      this.loadingProvider.hideLoading();
      return;
    }

    this.authProvider.changePassword(this.loggedInUser.id, this.credentials.newPassword).subscribe(response => {
      if (response) {

        if (JSON.parse(response['_body'])['code'] == 400) {
          this.errorMessage = 'Bad Request!';
          this.loadingProvider.hideLoading();
          return;
        }

        if (JSON.parse(response['_body'])['code'] == 200) {
          this.loggedInUser.password = this.credentials.newPassword;
          this.localStorageProvider.setLoggedInUser(this.loggedInUser);

          this.credentials = { currentPassword: '', newPassword: '', confirmPassword: '' };
          this.successMessage = 'Your password has been changed successfully!'
          this.loadingProvider.hideLoading();
          return;
        }

      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        //this.showError(error);
        console.log(error);
        this.showError('Invalid Request.');
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

}
