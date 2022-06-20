import { getRepository, Repository } from "typeorm";
import { Bankaccount } from "../entity/bankaccount";
import { Transaction } from "../entity/transaction";
import { Controller } from "./base.controller";

export class TransactionController extends Controller {
    repository = getRepository(Transaction);
    accountRepository = getRepository(Bankaccount);

    create = async (req, res) => {
        const transaction = this.repository.create(req.body as {});

        try {
            const source = await this.accountRepository.findOne(transaction.source.id);
            if (!source) {
                res.status(400).json({ message: 'Source does not exist.' });
            }

            const destination = await this.accountRepository.findOne(transaction.destination.id);
            if(!destination) {
                res.status(400).json({message : 'Destination does not exist.'})
            }

            source.balance -= transaction.sumOfTransaction;
            destination.balance += transaction.sumOfTransaction;

            await this.accountRepository.save(source);
            await this.accountRepository.save(destination);

            await this.repository.save(transaction);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    getAll = async (req, res) => {
        const search = req.query.search || '';

        try {
            const entities = await this.repository.createQueryBuilder('transaction')
            .where("transaction.transactionid LIKE CONCAT('%', :search, '%')", {search : search}).getMany();
            res.json(entities);
        } catch (err) {
            res.status(500).json({ message : err.message});
        }     
    }

    delete = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const entity = await this.repository.findOne(({ transactionid : id }));

            if (!entity) {
                return res.status(404).json({ message: 'Not existing entity.' });
            }

            await this.repository.delete(entity);
            res.status(200).send();
        } catch (err) {
            res.status(500).json({ message: 'DELETE HIBA!!' });
        }
    }
}