import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HeaderMessageComponent} from "./header.message.component";
import {HeaderNotificationComponent} from "./header.notification.component";
import {HeaderUserComponent} from "./header.user.component";
import {HeaderTaskComponent} from "./header.task.component";
import {HeaderComponent} from "./header.component";
import {RemoveHost} from "../helper/remove.host";
import {CommonsModule} from "../../shared/commons.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonsModule
    ],
    declarations: [
        HeaderComponent,
        HeaderMessageComponent,
        HeaderNotificationComponent,
        HeaderUserComponent,
        HeaderTaskComponent
    ],
    exports: [
        HeaderComponent,
        HeaderMessageComponent,
        HeaderNotificationComponent,
        HeaderUserComponent,
        HeaderTaskComponent
    ]
})

export class HeaderModule {
}