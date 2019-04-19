import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AppConfig } from '../../app/app.config';

@Injectable()
export class StateProvider {

  constructor(
    private _http: Http,
    private _appConfig: AppConfig
    ) {
    console.log('Hello StateProvider Provider');
  }

  getStates() {

    // http://myasg.biz/crm_jss/api_work/get_state.php

    let url = this._appConfig.baseApiUrl + '/get_state.php';
    let options = null;

    return this._http.get(url, options);
  }

}
