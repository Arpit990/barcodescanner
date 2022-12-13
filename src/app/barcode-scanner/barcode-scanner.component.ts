import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent, BarcodeScannerLivestreamOverlayComponent } from "ngx-barcode-scanner";

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css']
})
export class BarcodeScannerComponent implements OnInit {

  @ViewChild(BarcodeScannerLivestreamComponent) barcodeScanner!: BarcodeScannerLivestreamComponent;
  @ViewChild(BarcodeScannerLivestreamOverlayComponent) barcodeScannerOverlay!: BarcodeScannerLivestreamOverlayComponent;

  barcodeValue: any;

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

  scanCode(){
    this.barcodeScanner.start(); 
  }

  offCamara(){
    this.barcodeScanner.stop();
  }

}
