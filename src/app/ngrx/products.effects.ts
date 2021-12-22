import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ProductService } from "src/service/Products.service";
import { ProductsActionsTypes } from "src/state/product.state";
import {  GetAllProductsActionsError, GetAllProductsActionsSuccess, GetSelectedProductsActionsError, GetSelectedProductsActionsSuccess } from "./products.actions";

 @Injectable()

 export class ProductsEffects { 
     constructor(
         private productServite:ProductService ,
         private effectsAction:Actions ) {  
     }

     /*Get All Product*/
     getAllProductsEffects:Observable<Action>=createEffect(
         ()=>this.effectsAction.pipe(
             ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
             mergeMap((actions)=>{
                 return this.productServite.getProducts()
                 .pipe(
                     map((products)=> new GetAllProductsActionsSuccess(products)),
                     catchError((error)=>of(new GetAllProductsActionsError(error)))
                 )
             })
         )
     );

     /*Get Selected Products*/
     getSelectedProductsEffects:Observable<Action>=createEffect(
        ()=>this.effectsAction.pipe(
            ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
            mergeMap((actions)=>{
                return this.productServite.getAllProducts()
                .pipe(
                    map((products)=> new GetSelectedProductsActionsSuccess(products)),
                    catchError((error)=>of(new GetSelectedProductsActionsError(error.message)))
                )
            })
        )
    );
 }