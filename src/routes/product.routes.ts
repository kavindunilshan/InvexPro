import { Router } from 'express';
import ProductController from "../controllers/product.controller";

const router = Router();

router.post('/products', ProductController.createProduct);
router.get('/products', ProductController.getAllProducts);
router.get('/products/:id', ProductController.getProductById);
router.put('/products/:id', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);

export default router;
