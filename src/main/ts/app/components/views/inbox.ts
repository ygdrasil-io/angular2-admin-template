import {Component} from 'angular2/core';
import {ContentHeaderController} from '../../core/index'

@Component({
  selector: 'inbox',
  template: `
      inbox
    `
})

export class Inbox {

    constructor(private contentHeaderController: ContentHeaderController) {
        contentHeaderController.changeHeader({
            title: "Inbox",
            subTitle: "messages"
        })
    }
}
