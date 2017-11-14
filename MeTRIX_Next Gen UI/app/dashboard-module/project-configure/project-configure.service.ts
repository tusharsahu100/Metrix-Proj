import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Logger } from 'angular2-logger/core';

import { HttpService } from '../../../core-module/index';

import { Constants } from '../../global-module/infrastructure/constants';

@Injectable()
export class ProjectConfigureService {
    
    constructor(
        private _http: HttpService,
        private _logger: Logger
    ) {
        this._logger.info("LoginService : constructor ");
    }

    fetchData(): Observable<any> {
        this._logger.info("ProjectConfigureService : fetchData");
        return this._http.get(`${Constants.webApis.getConfigureNewProjectData}`);
    }    
    
    postData(request: any): Observable<any> {
        this._logger.info("ProjectConfigureService : postData");
        return this._http.post(`${Constants.webApis.getConfigureNewProjectData}`, request);
    } 

}