import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ConvertToSpaces} from './shared/convert-to-spaces';
import {StarComponent} from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {HalfCircleSpinnerModule} from 'angular-epic-spinners';
import {RouterModule} from '@angular/router';
import {ProductDetailComponent} from './products/product-detail.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { SpinnerComponent } from './shared/spinner.component';

@NgModule({
  declarations: [AppComponent, StarComponent, ProductListComponent, ConvertToSpaces, ProductDetailComponent, WelcomeComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HalfCircleSpinnerModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
