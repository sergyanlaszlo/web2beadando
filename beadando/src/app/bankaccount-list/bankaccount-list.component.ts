import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Bankaccount } from '../models/bankaccount';
import { BankaccountService } from '../services/bankaccount.service';

@Component({
  selector: 'app-bankaccount-list',
  templateUrl: './bankaccount-list.component.html',
  styleUrls: ['./bankaccount-list.component.css']
})
export class BankaccountListComponent implements OnInit {

  bankaccounts : Bankaccount[] | undefined = undefined;
  searchQuery = '';

  constructor(
    private appComponent : AppComponent,
    private bankaccountService : BankaccountService,
    private router : Router
  ) { }

  

  async ngOnInit(){
    this.bankaccounts = await  this.bankaccountService.getAllBankAccounts();
  }

  async search() {
    this.bankaccounts = await this .bankaccountService.searchBankAccountByNumber(this.searchQuery);
  }

  navigateToBankaccountForm(id:any) {
    this.router.navigate(['/bankaccount-form'], {
      queryParams: {
        id : id
      }
    });
  }

  async deleteBankAccount(id:any) {
    await  this.bankaccountService.deleteBankAccount(id);
    this.ngOnInit();
  }


}

