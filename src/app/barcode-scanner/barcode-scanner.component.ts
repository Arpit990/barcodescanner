import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css']
})
export class BarcodeScannerComponent implements OnInit {

  @ViewChild(BarcodeScannerLivestreamComponent) barcodeScanner!: BarcodeScannerLivestreamComponent;

  barcodeValue: any;

  constructor() { }

  ngOnInit(): void {
  }

  scanCode(){
    this.barcodeScanner.start(); 
  }

  onValueChanges(result:any){
    console.log('Test')
    console.log(result.codeResult.code)
    alert(result.codeResult.code)
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started:any) {
    console.log('Test')
    console.log(started);
    this.barcodeValue = started;
  }

  offCamara(){
    this.barcodeScanner.stop();
  }

}
