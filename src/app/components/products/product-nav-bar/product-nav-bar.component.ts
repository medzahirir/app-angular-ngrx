 
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventDriverService } from 'src/app/service/event-driver.service';
import { ActionEvent, ProductsActionsTypes } from 'src/state/product.state';
 
 

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  // @Output() productEventEmitter:EventEmitter<ActionEvent>=new EventEmitter();

  constructor(private eventDriverService:EventDriverService) {

   }

  ngOnInit(): void {
  }

  ongetAllProducts(){
    //this.productEventEmitter.emit("ALL_PRODUCTS"); create an Enum contan All Actons to imropve ths code
    //ProctuActonTypesEnum
    //this.productEventEmitter.emit(ProductsActionsTypes.GET_ALL_PRODUCTS); //pour ajouter prarm on crreat pject continet des acton et payload de chaque fn cest contan des param
   
    // this.productEventEmitter.emit({type:ProductsActionsTypes.GET_ALL_PRODUCTS});
    this.eventDriverService.publishEvent({type:ProductsActionsTypes.GET_ALL_PRODUCTS});
  }
  ongetSelectedProducts(){
    //this.productEventEmitter.emit({type:ProductsActionsTypes.GET_SELECTED_PRODUCTS});
    this.eventDriverService.publishEvent({type:ProductsActionsTypes.GET_SELECTED_PRODUCTS});
    
  }
  ongetAvailableProducts(){
    // this.productEventEmitter.emit({type:ProductsActionsTypes.GET_AVAILABLE_PRODUCTS});
    this.eventDriverService.publishEvent({type:ProductsActionsTypes.GET_AVAILABLE_PRODUCTS});

  }
  onNewProduct(){
    // this.productEventEmitter.emit({type:ProductsActionsTypes.NEW_PRODUCTS});
    this.eventDriverService.publishEvent({type:ProductsActionsTypes.NEW_PRODUCTS});

  }
  onSearch(keyword:string){ 
    // this.productEventEmitter.emit({type:ProductsActionsTypes.SEARCH_PRODUCTS ,payload:keyword});
   this.eventDriverService.publishEvent({type:ProductsActionsTypes.SEARCH_PRODUCTS ,payload:keyword});

  }

}
