import { Request, Response } from "express";
import AuditService from "../services/audit.service";

class AuditController {
    async createAudit(req: Request, res: Response) {
        try {
            const audit = await AuditService.createAudit(req.body);
            res.status(201).json(audit);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async getAllAudits(req: Request, res: Response) {
        try {
            const audits = await AuditService.getAllAudits();
            res.status(200).json(audits);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async getAuditById(req: Request, res: Response) {
        try {
            const audit = await AuditService.getAuditById(req.params.id);
            res.status(200).json(audit);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async updateAudit(req: Request, res: Response) {
        try {
            const audit = await AuditService.updateAudit(req.params.id, req.body);
            res.status(200).json(audit);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async deleteAudit(req: Request, res: Response) {
        try {
            const audit = await AuditService.deleteAudit(req.params.id);
            res.status(200).json(audit);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }
}

export default new AuditController();