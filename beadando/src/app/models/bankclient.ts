import { Bankaccount } from "./bankaccount"

export interface Bankclient {
    id: number;
    name: string;
    location : string;
    phonenumber : string;
    accountnumber : string;
    accounts : Bankaccount;
}