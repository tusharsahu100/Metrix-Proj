import {
    Component,
    ViewChild,
    ViewEncapsulation,
    Output,
    EventEmitter,
    OnInit,
    OnDestroy,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    ElementRef
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Router } from '@angular/router';

import { Logger } from 'angular2-logger/core';

import {
    NotificationService,
    SharedDataService,
    SharedData
} from '../../global-module/index';

import {
    HttpError,
    ErrorCode,
    ToastrCode,
    ErroNotificationType,
    UtilityService,
    ToastrService
} from '../../../core-module/index';

import { Environment } from '../../environment';

@Component({
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'navigation-tabs',
    templateUrl: 'navigation.component.html',
    providers: []
})
export class NavigationComponent implements OnInit, OnDestroy {
    
    subscriptions: Subscription[];
    cartCount : number;
    userName : string;
    userObj : Object;
    selectedNav : string;

    constructor(
        private _router: Router,
        private _logger: Logger,
        private _sharedDataService: SharedDataService,
        private _utilityService: UtilityService,
        private _notificationService: NotificationService,

    ) {
        this.subscriptions = [];
        this.userObj = JSON.parse(sessionStorage.getItem("userObj"));
    }

    ngOnInit() {        
        this._logger.info("NavigationComponent : ngOnInit ");

        this.subscriptions.push(

            this._notificationService.productAddedToCartFromDialogNotification.subscribe(() => {
                this.cartCount = 10; // get from server
            }),

            this._notificationService.productAddedToCartNotification.subscribe(() => {
                this.cartCount = 10; // get from server
            })
        );
    }

    ngOnDestroy() {
        this._logger.info("NavigationComponent : ngOnDestroy ");
        this.subscriptions.forEach((s) => {
            s.unsubscribe();
        });
    }
    
    logout() {
        this._logger.info("NavigationComponent : logout ");
        sessionStorage.isLoggedIn = false;
        this._utilityService.redirectToURL(Environment.appUrl);
    }
}
