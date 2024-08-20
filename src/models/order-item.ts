import mongoose, { Schema, Document } from 'mongoose';


export interface IOrderItem extends Document {
    order_id: string;
    product_id: string;
    quantity: number;
    price: number;
    created_at: Date;
    updated_at: Date;
}

const OrderItemSchema: Schema = new Schema({
    order_id: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const OrderItem = mongoose.model<IOrderItem>('OrderItem', OrderItemSchema);

export default OrderItem;