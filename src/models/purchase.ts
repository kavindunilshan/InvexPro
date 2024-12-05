import {Schema, Document, model} from 'mongoose';

export interface IPurchase extends Document {
    orderNumber: string;
    supplier: Schema.Types.ObjectId;
    orderDate: string;
    expectedArrivalDate: string;
    totalCost: number;
    orderItems: Array<object>;
    status: string;
    created_at: Date;
    updated_at: Date;
}

const PurchaseSchema: Schema = new Schema({
    supplier: { type: Schema.Types.ObjectId, ref: 'Supplier', required: true },
    purchaseDate: { type: String, required: true },
    expectedArrivalDate: { type: String },
    totalCost: { type: Number },
    purchaseItems: [{ type: Schema.Types.ObjectId, ref: 'PurchaseItem', required: true }],
    status: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const Purchase = model<IPurchase>('Purchase', PurchaseSchema);

export default Purchase;