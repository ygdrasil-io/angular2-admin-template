import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./core/base/base.component";
import {FormsModule} from "@angular/forms";
import {RemoveHost} from "./core/helper/remove.host";
import {Header} from "./core/header/header.component";
import {HeaderMessageComponent} from "./core/header/header.message.component";
import {HeaderTaskComponent} from "./core/header/header.task.component";
import {HeaderUserComponent} from "./core/header/header.user.component";
import {HeaderNotificationComponent} from "./core/header/header.notification.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        RemoveHost,

        HeaderMessageComponent,
        HeaderNotificationComponent,
        HeaderUserComponent,
        HeaderTaskComponent,
        Header,


        // root component
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}