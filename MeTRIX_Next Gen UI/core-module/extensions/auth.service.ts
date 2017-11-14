﻿import { Injectable  } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import {
    Http,
    Headers,
    RequestOptionsArgs
} from  '@angular/http';

import {
    UtilityService,
    EnvironmentConfig
} from '../index';

import {
    Constants
} from '../infrastructure/index';

import { ApiTokenModel } from './api-token.model';

@Injectable()
export class AuthService {

    // to be used internally, use externaly via isUserLoggedIn() method
    private isLoggedIn: boolean = false;
    private apiToken: ApiTokenModel;
    private sessionId: string;
    private isRefreshTokenCallInProgress = false;    
    
    constructor(
        private _logger: Logger,
        private _utilityService: UtilityService,
        private _http: Http,
        private _config : EnvironmentConfig
    ) {
        this._logger.info("AuthService : constructor ");
        
        this.apiToken = (JSON.parse(sessionStorage.getItem(Constants.sessionStorageKeys.apiToken)) as ApiTokenModel);
        this.isLoggedIn = sessionStorage.getItem(Constants.sessionStorageKeys.isLoggedIn) == "true";
        this.sessionId = sessionStorage.getItem(Constants.sessionStorageKeys.sessionId);        
    }
    
    isUserLoggedIn(): boolean {
        return this.isLoggedIn;
    }
    
    logOut(url:string): Observable<any> {
        this.isLoggedIn = false;
        this._logger.info("AuthService : LogOut");

        let options : RequestOptionsArgs = { headers: new Headers() };
        options.withCredentials = false;
        this.setAuthHeaders(options);

        return this._http.post(url, null, options);
    }

    setAuthHeaders(options?: RequestOptionsArgs): void {
        
        if (!options.headers) {
            options.headers = new Headers();
        }

        // reset password requires webapi access before login
        if (this.apiToken) {
            options.headers.set(Constants.requestHeader.authorization, `${Constants.requestHeader.bearer} ${this.apiToken.access_token}`);
            options.headers.set(Constants.requestHeader.sessionId, `${this.sessionId}`);
        }

        options.headers.set(Constants.requestHeader.accept, Constants.contentType.json);       
    }

    refreshApiToken(): Observable<any> {

        if (this.isRefreshTokenCallInProgress) {
            return Observable.of(true).delay(5000);
        }

        this._logger.info("AuthService : refreshToken");

        var params = Constants.apiToken.refreshToken + this.apiToken.refresh_token;
        var headers = new Headers();        
        headers.set(Constants.requestHeader.contentType, Constants.contentType.formUrlEncoded);

        this.isRefreshTokenCallInProgress = true;

        return this._http.post(this._config.apiTokenUrl, params, {
                headers: headers
            })
            .map(res => res.json())
            .map(data => {

                this.isRefreshTokenCallInProgress = false;

                var token = new ApiTokenModel();
                token.access_token = data.access_token;
                token.refresh_token = data.refresh_token;
                token[".expires"] = data[".expires"];

                this.apiToken = token;

                sessionStorage.setItem(Constants.sessionStorageKeys.apiToken, JSON.stringify(token));
            })
            .catch(
            (error) => {
                this._utilityService.redirectToURL(this._config.appUrl);
                return Observable.of(false);
            }
            );
    }
}