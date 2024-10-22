import { Schema, model, Document } from 'mongoose';

export interface IOrder extends Document {
    customerID: Schema.Types.ObjectId;
    orderDate: Date;
    shippingDate: Date;
    shippingAddress: string;
    totalAmount: number;
    orderStatus: string;
    orderItems: Schema.Types.ObjectId[];
    created_at: Date;
    updated_at: Date;
}

const OrderSchema = new Schema({
    customerID: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    orderDate: { type: Date, required: true },
    shippingDate: { type: Date, required: true },
    shippingAddress: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    orderStatus: { type: String, required: true },
    orderItems: [{ type: Schema.Types.ObjectId, ref: 'OrderItem', required: true }],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const Order = model<IOrder>('Order', OrderSchema);

export default Order;