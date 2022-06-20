import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankclientListComponent } from './bankclient-list/bankclient-list.component';
import { BankclientFormComponent } from './bankclient-form/bankclient-form.component';
import { AppRoutingModule } from './app-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { BankaccountFormComponent } from './bankaccount-form/bankaccount-form.component';
import { BankaccountListComponent } from './bankaccount-list/bankaccount-list.component';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BankclientListComponent,
    BankclientFormComponent,
    TransactionListComponent,
    TransactionFormComponent,
    BankaccountFormComponent,
    BankaccountListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
