import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./core/base/base.component";
import {FormsModule} from "@angular/forms";
import {RemoveHost} from "./core/helper/remove.host";
import {CommonsModule} from "./shared/commons.module";
import {CoreModule} from "./core/core.module";
import {RouterModule, Route} from "@angular/router";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CoreModule,
        RouterModule,
        HttpModule,
        CommonsModule
    ],
    declarations: [

        // root component
        AppComponent
    ],
    exports: [
        RemoveHost
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}