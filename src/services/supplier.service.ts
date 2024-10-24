import Supplier, {ISupplier} from "../models/supplier";
import {endOfMonth, startOfMonth, subMonths} from "date-fns";


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

    async getSupplierCountPerMonth(): Promise<any> {
        const results = [];
        const currentDate = new Date();

        for (let i = 11; i >= 0; i--) {
            const start = startOfMonth(subMonths(currentDate, i));
            const end = endOfMonth(subMonths(currentDate, i));

            const count = await Supplier.countDocuments({
                created_at: { $gte: start, $lte: end }
            });

            results.push({
                month: start.toLocaleString('default', { month: 'short' }),
                year: start.getFullYear(),
                supplierCount: count,
            });
        }

        return results;
    }
}

export default new SupplierService();