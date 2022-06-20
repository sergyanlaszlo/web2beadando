import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
    providedIn : 'root'
})

export class TransactionService {


    constructor(private http: HttpClient) {}

async   createTransaction(transaction: Transaction) {
    return await lastValueFrom(this.http.post<Transaction>('/api/transaction',transaction));
  }



 async   getAllTransactions() {
        return await lastValueFrom(this.http.get<Transaction[]>('/api/transaction-list'));
    }

 async   getTransactionById(id : any) {
        return await lastValueFrom(this.http.get<Transaction>('/api/transaction/${id}'));
    }

async getTransaction(search : string) {
    return await lastValueFrom(this.http.get<Transaction[]>('/api/transaction', {
        params : {search}
    }))
}

async deleteTransaction(id : number) { 
    return await lastValueFrom(this.http.delete<Transaction>('/api/transaction/' +id))
    }
}