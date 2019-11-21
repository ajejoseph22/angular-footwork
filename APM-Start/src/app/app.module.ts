import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ConvertToSpaces } from './shared/convert-to-spaces';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { HalfCircleSpinnerModule } from 'angular-epic-spinners';

@NgModule({
  declarations: [AppComponent, StarComponent, ProductListComponent, ConvertToSpaces],
  imports: [BrowserModule, FormsModule, HttpClientModule, HalfCircleSpinnerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
