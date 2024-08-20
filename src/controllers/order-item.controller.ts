import { Request, Response } from "express";
import OrderItemService from "../services/order-item.service";

class OrderItemController {
    async createOrderItem(req: Request, res: Response): Promise<void> {
        try {
            const orderItem = await OrderItemService.createOrderItem(req.body);
            res.status(201).json(orderItem);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async getAllOrderItems(req: Request, res: Response): Promise<void> {
        try {
            const orderItems = await OrderItemService.getAllOrderItems();
            res.status(200).json(orderItems);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async getOrderItemById(req: Request, res: Response): Promise<void> {
        try {
            const orderItem = await OrderItemService.getOrderItemById(req.params.id);
            if (!orderItem) {
                res.status(404).json({ message: 'Order Item not found' });
            } else {
                res.status(200).json(orderItem);
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async updateOrderItem(req: Request, res: Response): Promise<void> {
        try {
            const orderItem = await OrderItemService.updateOrderItem(req.params.id, req.body);
            if (!orderItem) {
                res.status(404).json({ message: 'Order Item not found' });
            } else {
                res.status(200).json(orderItem);
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async deleteOrderItem(req: Request, res: Response): Promise<void> {
        try {
            const orderItem = await OrderItemService.deleteOrderItem(req.params.id);
            if (!orderItem) {
                res.status(404).json({ message: 'Order Item not found' });
            } else {
                res.status(200).json(orderItem);
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }
}

export default new OrderItemController();