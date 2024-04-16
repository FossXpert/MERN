import mongoose,{Document,Schema} from "mongoose";
import { v4 as uuid4 } from "uuid";

interface User extends Document {
    id : string,
    username : string,
    email : string,
    password : string,
    role : string
}

//Define mongoose Schema

const userSchema: Schema<User> = new Schema<User>({
    id:{type: String, default:  () => uuid4(),required:true,unique:true},
    username: { type: String, unique:true, required: [true, 'Username is required'] },
    email:{type:String,unique:true,required:[true,'Valid Email-ID is required']},
    password: { type: String, required: [true, 'Password is required'], 
    minLength: [6, "Password must be at least 6 characters"] },
    role:{
        type:String,default:'user', required:true, 
        enum : ['user','admin']
    },
});

// Define and export user model
const UserModel = mongoose.model<User>('User', userSchema);
export default UserModel;