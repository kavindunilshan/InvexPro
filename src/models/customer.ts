import { Schema, model, Document } from 'mongoose';

export interface ICustomer extends Document {
    customerName: string;
    contactName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}

const CustomerSchema = new Schema({
    customerName: { type: String, required: true },
    contactName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const Customer = model<ICustomer>('Customer', CustomerSchema);

export default Customer;