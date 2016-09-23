import {Component} from "@angular/core";
import {Skin} from "../enum";
import {ControlController} from "../index";
import {ContentHeaderController} from "../content/content.header.controller";


@Component({
    selector: 'body',
    templateUrl: 'views/core/base/base.html',
    providers: [ContentHeaderController, ControlController],
    host: {
        '[class.login-page]': 'authenticated == false',
        '[class.hold-transition]': 'authenticated',
        '[class.sidebar-mini]': 'authenticated'
    }
})

export class AppComponent {
    skin = Skin.Green
    authenticated = false

    logged(authenticated: boolean) {
        this.authenticated = authenticated
    }

}
