import { Bankclient } from "./bankclient";
import { Bankaccount } from "./bankaccount";

export interface Transaction {
    transactionid : number;
    source : Bankaccount;
    destination : Bankaccount;
    sumOfTransaction : number;
    description : string;
}