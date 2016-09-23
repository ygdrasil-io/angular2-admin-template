import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./core/base/base.component";
import {FormsModule} from "@angular/forms";
import {RemoveHost} from "./core/helper/remove.host";
import {HeaderModule} from "./core/header/header.module";
import {CommonsModule} from "./shared/commons.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HeaderModule,
        CommonsModule
    ],
    declarations: [

        // root component
        AppComponent
    ],
    exports: [
        RemoveHost
    ]
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}