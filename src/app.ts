import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

import auditRoutes from "./routes/audit.routes";
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

// cors port 4200
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', auditRoutes);
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

app.get('/', (req, res) => {
    res.send('Inventory Management API');
});


const PORT: number = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
