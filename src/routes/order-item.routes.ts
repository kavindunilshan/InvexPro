import {Router} from "express";
import OrderItemController from "../controllers/order-item.controller";

const router = Router();

router.post('/order-items', OrderItemController.createOrderItem);
router.get('/order-items', OrderItemController.getAllOrderItems);
router.get('/order-items/:id', OrderItemController.getOrderItemById);
router.put('/order-items/:id', OrderItemController.updateOrderItem);
router.delete('/order-items/:id', OrderItemController.deleteOrderItem);

export default router;
