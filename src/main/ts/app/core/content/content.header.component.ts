import {Component, Input} from 'angular2/core'
import {ContentHeaderData, ContentHeaderController} from './content.header.controller'

@Component({
    selector: 'core-content-header',
    templateUrl: 'views/core/content/content.header.html'
})

export class ContentHeaderComponent {

    data: ContentHeaderData = {
        title: "",
        subTitle: ""
    }

    constructor(private contentHeaderController: ContentHeaderController) {
        contentHeaderController.headerChange.subscribe(
            data => this.data = data
        )
    }
}
