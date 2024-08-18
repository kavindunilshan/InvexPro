import Order, {IOrder} from "../models/order";

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
}

export default new OrderService();