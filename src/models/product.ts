import { Schema, model, Document } from 'mongoose';


export interface IProduct extends Document {
    name: string;
    description: string;
    categoryId: Schema.Types.ObjectId;
    supplierId: Schema.Types.ObjectId;
    quantityInStock: number;
    unitPrice: number;
    reorderLevel: number;
    created_at: Date;
    updated_at: Date;
}


const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    supplierId: { type: Schema.Types.ObjectId, ref: 'Supplier', required: true },
    quantityInStock: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    reorderLevel: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});


const Product = model<IProduct>('Product', ProductSchema);

export default Product;
