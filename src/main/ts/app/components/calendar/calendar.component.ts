import {Component} from '@angular/core'
import {ContentHeaderController} from '../../core/index'

@Component({
    selector: 'calendar',
    templateUrl: 'views/calendar/calendar.html',
})

export class CalendarComponent {

    constructor(private contentHeaderController: ContentHeaderController) {
        contentHeaderController.changeHeader({
            title: "Calendar",
            subTitle: "Control panel"
        })
    }

}
