import {Injectable} from 'angular2/core'
import {Subject}    from 'rxjs/Subject'

@Injectable()
export class ControlController {

    controlVisibility = new Subject()

    changeVisibilityState() {
        this.controlVisibility.next("")
    }
}
