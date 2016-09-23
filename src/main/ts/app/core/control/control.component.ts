import {Component} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {ControlController} from "./control.controller";

@Component({
    selector: 'core-control',
    templateUrl: 'views/core/control/control.html'
})

export class Control {

    subscription: Subscription
    open = false

    constructor(private controlController: ControlController) {

        controlController.controlVisibility.subscribe(
            value => {
                this.open = !this.open
            }
        )
    }
}
