import { Product } from "./product.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private products: Observable<Product[]>;
  private _product: BehaviorSubject<Product[]>;
  private dataStore: {
    products: Product[];
  };

  constructor() {
    this._product = new BehaviorSubject([]) as BehaviorSubject<Product[]>;
    this.products = this._product.asObservable();
    this.dataStore = { products: [] };
    if(localStorage.getItem('products')){
      this.dataStore.products = JSON.parse(localStorage.getItem('products'));
      this.loadAllMock();
    }
  //  this.dataStore.products = Product.generateMock();
  }

  loadAllMock() {
    this._product.next(Object.assign({}, this.dataStore).products);
  }

  getProductData(): Observable<Product[]> {
    return this.products;
  }

  addProduct(product: Product) {
    this.dataStore.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.dataStore.products));
    this.loadAllMock();
  }

  updateProduct(product: Product) {
    this.dataStore.products.forEach((v, i) => {
      if (product.name === v.name) {
        this.dataStore.products[i] = product;
        localStorage.setItem('products', JSON.stringify(this.dataStore.products));
        this.loadAllMock();
        return;
      }
    });
  }

  deleteProduct(product: Product) {
    this.dataStore.products.forEach((v, i) => {
      if (product.name === v.name) {
        this.dataStore.products.splice(i, 1);
        localStorage.setItem('products', JSON.stringify(this.dataStore.products));
        this.loadAllMock();
        return;
      }
    });
  }


}
