import { DecimalPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  products: Product[] = [];

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }
}
