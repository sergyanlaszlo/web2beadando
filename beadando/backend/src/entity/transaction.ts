import { Bankclient } from "./bankclient";
import { Bankaccount } from "./bankaccount";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    transactionid : number;
    

    @ManyToOne(type => Bankaccount, bankaccount => bankaccount.sourceTransactions, {
        eager : true,
        cascade : true
    })
    source: Bankaccount;


    @ManyToOne(type => Bankaccount, bankaccount => bankaccount.destinationTransactions, {
        eager : true,
        cascade: true
    })
    destination: Bankaccount;

    @Column()
    sumOfTransaction : number;

    @Column()
    description : string;

}