


export enum HeaderItemType {
    None = <any>'',
    Message = <any>'Message',
    Task = <any>'Task',
    Notification = <any>'Notification',
    Profile = <any>'Profile'
}

export abstract class HeaderItem {

    type = HeaderItemType.None
}

export class HeaderMessageItem extends HeaderItem {

    constructor() {
        super()
        this.type = HeaderItemType.Message
    }
}

export class HeaderTaskItem extends HeaderItem {

    constructor() {
        super()
        this.type = HeaderItemType.Task
    }

}

export class HeaderNotificationItem extends HeaderItem {

    constructor() {
        super()
        this.type = HeaderItemType.Notification
    }

}

export class HeaderProfileItem extends HeaderItem {

    constructor() {
        super()
        this.type = HeaderItemType.Profile
    }

}