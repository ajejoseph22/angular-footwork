import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { IProduct } from "../product";
import ProductService from "../products.service";

@Component({
  selector: "pm-products",
  templateUrl: "product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  @Output()
  receivedClickedRating: EventEmitter<number> = new EventEmitter<number>();
  pageTitle = "Product List";
  imageWidth = 40;
  imageMargin = "2";
  buttonWidth = 140;
  showImage = false;
  filteredProducts: IProduct[];
  products: IProduct[];
  isLoading = true;
  errorMessage: string;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.getFilteredProducts(this.listFilter)
      : this.products;
  }

  getFilteredProducts(value: string): IProduct[] {
    value = value.toLowerCase();
    return this.products.filter(
      product =>
        product.productName.toLowerCase().indexOf(value) > -1 ||
        product.productCode.toLowerCase().indexOf(value) > -1 ||
        product.price
          .toString()
          .toLowerCase()
          .indexOf(value) > -1
    );
  }

  toggleImageShow(): void {
    this.showImage = !this.showImage;
  }

  clickedARating(rating: number): void {
    this.pageTitle = rating.toString();
    this.receivedClickedRating.emit(rating);
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
        this.isLoading = false;
      },
      error: err => (this.errorMessage = err)
    });
  }
}
