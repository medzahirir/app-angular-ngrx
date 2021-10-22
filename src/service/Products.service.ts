 
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "src/model/product.model";
 

@Injectable({providedIn:"root"}) 
export class ProductService{ 
    

     //host=environment.host;
    
    constructor(private http:HttpClient)  {} 

    getAllProducts():Observable<Product[]>{
      let  host=environment.host;
      //=Math.random()>0.8 ?environment.host:environment.unreacheblehost;

        return  this.http.get<Product[]>(host+"/products"); 
    }

    getSelectedProducts():Observable<Product[]>{
        let  host=environment.host;
          return  this.http.get<Product[]>(host+"/products?selected=true"); 
      }
    getAvailableProducts():Observable<Product[]>{
        let  host=environment.host;
          return  this.http.get<Product[]>(host+"/products?available=true"); 
    }

    searchProduct(keyword:string){
      let  host=environment.host;
      return  this.http.get<Product[]>(host+"/products?name_like="+keyword);  
    }


    select(product:Product):Observable<Product>{
      let  host=environment.host;
      product.selected = !product.selected;
      return  this.http.put<Product>(host+"/products/"+product.id,product);  
    } 

    delete(product: Product):Observable<void> {
      let  host=environment.host; 
      return  this.http.delete<void>(host+"/products/"+product.id); 
    }

    save(product:Product):Observable<Product>{
      let  host=environment.host; 
      return  this.http.post<Product>(host+"/products",product);  
    } 


    getProducts(productId:number):Observable<Product>{
      let  host=environment.host; 
      return  this.http.get<Product>(host+"/products/"+productId);  
    }

    updateProduct(product:Product):Observable<Product>{
      let  host=environment.host; 
      return  this.http.put<Product>(host+"/products/"+product.id,product);  
    }


}