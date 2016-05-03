import {Component, NgZone} from 'angular2/core'
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {RemoveHost} from '../helper/remove.host'
import {Utils} from '../helper/utils'
import {Picto, BackgroundColor} from '../enum'

export class MenuItem {
    title: string = ""
    icon: Picto = Picto.None
    active = false
    href = []
    label = ""
    /**
    * must be a valid path define on routing to expect item to be switch as active
    */
    path = ""
    labelBackground = BackgroundColor.None

    constructor(source, href = ["#"]) {
        this.href = href
        this.init(source)
    }

    init(source) {
        Utils.CopyProperties(source, this)
    }
}

export class SubMenu extends MenuItem {
    items: MenuItem[] = []

    constructor(source, items: MenuItem[]) {
        super(source, null)
        this.items = items
    }

    init(source) {
        super.init(source)
        this.label = ""
    }
}

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: 'core-menu',
    templateUrl: 'views/core/menu/menu.html'
})

export class Menu {
    title: string = "NAVIGATION";
    items: MenuItem[] = [
        new SubMenu({
            title: 'Dashboard',
            icon: Picto.Dashboard
        }, [
            new MenuItem({
                title: 'Dashboard v1',
                icon: Picto.CircleO,
                path: 'dashboard'
            }, ["Dashboard"]),
            new MenuItem({
                title: 'Dashboard v2',
                path: 'dashboard2',
                icon: Picto.CircleO
            }, ["DashboardV2"])
        ]),
        new MenuItem({
            title: 'Messages',
            path: 'inbox',
            icon: Picto.File,
            label: "24",
            labelBackground: BackgroundColor.Fuchsia
        }, ["Inbox"]),
    ];


    constructor(private router: Router, zone:NgZone) {
        router.subscribe(path => {
            zone.run(() => {
                for(var item of this.items) {
                    if (item.path == path) {
                        item.active = true
                    } else {
                        item.active = false
                    }

                    if (item instanceof SubMenu) {
                        let subMenu = <SubMenu>item
                        for(var item of subMenu.items) {
                            if (item.path == path) {
                                item.active = true
                                subMenu.active = true
                            } else {
                                item.active = false
                            }
                        }
                    }
                }
            })
        })
    }
}
