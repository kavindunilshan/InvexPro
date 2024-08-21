import {Router} from "express";
import AuditController from "../controllers/audit.controller";

const router = Router();

router.post("/audit", AuditController.createAudit);
router.get("/audit", AuditController.getAllAudits);
router.get("/audit/:id", AuditController.getAuditById);
router.put("/audit/:id", AuditController.updateAudit);
router.delete("/audit/:id", AuditController.deleteAudit);

export default router;