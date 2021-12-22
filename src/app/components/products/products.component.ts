import { Component, OnInit } from '@angular/core'; 
import { Observable   } from 'rxjs';
import { Product } from 'src/model/product.model';
 
import {   map } from 'rxjs/operators';
 
import { Store } from '@ngrx/store';
import { GetAllProductsActions, GetSelectedProductsActions } from 'src/app/ngrx/products.actions';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';
 
 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit { 
   
  productsInput$:Observable<ProductsState>|null=null;
  readonly ProductStateEnum = ProductsStateEnum;
  

  constructor(
    private store:Store<any>) {  
    } 
    

  ngOnInit(): void { 
    this.productsInput$=this.store.pipe(
      map((state)=>state.catalogState));
  }
 

  ongetAllProducts(){
    this.store.dispatch(new GetAllProductsActions({}));
    
   } 

  ongetSelectedProducts(){ 
    this.store.dispatch(new GetSelectedProductsActions({}));

  }
 
  ongetAvailableProducts(){
    
  }
 
  onSearch(dataform:any){  
  }

  
  onselect(p:Product){ 
  }

  ondelete(p:Product){ 
  }


  onNewProduct(){  
  }

  onedit(p:Product){ 
  } 

}
