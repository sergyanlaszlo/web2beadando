import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BankclientFormComponent } from './bankclient-form/bankclient-form.component';
import { BankclientListComponent } from './bankclient-list/bankclient-list.component';
import { BankaccountListComponent } from './bankaccount-list/bankaccount-list.component';
import { BankaccountFormComponent } from './bankaccount-form/bankaccount-form.component';
import { BankaccountService } from './services/bankaccount.service';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path:'',
    component : LoginComponent
  },

  {
    path: 'bankclient-list',
    component : BankclientListComponent
  },
  {
    path: 'bankclient-form',
    component: BankclientFormComponent
  },
  {
    path: 'transaction-form',
    component : TransactionFormComponent
  },
  { 
    path: 'transaction-list',
    component: TransactionListComponent
  },
  {
    path: 'bankaccount-list',
    component : BankaccountListComponent
  },
  {
    path : 'bankaccount-form',
    component : BankaccountFormComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }