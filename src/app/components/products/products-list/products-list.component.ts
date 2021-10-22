import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDriverService } from 'src/app/service/event-driver.service';
import { Product } from 'src/model/product.model';
import { ActionEvent, AppDataState, DataStateEnum, ProductsActionsTypes } from 'src/state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input()  productsInput$:Observable<AppDataState<Product[]>>|null=null;
  //@Output() productListEmitterEvent:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();

  readonly DataStateEnum = DataStateEnum;

  constructor(private eventDrivenService:EventDriverService) {}

  ngOnInit(): void {
  }


  /*
  onselect(p:Product){  
   // this.productListEmitterEvent.emit({type:ProductsActionsTypes.SELECT_PRODUCTS,payload:p})
   this.eventDrivenService.publishEvent({type:ProductsActionsTypes.SELECT_PRODUCTS,payload:p});
  }

  ondelete(p:Product){
    //this.productListEmitterEvent.emit({type:ProductsActionsTypes.DELETE_PRODUCTS,payload:p})
   this.eventDrivenService.publishEvent({type:ProductsActionsTypes.DELETE_PRODUCTS,payload:p});
    
  }

  onedit(p:Product){ 
    //this.productListEmitterEvent.emit({type:ProductsActionsTypes.EDIT_PRODUCTS,payload:p}) 
    this.eventDrivenService.publishEvent({type:ProductsActionsTypes.EDIT_PRODUCTS,payload:p});
  }
  */

  /*
  onActionEvent($event:ActionEvent){ 
    this.productListEmitterEvent.emit($event);
  }
  */

}
