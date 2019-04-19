import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../app/app.config';

@Injectable()
export class WebLeadProvider {

  constructor(
    private _http: Http,
    private _appConfig: AppConfig
    ) {
    console.log('Hello WebLeadProvider Provider');
  }

  getWebLeads(userId: number) {

    // http://myasg.biz/crm_jss/api_work/webuser.php?user_id=19&mode=listing

    let url = this._appConfig.baseApiUrl + '/webuser.php?user_id=' + userId + '&mode=listing';
    let options = null;

    return this._http.get(url, options);
  }

}
