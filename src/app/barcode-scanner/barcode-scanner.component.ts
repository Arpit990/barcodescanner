import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css']
})
export class BarcodeScannerComponent implements OnInit {

  @ViewChild(BarcodeScannerLivestreamComponent) barcodeScanner!: BarcodeScannerLivestreamComponent;

  constructor() { }

  ngOnInit(): void {
  }

  scanCode(){
    this.barcodeScanner.start();
    
  }

  onValueChanges(result:any){

    console.log('Test')
    console.log(result.codeResult.code)
  }

  onStarted(started:any) {
    console.log('Test')
    console.log(started);
  }

  offCamara(){
    this.barcodeScanner.stop();
  }

}
