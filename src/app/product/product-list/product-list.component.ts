import { ProductService } from './../shared/product.service';
import { Product } from "./../shared/product.model";
import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  productList: Observable<Product[]>;
  constructor(private productService:ProductService) {}

  ngOnInit() {
    this.productService.loadAllMock();
    this.productList = this.productService.getProductData();
  }

}
