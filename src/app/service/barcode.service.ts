import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  URL = 'https://api.maxput.tech/api/customer-product-by-barcode?barcode='

  constructor(private http: HttpClient) { }

  getRedirectURL(barcode: string) {
    return this.http.get<any>(this.URL + barcode);
  }
}
