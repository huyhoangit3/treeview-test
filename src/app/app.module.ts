import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeviewModule } from 'ngx-treeview';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TreeviewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
