import { Request, Response } from 'express';
import TransactionService from '../services/transaction.service';

class TransactionController {
    async createTransaction(req: Request, res: Response): Promise<void> {
        try {
            const transaction = await TransactionService.createTransaction(req.body);
            res.status(201).json(transaction);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async getAllTransactions(req: Request, res: Response): Promise<void> {
        try {
            const transactions = await TransactionService.getAllTransactions();
            res.status(200).json(transactions);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async getTransactionById(req: Request, res: Response): Promise<void> {
        try {
            const transaction = await TransactionService.getTransactionById(req.params.id);
            if (!transaction) {
                res.status(404).json({ message: 'Transaction not found' });
            } else {
                res.status(200).json(transaction);
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async updateTransaction(req: Request, res: Response): Promise<void> {
        try {
            const transaction = await TransactionService.updateTransaction(req.params.id, req.body);
            if (!transaction) {
                res.status(404).json({ message: 'Transaction not found' });
            } else {
                res.status(200).json(transaction);
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async deleteTransaction(req: Request, res: Response): Promise<void> {
        try {
            const transaction = await TransactionService.deleteTransaction(req.params.id);
            if (!transaction) {
                res.status(404).json({ message: 'Transaction not found' });
            } else {
                res.status(200).json(transaction);
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }
}

export default new TransactionController();