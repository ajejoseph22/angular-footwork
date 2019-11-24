import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarComponent } from "../shared/star/star.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ConvertToSpaces } from "../shared/convert-to-spaces";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ProductRoutingModule } from "./product-routing.module";

@NgModule({
  declarations: [
    StarComponent,
    ProductDetailComponent,
    ProductListComponent,
    ConvertToSpaces
  ],
  imports: [CommonModule, ProductRoutingModule, FormsModule, SharedModule]
})
export class ProductModule {}
