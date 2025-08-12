export type MenuType = {
    id:number;
    slug:string;
    title:string;
    desc?:string;
    img?:string;
    color:string;
    
}[];

export type ProductType = {
    id:string,
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
    id:string,
    title:string,
    price:number,
    img?:string,
    optionsTitle?:string,
    quantity:number;
};

export type CartType = {
    products:CartItemType[],
    totalItems:number,
    totalPrice:number
}
export type ActionType = {
    addToCart:(item:CartItemType)=>void,
    removeFromCart:(item:CartItemType)=>void,
    // increaseQuantity:(id:number)=>void,
    // decreaseQuantity:(id:number)=>void
}