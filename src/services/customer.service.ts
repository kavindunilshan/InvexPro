import Customer, {ICustomer} from "../models/customer";

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
}

export default new CustomerService();