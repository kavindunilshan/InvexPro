import { Request, Response } from 'express';
import EmployeeService from "../services/employee.service";


class EmployeeController {
    async createEmployee(req: Request, res: Response): Promise<void> {
        try {
            const employee = await EmployeeService.createEmployee(req.body);
            res.status(201).json(employee);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async getAllEmployees(req: Request, res: Response): Promise<void> {
        try {
            const employees = await EmployeeService.getAllEmployees();
            res.status(200).json(employees);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async getEmployeeById(req: Request, res: Response): Promise<void> {
        try {
            const employee = await EmployeeService.getEmployeeById(req.params.id);
            if (!employee) {
                res.status(404).json({ error: 'Employee not found' });
                return;
            }
            res.status(200).json(employee);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async updateEmployee(req: Request, res: Response): Promise<void> {
        try {
            const employee = await EmployeeService.updateEmployee(req.params.id, req.body);
            if (!employee) {
                res.status(404).json({ error: 'Employee not found' });
                return;
            }
            res.status(200).json(employee);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async deleteEmployee(req: Request, res: Response): Promise<void> {
        try {
            const employee = await EmployeeService.deleteEmployee(req.params.id);
            if (!employee) {
                res.status(404).json({ error: 'Employee not found' });
                return;
            }
            res.status(200).json({ message: 'Employee deleted' });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}

export default new EmployeeController();