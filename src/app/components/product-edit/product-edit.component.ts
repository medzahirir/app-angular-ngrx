import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventDriverService } from 'src/app/service/event-driver.service';
import { ProductService } from 'src/service/Products.service';
import { ProductsActionsTypes } from 'src/state/product.state';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit { 

  productFormGroup?:FormGroup;
  productid:number;
  submitted:boolean=false;

  constructor(
    private activatedRoute:ActivatedRoute ,
    private productsService:ProductService ,
    private eventDrivenEvent:EventDriverService,
    private formBuilder:FormBuilder) { 
    this.productid=activatedRoute.snapshot.params.id ;
   
    
  }

  ngOnInit(): void {
    this.productsService.getProduct(this.productid).subscribe(  
       
      product=>{
        this.productFormGroup=this.formBuilder.group(
          {
            id:[product.id,Validators.required],
            name:[product.name,Validators.required],
            price:[product.price,Validators.required],
            quantity:[product.quantity,Validators.required],
            selected:[product.selected,Validators.required],
            available:[product.available,Validators.required], 
          }
        );
      }

    );
    
  } 

  onUpadteProduct(){
    this.submitted=true;
    if(this.productFormGroup?.controls.errors) return;

    this.productsService.updateProduct(this.productFormGroup?.value).subscribe(
      data=>{
        this.eventDrivenEvent.publishEvent({type:ProductsActionsTypes.PRODUCTS_EDITED});

        alert("Edited Success ");
      }
    );


  }

}
