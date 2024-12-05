import { Router } from 'express';
import SupplierController from "../controllers/supplier.controller";

const router = Router();

router.post('/suppliers', SupplierController.createSupplier);
router.get('/suppliers', SupplierController.getAllSuppliers);
router.get('/suppliers/names', SupplierController.getAllSupplierNames);
router.get('/suppliers/count', SupplierController.getSupplierCountPerMonth);
router.get('/suppliers/:id', SupplierController.getSupplierById);
router.put('/suppliers/:id', SupplierController.updateSupplier);
router.delete('/suppliers/:id', SupplierController.deleteSupplier);


export default router;