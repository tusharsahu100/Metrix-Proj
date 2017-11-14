import {
    NgModule,
    Optional,
    SkipSelf,
    ModuleWithProviders
} from '@angular/core';

import { ProjectConfigureComponent } from "app/dashboard-module/project-configure/project-configure.component";
import { DashboardComponent } from "app/dashboard-module/dashboard/dashboard.component";
import { SharedModule } from "app/shared-module/shared.module";
import { ProjectConfigureService } from 'app/dashboard-module/project-configure/project-configure.service';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        ProjectConfigureComponent,   
        DashboardComponent
    ],
    providers: [
        ProjectConfigureService
    ]
})

export class DashboardModule {}