import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HalfCircleSpinnerModule } from "angular-epic-spinners";
import { SpinnerComponent } from "./spinner/spinner.component";

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, HalfCircleSpinnerModule],
  exports: [SpinnerComponent]
})
export class SharedModule {}
