import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent, BarcodeScannerLivestreamOverlayComponent } from "ngx-barcode-scanner";
import { BarcodeService } from '../service/barcode.service';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css']
})
export class BarcodeScannerComponent implements OnInit {

  @ViewChild(BarcodeScannerLivestreamOverlayComponent) barcodeScannerOverlay!: BarcodeScannerLivestreamOverlayComponent;

  barcodeValue: any;
  data: any;

  constructor(private barcodeService: BarcodeService) { }

  ngOnInit(): void {
  }

  startBarcodeScannerOverlay(): void {
    this.barcodeScannerOverlay.show();
  }

  onValueChanges(result: any): void {
    this.barcodeValue = result.codeResult.code;
    this.barcodeService.getRedirectURL(result.codeResult.code).subscribe(result => {
      if(!result.error) {
        window.location.href='https://www.google.com/';
      }
    })
  }

  onStarted(event: any): void {
    console.log('started', event);
  }

}
