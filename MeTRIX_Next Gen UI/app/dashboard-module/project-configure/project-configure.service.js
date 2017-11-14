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
var index_1 = require("../../../core-module/index");
var constants_1 = require("../../global-module/infrastructure/constants");
var ProjectConfigureService = (function () {
    function ProjectConfigureService(_http, _logger) {
        this._http = _http;
        this._logger = _logger;
        this._logger.info("LoginService : constructor ");
    }
    ProjectConfigureService.prototype.fetchData = function () {
        this._logger.info("ProjectConfigureService : fetchData");
        return this._http.get("" + constants_1.Constants.webApis.getConfigureNewProjectData);
    };
    ProjectConfigureService.prototype.postData = function (request) {
        this._logger.info("ProjectConfigureService : postData");
        return this._http.post("" + constants_1.Constants.webApis.getConfigureNewProjectData, request);
    };
    return ProjectConfigureService;
}());
ProjectConfigureService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpService,
        core_2.Logger])
], ProjectConfigureService);
exports.ProjectConfigureService = ProjectConfigureService;
//# sourceMappingURL=project-configure.service.js.map