import Employee, {IEmployee} from "../models/employee";


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
}

export default new EmployeeService();