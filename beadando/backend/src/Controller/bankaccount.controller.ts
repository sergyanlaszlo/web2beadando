import { getRepository, LessThan, Repository } from "typeorm";
import { Bankaccount } from "../entity/bankaccount";
import { Controller } from "./base.controller";

export class BankaccountController extends Controller {
    repository = getRepository(Bankaccount);

    getAll = async (req, res) => {
        const search = req.query.search || '';

        try {
            const entities = await this.repository.find();


            // const entities = await this.repository.createQueryBuilder('bankaccount')
            // .where("bankaccount.id LIKE CONCAT('%', :search, '%')", {search : search})
            // .getMany();

            res.json(entities);
        } catch (err) {
            res.status(500).json({ message : err.message});
        }     
    }

    delete = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const entity = await this.repository.findOne(({ id: id }));

            if (!entity) {
                return res.status(404).json({ message: 'Not existing entity.' });
            }

            await this.repository.delete(entity);
            res.status(200).send();
        } catch (err) {
            res.status(500).json({ message: 'DELETE HIBA!!' });
        }

    }
    

    getById = async (req, res) => {
        
        try {
            const id = req.query.search || '';
            const specificBankAccount = await this.repository.createQueryBuilder('bankaccount').where("bankaccount.id LIKE CONCAT('%', :search, '%')", {search : id}).getOne();
            res.json(specificBankAccount);
        } catch (err) {
            res.status(500).json({ message : err.message});      
    }
}


}