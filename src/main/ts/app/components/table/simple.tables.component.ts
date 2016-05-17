import {Component} from '@angular/core'
import {ContentHeaderController} from '../../core/index'

@Component({
    selector: 'data-tables',
    templateUrl: 'views/table/simple.tables.html',
})

export class SimpleTablesComponent {

    constructor(private contentHeaderController: ContentHeaderController) {
        contentHeaderController.changeHeader({
            title: "Simple Tables",
            subTitle: "preview of simple tables"
        })
    }

}
