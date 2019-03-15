import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import { Product } from '../shared/product.model';

export function maxByFormControlValue(
  formControl: AbstractControl
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = control.get('gain').value <= formControl.value;
    return isValid ? null : { controlValue: { value: control.value } };
  };
}

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent implements OnInit {
  addProductForm: FormGroup;
  private product: Product;

  constructor(public modal: NgbActiveModal) {}

  ngOnInit() {
    this.addProductForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      gain: new FormControl('', [Validators.required, Validators.min(1)])
    });

    this.addProductForm.setValidators([
      maxByFormControlValue(this.addProductForm.get('price'))
    ]);

    // this.addProductForm
    //   .get('gain')
    //   .setValidators([
    //     Validators.required,
    //     Validators.min(1),
    //     maxByFormControlValue(this.addProductForm.get('price'))
    //   ]);
  }

  add() {
    this.product = new Product();
    this.product.quantity = 1;
    this.product.date = new Date();
    this.product.name = this.addProductForm.get('name').value;
    this.product.price = this.addProductForm.get('price').value;
    this.product.gain = this.addProductForm.get('gain').value;
    this.modal.close(this.product);
  }
}
