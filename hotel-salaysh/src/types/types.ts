export type MenuType = {
    id:number;
    slug:string;
    title:string;
    desc?:string;
    img?:string;
    color:string;
    
}[];

export type ProductType = {
    id:number,
    title:string,
    price:number,
    desc?:string,
    img?:string,
    options?:{
        title:string;
        additionalPrice:number }[];
};

export type OrderType = {
    id:number,
    createdAt:number,
    price:number,
    products:CartItemType[],
    status:string,
    userEmail:string
    internalId?:string
};

export type CartItemType = {
    id:number,
    title:string,
    price:number,
    img?:string,
    optionsTitle?:string,
    quantity:number;
};