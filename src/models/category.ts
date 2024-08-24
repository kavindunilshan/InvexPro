import { Schema, model, Document } from 'mongoose';

export interface ICategory extends Document {
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}

const CategorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const Category = model<ICategory>('Category', CategorySchema);

export default Category;