  
export enum ProductsActionsTypes{
    GET_ALL_PRODUCTS="[Product] get All Products",
    GET_SELECTED_PRODUCTS="[Product] get selected Products",
    GET_AVAILABLE_PRODUCTS="[Product] get available Products",
    NEW_PRODUCTS="[Product] Add New Product" ,
    SEARCH_PRODUCTS="[Product] search Product", 
    SELECT_PRODUCTS="[Product] select Product" ,
    DELETE_PRODUCTS="[Product] delete Product" ,
    EDIT_PRODUCTS="[Product] edit Product" ,
    PRODUCTS_ADDED="[Product] Product added" ,
    PRODUCTS_EDITED="[Product] Product edited" ,
}

export interface ActionEvent{
    type:ProductsActionsTypes;
    payload?:any;
}


export enum DataStateEnum{
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T>{
    dataState?:DataStateEnum  ,
    data?: T ,
    errorState?:string ,
}
    
    