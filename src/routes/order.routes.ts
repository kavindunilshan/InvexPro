// Similar to product.routes.ts, we will create a new file order.routes.ts in the routes folder and add the following code:

import { Router } from 'express';
import OrderController from "../controllers/order.controller";

const router = Router();

router.post('/orders', OrderController.createOrder);
router.get('/orders', OrderController.getAllOrders);
router.get('/orders/:id', OrderController.getOrderById);
router.put('/orders/:id', OrderController.updateOrder);
router.delete('/orders/:id', OrderController.deleteOrder);

export default router;