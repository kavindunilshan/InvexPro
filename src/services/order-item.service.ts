import OrderItem, {IOrderItem} from "../models/order-item";

class OrderItemService {
    async createOrderItem(data: Partial<IOrderItem>): Promise<IOrderItem> {
        const orderItem = new OrderItem(data);
        await orderItem.save();
        return orderItem;
    }

    async getAllOrderItems(): Promise<IOrderItem[]> {
        return OrderItem.find().populate('order_id').populate('product_id').exec();
    }

    async getOrderItemById(id: string): Promise<IOrderItem | null> {
        return OrderItem.findById(id).populate('order_id').populate('product_id').exec();
    }

    async updateOrderItem(id: string, data: Partial<IOrderItem>): Promise<IOrderItem | null> {
        return OrderItem.findByIdAndUpdate(id, data, {new: true}).exec();
    }

    async deleteOrderItem(id: string): Promise<IOrderItem | null> {
        return OrderItem.findByIdAndDelete(id).exec();
    }
}

export default new OrderItemService();