import {Component} from "@angular/core";
import {ControlController} from "../control/control.controller";

/* header elements */

//export * from './header.item'

@Component({
    selector: 'core-header',
    templateUrl: 'views/core/header/header.html'
})

export class HeaderComponent {

    showControlSideBarButton = true

    constructor(private controlController: ControlController) {

    }

    togglePreferences(event) {
        this.controlController.changeVisibilityState()
        event.preventDefault();
    }
}
