import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Bankaccount } from '../models/bankaccount'

@Injectable({
  providedIn: 'root'
})
export class BankaccountService {

  constructor(private http: HttpClient) { }

  async getAllBankAccounts() {
    return await lastValueFrom(this.http.get<Bankaccount[]>('/api/bankaccount-list'));
}

async searchBankAccountByNumber(id : any) {
  return  await lastValueFrom(this.http.get<Bankaccount[]>('/api/bankaccount-list/'+id, {
      params : { id
      }
  }));
}
/*
async updateBankAccount(bankaccount : Bankaccount) {
   return lastValueFrom(this.http.put<Bankaccount>('/api/bankaccount', bankaccount));
}
*/
async createBankAccount(bankaccount : Bankaccount) {
  return await lastValueFrom(this.http.post<Bankaccount>('/api/bankaccount', bankaccount));
}

async  deleteBankAccount(id : number) {
  return await lastValueFrom(this.http.delete<Bankaccount>('/api/bankaccount/' +id));
}

}