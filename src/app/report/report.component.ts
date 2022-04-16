import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from './report';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  report: Report[];
  isLoggedIn: any = localStorage.getItem("isLoggedInCompany");

  constructor(private reportService: ReportService, private router: Router) { 
    if (this.isLoggedIn === 'false') {
      this.router.navigateByUrl("/login");
      return;
    }
    
    this.getReport();
  }

  ngOnInit(): void {
  }

  public getReport(){
    this.reportService.getReport().subscribe((res: any) => {
      this.report = res;
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }
}
