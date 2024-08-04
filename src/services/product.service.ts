import Product, {IProduct} from "../models/product";


class ProductService {
    async createProduct(data: Partial<IProduct>): Promise<IProduct> {
        const product = new Product(data);
        await product.save();
        return product;
    }

    async getAllProducts(): Promise<IProduct[]> {
        return Product.find().populate('categoryId').populate('supplierId').exec();
    }

    async getProductById(id: string): Promise<IProduct | null> {
        return Product.findById(id).populate('categoryId').populate('supplierId').exec();
    }

    async updateProduct(id: string, data: Partial<IProduct>): Promise<IProduct | null> {
        return Product.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async deleteProduct(id: string): Promise<IProduct | null> {
        return Product.findByIdAndDelete(id).exec();
    }
}

export default new ProductService();
