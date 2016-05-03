import {Component, Input} from 'angular2/core'
import {NgClass} from 'angular2/common'
import {Subscription} from 'rxjs/Subscription'
import {ControlController} from './control.controller'

@Component({
    selector: 'core-control',
    templateUrl: 'views/core/control/control.html',
    directives: [NgClass]
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
