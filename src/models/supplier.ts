import { Schema, model, Document } from 'mongoose';

export interface ISupplier extends Document {
    supplierName: string;
    contactName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    email: string;
}

const SupplierSchema = new Schema({
    supplierName: { type: String, required: true },
    contactName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
});

const Supplier = model<ISupplier>('Supplier', SupplierSchema);

export default Supplier;