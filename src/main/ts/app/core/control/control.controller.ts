import {Injectable} from '@angular/core'
import {Subject}    from 'rxjs/Subject'

@Injectable()
export class ControlController {

    controlVisibility = new Subject()

    changeVisibilityState() {
        this.controlVisibility.next("")
    }
}
