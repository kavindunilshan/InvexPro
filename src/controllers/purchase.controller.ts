import {Request, Response} from 'express';
import PurchaseService from "../services/purchase.service";


class PurchaseController {
    async createPurchase(req: Request, res: Response): Promise<void> {
        try {
            const purchase = await PurchaseService.createPurchase(req.body);
            res.status(201).json(purchase);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async getAllPurchases(req: Request, res: Response): Promise<void> {
        try {
            const purchases = await PurchaseService.getAllPurchases();
            res.status(200).json(purchases);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async getPurchaseById(req: Request, res: Response): Promise<void> {
        try {
            const purchase = await PurchaseService.getPurchaseById(req.params.id);
            if (!purchase) {
                res.status(404).json({ error: 'Purchase not found' });
                return;
            }
            res.status(200).json(purchase);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async updatePurchase(req: Request, res: Response): Promise<void> {
        try {
            const purchase = await PurchaseService.updatePurchase(req.params.id, req.body);
            if (!purchase) {
                res.status(404).json({ error: 'Purchase not found' });
                return;
            }
            res.status(200).json(purchase);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async deletePurchase(req: Request, res: Response): Promise<void> {
        try {
            const purchase = await PurchaseService.deletePurchase(req.params.id);
            if (!purchase) {
                res.status(404).json({ error: 'Purchase not found' });
                return;
            }
            res.status(200).json({ message: 'Purchase deleted' });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}

export default new PurchaseController();