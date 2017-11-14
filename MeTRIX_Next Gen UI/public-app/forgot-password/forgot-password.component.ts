 import {
     Component,
     OnInit,
 } from  '@angular/core';

import { Router } from '@angular/router';
import { Logger } from 'angular2-logger/core';

import { TranslateService } from 'ng2-translate';

 import {
     HttpError,
     ErrorCode,
     ToastrCode,
     ErroNotificationType,
     UtilityService,
     ToastrService
} from '../../core-module/index';

import { Constants } from '../shared/index';

import {
     ForgotPasswordModel,
     ForgotPasswordService
 } from './index';

import { Environment } from '../environment';

@Component({
    moduleId: module.id,
    selector: 'forgot-password-app',
    templateUrl: 'forgot-password.component.html',
    providers: [ForgotPasswordService]
})
export class ForgotPasswordComponent implements OnInit {
    
    model: ForgotPasswordModel;
    
    constructor(
        private _router: Router,
        private _forgotPasswordService: ForgotPasswordService,
        private _logger: Logger,
        private _utilityService: UtilityService,
        private _toastrService: ToastrService
    ) {
        this._logger.info("ForgotPasswordComponent : constructor ");
        this.model = new ForgotPasswordModel();
        this.model.isAuthInitiated = false;
    }

    ngOnInit() {
        this._logger.info("ForgotPasswordComponent : ngOnInit ");
    }
    
    login() {

        this._logger.info("ForgotPasswordComponent : forgotPasswordService ");
        this.model.isAuthInitiated = true;
        if (!this.model.emailAddress) {
            this.model.isAuthInitiated = false;
            this._toastrService.showToastr(ToastrCode.EmptyEmailAddress, null);
        }
    }

    processLoginRequest(response: any) {
        this._logger.info("ForgotPasswordComponent : processLoginRequest ");
        if (response) {

            sessionStorage.setItem(Constants.sessionStorageKeys.isLoggedIn, "true");
            //sessionStorage.setItem(Constants.sessionStorageKeys.apiToken, JSON.stringify(response.apiToken));
            //sessionStorage.setItem(Constants.sessionStorageKeys.sessionId, response.sessionId);

            this._utilityService.redirectToURL(Environment.appUrl);
        }
    }
    
    resetModel() {
        this._logger.info("ForgotPasswordComponent : resetModel ");
        this.model.emailAddress = "";
        this.model.password = "";
    }
}