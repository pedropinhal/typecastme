import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from '../star/star.component';
import { ConvertToSpacesPipe } from '../pipes/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', 
        component: ProductDetailComponent,
        canActivate: [ProductGuardService] },
      {path: '*', redirectTo: 'products', pathMatch: 'full'}
    ])
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  providers: [ProductService, ProductGuardService],
})
export class ProductModule { }
