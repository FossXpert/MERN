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

});

// Define and export Admin model
const Admin = mongoose.model<User>('courseUser', userSchema);
export default Admin;