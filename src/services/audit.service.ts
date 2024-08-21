import Audit, {IAudit} from "../models/audit";

class AuditService {
    async createAudit(data: Partial<IAudit>): Promise<IAudit> {
        const audit = new Audit(data);
        await audit.save();
        return audit;
    }

    async getAllAudits(): Promise<IAudit[]> {
        return Audit.find().exec();
    }

    async getAuditById(id: string): Promise<IAudit | null> {
        return Audit.findById(id).exec();
    }

    async updateAudit(id: string, data: Partial<IAudit>): Promise<IAudit | null> {
        return Audit.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async deleteAudit(id: string): Promise<IAudit | null> {
        return Audit.findByIdAndDelete(id).exec();
    }
}

export default new AuditService();