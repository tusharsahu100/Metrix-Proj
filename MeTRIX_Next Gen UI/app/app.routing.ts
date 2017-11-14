import { ModuleWithProviders } from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import { PageNotFoundComponent } from '../core-module/index';

import { AuthGuardService } from './global-module/index';

import { Constants } from './shared-module/index';

import { ProjectConfigureComponent } from "app/dashboard-module/project-configure/project-configure.component";
import { DashboardComponent } from "app/dashboard-module/dashboard/dashboard.component";
import { InvoiceComponent } from "app/order-module/invoice/invoice.component";
import { OrderComponent } from "app/order-module/order/order.component";

const appRoutes: Routes = [
    {
        path: Constants.uiRoutes.login,
        redirectTo: Constants.uiRoutes.dashboard,
        pathMatch: 'full'
    },
    {
        path: Constants.uiRoutes.empty,
        redirectTo: Constants.uiRoutes.dashboard,
        pathMatch: 'full'
    },
    {
        path: Constants.uiRoutes.projectConfigure,
        component: ProjectConfigureComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: Constants.uiRoutes.dashboard,
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: Constants.uiRoutes.order,
        component: OrderComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: Constants.uiRoutes.invoice,
        component: InvoiceComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        canActivate: [AuthGuardService]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);