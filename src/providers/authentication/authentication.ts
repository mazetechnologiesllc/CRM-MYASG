import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { LocalStorageProvider } from '../local-storage/local-storage';

import { AppConfig } from '../../app/app.config';

import { SignUpModel } from '../../_models/index';

@Injectable()
export class AuthenticationProvider {

  constructor(
    private _http: Http,
    private _appConfig: AppConfig,
    private _localStorageProvider: LocalStorageProvider
  ) {
    console.log('Hello AuthenticationProvider Provider');
  }

  signUp(signUpModel: SignUpModel, endpoint:string) {
    let url = this._appConfig.baseApiUrl + endpoint +'?usertype=' + signUpModel.userType
      + '&manager=' + signUpModel.manager
      + '&type=' + signUpModel.createType
      + '&company=' + signUpModel.companyId
      + '&services=' + signUpModel.services.toString()
      + '&c_name=' + signUpModel.companyName
      + '&f_name=' + signUpModel.firstName
      + '&m_name=' + signUpModel.middleName
      + '&l_name=' + signUpModel.lastName
      + '&suffix=' + signUpModel.suffix
      + '&gender=' + signUpModel.gender
      + '&date_birth=' + signUpModel.dateOfBirth
      + '&contact=' + signUpModel.contact
      + '&email=' + signUpModel.email
      + '&ssn_no=' + signUpModel.ssn
      + '&country=' + signUpModel.country
      + '&state=' + signUpModel.state
      + '&cities=' + signUpModel.city
      + '&zip=' + signUpModel.zip
      + '&add1=' + signUpModel.addLine1
      + '&add2=' + signUpModel.addLine2
      + '&int_note=' + signUpModel.internalNotes
      + '&pay_by=' + signUpModel.payBy
      + '&card_name=' + signUpModel.cardHolderName
      + '&card_no=' + signUpModel.cardNumber
      + '&card_month=' + signUpModel.cardExpMonth
      + '&card_year=' + signUpModel.cardExpYear
      + '&csc_code=' + signUpModel.cvv
      + '&s_amount=' + signUpModel.amount
      + '&country1=' + signUpModel.paymentCountry
      + '&state1=' + signUpModel.paymentState
      + '&citiesa1=' + signUpModel.paymentCity
      + '&adda1=' + signUpModel.paymentAddLine1
      + '&addb2=' + signUpModel.paymentAddLine2
      + '&azip=' + signUpModel.paymentZip
      + '&createdby=162'
      + '&user_id=162'
      + '&mode=create';

    return this._http.post(url, null);

  }

  login(username: string, password: string) {

    let url = this._appConfig.baseApiUrl + '/login.php?username=' + username + '&password=' + password;

    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });

    let options = null;

    return this._http.get(url, options);

  }

  logout() {
    localStorage.removeItem("isLoggedIn");
    this._localStorageProvider.removeLoggedInUser();
  }

  changePassword(userId: number, password: string) {

    let url = this._appConfig.baseApiUrl + '/change_password.php?user_id=' + userId + '&password=' + password;
    let options = null;

    return this._http.get(url, options);
  }

}
