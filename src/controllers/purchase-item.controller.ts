import { Request, Response } from "express";
import PurchaseItemService from "../services/purchase-item.service";

class PurchaseItemController {
    async createPurchaseItem(req: Request, res: Response): Promise<void> {
        try {
            const purchaseItem = await PurchaseItemService.createPurchaseItem(req.body);
            res.status(201).json(purchaseItem);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async getAllPurchaseItems(req: Request, res: Response): Promise<void> {
        try {
            const purchaseItems = await PurchaseItemService.getAllPurchaseItems();
            res.status(200).json(purchaseItems);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async getPurchaseItemById(req: Request, res: Response): Promise<void> {
        try {
            const purchaseItem = await PurchaseItemService.getPurchaseItemById(req.params.id);
            if (!purchaseItem) {
                res.status(404).json({ message: 'Purchase Item not found' });
            } else {
                res.status(200).json(purchaseItem);
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async updatePurchaseItem(req: Request, res: Response): Promise<void> {
        try {
            const purchaseItem = await PurchaseItemService.updatePurchaseItem(req.params.id, req.body);
            if (!purchaseItem) {
                res.status(404).json({ message: 'Purchase Item not found' });
            } else {
                res.status(200).json(purchaseItem);
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async deletePurchaseItem(req: Request, res: Response): Promise<void> {
        try {
            const purchaseItem = await PurchaseItemService.deletePurchaseItem(req.params.id);
            if (!purchaseItem) {
                res.status(404).json({ message: 'Purchase Item not found' });
            } else {
                res.status(200).json(purchaseItem);
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }
}

export default new PurchaseItemController();