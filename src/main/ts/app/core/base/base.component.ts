import {Component} from '@angular/core'
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'
import {NgClass} from '@angular/common'

/* helpers */
import {Skin} from '../enum'
import {RemoveHost} from '../helper/remove.host'

/* components */
import {Menu} from '../menu/menu.component'
import {Footer} from '../footer/footer.component'
import {Header} from '../header/header.component'
import {Control} from '../control/control.component'
import {ContentHeaderComponent} from '../content/content.header.component'
import {LoginComponent} from '../login/login.component'

/* views */
import {Dashboard} from '../../components/dashboard/dashboard.component'
import {Inbox} from '../../components/views/inbox'

/** tables **/
import {DataTablesComponent} from '../../components/table/data.tables.component'
import {SimpleTablesComponent} from '../../components/table/simple.tables.component'

/* controllers */
import {ControlController} from '../index'
import {ContentHeaderController} from '../content/content.header.controller'

@RouteConfig([
{
    path: 'dashboard',
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
},
 {
     path: '/data-tables',
     as: 'DataTables',
     component: DataTablesComponent
 },
  {
      path: '/simple-tables',
      as: 'SimpleTables',
      component: SimpleTablesComponent
  }
])

@Component({
    directives: [Menu, Footer, Header, Control, ContentHeaderComponent, ROUTER_DIRECTIVES, NgClass, RemoveHost, LoginComponent],
    selector: 'body',
    templateUrl: 'views/core/base/base.html',
    providers: [ContentHeaderController, ControlController],
    host:     {
        '[class.login-page]':'authenticated == false',
        '[class.hold-transition]':'authenticated',
        '[class.sidebar-mini]':'authenticated'
    }
})

export class AppComponent {
    skin = Skin.Green
    authenticated = false

    logged(authenticated: boolean) {
        this.authenticated = authenticated
    }

}
