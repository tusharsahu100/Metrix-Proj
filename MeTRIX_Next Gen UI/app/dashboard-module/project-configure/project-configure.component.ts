
import {
    Component,
    OnInit
} from '@angular/core';

import { Logger } from 'angular2-logger/core';

import { SharedDataService } from '../../global-module/index';

import { Constants } from '../../shared-module/index';

import { ProjectConfigureService } from './project-configure.service';

import {SelectModule} from 'ng2-select';

import {
    HttpError,
    ErrorCode,
    ErroNotificationType,
    UtilityService,
    ToastrMessageType,
    ToastrService,
    ToastrCode
} from '../../../core-module/index';

@Component({
    moduleId: module.id,
    selector:'project-configure',
    templateUrl: 'project-configure.html',
    styles: ['#project-configure-form {margin-top: 2%;} .bottom-margin10{margin-bottom: 10px;}']
})
export class ProjectConfigureComponent implements OnInit {

    public projectConfigData: any;
    public selectProjectData: Object;
    public selectedProject: any;
    public items: any;
    public startDate: Date;
    public endDate: Date;
    public selectedDisplayName: string;
    public projectMethodlogy : any;
    public selectedProjectMethodlogy: string;
    public projectCategory : any;
    public selectedProjectCategory: string;
    public serviceLine : any;
    public selectedServiceLine: string;
    public engagementModel : any;
    public selectedEngagementModel: string;
    public pricingModel : any;
    public selectedPricingModel: string;
    public projectDomain: string;
    
    constructor(
        private _logger: Logger,
        private _sharedDataService: SharedDataService,
        private _toastrService: ToastrService,
        private _projectConfigureService: ProjectConfigureService,
    ) {
        this._logger.info("ProjectConfigureComponent : constructor ");
        
    }

    ngOnInit() {
        this._logger.info("ProjectConfigureComponent : ngOnInit ");
        this._projectConfigureService.fetchData()
        .subscribe(
            (successResponse) => {
                this._logger.info("ProjectConfigureComponent : successResponse ");
                if(successResponse.ok && successResponse.statusText === 'OK') {
                    this.projectConfigData = successResponse.json();
                    console.log('this.projectConfigData ', this.projectConfigData);
                    this.selectProjectData = this.projectConfigData.projects;
                    //this.selectedProject = this.selectProjectData[0];
                    this.projectMethodlogy = this.projectConfigData.methodology;
                    //this.selectedProjectMethodlogy = this.projectMethodlogy[0];
                    this.projectCategory = this.projectConfigData.category;
                    //this.selectedProjectCategory = this.projectCategory[0];
                    this.engagementModel = this.projectConfigData.engagementModel;
                    //this.selectedEngagementModel = this.engagementModel[0];
                    this.pricingModel = this.projectConfigData.pricingModel;
                    //this.selectedPricingModel = this.pricingModel[0];
                    this.serviceLine = this.projectConfigData.serviceLine;
                    //this.selectedServiceLine = this.serviceLine[0];
                } else {
                    throw new HttpError(ErrorCode.AuthFailedInvalidAuthResponse, ErroNotificationType.Dialog);
                }
            },
            (errorResponse) => {
                throw new HttpError(ErrorCode.AuthFailedInvalidAuthResponse, ErroNotificationType.Dialog, errorResponse);
            });
    }  
    
    addProjectData() {
        if(this.selectedProject !== undefined && this.selectedProject.projectId && this.selectedDisplayName && this.selectedProjectCategory && this.selectedProjectMethodlogy && this.startDate){
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
            }).subscribe(
                (successResponse) => {
                    this._logger.info("ProjectConfigureComponent : successResponse ");
                    var response = successResponse.json();
                    if(response.success) {
                        debugger
                    } else {
                        debugger
                        throw new HttpError(ErrorCode.AuthFailedInvalidAuthResponse, ErroNotificationType.Dialog, response);
                    }
                },
                (errorResponse) => {
                    this._logger.error("ProjectConfigureComponent : errorResponse ");
                    throw new HttpError(ErrorCode.AuthFailedInvalidAuthResponse, ErroNotificationType.Dialog, errorResponse);
                });
        } else {
                throw new HttpError(ErrorCode.RequiredField, ErroNotificationType.Dialog, {"error": "Please fill all the required fields and try again.","messageType": "Error"});
        }
    }
    
}

/*this.selectProjectData.forEach((proData:{displayName:string, projectId:number, projectName:string}) => {
this.items.push({
id: proData.projectId,
text: proData.projectName
});*/
                    