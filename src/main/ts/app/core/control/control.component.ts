import {Component, Input} from '@angular/core'
import {NgClass} from '@angular/common'
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
