import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';   
import { environment } from 'src/environments/environment.development';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  httpHeader = {};
  constructor(private httpclient:HttpClient)
  { 
    this.httpHeader =
      {
        headers:new HttpHeaders(
          {
              'content-type' :'Application/json'
          }
        )
    }
  }
   
  GetAllProducts():Observable<Iproduct[]>
  {
    // can use this or use enviroments to fixed url api 
    // return this.httpclient.get<Iproduct[]>('http://localhost:3000/Prodcuts')
    // or 
    return this.httpclient.get<Iproduct[]>(`${environment.APIUrl}/Prodcuts`)
  }
  GetAllProductsByCategoryId(CatID:number):Observable<Iproduct[]>
  {
        // can use this or use enviroments to fixed url api 
        //return this.httpclient.get<Iproduct[]>(`http://localhost:3000/Prodcuts?categoryID=${CatID}`)
        // or
        return this.httpclient.get<Iproduct[]>(`${environment.APIUrl}/Prodcuts?categoryID=${CatID}`)

  }
  GetProductById(PrdID:number):Observable<Iproduct>
  {
        // can use this or use enviroments to fixed url api 
        //return this.httpclient.get<Iproduct>(`http://localhost:3000/Prodcuts/${PrdID}`)
        // or
        return this.httpclient.get<Iproduct>(`${environment.APIUrl}/Prodcuts/${PrdID}`)

  }

  AddNewProduct(Prd:Iproduct):Observable<Iproduct>
  {
    return this.httpclient.post<Iproduct>( `${ environment.APIUrl }/Prodcuts/`,JSON.stringify(Prd) ,this.httpHeader);

  }
}
