import {Schema, Document, model} from 'mongoose';

export interface IPurchase extends Document {
    orderNumber: string;
    supplier: Schema.Types.ObjectId;
    orderDate: Date;
    expectedArrivalDate: Date;
    totalCost: number;
    orderItems: Array<object>;
    status: string;
    created_at: Date;
    updated_at: Date;
}

const PurchaseSchema: Schema = new Schema({
    orderNumber: { type: String, required: true, unique: true },
    supplier: { type: Schema.Types.ObjectId, ref: 'Supplier', required: true },
    orderDate: { type: Date, required: true },
    expectedArrivalDate: { type: Date },
    totalCost: { type: Number },
    orderItems: { type: Array, required: true },
    status: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const Purchase = model<IPurchase>('Purchase', PurchaseSchema);

export default Purchase;