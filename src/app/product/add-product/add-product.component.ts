import { ProductService } from "./../shared/product.service";
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddProductModalComponent } from "../add-product-modal/add-product-modal.component";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private productService: ProductService
  ) {}

  ngOnInit() {}

  onClick() {
    this.modalService.open(AddProductModalComponent).result.then(result => {
      this.productService.addProduct(result);
    });
  }
}
