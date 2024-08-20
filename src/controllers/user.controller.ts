import {Request, Response} from "express";
import UserService from "../services/user.service";

class UserController {
    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const User = await UserService.createUser(req.body);
            res.status(201).json(User);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }
    
    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const Users = await UserService.getAllUsers();
            res.status(200).json(Users);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
    
    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const User = await UserService.getUserById(req.params.id);
            if (!User) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json(User);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
    
    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const User = await UserService.updateUser(req.params.id, req.body);
            if (!User) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json(User);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }
    
    async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const User = await UserService.deleteUser(req.params.id);
            if (!User) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json({ message: 'User deleted' });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}

export default new UserController();