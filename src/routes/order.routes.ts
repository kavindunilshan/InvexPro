import {Router} from 'express';
import OrderController from "../controllers/order.controller";

const router = Router();

router.post('/orders', OrderController.createOrder);
router.get('/orders', OrderController.getAllOrders);
router.get('/orders/count', OrderController.getOrderCountPerMonth);
router.get('/orders/:id', OrderController.getOrderById);
router.put('/orders/:id', OrderController.updateOrder);
router.delete('/orders/:id', OrderController.deleteOrder);

export default router;