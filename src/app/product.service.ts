import {Product} from "./product";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/products/all`)
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiServerUrl}/products/add`, product)
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiServerUrl}/products/update`, product)
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/products/delete/${productId}`)
  }

}
