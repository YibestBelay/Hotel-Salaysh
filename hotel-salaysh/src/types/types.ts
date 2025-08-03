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
    desc:string,
    img?:string,
    options?:{
        title:string;
        additionalPrice:number }[];
};