import mongoose, { Schema, Document } from 'mongoose';


export interface IPurchaseItem extends Document {
    purchase_id: string;
    product_id: string;
    quantity: number;
    price: number;
    totalPrice: number;
    created_at: Date;
    updated_at: Date;
}

const PurchaseItemSchema: Schema = new Schema({
    purchase_id: { type: Schema.Types.ObjectId, ref: 'Purchase', required: true },
    product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const PurchaseItem = mongoose.model<IPurchaseItem>('PurchaseItem', PurchaseItemSchema);

export default PurchaseItem;