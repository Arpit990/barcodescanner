import { Component } from '@angular/core';
import {  NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qr-scanner';


  elementType =  NgxQrcodeElementTypes.URL;
  error= NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.google.com/';
}
