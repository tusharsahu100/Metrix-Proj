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
var router_1 = require("@angular/router");
var core_2 = require("angular2-logger/core");
var index_1 = require("../../core-module/index");
var index_2 = require("../shared/index");
var index_3 = require("./index");
var environment_1 = require("../environment");
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(_router, _forgotPasswordService, _logger, _utilityService, _toastrService) {
        this._router = _router;
        this._forgotPasswordService = _forgotPasswordService;
        this._logger = _logger;
        this._utilityService = _utilityService;
        this._toastrService = _toastrService;
        this._logger.info("ForgotPasswordComponent : constructor ");
        this.model = new index_3.ForgotPasswordModel();
        this.model.isAuthInitiated = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this._logger.info("ForgotPasswordComponent : ngOnInit ");
    };
    ForgotPasswordComponent.prototype.login = function () {
        this._logger.info("ForgotPasswordComponent : forgotPasswordService ");
        this.model.isAuthInitiated = true;
        if (!this.model.emailAddress) {
            this.model.isAuthInitiated = false;
            this._toastrService.showToastr(index_1.ToastrCode.EmptyEmailAddress, null);
        }
    };
    ForgotPasswordComponent.prototype.processLoginRequest = function (response) {
        this._logger.info("ForgotPasswordComponent : processLoginRequest ");
        if (response) {
            sessionStorage.setItem(index_2.Constants.sessionStorageKeys.isLoggedIn, "true");
            //sessionStorage.setItem(Constants.sessionStorageKeys.apiToken, JSON.stringify(response.apiToken));
            //sessionStorage.setItem(Constants.sessionStorageKeys.sessionId, response.sessionId);
            this._utilityService.redirectToURL(environment_1.Environment.appUrl);
        }
    };
    ForgotPasswordComponent.prototype.resetModel = function () {
        this._logger.info("ForgotPasswordComponent : resetModel ");
        this.model.emailAddress = "";
        this.model.password = "";
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'forgot-password-app',
        templateUrl: 'forgot-password.component.html',
        providers: [index_3.ForgotPasswordService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_3.ForgotPasswordService,
        core_2.Logger,
        index_1.UtilityService,
        index_1.ToastrService])
], ForgotPasswordComponent);
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgot-password.component.js.map