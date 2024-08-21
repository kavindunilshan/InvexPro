import mongoose, { Schema, Document } from 'mongoose';

export interface IAudit extends Document {
    user_id: string;
    action: string;
    timestamp: Date;
    details: string;
}

const AuditSchema: Schema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    action: { type: String, required: true },
    timestamp: { type: Date, required: true },
    details: { type: String, required: true },
});

const Audit = mongoose.model<IAudit>('Audit', AuditSchema);

export default Audit;