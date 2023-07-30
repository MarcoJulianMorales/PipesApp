import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button'
import { SharedModule } from './shared/shared.module';

//Local configs
import  LocalEsMx  from '@angular/common/locales/es-MX';
import  LocalFrCA  from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common'

registerLocaleData(LocalEsMx)
registerLocaleData(LocalFrCA)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    SharedModule
  ],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
