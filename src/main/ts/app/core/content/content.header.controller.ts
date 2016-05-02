import {Injectable} from 'angular2/core'
import {Subject}    from 'rxjs/Subject'

export interface ContentHeaderData {
    title: string
    subTitle: string
}

@Injectable()
export class ContentHeaderController {

    headerChange = new Subject<ContentHeaderData>()

    changeHeader(data:ContentHeaderData) {
        this.headerChange.next(data)
    }
}
