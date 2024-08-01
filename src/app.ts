import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

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

const PORT: number = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
