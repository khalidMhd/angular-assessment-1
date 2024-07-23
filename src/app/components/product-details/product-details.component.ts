import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  productDetals?: Product | null = null;
  constructor(
    private _route: ActivatedRoute,
    private productServices: ProductService
  ) {}

  ngOnInit(): void {
    const id: number = Number(this._route.snapshot.paramMap.get('id'));
    const getProduct = this.productServices.getProductDetailsByID(id);
    if (getProduct) {
      this.productDetals = getProduct
    } else {
      this.productDetals = null

    }
  }
}
