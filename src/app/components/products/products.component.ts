import { Component, OnInit } from '@angular/core'; 
import { Observable, of  } from 'rxjs';
import { Product } from 'src/model/product.model';
import { ProductService } from 'src/service/Products.service';
 
import { catchError, map, startWith } from 'rxjs/operators';
import { ActionEvent, AppDataState, DataStateEnum, ProductsActionsTypes } from 'src/state/product.state';
import { Router } from '@angular/router';
import { EventDriverService } from 'src/app/service/event-driver.service';
import { ThrowStmt } from '@angular/compiler';
 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   
  //v1 
  //products:Product[]|null=null;
  //V2
  //products$:Observable<Product[]>|null=null;
  //V3
  products$:Observable<AppDataState<Product[]>>|null=null;
  readonly DataStateEnum = DataStateEnum; 
  constructor(
    private productsService:ProductService ,
    private eventDriverService:EventDriverService,
    private route:Router) { }  
  ngOnInit(): void {  
   this.eventDriverService.sourceEventSubject.subscribe(
     (event:ActionEvent)=>{
      this.onActionEvent(event);
     }
   );
  }
  

  // ongetAllProducts(){
  //   this.productsService.getAllProducts().subscribe(
  //   data=>{
  //     this.products= data;
  //   },
  //   error => {
  //     console.log(error)
  //   }
  //   );
  // }

  ongetAllProducts(){
    this.products$ = this.productsService.getAllProducts().pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message})));
  }

 
  //v0
  // ongetSelectedProducts(){
  //   this.productsService.getSelectedProducts().subscribe(
  //     data=>{
  //       this.products=data
  //     }
  //   )
  // }

  //V1
  ongetSelectedProducts(){
   // this.products$=this.productsService.getSelectedProducts() 
   this.products$ = this.productsService.getSelectedProducts().pipe(
    map(data=>({dataState:DataStateEnum.LOADED,data:data})),
    startWith({dataState:DataStateEnum.LOADING}),
    catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message})));
  }


  //v0
  // ongetAvailableProducts(){
  //   this.productsService.getAvailableProducts().subscribe(
  //    data=>{
  //      this.products=data;
  //    }
  //   )
  // }

  //v1
  ongetAvailableProducts(){
    // this.products$=this.productsService.getAvailableProducts();
    this.products$ = this.productsService.getAvailableProducts().pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message})));
  }


  onSearch(dataform:any){ 
    this.products$ = this.productsService.searchProduct(dataform.keyword).pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message})));
    // this.products$ = this.productsService.searchProduct(dataform.keyword).pipe(
    //   map(data=>({dataState:DataStateEnum.LOADED,data:data})),
    //   startWith({dataState:DataStateEnum.LOADING}),
    //   catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message})));
  }

  
  onselect(p:Product){
    this.productsService.select(p).subscribe(
      data=>{
        p.selected = data.selected;
      }
    )
  }

  ondelete(p:Product){
    this.productsService.delete(p).subscribe(
      data=>{
        this.ongetAllProducts();
      }
    )
  }


  onNewProduct(){
    this.route.navigateByUrl("/product-add");

  }
  onedit(p:Product){
    this.route.navigateByUrl("/product-edit/"+p.id);
  }


  onActionEvent($event:ActionEvent){
    // if($event=="ALL_PRODUCTS"){
    //   this.ongetAllProducts();
    // }
    // console.log($event);

    switch ($event.type) {
      case ProductsActionsTypes.GET_ALL_PRODUCTS:
        this.ongetAllProducts();
        break; 
      case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
          this.ongetSelectedProducts();
          break;
       case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS:
            this.ongetAvailableProducts();
            break;
       case ProductsActionsTypes.NEW_PRODUCTS:
              this.onNewProduct();
              break;                 
      case ProductsActionsTypes.SEARCH_PRODUCTS:
              this.onSearch($event.payload); 
              break; 
       case ProductsActionsTypes.SELECT_PRODUCTS:
              this.onselect($event.payload); 
              break;     
      case ProductsActionsTypes.EDIT_PRODUCTS:
              this.onedit($event.payload); 
              break; 
      case ProductsActionsTypes.DELETE_PRODUCTS:
              this.ondelete($event.payload); 
              break; 
     default : 
              this.ongetAllProducts();
              break;      
    }
  }

}
