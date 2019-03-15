import { ProductService } from "./../../product/shared/product.service";
import { DatePickerFormater } from "./../datepicker/date.picker.formater";
import { Component, OnInit } from "@angular/core";
import {
  NgbDateStruct,
  NgbDate,
  NgbCalendar,
  NgbDateParserFormatter
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
  providers: [{ provide: NgbDateParserFormatter, useClass: DatePickerFormater }]
})
export class NavBarComponent implements OnInit {
  date: NgbDateStruct;
  gain: number;
  total: number;
  private now: Date;

  constructor(private productService: ProductService) {
    this.now = new Date();
    this.gain = 0;
    this.total = 0;
  }

  ngOnInit() {
    this.date = new NgbDate(
      this.now.getFullYear(),
      this.now.getMonth() + 1,
      this.now.getDate()
    );

    this.productService.getProductData().subscribe(products =>{
      this.gain = 0;
      this.total = 0;
      products.forEach(element => {
        this.total = this.total + (element.price * element.quantity);
        this.gain = this.gain + (element.gain * element.quantity);
      });
    })

  }
}
