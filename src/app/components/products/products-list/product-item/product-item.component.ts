import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventDriverService } from 'src/app/service/event-driver.service';
import { Product } from 'src/model/product.model';
import { ActionEvent, ProductsActionsTypes } from 'src/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    @Input() product:Product | null=null;
   //@Output() eventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();

  constructor(private eventdrivenServce:EventDriverService) { }

  ngOnInit(): void { 

  }

  onselect(p:Product){  
  //  this.eventEmitter.emit({type:ProductsActionsTypes.SELECT_PRODUCTS,payload:p});
    this.eventdrivenServce.publishEvent({type:ProductsActionsTypes.SELECT_PRODUCTS,payload:p});
  }

  ondelete(p:Product){
  // this.eventEmitter.emit({type:ProductsActionsTypes.DELETE_PRODUCTS,payload:p})
   this.eventdrivenServce.publishEvent({type:ProductsActionsTypes.DELETE_PRODUCTS,payload:p});

  }

  onedit(p:Product){ 
  //this.eventEmitter.emit({type:ProductsActionsTypes.EDIT_PRODUCTS,payload:p}) ;
   this.eventdrivenServce.publishEvent({type:ProductsActionsTypes.EDIT_PRODUCTS,payload:p});

  }

}
