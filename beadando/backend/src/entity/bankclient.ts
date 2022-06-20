import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bankaccount } from "./bankaccount";


@Entity()
export class Bankclient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    accountnumber : string;

    @Column()
    location : string;

    @Column()
    phoneNumber : string;

    @OneToMany(type => Bankaccount, bankaccount => bankaccount.owner) 
    accounts: Bankaccount[];
}