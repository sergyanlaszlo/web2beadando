import { getRepository, Repository } from "typeorm";
import { Bankclient } from "../entity/bankclient";
import { Bankaccount } from "../entity/bankaccount";
import { Controller } from "./base.controller";

export class BankclientController extends Controller {
    repository = getRepository(Bankclient);
    accountRepository = getRepository(Bankaccount);

    getAll = async (req, res) => {
        const search = req.query.search || '';

        try {
            const entities = await this.repository.createQueryBuilder('bankclient')
            .where("bankclient.id LIKE CONCAT('%', :search, '%')", {search : search}).getMany();
            res.json(entities);
        } catch (err) {
            res.status(500).json({ message : err.message});
        }     
    }

    /*
        delete = async (req, res) => {
            const id = req.params.id;
        try {
            
            const entity = await this.repository.findOne(id);
            await  this.repository.delete(id);

            if (!entity) {
                return res.status(404).json({ message: 'Not existing entity.' });
            }

            await this.repository.delete(entity);
            res.status(200).send();
        } catch (err) {
            res.status(500).json({ message: 'DELETE HIBA!!' });
        }
    }

    */

    delete = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const entity = await this.repository.findOne({ id: id });

            if (!entity) {
                return res.status(404).json({ message: 'Not existing entity.' });
            }

            await this.repository.delete(entity);
            res.status(200).send();
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    getById = async (req, res) => {
        
       
            try {
                const id = parseInt(req.params.id);
                const specificbankclient = await this.repository.findOne({ id: id });
            res.json(specificbankclient);
        } catch (err) {
            res.status(500).json({ message : err.message});      
        }
    }
}