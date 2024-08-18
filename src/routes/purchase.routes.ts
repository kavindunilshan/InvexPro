import {Router} from "express";
import PurchaseController from "../controllers/purchase.controller";

const router = Router();

router.post('/purchases', PurchaseController.createPurchase);
router.get('/purchases', PurchaseController.getAllPurchases);
router.get('/purchases/:id', PurchaseController.getPurchaseById);
router.put('/purchases/:id', PurchaseController.updatePurchase);
router.delete('/purchases/:id', PurchaseController.deletePurchase);

export default router;
