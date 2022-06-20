import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bankaccount } from '../models/bankaccount';
import { AppComponent } from '../app.component';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';
import { BankaccountService } from '../services/bankaccount.service';
import { BankclientService } from '../services/bankclient.service';
import { Bankclient } from '../models/bankclient';



@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions : Transaction[] | undefined = undefined;
  bankaccounts : Bankaccount[] | undefined = undefined;
  bankclients : Bankclient[] | undefined = undefined;
  searchQuery = '';

  constructor(
    private appComponent: AppComponent,
    private transactionService : TransactionService,
    private bankaccountService : BankaccountService,
    private bankclientService : BankclientService,
    private router : Router,
  ) { }

  async ngOnInit() {
    this.transactions = await this.transactionService.getAllTransactions();
    this.bankaccounts = await this.bankaccountService.getAllBankAccounts();
    this.bankclients = await this.bankclientService.getAllBankclients();
  }

  async search() {
   this.transactions  = await this.transactionService.getTransaction(this.searchQuery);
  }

  navigateToTransactionForm(id:any) {
    this.router.navigate(['/transaction-form'], {
      queryParams : {
        id : id
      }
    });
  }

  async deleteTransaction(id : any) {
    await this.transactionService.deleteTransaction(id)
    this.ngOnInit();
  }

}
