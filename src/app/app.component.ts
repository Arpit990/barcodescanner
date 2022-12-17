import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeService } from './service/barcode.service';
import { BarcodeScannerLivestreamOverlayComponent } from "ngx-barcode-scanner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  barcodeValue: any;
  title = 'barcode-scanner';

  @ViewChild(BarcodeScannerLivestreamOverlayComponent) barcodeScannerOverlay!: BarcodeScannerLivestreamOverlayComponent;

  constructor() { }

  ngOnInit(): void {
  }

  startBarcodeScannerOverlay(): void {
    this.barcodeScannerOverlay.show();
  }

  onValueChanges(result: any): void {
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(event: any): void {
    console.log('started', event);
  }

}
