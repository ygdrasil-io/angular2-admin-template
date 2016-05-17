import {Component} from '@angular/core'
import {ContentHeaderController} from '../../core/index'

@Component({
    selector: 'data-tables',
    templateUrl: 'views/table/data.tables.html',
})

export class DataTablesComponent {

    constructor(private contentHeaderController: ContentHeaderController) {
        contentHeaderController.changeHeader({
            title: "Data Tables",
            subTitle: "advanced tables"
        })
    }

}
