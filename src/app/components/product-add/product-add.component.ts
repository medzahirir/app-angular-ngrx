import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventDriverService } from 'src/app/service/event-driver.service';
import { ProductService } from 'src/service/Products.service';
import { ProductsActionsTypes } from 'src/state/product.state';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(
    private eventDrven:EventDriverService,
    private productService:ProductService,
    private formBuilder:FormBuilder) { }

  

  ngOnInit(): void {

  this.productFormGroup = this.formBuilder.group(
    {
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required],
    }
  );


  }
  onsaveProduct(){

    this.submitted =true;
    if(this.productFormGroup?.invalid) return;

    this.productService.save(this.productFormGroup?.value).subscribe(
      data=>{
        this.eventDrven.publishEvent({type:ProductsActionsTypes.PRODUCTS_ADDED});
        alert('add success Product ')
      }
    );
  }

}
