import { ProductService } from "./../shared/product.service";
import { ConfirmationModalService } from "./../../shared/confirmation-modal/confirmation-modal.service";
import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../shared/product.model";

@Component({
  selector: "app-product-info",
  templateUrl: "./product-info.component.html",
  styleUrls: ["./product-info.component.css"]
})
export class ProductInfoComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private confirmation: ConfirmationModalService,
    private productService: ProductService
  ) {}

  ngOnInit() {}

  addQuantity() {
    this.product.quantity = this.product.quantity + 1;
    this.update();
  }

  removeQuantity() {
    if (this.product.quantity !== 1) {
      this.product.quantity = this.product.quantity - 1;
      this.update();
    }
  }

  update() {
    this.productService.updateProduct(this.product);
  }

  delete() {
    this.confirmation
      .callConfirmation(
        "Eliminar producto",
        "¿Esta seguro que desea quitar este producto?"
      )
      .then(result => {
        if (result) {
          this.productService.deleteProduct(this.product);
        }
      });
  }
}
