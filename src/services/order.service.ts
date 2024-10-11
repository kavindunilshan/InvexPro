import Order, {IOrder} from "../models/order";
import {endOfMonth, startOfMonth, subMonths} from "date-fns";

class OrderService {
    async createOrder(data: Partial<IOrder>): Promise<IOrder> {
        const order = new Order(data);
        await order.save();
        return order;
    }

    async getAllOrders(): Promise<IOrder[]> {
        return Order.find().populate('customerID').exec();
    }

    async getOrderById(id: string): Promise<IOrder | null> {
        return Order.findById(id).populate('customerID').exec();
    }

    async updateOrder(id: string, data: Partial<IOrder>): Promise<IOrder | null> {
        return Order.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async deleteOrder(id: string): Promise<IOrder | null> {
        return Order.findByIdAndDelete(id).exec();
    }

    async getOrderCountPerMonth(): Promise<any> {
        const results = [];
        const currentDate = new Date();

        for (let i = 11; i >= 0; i--) {
            const start = startOfMonth(subMonths(currentDate, i));
            const end = endOfMonth(subMonths(currentDate, i));

            const count = await Order.countDocuments({
                created_at: { $gte: start, $lte: end }
            });

            results.push({
                month: start.toLocaleString('default', { month: 'short' }),
                year: start.getFullYear(),
                orderCount: count,
            });
        }

        return results;
    }
}

export default new OrderService();