import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// --ngx QR Code Maker-- //
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
// -- Barcode Scanner--//
import { BarcodeScannerLivestreamModule, BarcodeScannerLivestreamOverlayModule } from "ngx-barcode-scanner";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    BarcodeScannerLivestreamModule,
    BarcodeScannerLivestreamOverlayModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
