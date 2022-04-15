import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InputCompanyComponent } from './input-company/input-company.component';
import { InputTransactionComponent } from './input-transaction/input-transaction.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'input-company', component: InputCompanyComponent },
  { path: 'input-transaction', component: InputTransactionComponent },
  { path: 'report', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
