import PurchaseItem, {IPurchaseItem} from "../models/purchase-item";

class PurchaseItemService {
    async createPurchaseItem(data: Partial<IPurchaseItem>): Promise<IPurchaseItem> {
        const purchaseItem = new PurchaseItem(data);
        await purchaseItem.save();
        return purchaseItem;
    }

    async createManyPurchaseItems(data: Partial<IPurchaseItem>[]): Promise<IPurchaseItem[]> {
        const insertedItems = await PurchaseItem.insertMany(data, { rawResult: false });
        return insertedItems as IPurchaseItem[];
    }

    async getAllPurchaseItems(): Promise<IPurchaseItem[]> {
        return PurchaseItem.find().populate('purchase_id').populate('product_id').exec();
    }

    async getPurchaseItemById(id: string): Promise<IPurchaseItem | null> {
        return PurchaseItem.findById(id).populate('purchase_id').populate('product_id').exec();
    }

    async updatePurchaseItem(id: string, data: Partial<IPurchaseItem>): Promise<IPurchaseItem | null> {
        return PurchaseItem.findByIdAndUpdate(id, data, {new: true}).exec();
    }

    async deletePurchaseItem(id: string): Promise<IPurchaseItem | null> {
        return PurchaseItem.findByIdAndDelete(id).exec();
    }
}

export default new PurchaseItemService();