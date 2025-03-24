import { number, string } from "zod";

export interface IUser{
    id:number;
    name:string;
    email:string;
    password:string;
    created_at:Date;
    country_id?:number;
    is_active:boolean;
}

export interface ICreateUserDTO{
    name:string;
    email:string;
    password:string;
    country_id?:number;
    created_at:Date;
}

export interface IUpdateUserDTO{
    name?:string;
    email?:string;
    password?:string;
    country_id?:number;
    is_active?:boolean;
}

export interface ICountry{
    id:number;
    name:string;
}

export interface ICreateCountryDTO{
    name:string;
    continent:string;
}

export interface IUpdateCountryDTO{
    name?:string;
}
export interface IVerify{
    user_id:number;
    otp:string;
}
export interface ILogin{
    email:string;
    password:string;
}
export type Payload = {
    id:number;
}
export interface IMercant  {
    name:string,
    country_id:number,
    created_at:string,
    admin_id:number
}
export interface IProduct{
    name:string ,
    description:string ,
    merchant_id:number ,
    price:number 
}
export interface ITag{
    name:string
}
export interface IProductTag{
    tag_id:number,
    product_id:number
}
export interface IOrder{
    user_id:number ,
    status:string ,
    total:number 
}
export interface IOrderItem{
    order_id:number,
    product_id:number,
    quantity:number,
    price:number
}
export interface IMerchantActivity{
    merchant_id:number,
    activity:string
}