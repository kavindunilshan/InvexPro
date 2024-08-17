import { Router } from 'express';
import CustomerController from "../controllers/customer.controller";

const router = Router();

router.post('/customers', CustomerController.createCustomer);
router.get('/customers', CustomerController.getAllCustomers);
router.get('/customers/:id', CustomerController.getCustomerById);
router.put('/customers/:id', CustomerController.updateCustomer);
router.delete('/customers/:id', CustomerController.deleteCustomer);

export default router;