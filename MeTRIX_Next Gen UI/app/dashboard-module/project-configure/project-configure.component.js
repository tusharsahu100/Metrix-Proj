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
var core_2 = require("angular2-logger/core");
var index_1 = require("../../global-module/index");
var project_configure_service_1 = require("./project-configure.service");
var index_2 = require("../../../core-module/index");
var ProjectConfigureComponent = (function () {
    function ProjectConfigureComponent(_logger, _sharedDataService, _toastrService, _projectConfigureService) {
        this._logger = _logger;
        this._sharedDataService = _sharedDataService;
        this._toastrService = _toastrService;
        this._projectConfigureService = _projectConfigureService;
        this._logger.info("ProjectConfigureComponent : constructor ");
    }
    ProjectConfigureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._logger.info("ProjectConfigureComponent : ngOnInit ");
        this._projectConfigureService.fetchData()
            .subscribe(function (successResponse) {
            _this._logger.info("ProjectConfigureComponent : successResponse ");
            if (successResponse.ok && successResponse.statusText === 'OK') {
                _this.projectConfigData = successResponse.json();
                console.log('this.projectConfigData ', _this.projectConfigData);
                _this.selectProjectData = _this.projectConfigData.projects;
                //this.selectedProject = this.selectProjectData[0];
                _this.projectMethodlogy = _this.projectConfigData.methodology;
                //this.selectedProjectMethodlogy = this.projectMethodlogy[0];
                _this.projectCategory = _this.projectConfigData.category;
                //this.selectedProjectCategory = this.projectCategory[0];
                _this.engagementModel = _this.projectConfigData.engagementModel;
                //this.selectedEngagementModel = this.engagementModel[0];
                _this.pricingModel = _this.projectConfigData.pricingModel;
                //this.selectedPricingModel = this.pricingModel[0];
                _this.serviceLine = _this.projectConfigData.serviceLine;
                //this.selectedServiceLine = this.serviceLine[0];
            }
            else {
                throw new index_2.HttpError(index_2.ErrorCode.AuthFailedInvalidAuthResponse, index_2.ErroNotificationType.Dialog);
            }
        }, function (errorResponse) {
            throw new index_2.HttpError(index_2.ErrorCode.AuthFailedInvalidAuthResponse, index_2.ErroNotificationType.Dialog, errorResponse);
        });
    };
    ProjectConfigureComponent.prototype.addProjectData = function () {
        var _this = this;
        if (this.selectedProject !== undefined && this.selectedProject.projectId && this.selectedDisplayName && this.selectedProjectCategory && this.selectedProjectMethodlogy && this.startDate) {
            this._projectConfigureService.postData({
                "proj_id": this.selectedProject.projectId,
                "start_date": this.startDate,
                "end_date": this.endDate ? this.endDate : '',
                "proj_category": this.selectedProjectCategory,
                "proj_methodology": this.selectedProjectMethodlogy,
                "proj_service_line": this.selectedServiceLine ? this.selectedServiceLine : '',
                "proj_engagement_model": this.selectedEngagementModel ? this.selectedEngagementModel : '',
                "proj_pricing_model": this.selectedPricingModel ? this.selectedPricingModel : '',
                "proj_domain": this.projectDomain ? this.projectDomain : ''
            }).subscribe(function (successResponse) {
                _this._logger.info("ProjectConfigureComponent : successResponse ");
                var response = successResponse.json();
                if (response.success) {
                    debugger;
                }
                else {
                    debugger;
                    throw new index_2.HttpError(index_2.ErrorCode.AuthFailedInvalidAuthResponse, index_2.ErroNotificationType.Dialog, response);
                }
            }, function (errorResponse) {
                _this._logger.error("ProjectConfigureComponent : errorResponse ");
                throw new index_2.HttpError(index_2.ErrorCode.AuthFailedInvalidAuthResponse, index_2.ErroNotificationType.Dialog, errorResponse);
            });
        }
        else {
            throw new index_2.HttpError(index_2.ErrorCode.RequiredField, index_2.ErroNotificationType.Dialog, { "error": "Please fill all the required fields and try again.", "messageType": "Error" });
        }
    };
    return ProjectConfigureComponent;
}());
ProjectConfigureComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'project-configure',
        templateUrl: 'project-configure.html',
        styles: ['#project-configure-form {margin-top: 2%;} .bottom-margin10{margin-bottom: 10px;}']
    }),
    __metadata("design:paramtypes", [core_2.Logger,
        index_1.SharedDataService,
        index_2.ToastrService,
        project_configure_service_1.ProjectConfigureService])
], ProjectConfigureComponent);
exports.ProjectConfigureComponent = ProjectConfigureComponent;
/*this.selectProjectData.forEach((proData:{displayName:string, projectId:number, projectName:string}) => {
this.items.push({
id: proData.projectId,
text: proData.projectName
});*/
//# sourceMappingURL=project-configure.component.js.map