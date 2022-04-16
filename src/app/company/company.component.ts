import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  tblCompany: Company[];
  company: Company = new Company();
  isLoggedIn: any = localStorage.getItem("isLoggedInCompany");

  constructor(private companyService: CompanyService, private router: Router) {
    if (this.isLoggedIn === 'false') {
      this.router.navigateByUrl("/login");
      return;
    }
    this.getCompany();
  }

  ngOnInit(): void {}

  public getCompany() {
    this.companyService.getCompany().subscribe((res: any) => {
      this.tblCompany = res;
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }

  public addCompany() {
    this.companyService.addCompany(this.company).subscribe((res: any) => {
      this.getCompany();
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }
}
