import{Component, Input}from 'angular2/core'
import{ControlController}from '../control/control.controller'
import {RemoveHost} from '../helper/remove.host'

/* header elements */
import{HeaderItem}from './header.item'
import{HeaderMessageComponent} from './header.message.component'
import{HeaderTaskComponent} from './header.task.component'
import{HeaderNotificationComponent} from './header.notification.component'
import{HeaderUserComponent} from './header.user.component'

//export * from './header.item'

@Component({
    selector: 'core-header',
    templateUrl: 'views/core/header/header.html',
    directives: [HeaderUserComponent, HeaderNotificationComponent, HeaderTaskComponent, HeaderMessageComponent, RemoveHost]
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
