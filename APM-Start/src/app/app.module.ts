import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HalfCircleSpinnerModule } from "angular-epic-spinners";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ProductModule } from "./products/product.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HalfCircleSpinnerModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ]),
    ProductModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
