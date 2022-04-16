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

  public download(){
    const replacer = (key, value) => (value === null ? '' : value); //null handler
    const header = Object.keys(this.report[0]);
    const csv = this.report.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join('|')
    );
    csv.unshift(header.join('|'));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = 'report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}
