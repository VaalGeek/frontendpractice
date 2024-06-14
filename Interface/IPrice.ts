interface PriceCategory {
    monthly:number
    yearly:number
}

export interface IPrice {

    id:number,
    name:string,
    price:PriceCategory,
    storage:string,
    users:string,
    speed:string,
    pColor:string
}

