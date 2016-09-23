import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DashboardV2Component} from "./components/dashboard/dashboard.v2.component";
import {DataTablesComponent} from "./components/table/data.tables.component";
import {SimpleTablesComponent} from "./components/table/simple.tables.component";
import {CalendarComponent} from "./components/calendar/calendar.component";

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '/dashboard2',
        component: DashboardV2Component
    },
    {
        path: '/data-tables',
        component: DataTablesComponent
    },
    {
        path: '/simple-tables',
        component: SimpleTablesComponent
    },
    {
        path: '/calendar',
        component: CalendarComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);