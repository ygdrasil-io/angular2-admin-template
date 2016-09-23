import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CommonsModule} from "../shared/commons.module";
import {HeaderComponent} from "./header/header.component";
import {HeaderMessageComponent} from "./header/header.message.component";
import {HeaderNotificationComponent} from "./header/header.notification.component";
import {HeaderUserComponent} from "./header/header.user.component";
import {HeaderTaskComponent} from "./header/header.task.component";
import {Menu} from "./menu/menu.component";
import {LoginComponent} from "./login/login.component";
import {Footer} from "./footer/footer.component";
import {RouterModule} from "@angular/router";
import {ContentHeaderComponent} from "./content/content.header.component";
import {Control} from "./control/control.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        CommonsModule
    ],
    declarations: [
        HeaderComponent,
        HeaderMessageComponent,
        HeaderNotificationComponent,
        HeaderUserComponent,
        HeaderTaskComponent,

        ContentHeaderComponent,

        Menu,

        LoginComponent,

        Control,

        Footer


    ],
    exports: [
        HeaderComponent,
        Menu,
        ContentHeaderComponent,
        Control,
        Footer,
        LoginComponent
    ]
})

export class CoreModule {
}