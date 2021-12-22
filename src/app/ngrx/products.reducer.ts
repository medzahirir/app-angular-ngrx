 
import { Action } from "@ngrx/store";
import { Product } from "src/model/product.model"; 
import {   ProductsActions, ProductsActionsTypes } from "./products.actions";


//type state 
export enum ProductsStateEnum 
{
    LOADING="loading",
    LOADED="loaded",
    ERROR="error",
    INITAIL="inital"
} 

//Product state 
export interface ProductsState{
    products:Product[],
    errorMessage:string,
    dataState:ProductsStateEnum,
    
}

//initState intial value of prodct state
const initState:ProductsState={
    products:[],
    errorMessage:"",
    dataState:ProductsStateEnum.INITAIL
}



//reducer fucton take  current state and action return newstate and objects  
export function productsReducer(state:ProductsState=initState,action:Action):ProductsState{
  switch (action.type) {

    /*get All product */
      case ProductsActionsTypes.GET_ALL_PRODUCTS:
          return {...state,dataState:ProductsStateEnum.LOADING};
      case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
          return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsActions>action).payload};  
      case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
          return {...state ,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}    
     
          /*get selected product */
      case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
          return {...state,dataState:ProductsStateEnum.LOADING};
      case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
          return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsActions>action).payload};  
      case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
          return {...state ,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}    
     
     
     
          default:return {...state};
           
  }
}