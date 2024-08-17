import { Request, Response } from "express";
import CustomerService from "../services/customer.service";


class CustomerController {
    async createCustomer(req: Request, res: Response) {
        try {
            const customer = await CustomerService.createCustomer(req.body);
            res.status(201).json(customer);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async getAllCustomers(req: Request, res: Response) {
        try {
            const customers = await CustomerService.getAllCustomers();
            res.status(200).json(customers);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async getCustomerById(req: Request, res: Response) {
        try {
            const customer = await CustomerService.getCustomerById(req.params.id);
            if (!customer) {
                res.status(404).json({ message: "Customer not found" });
            } else {
                res.status(200).json(customer);
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async updateCustomer(req: Request, res: Response) {
        try {
            const customer = await CustomerService.updateCustomer(req.params.id, req.body);
            if (!customer) {
                res.status(404).json({ message: "Customer not found" });
            } else {
                res.status(200).json(customer);
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async deleteCustomer(req: Request, res: Response) {
        try {
            const customer = await CustomerService.deleteCustomer(req.params.id);
            if (!customer) {
                res.status(404).json({ message: "Customer not found" });
            } else {
                res.status(200).json(customer);
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }
}

export default new CustomerController();