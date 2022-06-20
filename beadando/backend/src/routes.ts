import * as express from 'express';
import { BankaccountController } from './Controller/bankaccount.controller';
import { BankclientController } from './Controller/bankclient.controller';
import { TransactionController } from './Controller/transaction.controller';

export function getRouter() {
    const router = express.Router();

    const bankaccountController = new BankaccountController();
    const bankclientController = new BankclientController();
    const transactionController = new TransactionController();

    router.get('/bankaccount-list', bankaccountController.getAll);
    router.get('/bankaccount:id', bankaccountController.getOne);
    router.post('/bankaccount', bankaccountController.create);
    router.delete('/bankaccount/:id', bankaccountController.delete);
    router.put('/bankaccount', bankaccountController.update);

    router.get('/bankclient-list', bankclientController.getAll);
    router.get('/bankclient/:id', bankclientController.getById);
    router.put('/bankclient/:id', bankaccountController.update);
    router.post('/bankclient', bankclientController.create)
    router.delete('/bankclient/:id', bankclientController.delete);
 

    router.post('/transaction', transactionController.create)
    router.get('/transaction/:id', transactionController.getOne);
    router.get('/transaction-list', transactionController.getAll);
    router.put('/transaction', transactionController.update);
    router.delete('/transaction/:id',transactionController.delete);
    

    return router;
}
