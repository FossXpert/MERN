import mongoose,{Document,Schema} from "mongoose";
import { v4 as uuidv4 } from "uuid";

interface User extends Document {
    _id : string,
    username : string,
    email : string,
    password : string,
    role : string
}

//Define mongoose Schema

const userSchema: Schema<User> = new Schema<User>({
    _id : {type: String , default: uuidv4},
    username : { type:String , required: true },
    email : { type: String , unique:true,required:true},
    password : {type:String, required:true, minlength: 6},
    role:{
        type:String,default:'user', required:true, 
        enum : ['user','admin']
    },
});

// Define and export user model
const UserModel = mongoose.model<User>('courseUser', userSchema);
export default UserModel;