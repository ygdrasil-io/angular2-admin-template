import {Component} from '@angular/core'
import {ContentHeaderController} from '../../core/index'

@Component({
    selector: 'dashboard',
    template: `
    dashboard
    `
})

export class DashboardV2Component {

    constructor(private contentHeaderController: ContentHeaderController) {
        contentHeaderController.changeHeader({
            title: "Dashboard",
            subTitle: "v2"
        })
    }

}
