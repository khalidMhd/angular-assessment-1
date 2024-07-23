import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  productList?: Product[];
  listForm!: FormGroup;
  title?: FormControl;

  constructor(
    private productServices: ProductService,
    private fb: FormBuilder
  ) {
    this.listForm = this.fb.group({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
    });
  }

  ngOnInit(): void {
    this.productList = this.productServices.getProductList();
  }

  handleRest = () => {
    this.productList = this.productServices.getProductList();
    this.listForm.reset();
  };

  searchHandler = () => {
    if (this.listForm?.valid) {
      const { title } = this.listForm.value;

      const filterByTitle = this.productServices
        .getProductList()
        ?.filter((item) => {
          return item.name.toLowerCase().includes(title.toLowerCase());
        });

      this.productList = filterByTitle;
      // this.listForm.reset();
    }
  };
}
