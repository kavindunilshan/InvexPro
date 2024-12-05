import {Router} from "express";
import PurchaseItemController from "../controllers/purchase-item.controller";

const router = Router();

router.post('/purchase-items', PurchaseItemController.createPurchaseItem);
router.post('/purchase-items/many', PurchaseItemController.createManyPurchaseItems);
router.get('/purchase-items', PurchaseItemController.getAllPurchaseItems);
router.get('/purchase-items/:id', PurchaseItemController.getPurchaseItemById);
router.put('/purchase-items/:id', PurchaseItemController.updatePurchaseItem);
router.delete('/purchase-items/:id', PurchaseItemController.deletePurchaseItem);

export default router;
