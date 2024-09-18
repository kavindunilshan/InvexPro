import Supplier, {ISupplier} from "../models/supplier";


class SupplierService {
    async createSupplier(data: Partial<ISupplier>): Promise<ISupplier> {
        const supplier = new Supplier(data);
        await supplier.save();
        return supplier;
    }

    async getAllSuppliers(): Promise<ISupplier[]> {
        return Supplier.find().exec();
    }

    async getAllSupplierNames(): Promise<string[]> {
        return Supplier.find().distinct('supplierName').exec();
    }

    async getSupplierById(id: string): Promise<ISupplier | null> {
        return Supplier.findById(id).exec();
    }

    async updateSupplier(id: string, data: Partial<ISupplier>): Promise<ISupplier | null> {
        return Supplier.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async deleteSupplier(id: string): Promise<ISupplier | null> {
        return Supplier.findByIdAndDelete(id).exec();
    }
}

export default new SupplierService();