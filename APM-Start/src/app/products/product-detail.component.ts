import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import ProductService from './products.service';
import {IProduct} from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
  private product: IProduct;
  private errorMessage: string;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
  }

  isLoading = true;

  onBack(): void {
    this.router.navigate(['products']);
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe({
      next: products => {
        this.product = products.find(product => product.productId === id);
        if (!this.product) {
          this.errorMessage = `Product with id '${id}' not found.`;
        }
        this.isLoading = false;

      },
      error: err => (this.errorMessage = err),
    });
  }
}
