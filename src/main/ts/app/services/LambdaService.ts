import {Injectable} from 'angular2/core'
import {Http, Response} from 'angular2/http'
import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs/Observable'

export class LambdaData {
    userId: number
    id: number
    title: string
    body: string

}

@Injectable()
export class LambdaService {

    constructor (private http: Http) {}

    private dataUrl = 'http://jsonplaceholder.typicode.com/posts/1'
    private xmlDataUrl = 'https://supportforums.cisco.com/sites/default/files/legacy/9/0/8/66809-Text_example.xml'

    /*getData (): Observable<LambdaData> {
        return this.http.get(this.dataUrl)
        .map(this.extractData)
        .catch(this.handleError)
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status)
        }
        let body = res.json()
        return body.data || { }
    }

    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error'
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg)
    }*/
}


// Changes XML to JSON
function xmlToJson(xml) {

	// Create the return object
	var obj = {}

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {}
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j)
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i)
			var nodeName = item.nodeName
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item)
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName]
					obj[nodeName] = []
					obj[nodeName].push(old)
				}
				obj[nodeName].push(xmlToJson(item))
			}
		}
	}
	return obj
}
