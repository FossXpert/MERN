import { v4 as uuid4 } from 'uuid'
import mongoose, { Document, Schema } from 'mongoose';

interface Admin extends Document {
    _id: string;
    username: string;
    password: string;
}

const adminSchema: Schema<Admin> = new Schema<Admin>({
    _id: { type: String, default: uuid4 },
    username: { type: String, required: [true, 'Username is required'] },
    password: { type: String, required: [true, 'Password is required'], minLength: [6, "Password must be at least 6 characters"] },
})

export default mongoose.model<Admin>("courseAdmin", adminSchema)


