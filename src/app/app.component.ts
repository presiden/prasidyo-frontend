import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'company-app';

  isLoggedIn = localStorage.getItem("isLoggedInCompany");
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  login(): void{
    this.isLoggedIn = 'true';
  }

  logout(): void{
    localStorage.setItem('isLoggedInCompany', "false");
    window.location.reload();
  }
}
