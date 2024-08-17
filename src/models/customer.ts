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
});

const Customer = model<ICustomer>('Customer', CustomerSchema);

export default Customer;