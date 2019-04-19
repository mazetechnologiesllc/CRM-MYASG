import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../app/app.config';

import { CreateManagerModel } from '../../_models';

@Injectable()
export class ManagerProvider {

  constructor(
    private _http: Http,
    private _appConfig: AppConfig
  ) {
    console.log('Hello ManagerProvider Provider');
  }

  createManager(managerModel: CreateManagerModel) {

    let url = this._appConfig.baseApiUrl + '/manager.php?firstname=' + managerModel.firstName +
      '&lastname=' + managerModel.lastName + '&middlename=' + managerModel.middleName +
      '&suffix=' + managerModel.suffix + '&contact=' + managerModel.contactNumber +
      '&gender=' + managerModel.gender + '&email=' + managerModel.email +
      '&alt=' + managerModel.alternateNumber + '&country=' + managerModel.country +
      '&city=' + managerModel.city + '&address=' + managerModel.address +
      '&security_amt=' + managerModel.securityAmount + '&duration=' + managerModel.duration +
      '&state=' + managerModel.state + '&zip=' + managerModel.zip + '&fax=' +
      '&renewal_amount=' + managerModel.renewalAmount + '&start_date=' + managerModel.startDate +
      '&f_name=' + managerModel.paymentFirstName + '&m_name=' + managerModel.paymentMiddleName +
      '&l_name=' + managerModel.paymentLastName + '&suffixP=' + managerModel.paymentSuffix +
      '&emailP=' + managerModel.paymentEmail + '&countryP=' + managerModel.paymentCountry +
      '&add1=' + managerModel.paymentAddLine1 + '&zipP=' + managerModel.paymentZip +
      '&bank_name=' + managerModel.paymentBankName + '&holder_name=' + managerModel.paymentHolderName +
      '&card_num=' + managerModel.paymentCardNumber + '&contactP=' + managerModel.paymentContactNumber +
      '&cityP=' + managerModel.paymentCity + '&stateP=' + managerModel.paymentState +
      '&add2=' + managerModel.paymentAddLine2 + '&csc=' + managerModel.paymentCsc +
      '&account_no=' + managerModel.paymentAccountNumber + '&branch_code=' + managerModel.paymentBranchCode +
      '&dob=' + managerModel.dob + '&ssn=' + managerModel.ssn + '&routing=' + managerModel.routing +
      '&paymentMode=' + managerModel.paymentMode + '&cardMonth=' + managerModel.cardMonth +
      '&cardYear=' + managerModel.cardYear + '&card_holder_name=' + managerModel.cardHolderName +
      '&internal_notes=' + managerModel.internalNotes + '&user_id=' + managerModel.userId +
      '&mode= create'

    let options = null;

    return this._http.get(url, options);
  }

  updateManager(managerModel: CreateManagerModel) {

    let url = this._appConfig.baseApiUrl + '/manager.php?firstname=' + managerModel.firstName +
      '&lastname=' + managerModel.lastName + '&middlename=' + managerModel.middleName +
      '&suffix=' + managerModel.suffix + '&contact=' + managerModel.contactNumber +
      '&gender=' + managerModel.gender + '&email=' + managerModel.email +
      '&alt=' + managerModel.alternateNumber + '&country=' + managerModel.country +
      '&city=' + managerModel.city + '&address=' + managerModel.address +
      '&security_amt=' + managerModel.securityAmount + '&duration=' + managerModel.duration +
      '&state=' + managerModel.state + '&zip=' + managerModel.zip + '&fax=' + managerModel.fax +
      '&renewal_amount=' + managerModel.renewalAmount + '&start_date=' + managerModel.startDate +
      '&f_name=' + managerModel.paymentFirstName + '&m_name=' + managerModel.paymentMiddleName +
      '&l_name=' + managerModel.paymentLastName + '&suffixP=' + managerModel.paymentSuffix +
      '&emailP=' + managerModel.paymentEmail + '&countryP=' + managerModel.paymentCountry +
      '&add1=' + managerModel.paymentAddLine1 + '&zipP=' + managerModel.paymentZip +
      '&bank_name=' + managerModel.paymentBankName + '&holder_name=' + managerModel.paymentHolderName +
      '&card_num=' + managerModel.paymentCardNumber + '&contactP=' + managerModel.paymentContactNumber +
      '&cityP=' + managerModel.paymentCity + '&stateP=' + managerModel.paymentState +
      '&add2=' + managerModel.paymentAddLine2 + '&csc=' + managerModel.paymentCsc +
      '&account_no=' + managerModel.paymentAccountNumber + '&branch_code=' + managerModel.paymentBranchCode +
      '&dob=' + managerModel.dob + '&ssn=' + managerModel.ssn + '&routing=' + managerModel.routing +
      '&paymentMode=' + managerModel.paymentMode + '&cardMonth=' + managerModel.cardMonth +
      '&cardYear=' + managerModel.cardYear + '&card_holder_name=' + managerModel.cardHolderName +
      '&internal_notes=' + managerModel.internalNotes + '&user_id=' + managerModel.userId +
      '&rowId=' + managerModel.id + '&mode=update';

    let options = null;

    return this._http.get(url, options);
  }

  getManagersForDropDown() {

    // http://myasg.biz/crm_jss/api_work/get_manager.php?session_id=7

    let url = this._appConfig.baseApiUrl + '/get_manager.php?session_id=7';
    let options = null;

    return this._http.get(url, options);
  }

  getManagers(userId: number) {

    // http://myasg.biz/crm_jss/api_work/manager.php?user_id=162&mode=listing

    let url = this._appConfig.baseApiUrl + '/manager.php?user_id=' + userId + '&mode=listing';
    let options = null;

    return this._http.get(url, options);
  }

  getManager(userId: number, managerId: number) {

    let url = this._appConfig.baseApiUrl + '/manager.php?user_id=' + userId + '&manager_id=' + managerId + '&mode=view';
    let options = null;

    return this._http.get(url, options);
  }

  deleteManager(userId: number, managerId: number) {

    // http://myasg.biz/crm_jss/api_work/manager.php?user_id=162&mode=delete&manager_id=271

    let url = this._appConfig.baseApiUrl + '/manager.php?user_id=' + userId + '&manager_id=' + managerId + '&mode=delete';
    let options = null;

    return this._http.get(url, options);
  }

  changePassword(userId: number, managerId: number, password: string, newPassword: string) {

    // http://myasg.biz/crm_jss/api_work/manager.php?user_id=162&mode=change_password&manager_id=443&password=admin1&changepassword=admin

    let url = this._appConfig.baseApiUrl + '/manager.php?user_id=' + userId + '&manager_id=' + managerId + '&password=' + password + '&changepassword=' + newPassword + '&mode=change_password';
    let options = null;

    return this._http.get(url, options);
  }

}
