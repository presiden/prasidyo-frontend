import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  tblProduct: Product[];
  product: Product = new Product();
  isLoggedIn: any = localStorage.getItem("isLoggedInCompany");

  constructor(private productService: ProductService, private router: Router) { 
    if (this.isLoggedIn === 'false') {
      this.router.navigateByUrl("/login");
      return;
    }
    
    this.getProduct();
  }

  ngOnInit(): void {
  }

  public getProduct() {
    this.productService.getProduct().subscribe((res: any) => {
      this.tblProduct = res;
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }

  public addProduct() {
    this.productService.addProduct(this.product).subscribe((res: any) => {
      this.getProduct();
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }
}
