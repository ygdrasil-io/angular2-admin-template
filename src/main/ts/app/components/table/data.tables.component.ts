import {Component, OnInit} from '@angular/core'
import {ContentHeaderController} from '../../core/index'

@Component({
    selector: 'data-tables',
    templateUrl: 'views/table/data.tables.html',
})

export class DataTablesComponent implements OnInit{

    constructor(private contentHeaderController: ContentHeaderController) {
        contentHeaderController.changeHeader({
            title: "Data Tables",
            subTitle: "advanced tables"
        })
    }


    ngOnInit() {

        $("#example1").dataTable()
        $('#example2').dataTable({
              paging: true,
              lengthChange: false,
              searching: false,
              ordering: true,
              info: true,
              autoWidth: false
            })
    }
}
