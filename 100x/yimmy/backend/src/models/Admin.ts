import { v4 as uuid4 } from 'uuid'
import mongoose, { Document, Schema } from 'mongoose';
import learn from '../../yimmy-learning-backend/model-admin';

interface Admin extends Document {
    id: string;
    username: string;
    password: string;
}

const adminSchema: Schema<Admin> = new Schema<Admin>({
    id:{type: String, default:  () => uuid4(),required:true,unique:true},
    username: { type: String, unique:true, required: [true, 'Username is required'] },
    password: { type: String, unique:true, required: [true, 'Password is required'], 
    minLength: [6, "Password must be at least 6 characters"] },
})
export default mongoose.model<Admin>("Admin", adminSchema)

// learn