import Purchase, {IPurchase} from "../models/purchase";

class PurchaseService {
    async createPurchase(data: Partial<IPurchase>): Promise<IPurchase> {
        const purchase = new Purchase(data);
        await purchase.save();
        return purchase;
    }

    async getAllPurchases(): Promise<IPurchase[]> {
        return Purchase.find().exec();
    }

    async getPurchaseById(id: string): Promise<IPurchase | null> {
        return Purchase.findById(id).exec();
    }

    async updatePurchase(id: string, data: Partial<IPurchase>): Promise<IPurchase | null> {
        return Purchase.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async deletePurchase(id: string): Promise<IPurchase | null> {
        return Purchase.findByIdAndDelete(id).exec();
    }
}

export default new PurchaseService();