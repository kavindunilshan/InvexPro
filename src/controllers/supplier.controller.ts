import { Request, Response } from 'express';
import SupplierService from "../services/supplier.service";

class SupplierController {
    async createSupplier(req: Request, res: Response): Promise<void> {
        try {
            const supplier = await SupplierService.createSupplier(req.body);
            res.status(201).json(supplier);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async getAllSuppliers(req: Request, res: Response): Promise<void> {
        try {
            const suppliers = await SupplierService.getAllSuppliers();
            res.status(200).json(suppliers);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async getAllSupplierNames(req: Request, res: Response): Promise<void> {
        try {
            const supplierNames = await SupplierService.getAllSupplierNames();
            res.status(200).json(supplierNames);
        } catch (error) {
            res.status(500).json({error: (error as Error).message});
        }
    }

    async getSupplierById(req: Request, res: Response): Promise<void> {
        try {
            const supplier = await SupplierService.getSupplierById(req.params.id);
            if (!supplier) {
                res.status(404).json({ error: 'Supplier not found' });
                return;
            }
            res.status(200).json(supplier);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async updateSupplier(req: Request, res: Response): Promise<void> {
        try {
            const supplier = await SupplierService.updateSupplier(req.params.id, req.body);
            if (!supplier) {
                res.status(404).json({ error: 'Supplier not found' });
                return;
            }
            res.status(200).json(supplier);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async deleteSupplier(req: Request, res: Response): Promise<void> {
        try {
            const supplier = await SupplierService.deleteSupplier(req.params.id);
            if (!supplier) {
                res.status(404).json({ error: 'Supplier not found' });
                return;
            }
            res.status(200).json({ message: 'Supplier deleted' });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async getSupplierCountPerMonth(req: Request, res: Response): Promise<void> {
        try {
            const results = await SupplierService.getSupplierCountPerMonth();
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}

export default new SupplierController();