"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("../core-module/index");
var index_2 = require("./global-module/index");
var index_3 = require("./shared-module/index");
var project_configure_component_1 = require("app/dashboard-module/project-configure/project-configure.component");
var dashboard_component_1 = require("app/dashboard-module/dashboard/dashboard.component");
var invoice_component_1 = require("app/order-module/invoice/invoice.component");
var order_component_1 = require("app/order-module/order/order.component");
var appRoutes = [
    {
        path: index_3.Constants.uiRoutes.login,
        redirectTo: index_3.Constants.uiRoutes.dashboard,
        pathMatch: 'full'
    },
    {
        path: index_3.Constants.uiRoutes.empty,
        redirectTo: index_3.Constants.uiRoutes.dashboard,
        pathMatch: 'full'
    },
    {
        path: index_3.Constants.uiRoutes.projectConfigure,
        component: project_configure_component_1.ProjectConfigureComponent,
        canActivate: [index_2.AuthGuardService]
    },
    {
        path: index_3.Constants.uiRoutes.dashboard,
        component: dashboard_component_1.DashboardComponent,
        canActivate: [index_2.AuthGuardService]
    },
    {
        path: index_3.Constants.uiRoutes.order,
        component: order_component_1.OrderComponent,
        canActivate: [index_2.AuthGuardService]
    },
    {
        path: index_3.Constants.uiRoutes.invoice,
        component: invoice_component_1.InvoiceComponent,
        canActivate: [index_2.AuthGuardService]
    },
    {
        path: '**',
        component: index_1.PageNotFoundComponent,
        canActivate: [index_2.AuthGuardService]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map