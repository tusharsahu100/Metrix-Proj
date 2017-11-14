"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var core_2 = require("angular2-logger/core");
var index_1 = require("../../../core-module/index");
var SharedDataService = (function () {
    function SharedDataService(_logger, _authService, _https, _utilityService) {
        this._logger = _logger;
        this._authService = _authService;
        this._https = _https;
        this._utilityService = _utilityService;
        this._logger.info("SharedDataService : constructor ");
    }
    SharedDataService.prototype.populateCommonData = function () {
        this._logger.info("SharedDataService : populateCommonData ");
        if (!this._authService.isUserLoggedIn())
            return;
        /*var promise = this._https.get(`${Constants.webApis.getSharedData}`)
            .toPromise();

        promise.then(
            successResponse => {
                this._logger.info("SharedDataService : populateCommonData : successResponse " + successResponse);
                this._sharedData = successResponse.json();
                this._sharedData.sessionId = sessionStorage.getItem(Constants.sessionStorageKeys.sessionId);
            })
            .catch(
            errorResponse => {
                this._logger.info("SharedDataService : populateCommonData : errorResponse " + errorResponse);
                var url: string = Environment.appUrl + "?" + Constants.queryString.SessionExpired;
                this._utilityService.redirectToURL(url);
            });

        return promise;*/
    };
    return SharedDataService;
}());
SharedDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.Logger,
        index_1.AuthService,
        index_1.HttpService,
        index_1.UtilityService])
], SharedDataService);
exports.SharedDataService = SharedDataService;
//# sourceMappingURL=shared-data.service.js.map