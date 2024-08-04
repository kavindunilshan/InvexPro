import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import productRoutes from './routes/product.routes';

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

app.use('/api', productRoutes);

const PORT: number = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
