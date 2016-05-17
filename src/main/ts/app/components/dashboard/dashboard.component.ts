import {Component} from '@angular/core'
import {ContentHeaderController} from '../../core/index'

@Component({
    selector: 'dashboard',
    template: `
    dashboard
    `
})

export class Dashboard {

    constructor(private contentHeaderController: ContentHeaderController) {
        contentHeaderController.changeHeader({
            title: "Dashboard",
            subTitle: "v1"
        })
    }

}
