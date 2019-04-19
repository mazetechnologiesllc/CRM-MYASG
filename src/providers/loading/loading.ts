import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoadingProvider {

  loading: Loading;

  constructor(
    public loadingCtrl: LoadingController
  ) {
    console.log('Hello LoadingProvider Provider');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  hideLoading() {
    this.loading.dismiss();
  }

  hideAllLoading() {
    if (this.loading) {
      this.loading.dismissAll();
      this.loading = null;
    }
  }

}
