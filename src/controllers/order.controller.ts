import {Request, Response} from 'express';
import OrderService from '../services/order.service';


class OrderController {
    async createOrder(req: Request, res: Response): Promise<void> {
        try {
            const order = await OrderService.createOrder(req.body);
            res.status(201).json(order);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async getAllOrders(req: Request, res: Response): Promise<void> {
        try {
            const orders = await OrderService.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async getOrderById(req: Request, res: Response): Promise<void> {
        try {
            const order = await OrderService.getOrderById(req.params.id);
            if (!order) {
                res.status(404).json({ error: 'Order not found' });
                return;
            }
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async updateOrder(req: Request, res: Response): Promise<void> {
        try {
            const order = await OrderService.updateOrder(req.params.id, req.body);
            if (!order) {
                res.status(404).json({ error: 'Order not found' });
                return;
            }
            res.status(200).json(order);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async deleteOrder(req: Request, res: Response): Promise<void> {
        try {
            const order = await OrderService.deleteOrder(req.params.id);
            if (!order) {
                res.status(404).json({ error: 'Order not found' });
                return;
            }
            res.status(200).json({ message: 'Order deleted' });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}

export default new OrderController();