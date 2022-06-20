import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Bankclient } from '../models/bankclient';
import { Bankaccount } from '../models/bankaccount'
import { BankclientService } from '../services/bankclient.service';
import { Component, OnInit } from '@angular/core';
import { BankaccountService } from '../services/bankaccount.service';

@Component({
  selector: 'app-bankclient-list',
  templateUrl: './bankclient-list.component.html',
  styleUrls: ['./bankclient-list.component.css']
})
export class BankclientListComponent implements OnInit {

  bankclients: Bankclient[] | undefined = undefined;
  bankaccounts : Bankaccount[] | undefined = undefined;
  searchQuery = ''

  constructor(
    private appComponent: AppComponent,
    private bankClientService: BankclientService,
    private bankaccountservice : BankaccountService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.bankclients = await this.bankClientService.getAllBankclients();
    this.bankaccounts = await this.bankaccountservice.getAllBankAccounts();
  }

  async search() {
    this.bankclients = await this.bankClientService.searchBankclients(this.searchQuery);
  }

  navigateToBankclientForm(id?: any) {
    if (id) {
      this.router.navigate(['/bankclient-form'], {
        queryParams: {
          id: id
        }
      });
    } else {
      this.router.navigate(['/bankclient-form']);
    }


  }

  async deleteBankclient(id: any) {
    await this.bankClientService.deleteBankclient(id)
    this.ngOnInit();
  }

}