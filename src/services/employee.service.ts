import Employee, {IEmployee} from "../models/employee";
import {endOfMonth, startOfMonth, subMonths} from "date-fns";


class EmployeeService {
    async createEmployee(data: Partial<IEmployee>): Promise<IEmployee> {
        const employee = new Employee(data);
        await employee.save();
        return employee;
    }

    async getAllEmployees(): Promise<IEmployee[]> {
        return Employee.find().exec();
    }

    async getEmployeeById(id: string): Promise<IEmployee | null> {
        return Employee.findById(id).exec();
    }

    async updateEmployee(id: string, data: Partial<IEmployee>): Promise<IEmployee | null> {
        return Employee.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async deleteEmployee(id: string): Promise<IEmployee | null> {
        return Employee.findByIdAndDelete(id).exec();
    }

    async getEmployeeCountPerMonth(): Promise<any> {
        const results = [];
        const currentDate = new Date();

        for (let i = 11; i >= 0; i--) {
            const start = startOfMonth(subMonths(currentDate, i));
            const end = endOfMonth(subMonths(currentDate, i));

            const count = await Employee.countDocuments({
                created_at: { $gte: start, $lte: end }
            });

            results.push({
                month: start.toLocaleString('default', { month: 'short' }),
                year: start.getFullYear(),
                employeeCount: count,
            });
        }

        return results;
    }
}

export default new EmployeeService();