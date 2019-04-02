import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../Providers/bitcoin.service';
import { Observable } from 'rxjs';
import { Bitcoin } from './Models/bitcoin.model';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.page.html',
  styleUrls: ['./bitcoin.page.scss'],
})
export class BitcoinPage implements OnInit {
currency: string = 'BTCGBP';
bitcoin$: Observable<Bitcoin>;
  constructor(private bitcoinProvider: BitcoinService) { }

  getBitcoinPrice() {
    this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice(this.currency);
  }

  ngOnInit() {
   this.getBitcoinPrice();
  }

}
