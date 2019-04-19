import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AppConfig } from '../../app/app.config';

@Injectable()
export class ServiceProvider {

  constructor(
    private _http: Http,
    private _appConfig: AppConfig
  ) {
    console.log('Hello ServiceProvider Provider');
  }

  getServicesForDropDown() {

    // http://myasg.biz/crm_jss/api_work/get_service.php?session_id=19

    let url = this._appConfig.baseApiUrl + '/get_service.php?session_id=19';
    let options = null;

    return this._http.get(url, options);
  }

  getServices(){
   // http://myasg.biz/crm_jss/api_work/get_service_forWeb.php
    let url = this._appConfig.baseApiUrl + '/get_service_forWeb.php';
    let options = null;

    return this._http.get(url, options);
  }

}
