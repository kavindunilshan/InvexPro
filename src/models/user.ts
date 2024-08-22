import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    role: string;
    created_at: Date;
    updated_at: Date;
}

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    role: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});


const User = model<IUser>('User', UserSchema);


export default User;