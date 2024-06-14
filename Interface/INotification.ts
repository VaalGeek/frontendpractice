import type { IUser } from "./IUser"
export enum Status {
    Read,
    Unread
}

export interface INotification {
    id:string,
    action: string,
    post?: string,
    group?: string,
    message?: string,
    image?: string,
    status: Status,
    time: string,
    user: IUser,
    openMsg:boolean
}