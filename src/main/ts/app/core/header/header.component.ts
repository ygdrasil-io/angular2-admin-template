import{Component, Input}from 'angular2/core'
import{ControlController}from '../control/control.controller'
import{HeaderItem}from './header.item'
import{HeaderMessageComponent} from './header.message.component'
import {RemoveHost} from '../helper/remove.host'
//export * from './header.item'

@Component({
    selector: 'core-header',
    templateUrl: 'views/core/header/header.html',
    directives: [HeaderMessageComponent, RemoveHost]
})

export class Header {

    showControlSideBarButton = true

    constructor(private controlController: ControlController) {

    }

    togglePreferences(event) {
        this.controlController.changeVisibilityState()
        event.preventDefault();
    }
}
