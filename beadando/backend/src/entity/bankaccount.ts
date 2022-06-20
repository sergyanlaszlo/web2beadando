import { transcode } from "buffer";
import { PrimaryGeneratedColumn, Column, OneToMany, Entity, ManyToOne } from "typeorm";
import { Bankclient } from "./bankclient";
import {Transaction} from './transaction'

@Entity()
export class Bankaccount {
    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    balance : number;

    @ManyToOne(type => Bankclient, bankclient => bankclient.accounts, {
        eager: true,
        cascade : true
    })
    owner: Bankclient;


    //Ahol a bankszámla utalt, a forrás ő volt
     @OneToMany(type => Transaction, transaction => transaction.source)
     sourceTransactions: Transaction[];


     //ahol a bankszámlának utaltak, a cél volt ő
     @OneToMany(type => Transaction, transaction => transaction.destination)
     destinationTransactions : Transaction[];
}
