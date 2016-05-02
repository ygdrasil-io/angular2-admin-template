import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {NgClass} from 'angular2/common'

/* helpers */
import {Skin} from '../enum'
import {RemoveHost} from '../helper/remove.host'

/* components */
import {Menu} from '../menu/menu.component'
import {Footer} from '../footer/footer.component'
import {Header} from '../header/header.component'
import {Control} from '../control/control.component'
import {ContentHeaderComponent} from '../content/content.header.component'

/* views */
import {Dashboard} from '../../components/dashboard/dashboard.component'
import {Inbox} from '../../components/views/inbox'

/* controllers */
import {ControlController} from '../index'
import {ContentHeaderController} from '../content/content.header.controller'

@RouteConfig([
    {
        path: '/dashboard',
        as: 'Dashboard',
        component: Dashboard,
        useAsDefault: true
    },
    {
        path: '/dashboard2',
        as: 'DashboardV2',
        component: Inbox
    },
    {
        path: '/inbox',
        as: 'Inbox',
        component: Inbox
    }
])

@Component({
    directives: [Menu, Footer, Header, Control, ContentHeaderComponent, ROUTER_DIRECTIVES, NgClass, RemoveHost],
    selector: 'core-app',
    templateUrl: 'app/core/base/base.html',
    providers: [ContentHeaderController, ControlController]
})

export class AppComponent {
    skin = Skin.Green

}
