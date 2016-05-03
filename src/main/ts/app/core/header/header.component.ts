import {Component, Input} from 'angular2/core'
import {ControlController} from '../control/control.controller'

@Component({
    selector: 'core-header',
    templateUrl: 'views/core/header/header.html'
})

export class Header {

    constructor(private controlController: ControlController) {

    }

    togglePreferences(event) {
        this.controlController.changeVisibilityState()
        event.preventDefault();
    }
}
