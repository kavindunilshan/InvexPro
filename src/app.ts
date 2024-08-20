import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

import categoryRoutes from './routes/category.routes';
import customerRoutes from './routes/customer.routes';
import orderRoutes from "./routes/order.routes";
import orderItemRoutes from "./routes/order-item.routes";
import employeeRoutes from "./routes/employee.routes";
import productRoutes from './routes/product.routes';
import purchaseRoutes from "./routes/purchase.routes";
import supplierRoutes from "./routes/supplier.routes";
import transactionRoutes from "./routes/transaction.routes";
import userRoutes from "./routes/user.routes";

dotenv.config();

const app = express();

connectDB()
    .then(() => console.log('Connected to MongoDB'))
    .catch((error: Error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to InvexPro API');
});

app.use('/api', categoryRoutes);
app.use('/api', customerRoutes);
app.use('/api', employeeRoutes);
app.use('/api', orderRoutes);
app.use('/api', orderItemRoutes);
app.use('/api', productRoutes);
app.use('/api', purchaseRoutes);
app.use('/api', supplierRoutes);
app.use('/api', transactionRoutes);
app.use('/api', userRoutes);


const PORT: number = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
