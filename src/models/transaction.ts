import { Schema, model, Document } from 'mongoose';

export interface ITransaction extends Document {
    product_id: string;
    transaction_type: string;
    quantity: number;
    transaction_date: Date;
    order_id: string;
    supplier_id: string;
    created_at: Date;
    updated_at: Date;
}

const transactionSchema = new Schema({
    product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    transaction_type: { type: String, required: true },
    quantity: { type: Number, required: true },
    transaction_date: { type: Date, required: true },
    order_id: { type: Schema.Types.ObjectId, ref: 'Order' },
    supplier_id: { type: Schema.Types.ObjectId, ref: 'Supplier' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const Transaction = model<ITransaction>('Transaction', transactionSchema);

export default Transaction;