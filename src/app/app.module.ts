import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductInfoComponent } from './product/product-info/product-info.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';
import { AddProductModalComponent } from './product/add-product-modal/add-product-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductInfoComponent,
    AddProductComponent,
    ConfirmationModalComponent,
    AddProductModalComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ConfirmationModalComponent,
    AddProductModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
