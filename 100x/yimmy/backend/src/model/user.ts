import mongoose,{Document,Schema} from "mongoose";

interface IUser extends Document {
    isAdmin : boolean,
    firstName?: string,
    lastName?: string,
    email?: string,
    userName?: string,
    password : string
}

//Define mongoose Schema

const adminSchema: Schema<IAdmin> = new Schema<IAdmin>({
    isAdmin: {type: Boolean, default: false},
    firstName: { type: String },
    lastName:  { type: String},
    email:{ type:String , unique:true ,required: [true,"Why no `email`?"] },
    userName: { type: String ,unique:true  } ,
    password: { type: String , required: [true,"Why no `password`?"]}
});

// Define and export Admin model
const Admin = mongoose.model<IAdmin>('SellingCoursesAdmin', adminSchema);
export default Admin;