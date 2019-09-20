import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BandasComponent} from '../bandas/bandas.component';
import { DiscoComponent } from '../disco/disco.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BandasComponent, DiscoComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
