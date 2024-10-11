import Customer, {ICustomer} from "../models/customer";
import { startOfMonth, endOfMonth, subMonths } from 'date-fns';

class CustomerService {
    async createCustomer(data: Partial<ICustomer>): Promise<ICustomer> {
        const customer = new Customer(data);
        await customer.save();
        return customer;
    }

    async getAllCustomers(): Promise<ICustomer[]> {
        return Customer.find().exec();
    }

    async getCustomerById(id: string): Promise<ICustomer | null> {
        return Customer.findById(id).exec();
    }

    async updateCustomer(id: string, data: Partial<ICustomer>): Promise<ICustomer | null> {
        return Customer.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async deleteCustomer(id: string): Promise<ICustomer | null> {
        return Customer.findByIdAndDelete(id).exec();
    }

    async getCustomerCountPerMonth(): Promise<any> {
        const results = [];
        const currentDate = new Date();

        for (let i = 11; i >= 0; i--) {
            const start = startOfMonth(subMonths(currentDate, i));
            const end = endOfMonth(subMonths(currentDate, i));

            const count = await Customer.countDocuments({
                created_at: { $gte: start, $lte: end }
            });

            results.push({
                month: start.toLocaleString('default', { month: 'short' }),
                year: start.getFullYear(),
                customerCount: count,
            });
        }

        return results;
    }
}

export default new CustomerService();