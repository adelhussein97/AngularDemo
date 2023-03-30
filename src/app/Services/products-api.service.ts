import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Icategory } from '../Models/icategory';
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
        ),
    }
  }

  GetAllProducts():Observable<Iproduct[]>
  {
    // can use this or use enviroments to fixed url api
    // return this.httpclient.get<Iproduct[]>('http://localhost:3000/Prodcuts')
    // or
    return this.httpclient.get<Iproduct[]>( `${ environment.APIUrl }/Prodcuts` )
      // .pipe(
      //   catchError( this.errorHandler ));
  }
  GetAllCategories():Observable<Icategory[]>
  {
    // can use this or use enviroments to fixed url api
    // return this.httpclient.get<Iproduct[]>('http://localhost:3000/Categories')
    // or
    return this.httpclient.get<Icategory[]>(`${environment.APIUrl}/Categories`)
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
    return this.httpclient.post<Iproduct>( `${ environment.APIUrl }/Prodcuts/`, JSON.stringify( Prd ), this.httpHeader );
    

  }
  UpdateProduct(PrdID:number,Prd:Iproduct):Observable<any>
  {
    console.log(PrdID)
    console.log(Prd)
    return this.httpclient.put<Iproduct>( `${ environment.APIUrl }/Products/${ PrdID }`,
      JSON.stringify( Prd ), this.httpHeader );
      //   .pipe(
      // catchError( this.errorHandler ) );


  }
  DeleteProduct(PrdID:number){
    return this.httpclient.delete( `${ environment.APIUrl }/Products/${ PrdID }` );
      // .pipe(
      // catchError( this.errorHandler ) );
    
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return errorMessage;
 }
}
