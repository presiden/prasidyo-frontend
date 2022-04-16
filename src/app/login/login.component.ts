import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  backgroundColor = '#e1ebf5';
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = localStorage.getItem("isLoggedIn-company");

  constructor(private router: Router
  ) {}

  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
  }

  public login(){
    if (this.form.username === 'admin' && this.form.password === 'admin') {
      localStorage.setItem('isLoggedInCompany', "true");
      this.router.navigateByUrl("/").then(
        () => {
          window.location.reload();
        }
      );
    }
  }

  onSubmit() {
    const { username, password } = this.form;

    // this.authService.login(username, password).subscribe(
    //   (data) => {
    //     this.tokenStorage.saveToken(data.accessToken);
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this.reloadPage();
    //   },
    //   (err) => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
