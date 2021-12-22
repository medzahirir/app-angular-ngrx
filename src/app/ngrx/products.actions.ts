import { Action } from "@ngrx/store";
import { Product } from "src/model/product.model";

export enum ProductsActionsTypes{
    /*GET ALL PRODUCTS*/
    GET_ALL_PRODUCTS="[product] get all products",
    GET_ALL_PRODUCTS_SUCCESS="[product] get all products Success",
    GET_ALL_PRODUCTS_ERROR="[product] get all products Error", 
     /*GET SELECTED PRODUCTS*/
     GET_SELECTED_PRODUCTS="[product] get  SELECTED products",
     GET_SELECTED_PRODUCTS_SUCCESS="[product] get  SELECTED products Success",
     GET_SELECTED_PRODUCTS_ERROR="[product] get  SELECTED products Error", 
     /*GET AVAILABLE*/

}


/** GetAllProductsActions **/
//get All Products
export class GetAllProductsActions implements Action{
    type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS; 
    constructor(public payload:any) {  
    } 
}

//get All Success 
export class GetAllProductsActionsSuccess implements Action{
    type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS; 
    constructor(public payload:any) {  
    } 
}
//get All product error
export class GetAllProductsActionsError implements Action{
    constructor(public payload:any) { 
    }
    type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
}


/** Get Selected ProductsActions **/
//get selected Products
export class GetSelectedProductsActions implements Action{
    type:ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS; 
    constructor(public payload:any) {  
    } 
}

//get selected Success 
export class GetSelectedProductsActionsSuccess implements Action{
    type:ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS; 
    constructor(public payload:any) {  
    } 
}
//get selected product error
export class GetSelectedProductsActionsError implements Action{
    constructor(public payload:any) { 
    }
    type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
}


export type ProductsActions =
   GetAllProductsActions | GetAllProductsActionsSuccess | GetAllProductsActionsError |
   GetSelectedProductsActions | GetSelectedProductsActionsSuccess| GetSelectedProductsActionsError
   ;