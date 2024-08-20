import Transaction, {ITransaction} from "../models/transaction";


class TransactionService {
    async createTransaction(data: Partial<ITransaction>): Promise<ITransaction> {
        const transaction = new Transaction(data);
        await transaction.save();
        return transaction;
    }

    async getAllTransactions(): Promise<ITransaction[]> {
        return Transaction.find().populate('product_id').populate('order_id').populate('supplier_id').exec();
    }

    async getTransactionById(id: string): Promise<ITransaction | null> {
        return Transaction.findById(id).populate('product_id').populate('order_id').populate('supplier_id').exec();
    }

    async updateTransaction(id: string, data: Partial<ITransaction>): Promise<ITransaction | null> {
        return Transaction.findByIdAndUpdate(id, data, {new: true}).exec();
    }

    async deleteTransaction(id: string): Promise<ITransaction | null> {
        return Transaction.findByIdAndDelete(id).exec();
    }
}

export default new TransactionService();