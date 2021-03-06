import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bitcoin } from '../bitcoin/Models/bitcoin.model';

@Injectable()
export class BitcoinService {
private ROOT_URL =
'https://apiv2.bitcoinaverage.com/indices/global/ticker/';

  constructor(private http: HttpClient) { }

  getBitcoinPrice(currency: string) {
    return this.http.get<Bitcoin>(`${this.ROOT_URL}${currency}`);
  }
}
