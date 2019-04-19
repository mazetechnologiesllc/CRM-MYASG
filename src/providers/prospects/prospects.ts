import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../app/app.config';

@Injectable()
export class ProspectsProvider {

  constructor(
    private _http: Http,
    private _appConfig: AppConfig
  ) {
    console.log('Hello ProspectsProvider Provider');
  }

  getProspects(userId: number) {

    // http://myasg.biz/crm_jss/api_work/prospects.php?mode=listing&user_id=162

    let url = this._appConfig.baseApiUrl + '/prospects.php?user_id=' + userId + '&mode=listing';
    let options = null;

    return this._http.get(url, options);
  }

}
