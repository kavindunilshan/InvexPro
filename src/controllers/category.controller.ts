import { Request, Response } from 'express';
import CategoryService from '../services/category.service';

class CategoryController {
    async createCategory(req: Request, res: Response): Promise<void> {
        try {
            const category = await CategoryService.createCategory(req.body);
            res.status(201).json(category);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async getAllCategories(req: Request, res: Response): Promise<void> {
        try {
            const categories = await CategoryService.getAllCategories();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async getCategoryById(req: Request, res: Response): Promise<void> {
        try {
            const category = await CategoryService.getCategoryById(req.params.id);
            if (!category) {
                res.status(404).json({ error: 'Category not found' });
                return;
            }
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async updateCategory(req: Request, res: Response): Promise<void> {
        try {
            const category = await CategoryService.updateCategory(req.params.id, req.body);
            if (!category) {
                res.status(404).json({ error: 'Category not found' });
                return;
            }
            res.status(200).json(category);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async deleteCategory(req: Request, res: Response): Promise<void> {
        try {
            const category = await CategoryService.deleteCategory(req.params.id);
            if (!category) {
                res.status(404).json({ error: 'Category not found' });
                return;
            }
            res.status(200).json({ message: 'Category deleted' });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}

export default new CategoryController();