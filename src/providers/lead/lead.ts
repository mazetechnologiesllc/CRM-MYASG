import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../app/app.config';
import { AddLeadModel } from '../../_models/parameter_model/add.lead.model';

@Injectable()
export class LeadProvider {

  constructor(
    private _http: Http,
    private _appConfig: AppConfig
  ) {
    console.log('Hello LeadProvider Provider');
  }

  getLeadListByManager(managerId: number, companyId: number) {

    let url = this._appConfig.baseApiUrl + '/manager_leads_list.php?manager_id=' + managerId + '&company_id=' + companyId;
    let options = null;

    return this._http.get(url, options);

  }

  getLeadListByAffiliate(affiliateId: number, companyId: number) {

    let url = this._appConfig.baseApiUrl + '/affiliates_leads_list.php?affiliate_id=' + affiliateId + '&company_id=' + companyId;
    let options = null;

    return this._http.get(url, options);

  }

  createLeadByManager(model: AddLeadModel) {
    let url = this._appConfig.baseApiUrl + '/lead.php?' + this.objectToParameter(model);
    let options = null;
    return this._http.get(url, options);
  }

  objectToParameter(objectVariable: any) {
    return Object.keys(objectVariable).map(function (key) {
      return encodeURIComponent(key) + '=' +
        encodeURIComponent(objectVariable[key]);
    }).join('&');
  }
}