import mongoose, { Schema, Document } from 'mongoose';

export interface IEmployee extends Document {
    employeeName: string;
    title: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}

const EmployeeSchema: Schema = new Schema({
    employeeName: { type: String, required: true },
    title: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const Employee = mongoose.model<IEmployee>('Employee', EmployeeSchema);

export default Employee;