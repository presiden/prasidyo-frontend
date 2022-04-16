import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn: any = localStorage.getItem("isLoggedInCompany");

  constructor(private router: Router) { 
    if (this.isLoggedIn === 'false') {
      this.router.navigateByUrl("/login");
      return;
    }
  }

  ngOnInit(): void {
  }

}
