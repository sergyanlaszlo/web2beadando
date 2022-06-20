import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Bankclient } from '../models/bankclient';

@Injectable({
    providedIn : 'root'
})
export class BankclientService {

    constructor(private http: HttpClient) {}

   async getAllBankclients() {
        return await lastValueFrom(this.http.get<Bankclient[]>('/api/bankclient-list'));
    }

    async getBankclientByID(id: number) {
        return await lastValueFrom(this.http.get<Bankclient>('/api/bankclient/'+id));
    }

    async getBankclientByName(query : string) {
        return await lastValueFrom(this.http.get<Bankclient>('/api/bankclient/' +query, {
            params : {query}
        }));
    }

    async updateBankClient(bankclient : Bankclient) {
        return lastValueFrom(this.http.put<Bankclient>('/api/bankclient', bankclient));
     }

    async searchBankclients(query : string) {
        return  await lastValueFrom(this.http.get<Bankclient[]>('/api/bankclient', {
            params : { query
            }
        }));
    }

    async createBankclient(bankclient : Bankclient) {
        return await lastValueFrom(this.http.post<Bankclient>('/api/bankclient', bankclient));
    }

    async  deleteBankclient(id : number) {
        return await lastValueFrom(this.http.delete<Bankclient>('/api/bankclient/' +id))
    }
}