import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../app/app.config';

import { CreateAffiliateModel } from '../../_models';

@Injectable()
export class AffiliateProvider {

  constructor(
    private _http: Http,
    private _appConfig: AppConfig
  ) {
    console.log('Hello AffiliateProvider Provider');
  }

  createAffiliate(affiliateModel: CreateAffiliateModel) {

    let url = this._appConfig.baseApiUrl + '/affiliate.php?managerid=' + affiliateModel.managerId +
      '&selectType=' + affiliateModel.selectType + '&firstname=' + affiliateModel.firstName +
      '&lastname=' + affiliateModel.lastName + '&middlename=' + affiliateModel.middleName +
      '&suffix=' + affiliateModel.suffix + '&contact=' + affiliateModel.contactNumber +
      '&gender=' + affiliateModel.gender + '&email=' + affiliateModel.email +
      '&alt=' + affiliateModel.alternateNumber + '&country=' + affiliateModel.country +
      '&city=' + affiliateModel.city + '&address=' + affiliateModel.address +
      '&security_amt=' + affiliateModel.securityAmount + '&duration=' + affiliateModel.duration +
      '&state=' + affiliateModel.state + '&zip=' + affiliateModel.zip + '&fax=' + affiliateModel.fax +
      '&renewal_amount=' + affiliateModel.renewalAmount + '&start_date=' + affiliateModel.startDate +
      '&f_name=' + affiliateModel.paymentFirstName + '&m_name=' + affiliateModel.paymentMiddleName +
      '&l_name=' + affiliateModel.paymentLastName + '&suffixP=' + affiliateModel.paymentSuffix +
      '&emailP=' + affiliateModel.paymentEmail + '&countryP=' + affiliateModel.paymentCountry +
      '&add1=' + affiliateModel.paymentAddLine1 + '&zipP=' + affiliateModel.paymentZip +
      '&bank_name=' + affiliateModel.paymentBankName + '&holder_name=' + affiliateModel.paymentHolderName +
      '&card_num=' + affiliateModel.paymentCardNumber + '&contactP=' + affiliateModel.paymentContactNumber +
      '&cityP=' + affiliateModel.paymentCity + '&stateP=' + affiliateModel.paymentState +
      '&add2=' + affiliateModel.paymentAddLine2 + '&csc=' + affiliateModel.paymentCsc +
      '&account_no=' + affiliateModel.paymentAccountNumber + '&branch_code=' + affiliateModel.paymentBranchCode +
      '&dob=' + affiliateModel.dob + '&ssn=' + affiliateModel.ssn + '&routing=' + affiliateModel.routing +
      '&paymentMode=' + affiliateModel.paymentMode + '&cardMonth=' + affiliateModel.cardMonth +
      '&cardYear=' + affiliateModel.cardYear + '&card_holder_name=' + affiliateModel.cardHolderName +
      '&internal_notes=' + affiliateModel.internalNotes + '&user_id=' + affiliateModel.userId +
      '&mode=create';

    let options = null;

    return this._http.get(url, options);
  }

  updateAffiliate(affiliateModel: CreateAffiliateModel) {

    let url = this._appConfig.baseApiUrl + '/affiliate.php?managerid=' + affiliateModel.managerId +
      '&selectType=' + affiliateModel.selectType + '&firstname=' + affiliateModel.firstName +
      '&lastname=' + affiliateModel.lastName + '&middlename=' + affiliateModel.middleName +
      '&suffix=' + affiliateModel.suffix + '&contact=' + affiliateModel.contactNumber +
      '&gender=' + affiliateModel.gender + '&email=' + affiliateModel.email +
      '&alt=' + affiliateModel.alternateNumber + '&country=' + affiliateModel.country +
      '&city=' + affiliateModel.city + '&address=' + affiliateModel.address +
      '&security_amt=' + affiliateModel.securityAmount + '&duration=' + affiliateModel.duration +
      '&state=' + affiliateModel.state + '&zip=' + affiliateModel.zip + '&fax=' + affiliateModel.fax +
      '&renewal_amount=' + affiliateModel.renewalAmount + '&start_date=' + affiliateModel.startDate +
      '&f_name=' + affiliateModel.paymentFirstName + '&m_name=' + affiliateModel.paymentMiddleName +
      '&l_name=' + affiliateModel.paymentLastName + '&suffixP=' + affiliateModel.paymentSuffix +
      '&emailP=' + affiliateModel.paymentEmail + '&countryP=' + affiliateModel.paymentCountry +
      '&add1=' + affiliateModel.paymentAddLine1 + '&zipP=' + affiliateModel.paymentZip +
      '&bank_name=' + affiliateModel.paymentBankName + '&holder_name=' + affiliateModel.paymentHolderName +
      '&card_num=' + affiliateModel.paymentCardNumber + '&contactP=' + affiliateModel.paymentContactNumber +
      '&cityP=' + affiliateModel.paymentCity + '&stateP=' + affiliateModel.paymentState +
      '&add2=' + affiliateModel.paymentAddLine2 + '&csc=' + affiliateModel.paymentCsc +
      '&account_no=' + affiliateModel.paymentAccountNumber + '&branch_code=' + affiliateModel.paymentBranchCode +
      '&dob=' + affiliateModel.dob + '&ssn=' + affiliateModel.ssn + '&routing=' + affiliateModel.routing +
      '&paymentMode=' + affiliateModel.paymentMode + '&cardMonth=' + affiliateModel.cardMonth +
      '&cardYear=' + affiliateModel.cardYear + '&card_holder_name=' + affiliateModel.cardHolderName +
      '&internal_notes=' + affiliateModel.internalNotes + '&user_id=' + affiliateModel.userId +
      '&rowId=' + affiliateModel.id + '&mode=update';

    let options = null;

    return this._http.get(url, options);

  }

  getAffiliates(userId: number) {

    // http://myasg.biz/crm_jss/api_work/affiliate.php?user_id=7&mode=listing

    let url = this._appConfig.baseApiUrl + '/affiliate.php?user_id=' + userId + '&mode=listing';
    let options = null;

    return this._http.get(url, options);
  }

  getAffiliate(userId: number, affiliateId: number) {

    // http://myasg.biz/crm_jss/api_work/affiliate.php?user_id=162&affiliate_id=445&mode=view

    let url = this._appConfig.baseApiUrl + '/affiliate.php?user_id=' + userId + '&affiliate_id=' + affiliateId + '&mode=view';
    let options = null;

    return this._http.get(url, options);
  }

  deleteAffiliate(userId: number, affiliateId: number) {

    // http://myasg.biz/crm_jss/api_work/affiliate.php?user_id=162&mode=delete&affiliate_id=415

    let url = this._appConfig.baseApiUrl + '/affiliate.php?user_id=' + userId + '&affiliate_id=' + affiliateId + '&mode=delete';
    let options = null;

    return this._http.get(url, options);
  }

  changePassword(userId: number, affiliateId: number, password: string, newPassword: string) {

    // http://myasg.biz/crm_jss/api_work/affiliate.php?user_id=162&mode=change_password&affilaite_id=455&password=admin1&changepassword=admin

    let url = this._appConfig.baseApiUrl + '/manager.php?user_id=' + userId + '&affilaite_id=' + affiliateId + '&password=' + password + '&changepassword=' + newPassword + '&mode=change_password';
    let options = null;

    return this._http.get(url, options);
  }

}