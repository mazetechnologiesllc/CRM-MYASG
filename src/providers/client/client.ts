import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../app/app.config';

@Injectable()
export class ClientProvider {

  constructor(
    private _http: Http,
    private _appConfig: AppConfig
  ) {
    console.log('Hello ClientProvider Provider');
  }

  getClients(userId: number) {

    // http://myasg.biz/crm_jss/api_work/client_rishabh.php?user_id=162&&mode=listing  

    let url = this._appConfig.baseApiUrl + '/client_rishabh.php?user_id=' + userId + '&mode=listing';
    let options = null;

    return this._http.get(url, options);
  }

}
