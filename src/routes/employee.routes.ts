import {Router} from "express";
import EmployeeController from "../controllers/employee.controller";

const router = Router();

router.post('/employees', EmployeeController.createEmployee);
router.get('/employees', EmployeeController.getAllEmployees);
router.get('/employees/count', EmployeeController.getEmployeeCountPerMonth);
router.get('/employees/:id', EmployeeController.getEmployeeById);
router.put('/employees/:id', EmployeeController.updateEmployee);
router.delete('/employees/:id', EmployeeController.deleteEmployee);

export default router;