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
}

const EmployeeSchema: Schema = new Schema({
    employeeName: { type: String, required: true },
    title: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true }
});

const Employee = mongoose.model<IEmployee>('Employee', EmployeeSchema);

export default Employee;