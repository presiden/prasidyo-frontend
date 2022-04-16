import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company/company';
import { CompanyService } from '../company/company.service';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  tblTransaction: Transaction[];
  transaction: Transaction = new Transaction();
  company: Company = new Company();
  product: Product = new Product();
  selectedCompany: any;
  companies: Company[];
  selectedProduct: number;
  products: Product[];

  quantity: number;
  price:number;
  totalPrice:number;
  isLoggedIn: any = localStorage.getItem("isLoggedInCompany");

  constructor(private transactionService: TransactionService, private companyService: CompanyService, private productService: ProductService, private router: Router) { 
    if (this.isLoggedIn === 'false') {
      this.router.navigateByUrl("/login");
      return;
    }

    this.transaction.company = this.company;
    this.getTransaction();
    this.getCompany();
    this.getProduct();
  }

  ngOnInit(): void {
  }
  
  public calculateTotalPrice(){
    if(this.quantity && this.price)
        this.totalPrice = this.quantity * this.price;
  }

  public changeProduct(){
    this.price = this.products.filter(o => o.id == this.selectedProduct)[0].price
  }

  public getTransaction() {
    this.transactionService.getTransaction().subscribe((res: any) => {
      this.tblTransaction = res;
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }

  public addTransaction() {
    let transaction = {
      companyId: this.selectedCompany,
      listDetails: [{
        productId:this.selectedProduct,
        quantity:this.quantity,
        price:this.price,
        totalPrice:this.totalPrice,
        notes:"Okee"
      }]
    }
    this.transactionService.addTransaction(transaction).subscribe((res: any) => {
      this.getTransaction();
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }

  public getCompany() {
    this.companyService.getCompany().subscribe((res: any) => {
      this.companies = res;
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }

  public getProduct() {
    this.productService.getProduct().subscribe((res: any) => {
      this.products = res;
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }
}
