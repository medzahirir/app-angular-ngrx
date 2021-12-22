 
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllProductsActions } from 'src/app/ngrx/products.actions';
 
 

@Component({
  selector:    'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls:  ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  // @Output() productEventEmitter:EventEmitter<ActionEvent>=new EventEmitter();

  constructor(private store:Store<any>) { 
   }

  ngOnInit(): void {
  }

  ongetAllProducts(){  
    this.store.dispatch(new GetAllProductsActions({}))
  }
  
  ongetSelectedProducts(){ 
  }
  ongetAvailableProducts(){
    
  }
  onNewProduct(){
    
  }
  onSearch(keyword:string){ 
    
  }

}
